import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/auth/AuthProvider';
import { config } from '@/config/env';
import { User, Building2, ShieldCheck, Globe, Server } from 'lucide-react';

export function Settings() {
  const { user, signOut } = useAuth();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-slate-400">Session and connection information (non-sensitive)</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <User className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-medium">User Profile</h2>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-400">Username/Email</dt>
              <dd className="text-right truncate max-w-[60%]">{user?.email || user?.username || 'N/A'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Cognito Groups</dt>
              <dd className="text-right">{user?.groups.join(', ') || 'N/A'}</dd>
            </div>
          </dl>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-medium">Tenant</h2>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-400">Active Business</dt>
              <dd className="text-right">{user?.tenantName || 'N/A'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Tenant ID</dt>
              <dd className="text-right">{user?.tenantId || 'N/A'}</dd>
            </div>
          </dl>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-medium">Configuration</h2>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-400">AWS Region</dt>
              <dd className="text-right">{config.region}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">API Base URL</dt>
              <dd className="text-right truncate max-w-[60%]">{config.apiBaseUrl}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Cognito Domain</dt>
              <dd className="text-right truncate max-w-[60%]">{config.cognito.domain}</dd>
            </div>
          </dl>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="h-5 w-5 text-blue-400" />
            <h2 className="text-lg font-medium">Session</h2>
          </div>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-400">Authenticated</dt>
              <dd className="text-right">{user ? 'Yes' : 'No'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">Has Valid Tenant</dt>
              <dd className="text-right">{(user?.tenantId === 'shop-a' || user?.tenantId === 'shop-b') ? 'Yes' : 'No'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-400">App Version</dt>
              <dd className="text-right">1.0.0</dd>
            </div>
          </dl>
          <div className="mt-4">
            <Button variant="secondary" onClick={signOut}>Sign out</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
