/// <reference types="vite/client" />

export const config = {
  region: import.meta.env.VITE_AWS_REGION,
  cognito: {
    userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    clientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
    domain: import.meta.env.VITE_COGNITO_DOMAIN,
    redirectUri: import.meta.env.VITE_COGNITO_REDIRECT_URI || 'http://localhost:5173/',
    logoutUri: import.meta.env.VITE_COGNITO_LOGOUT_URI || 'http://localhost:5173/',
  },
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  chatEndpoint: import.meta.env.VITE_CHAT_ENDPOINT || '',
};
