import { formatDate } from '@/utils/functions/DateFormatter'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { StyledComponent } from '@emotion/styled'
import { InfoOutline, Update as UpdateIcon } from '@mui/icons-material'
import {
  Box,
  Chip,
  Link,
  Paper,
  PaperProps,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import dayjs from 'dayjs'
import { EntityTypeIcon } from '../EntityIcon'
import { EntityType } from '@sage-bionetworks/synapse-client'
import FavoriteButton from '../favorites/FavoriteButton'
import { EntityDownloadButton } from '../EntityDownloadButton/EntityDownloadButton'
import HasAccessChip from './HasAccessChip'
import { searchResultsCardChipStyles } from './chipStyles'
import useGetEntityMetadata from '@/utils/hooks/useGetEntityMetadata'
import styles from './SynapseSearchResultsCard.module.scss'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'

export type SynapseSearchResultsCardProps = {
  entityId: string
  name: string
  entityType: EntityType
  modifiedOn: number
  locatedIn?: { name: string; id: string }
}

const SynapseSearchResultsCardContainer: StyledComponent<PaperProps> = styled(
  Paper,
  {
    label: 'SynapseSearchResultsCardContainer',
  },
)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '250px',
  width: '100%',
  borderRadius: '10px',
  padding: '32px',
  gap: '15px',
})

export function SynapseSearchResultsCard(props: SynapseSearchResultsCardProps) {
  const { fileHandle } = useGetEntityMetadata(
    props.entityType === EntityType.file ? props.entityId : '',
  )

  const fileSize = fileHandle?.contentSize

  return (
    <SynapseSearchResultsCardContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Typography variant="headline3">
          <Link
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}Synapse:${props.entityId}`}
          >
            {props.name}
          </Link>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <FavoriteButton entityId={props.entityId} />
          <EntityDownloadButton
            entityId={props.entityId}
            name={props.name}
            entityType={props.entityType}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Chip
          icon={
            <EntityTypeIcon
              type={props.entityType}
              wrap={false}
              sx={{ color: '#265149', width: '18px' }}
            />
          }
          label={props.entityType}
          sx={{ ...searchResultsCardChipStyles }}
        />
        <HasAccessChip entityId={props.entityId} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '8px',
        }}
      >
        <Stack sx={{ gap: '20px' }}>
          <Box sx={{ display: 'flex' }}>
            <UpdateIcon className={styles.cardMetadataIcon} />
            <Typography className={styles.cardMetadataTypographyWithIcon}>
              Last updated:{' '}
              {formatDate(dayjs.unix(props.modifiedOn), 'M/D/YYYY')}
            </Typography>
          </Box>
          {fileSize && (
            <Box sx={{ display: 'flex' }}>
              <InfoOutline className={styles.cardMetadataIcon} />
              <Typography className={styles.cardMetadataTypographyWithIcon}>
                File size: <b>{calculateFriendlyFileSize(fileSize)}</b>
              </Typography>
            </Box>
          )}
          {props.locatedIn && (
            <Box sx={{ display: 'flex', marginLeft: '24px' }}>
              <Typography className={styles.cardMetadataTypographyWithIcon}>
                Located in:{' '}
                <EntityTypeIcon
                  type={EntityType.project}
                  wrap={false}
                  sx={{ color: 'var(--synapse-gray-700)', width: '24px' }}
                />{' '}
                <Link
                  sx={{
                    fontWeight: 400,
                    color: 'var(--synapse-gray-900) !important',
                    '&:hover': { color: 'var(--synapse-gray-900) !important' },
                  }}
                  href={`${getEndpoint(
                    BackendDestinationEnum.PORTAL_ENDPOINT,
                  )}Synapse:${props.locatedIn?.id}`}
                >
                  {props.locatedIn?.name}{' '}
                </Link>
              </Typography>
            </Box>
          )}
        </Stack>
      </Box>
    </SynapseSearchResultsCardContainer>
  )
}

export default SynapseSearchResultsCard
