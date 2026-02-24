import {
  OAuthIdentityProviderProviderEnum,
  Realm,
} from '@sage-bionetworks/synapse-client'
import { isOAuthIdentityProvider } from '../types/IsType'

/**
 * Check if a realm has the ARCUS_BIOSCIENCES identity provider
 */
export function hasArcusProvider(realm?: Realm): boolean {
  if (!realm?.identityProvider) return false
  return realm.identityProvider.some(
    (provider: any) =>
      isOAuthIdentityProvider(provider) &&
      provider.provider === OAuthIdentityProviderProviderEnum.ARCUS_BIOSCIENCES,
  )
}
