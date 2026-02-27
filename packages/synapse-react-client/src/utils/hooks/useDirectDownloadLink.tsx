import { getFiles } from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'
import UAParser from 'ua-parser-js'

type DirectDownloadLinkProps = {
  fileHandleId: string
  associatedObjectId: string
  associatedObjectType: FileHandleAssociateType
}

export function useDirectDownloadLink() {
  const { accessToken } = useSynapseContext()

  const downloadFile = async ({
    fileHandleId,
    associatedObjectId,
    associatedObjectType,
  }: DirectDownloadLinkProps) => {
    // SWC-5907: opening in the file must be strictly done in the same click event process (Safari only).
    // https://stackoverflow.com/questions/6628949/window-open-popup-getting-blocked-during-click-event
    const parser = new UAParser()
    const isSafari = parser.getBrowser().name == 'Safari'
    let safariDownloadWindow: Window | null = null

    if (isSafari) {
      safariDownloadWindow = window.open(
        '',
        'Safari Download',
        'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,popup,width=600,height=200',
      )
      safariDownloadWindow!.document.body.innerHTML =
        'Downloading file on Safari...'
    }

    try {
      const fileHandleAssociation: FileHandleAssociation = {
        fileHandleId,
        associateObjectId: associatedObjectId,
        associateObjectType: associatedObjectType,
      }

      const batchFileRequest: BatchFileRequest = {
        includeFileHandles: true,
        includePreSignedURLs: true,
        includePreviewPreSignedURLs: false,
        requestedFiles: [fileHandleAssociation],
      }

      const response = await getFiles(batchFileRequest, accessToken)
      const preSignedURL = response.requestedFiles[0].preSignedURL!

      if (!preSignedURL) {
        safariDownloadWindow?.close()
        console.log('Failed to get file download link')
      } else {
        if (isSafari && safariDownloadWindow) {
          safariDownloadWindow.location = preSignedURL
          setTimeout(() => {
            if (safariDownloadWindow) {
              safariDownloadWindow.close()
            }
          }, 10000)
        } else {
          window.open(preSignedURL)
        }
      }
    } catch (e) {
      safariDownloadWindow?.close()
      console.log('Failed to get file download link: ', e)
    }
  }
  return { downloadFile }
}
