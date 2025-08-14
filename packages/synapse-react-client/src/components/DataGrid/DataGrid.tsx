import { ComplexJSONRenderer } from '@/components/SynapseTable/SynapseTableCell/JSON/ComplexJSONRenderer'
import { ITimestampStruct, konst } from 'json-joy/lib/json-crdt-patch'
import throttle from 'lodash-es/throttle'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Column,
  createTextColumn,
  DataSheetGrid,
  keyColumn,
} from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'
import '../../style/components/_data-grid-extra.scss'
import { GridModel, GridModelSnapshot, Operation } from './DataGridTypes'
import { StartGridSession } from './StartGridSession'
import { useDataGridWebSocket } from './useDataGridWebsocket'

const DataGrid = () => {
  // Grid session state
  const [sessionId, setSessionId] = useState<string>('')
  const [replicaId, setReplicaId] = useState<number | null>(null)
  const [presignedUrl, setPresignedUrl] = useState<string>('')

  // WebSocket state
  const {
    isConnected,
    websocketInstance,
    createWebsocket,
    isGridReady,
    modelRef,
    modelSnapshot,
    getModel,
  } = useDataGridWebSocket()
  useEffect(() => {
    if (replicaId && presignedUrl) {
      createWebsocket(replicaId, presignedUrl)
    }
  }, [replicaId, presignedUrl, createWebsocket])

  const connectionStatus = isConnected ? 'Connected' : 'Disconnected'

  const [messages, setMessages] = useState<string[]>([])

  // If grid sessionId or replicaId changes, reset the model
  useEffect(() => {
    if (sessionId || replicaId) {
      modelRef.current = null
      // modelSnapshotRef.current = {
      //   columnNames: [],
      //   columnOrder: [],
      //   rows: [],
      // }
      setRowValues([])
      setColValues([])
      setMessages([]) // Clear message log
    }
  }, [sessionId, replicaId, websocketInstance])

  // Grid rows and columns
  type DataGridRow = { [key: string]: string | number }
  const [rowValues, setRowValues] = useState<DataGridRow[]>([])
  const [colValues, setColValues] = useState<Column[]>([])
  const [prevRows, setPrevRows] = useState(rowValues)

  useEffect(() => {
    if (modelSnapshot) {
      setRowValues(modelRowsToGrid(modelSnapshot))
      setColValues(modelColsToGrid(modelSnapshot))
    }
  }, [modelSnapshot])

  // Convert model rows to a format suitable for DataSheetGrid
  function modelRowsToGrid(modelSnapshot: GridModelSnapshot): DataGridRow[] {
    if (!modelSnapshot) return []
    const { columnNames, columnOrder, rows } = modelSnapshot
    const gridRows = rows.map(row => {
      const rowObj: { [key: string]: any } = {}
      // Cannot read properties of undefined (reading '0') when rowObj[columnName] = row.data[index]
      const rowData = Array.isArray(row.data) ? row.data : []
      // Use columnOrder to determine which columnNames to use and in what order
      columnOrder.forEach((index: number) => {
        const columnName = columnNames[index]
        if (columnName) {
          rowObj[columnName] = rowData[index] ?? ''
        }
      })
      return rowObj
    })
    return gridRows
  }

  // Convert model columns to a format suitable for DataSheetGrid
  function modelColsToGrid(modelSnapshot: GridModelSnapshot): Column[] {
    if (!modelSnapshot) return []
    const { columnNames, columnOrder } = modelSnapshot
    const gridCols: Column[] = columnOrder.map((index: number) => {
      return {
        ...keyColumn(
          columnNames[index],
          createTextColumn({ continuousUpdates: false }),
        ),
        title: columnNames[index],
      }
    })
    return gridCols
  }

  // Function to apply grid changes to a model
  function gridToModel(gridRows: DataGridRow[], model: GridModel): GridModel {
    if (!model) return model
    const rowsArr = model.api.node.get('rows')
    const { columnNames: mcnUpdate } = model.api.getSnapshot()

    for (let i = 0; i < gridRows.length; i++) {
      const editedRow = gridRows[i]

      try {
        // Can return ObjApi or VecApi
        const rowObj = rowsArr.get(i)

        // If ObjApi, we can access the 'data' property to get the vector
        // If VecApi, we can use it directly
        let rowVec
        if (rowObj && typeof rowObj.get === 'function') {
          try {
            rowVec = rowObj.get('data')
          } catch (error) {
            rowVec = rowObj
          }
        } else {
          rowVec = rowObj
        }

        // Apply frontend row edits to the CRDT model while skipping _rowId (frontend-only)
        Object.entries(editedRow).forEach(([key, value]) => {
          if (key === '_rowId') {
            return
          }
          const columnIndex = mcnUpdate.indexOf(key)
          if (columnIndex !== -1) {
            try {
              rowVec.set([[columnIndex, konst(value)]])
            } catch (error) {
              console.error(`Failed to update row vector`, error)
            }
          }
        })
      } catch (error) {
        console.error(`Failed to process row ${i}: `, error)
        continue
      }
    }
    return model
  }

  // Grid editing functions
  const createdRowIds = useMemo(() => new Set(), [])
  const deletedRowIds = useMemo(() => new Set(), [])
  const updatedRowIds = useMemo(() => new Set(), [])

  const cancel = () => {
    setRowValues(prevRows)
    createdRowIds.clear()
    deletedRowIds.clear()
    updatedRowIds.clear()
  }

  const performCommit = (dataToCommit: DataGridRow[]) => {
    // Update model and send changes to server
    // This mutates the model -- maybe we should move this?
    gridToModel(dataToCommit, getModel()!)
    websocketInstance?.sendPatch()

    console.log('Data committed:', dataToCommit)

    // Reset tracking
    createdRowIds.clear()
    deletedRowIds.clear()
    updatedRowIds.clear()

    return dataToCommit
  }

  const commit = () => performCommit(rowValues)

  function genId() {
    return Math.floor(Math.random() * 1000000)
  }

  const autoCommit = useCallback(
    throttle((newValue: DataGridRow[]) => {
      console.log('Auto-committing changes')
      performCommit(newValue)
    }, 500),
    [performCommit],
  )

  function addRowToModel() {
    const row: DataGridRow = { _rowId: genId() }
    colValues.forEach(col => {
      row[(col as any).key] = ''
    })
    return row
  }

  const handleChange = (newValue: DataGridRow[], operations: Operation[]) => {
    for (const operation of operations) {
      const rowsArr = modelRef.current?.api.arr(['rows'])

      if (operation.type === 'CREATE') {
        const snapshot = modelRef.current?.api.getSnapshot()
        const columnNames: string[] = snapshot?.columnNames ?? []

        // Add new rows to the model iterating fromRowIndex to toRowIndex
        // and adding rows to the model via the api
        for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
          const newRowId = modelRef.current?.api.builder.obj()
          const dataVecId = modelRef.current?.api.builder.vec()

          // Populate vector with empty values for each column
          const vectorData: [number, ITimestampStruct][] = columnNames.map(
            (_, index) => [index, modelRef.current!.api.builder.const('')],
          )

          // Insert the vector into the model
          if (dataVecId !== undefined) {
            modelRef.current?.api.builder.insVec(dataVecId, vectorData)
          }

          const metadataId = modelRef.current?.api.builder.obj()
          const synapseRowId = modelRef.current?.api.builder.obj()

          // Build the synapseRow object
          if (synapseRowId !== undefined) {
            modelRef.current?.api.builder.insObj(synapseRowId, [
              ['rowId', modelRef.current?.api.builder.const(0)],
              ['versionNumber', modelRef.current?.api.builder.const(0)],
              ['etag', modelRef.current?.api.builder.const('')],
            ])
          }

          // Build the metadata object
          if (metadataId !== undefined && synapseRowId !== undefined) {
            modelRef.current?.api.builder.insObj(metadataId, [
              ['synapseRow', synapseRowId],
            ])
          }

          // Build the complete row object
          if (
            newRowId !== undefined &&
            dataVecId !== undefined &&
            metadataId !== undefined
          ) {
            modelRef.current?.api.builder.insObj(newRowId, [
              ['data', dataVecId],
              ['metadata', metadataId],
            ])
          }

          rowsArr?.ins(i, [newRowId])
        }

        newValue
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ _rowId }: any) => createdRowIds.add(_rowId))
      }

      if (operation.type === 'UPDATE') {
        newValue
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ _rowId }: any) => {
            if (!createdRowIds.has(_rowId) && !deletedRowIds.has(_rowId)) {
              updatedRowIds.add(_rowId)
            }
          })
      }

      if (operation.type === 'DELETE') {
        let keptRows = 0
        rowsArr?.del(
          operation.fromRowIndex,
          operation.toRowIndex - operation.fromRowIndex,
        )

        rowValues
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ _rowId }, i) => {
            updatedRowIds.delete(_rowId)

            if (createdRowIds.has(_rowId)) {
              createdRowIds.delete(_rowId)
            } else {
              deletedRowIds.add(_rowId)
              newValue.splice(
                operation.fromRowIndex + keptRows++,
                0,
                rowValues[operation.fromRowIndex + i],
              )
            }
          })
      }
    }

    // Filter out deleted rows
    const filteredData = newValue.filter(
      ({ _rowId }: DataGridRow) => !deletedRowIds.has(_rowId),
    )
    // Update UI state
    setRowValues(filteredData)
    setPrevRows(filteredData)

    autoCommit(filteredData)
  }

  return (
    <div>
      <div>
        <StartGridSession
          onSessionChange={setSessionId}
          onReplicaChange={setReplicaId}
          onPresignedUrlChange={setPresignedUrl}
        />
      </div>

      <div>
        <p>Session ID: {sessionId || 'No session created'}</p>
        <p>Replica ID: {replicaId || 'No replica created'}</p>
        <p>
          Presigned URL:{' '}
          {presignedUrl.substring(0, 30) +
            (presignedUrl.length > 30
              ? ' ... ' +
                presignedUrl.substring(
                  presignedUrl.length - 10,
                  presignedUrl.length,
                )
              : '') || 'No URL generated'}
        </p>
        <p>
          WebSocket Status:{' '}
          <span style={{ color: isConnected ? 'green' : 'red' }}>
            {connectionStatus}
          </span>
        </p>
      </div>
      {/* Message Log */}
      <div
        style={{
          margin: '10px 0',
          padding: '10px',
          border: '1px solid #ccc',
          maxHeight: '200px',
          overflowY: 'auto',
        }}
      >
        <h4>Server Message Log</h4>
        {messages.map((message, index) => (
          <div key={index} style={{ fontSize: '12px', marginBottom: '5px' }}>
            {message}
          </div>
        ))}
      </div>
      {!isGridReady && <h3>Loading grid...</h3>}
      {isGridReady && (
        <div>
          <button onClick={commit}>Commit</button>
          <button onClick={cancel}>Cancel</button>
          <DataSheetGrid
            value={rowValues}
            columns={colValues}
            rowKey="_rowId"
            rowClassName={({ rowData }: any) => {
              if (deletedRowIds.has(rowData._rowId)) {
                return 'row-deleted'
              }
              if (createdRowIds.has(rowData._rowId)) {
                return 'row-created'
              }
              if (updatedRowIds.has(rowData._rowId)) {
                return 'row-updated'
              } else return ''
            }}
            createRow={addRowToModel}
            duplicateRow={({ rowData }: any) => ({
              ...rowData,
              _rowId: genId(),
            })}
            onChange={handleChange}
          />
        </div>
      )}
      <div
        style={{
          margin: '10px 0',
          padding: '10px',
          border: '1px solid #ccc',
          maxHeight: '400px',
          overflowY: 'auto',
        }}
      >
        <h3>Model snapshot</h3>

        {modelSnapshot ? (
          <ComplexJSONRenderer value={modelSnapshot} />
        ) : (
          'No model available'
        )}
      </div>
    </div>
  )
}

export default DataGrid
