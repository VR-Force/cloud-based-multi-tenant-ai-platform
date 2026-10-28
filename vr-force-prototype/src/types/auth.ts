export interface AuthUser {
  idToken: string;
  accessToken: string;
  idTokenClaims: Record<string, unknown>;
  groups: string[];
  tenantId: string | null;
  tenantName: string | null;
  email?: string;
  username?: string;
}
