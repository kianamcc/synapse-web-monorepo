import { useCreatePersonalAccessToken } from '@/synapse-queries/user/usePersonalAccessToken'
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import {
  AccessTokenGenerationRequest,
  scopeDescriptions,
} from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import { ChangeEvent, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import { CopyToClipboardInput } from '../CopyToClipboardInput/CopyToClipboardInput'
import { ErrorBanner } from '../error/ErrorBanner'
import loadingScreen from '../LoadingScreen/LoadingScreen'
import TextField from '../TextField/TextField'

const INVALID_INPUT_MSG =
  'You must provide a token name and at least one permission.'

export type CreateAccessTokenModalProps = {
  onClose?: () => void
  onCreate?: () => void
}

export function CreateAccessTokenModal(props: CreateAccessTokenModalProps) {
  const { onClose = noop, onCreate = noop } = props
  const [tokenName, setTokenName] = useState('')
  const [viewAccess, setViewAccess] = useState(true)
  const [downloadAccess, setDownloadAccess] = useState(false)
  const [modifyAccess, setModifyAccess] = useState(false)

  const [validationError, setValidationError] = useState<string | null>(null)

  const {
    mutate,
    isPending: createIsPending,
    error: mutationError,
    data: createdTokenResponse,
  } = useCreatePersonalAccessToken()

  const handleTokenNameChange = (event: ChangeEvent) => {
    setTokenName((event.target as HTMLInputElement).value)
  }

  const validateInput = (tokenName: string, access: boolean[]): boolean => {
    return !!tokenName && access.some(x => x)
  }

  const onSubmit = () => {
    if (validateInput(tokenName, [viewAccess, downloadAccess, modifyAccess])) {
      setValidationError(null)

      const request: AccessTokenGenerationRequest = {
        scope: [],
        name: tokenName,
      }
      if (viewAccess) request.scope.push('view')
      if (downloadAccess) request.scope.push('download')
      if (modifyAccess) request.scope.push('modify')

      mutate(request)

      onCreate()
    } else {
      setValidationError(INVALID_INPUT_MSG)
    }
  }

  const dialogContent = createdTokenResponse ? (
    <>
      <Typography variant={'body1'}>
        <Typography
          variant={'body1'}
          component={'span'}
          sx={{
            fontWeight: 700,
          }}
        >
          This token will not be able to be retrieved again.
        </Typography>{' '}
        If needed, generate a new personal access token, and delete this one.
      </Typography>
      <div>
        <CopyToClipboardInput
          value={createdTokenResponse.token}
          inputWidth={'350px'}
        />
      </div>
      <Typography variant={'body1'}>
        This token grants access to your account functions and should be treated
        like a password.
      </Typography>
    </>
  ) : (
    <div>
      <TextField
        autoFocus
        label="Token Name"
        value={tokenName}
        onChange={handleTokenNameChange}
        placeholder="e.g. Synapse command line access on my laptop"
        sx={{ mb: 2 }}
      />
      <Typography variant="label">Token Permissions</Typography>
      <Stack
        sx={{
          gap: 2,
          my: 1,
        }}
      >
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label={scopeDescriptions.view.displayName}
            checked={viewAccess}
            onChange={() => setViewAccess(!viewAccess)}
          />
          <Typography
            variant={'smallText1'}
            sx={{
              color: 'grey.700',
            }}
          >
            {scopeDescriptions.view.description}. Required to use Synapse
            programmatic clients.
          </Typography>
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label={scopeDescriptions.download.displayName}
            checked={downloadAccess}
            onChange={() => setDownloadAccess(!downloadAccess)}
          />
          <Typography
            variant={'smallText1'}
            sx={{
              color: 'grey.700',
            }}
          >
            {scopeDescriptions.download.description}
          </Typography>
        </div>
        <div>
          <FormControlLabel
            control={<Checkbox />}
            label={scopeDescriptions.modify.displayName}
            checked={modifyAccess}
            onChange={() => setModifyAccess(!modifyAccess)}
          />
          <Typography
            variant={'smallText1'}
            sx={{
              color: 'grey.700',
            }}
          >
            {scopeDescriptions.modify.description}
          </Typography>
        </div>
      </Stack>
      {validationError && <ErrorBanner error={validationError} />}
      {mutationError && <ErrorBanner error={mutationError.reason} />}
    </div>
  )

  return (
    <ConfirmationDialog
      open={true}
      title="Create New Personal Access Token"
      content={createIsPending ? loadingScreen : dialogContent}
      confirmButtonProps={{
        children: createdTokenResponse ? 'Close' : 'Create Token',
        variant: createdTokenResponse ? 'outlined' : 'contained',
      }}
      hasCancelButton={!createdTokenResponse}
      onCancel={onClose}
      onConfirm={
        createdTokenResponse
          ? () => onClose()
          : () => {
              void onSubmit()
            }
      }
    />
  )
}
