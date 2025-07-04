import IconSvg from '../IconSvg'
import { Box, BoxProps, styled, Typography } from '@mui/material'
import { StyledComponent } from '@emotion/styled'

const OpenDataContainer: StyledComponent<BoxProps> = styled(Box, {
  label: 'OpenDataContainer',
})(({ theme }) => ({
  background: theme.palette.grey[100],
  padding: `${theme.spacing(2.5)} ${theme.spacing(4)}`,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '3px',
  marginBottom: theme.spacing(2),
}))

export type OpenDataProps = {
  isOpenData: boolean
  isPublic: boolean
  currentUserCanUpdateSharingSettings: boolean
}

export default function OpenData(props: OpenDataProps) {
  const { isOpenData, isPublic, currentUserCanUpdateSharingSettings } = props

  if (isOpenData && isPublic) {
    return (
      <OpenDataContainer display={'flex'} gap={1}>
        <IconSvg icon="checkCircle" color={'success'} wrap={false} />
        <div>
          <Typography
            variant={'body1'}
            sx={{
              color: 'text.secondary',
            }}
          >
            <strong>This is anonymous access data.</strong>
          </Typography>
          <Typography
            variant={'body1'}
            sx={{
              color: 'text.secondary',
            }}
          >
            Anyone can download it, even if they aren’t logged in to Synapse.
          </Typography>
        </div>
      </OpenDataContainer>
    )
  } else if (isOpenData && !isPublic && currentUserCanUpdateSharingSettings) {
    return (
      <OpenDataContainer>
        <Typography
          variant={'body1'}
          sx={{
            color: 'text.secondary',
          }}
        >
          <strong>This is not anonymous access data.</strong>
        </Typography>
        <Typography
          variant={'body1'}
          sx={{
            color: 'text.secondary',
          }}
        >
          You must grant public access for all users to be able to anonymously
          download it.
        </Typography>
      </OpenDataContainer>
    )
  } else if (!isOpenData && isPublic && currentUserCanUpdateSharingSettings) {
    return (
      <OpenDataContainer>
        <Typography
          variant={'body1'}
          sx={{
            color: 'text.secondary',
          }}
        >
          <strong>
            Users must be logged in to download public access data.
          </strong>
        </Typography>
        <Typography
          variant={'body1'}
          sx={{
            color: 'text.secondary',
          }}
        >
          This data is publicly viewable, but only registered and logged-in
          users can download it.
        </Typography>
      </OpenDataContainer>
    )
  }

  return null
}
