
import {
  UserManager,
  WebStorageStateStore,
  Log,
} from 'oidc-client-ts';

import { config } from '@/config/env';

Log.setLevel(Log.NONE);

// Cognito User Pool issuer
const cognitoAuthority =
  'https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_HYx2PgB4C';

// Cognito Hosted UI domain
const cognitoDomain =
  'https://ap-southeast-2hyx2pgb4c.auth.ap-southeast-2.amazoncognito.com';

export const userManager = new UserManager({
  authority: cognitoAuthority,

  client_id: config.cognito.clientId,

  redirect_uri: config.cognito.redirectUri,

  response_type: 'code',

  scope: 'openid email profile',

  post_logout_redirect_uri: config.cognito.logoutUri,

  userStore: new WebStorageStateStore({
    store: window.localStorage,
  }),

  automaticSilentRenew: false,

  loadUserInfo: true,

  extraQueryParams: {},
});

// Get currently authenticated user
export async function getUser() {
  return userManager.getUser();
}

// Redirect to Cognito login
export async function signIn(): Promise<void> {
  await userManager.signinRedirect();
}

// Process Cognito login callback
export async function handleSignInCallback() {
  return userManager.signinRedirectCallback();
}

// Logout from Cognito and clear local session
export async function signOut(): Promise<void> {
  const logoutUrl = new URL(`${cognitoDomain}/logout`);

  logoutUrl.searchParams.set('client_id', config.cognito.clientId);
  logoutUrl.searchParams.set('logout_uri', config.cognito.logoutUri);

  logoutUrl.searchParams.set('response_type', 'code');
  logoutUrl.searchParams.set('scope', 'openid email profile');
  logoutUrl.searchParams.set('redirect_uri', config.cognito.redirectUri);

  await userManager.removeUser();

  window.location.assign(logoutUrl.toString());
}