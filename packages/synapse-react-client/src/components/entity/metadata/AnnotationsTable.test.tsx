import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { mockSchemaBinding } from '@/mocks/mockSchema'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ENTITY_JSON } from '@/utils/APIConstants'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { AnnotationsTable, AnnotationsTableProps } from './AnnotationsTable'

const { id: MOCK_FILE_ENTITY_ID, json: mockFileEntityJson } = mockFileEntityData

const defaultProps: AnnotationsTableProps = {
  entityId: MOCK_FILE_ENTITY_ID,
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<AnnotationsTable {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('AnnotationsTable tests', () => {
  // Handle the msw lifecycle:
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders the annotations on an entity', async () => {
    renderComponent()
    await screen.findByText('myStringKey')
    screen.getByText(mockFileEntityJson['myStringKey']! as string)

    expect(() => screen.getByText('myIntegerKey')).not.toThrow()
    screen.getByText(
      (mockFileEntityJson['myIntegerKey'] as number[]).join(', '),
    )

    expect(() => screen.getByText('myFloatKey')).not.toThrow()
    screen.getByText((mockFileEntityJson['myFloatKey'] as number[]).join(', '))
  })

  it('Displays the validation schema if there is one (in experimental mode)', async () => {
    renderComponent({
      ...MOCK_CONTEXT_VALUE,
      isInExperimentalMode: true,
    })

    await screen.findByText('Validation Schema')
    await screen.findByText(mockSchemaBinding.jsonSchemaVersionInfo.schemaName)
  })

  it('Displays a placeholder when there are no annotations', async () => {
    server.use(
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_JSON(
          ':entityId',
        )}`,

        () => {
          const response = mockFileEntityJson
          // Delete the annotation keys
          delete response.myStringKey
          delete response.myIntegerKey
          delete response.myFloatKey
          return HttpResponse.json(response, { status: 200 })
        },
      ),
    )
    renderComponent()
    await screen.findByText('This File has no annotations.')
  })

  it.todo('Handles scenario where derived annotations are pending')
})
