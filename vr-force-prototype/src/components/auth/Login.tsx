import { useAuth } from '@/auth/AuthProvider';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Building2, Lock, ShieldCheck } from 'lucide-react';

export function Login() {
  const { signIn, user, loading } = useAuth();
  if (loading) return <LoadingState />;
  if (user) return <AlreadyLoggedIn />;
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">VRForce</h1>
          <p className="text-slate-400">Intelligent Support. Secure by Design.</p>
        </div>
        <Card className="p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Sign in with Amazon Cognito</h2>
              <p className="text-sm text-slate-400">Uses OAuth 2.0 Authorization Code with PKCE</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-start gap-2">
              <Building2 className="h-4 w-4 mt-0.5 text-blue-400" />
              <span>Multi-tenant access based on your Cognito group membership</span>
            </div>
            <div className="flex items-start gap-2">
              <Lock className="h-4 w-4 mt-0.5 text-blue-400" />
              <span>Secure tokens - no secrets stored in the browser app</span>
            </div>
          </div>
          <Button onClick={signIn} className="w-full">Continue to Cognito Login</Button>
        </Card>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-400">Checking authentication...</p>
    </div>
  );
}

function AlreadyLoggedIn() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <Card className="max-w-md w-full p-6 text-center">
        <h2 className="text-lg font-medium mb-2">Already signed in</h2>
        <p className="text-sm text-slate-400 mb-4">You are authenticated. Continue to the dashboard.</p>
        <Button as="a" href="/">Go to Dashboard</Button>
      </Card>
    </div>
  );
}
