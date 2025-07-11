import mockTableEntityData, {
  mockTableEntity,
} from '@/mocks/entity/mockTableEntity'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  Entity,
  MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SqlDefinedTableEditorModal, {
  SqlDefinedTableEditorModalProps,
} from './SqlDefinedTableEditorModal'

const mockTableEntityInstance = mockTableEntityData.entity

function renderComponent(props: SqlDefinedTableEditorModalProps) {
  return render(<SqlDefinedTableEditorModal {...props} />, {
    wrapper: createWrapper(),
  })
}

const originalSql = 'SELECT * FROM syn123'

vi.spyOn(SynapseClient, 'getEntity').mockResolvedValue({
  ...mockTableEntity,
  definingSQL: originalSql,
  concreteType: MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
} as Entity)

const mockUpdateEntity = vi.spyOn(SynapseClient, 'updateEntity')

describe('SqlDefinedTableEditorModal tests', () => {
  const mockOnCancel = vi.fn()
  const mockOnUpdate = vi.fn()

  beforeEach(() => {
    renderComponent({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })
  })

  it('displays dialog and its neccessary componenets when SqlDefinedTableEditorModal is rendered', () => {
    const dialog = screen.getByRole('dialog')
    expect(
      within(dialog).getByRole('heading', { name: 'Update SQL' }),
    ).toBeVisible()
    expect(within(dialog).getByRole('button', { name: 'Cancel' })).toBeVisible()
    expect(within(dialog).getByRole('button', { name: 'Save' })).toBeVisible()
  })

  it('loads and displays SQL from the given entityId', async () => {
    const textarea = screen.getByRole('textbox', { name: 'Defining SQL' })
    await waitFor(() => expect(textarea).toHaveValue(originalSql))
  })

  it('expect textarea to be disabled after pressing save', async () => {
    const dialog = screen.getByRole('dialog')
    const saveButton = within(dialog).getByRole('button', { name: 'Save' })
    await userEvent.click(saveButton)

    const textarea = screen.getByRole('textbox', { name: 'Defining SQL' })
    expect(textarea).toBeDisabled()
  })

  it('display error for invalid entity', async () => {
    const dialog = screen.getByRole('dialog')
    const newSql = 'select new from syn123'
    mockUpdateEntity.mockRejectedValue(
      new SynapseClientError(
        400,
        'Error with SQL',
        expect.getState().currentTestName!,
      ),
    )

    const textarea = screen.getByRole('textbox', { name: 'Defining SQL' })
    await waitFor(() => expect(textarea).not.toBeDisabled())
    await userEvent.clear(textarea)
    await userEvent.type(textarea, newSql)

    const saveButton = within(dialog).getByRole('button', { name: 'Save' })
    await userEvent.click(saveButton)

    await screen.findByRole('alert')

    expect(mockOnUpdate).not.toHaveBeenCalled()
  })

  it('successfully submit new definingSql and call the onUpdate callback', async () => {
    const newSql = 'SELECT * FROM syn123 LIMIT 0'
    const mockMaterializedView = {
      ...mockTableEntityInstance,
      definingSQL: newSql,
    }
    mockUpdateEntity.mockResolvedValue(mockMaterializedView)
    const textarea = screen.getByRole('textbox', { name: 'Defining SQL' })
    await waitFor(() => expect(textarea).not.toBeDisabled())
    await userEvent.clear(textarea)
    await userEvent.type(textarea, newSql)

    const saveButton = screen.getByText('Save', { selector: 'button' })

    await userEvent.click(saveButton)
    await waitFor(() => {
      expect(mockUpdateEntity).toHaveBeenCalledWith(
        expect.objectContaining({
          definingSQL: newSql,
        }),
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnUpdate).toHaveBeenCalled()
    })
  })
})
