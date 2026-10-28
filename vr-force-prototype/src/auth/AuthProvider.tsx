
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import type { User } from 'oidc-client-ts';

import {
  userManager,
  signOut as cognitoSignOut,
} from './cognito';

import type { AuthUser } from '@/types/auth';
import { mapTenant } from '@/utils/auth-utils';

// Extract Cognito groups
function extractGroups(
  claims: Record<string, unknown>
): string[] {
  const groups = claims['cognito:groups'];

  if (Array.isArray(groups)) {
    return groups.filter(
      (g): g is string => typeof g === 'string'
    );
  }

  if (typeof groups === 'string') {
    return [groups];
  }

  return [];
}

// Convert Cognito user to application user
function toAuthUser(user: User | null): AuthUser | null {
  if (!user || user.expired) return null;

  const claims = user.profile as Record<string, unknown>;

  const groups = extractGroups(claims);

  const primaryGroup =
    groups.find(
      (g) => g === 'shop-a' || g === 'shop-b'
    ) ?? null;

  const mapped = mapTenant(primaryGroup);

  return {
    idToken: user.id_token,
    accessToken: user.access_token,
    idTokenClaims: claims,
    groups,
    tenantId: mapped.tenantId,
    tenantName: mapped.tenantName,
    email: claims.email as string | undefined,
    username:
      (claims.preferred_username as string | undefined) ??
      (claims.sub as string | undefined),
  };
}

// Authentication context type
interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  handleCallback: () => Promise<User>;
  refresh: () => Promise<void>;
}

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

// Authentication provider
export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const onUserLoaded = (u: User) => {
      if (active) {
        setUser(toAuthUser(u));
      }
    };

    const onUserUnloaded = () => {
      if (active) {
        setUser(null);
      }
    };

    userManager.events.addUserLoaded(onUserLoaded);
    userManager.events.addUserUnloaded(onUserUnloaded);

    userManager
      .getUser()
      .then((u) => {
        if (active) {
          setUser(toAuthUser(u));
        }
      })
      .catch((error) => {
        console.error(
          'Authentication initialization failed:',
          error
        );

        if (active) {
          setUser(null);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;

      userManager.events.removeUserLoaded(onUserLoaded);
      userManager.events.removeUserUnloaded(onUserUnloaded);
    };
  }, []);

  // Login
  const signIn = async (): Promise<void> => {
    await userManager.signinRedirect();
  };

  // Logout
  const signOut = async (): Promise<void> => {
    await cognitoSignOut();
  };

  // Process authentication callback
  const handleCallback = async (): Promise<User> => {
    const u = await userManager.signinRedirectCallback();

    setUser(toAuthUser(u));

    return u;
  };

  // Refresh authenticated user
  const refresh = async (): Promise<void> => {
    const u = await userManager.getUser();

    setUser(toAuthUser(u));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signOut,
        handleCallback,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Authentication hook
export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      'useAuth must be used within AuthProvider'
    );
  }

  return ctx;
}
