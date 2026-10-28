import { Card } from '@/components/ui/Card';
import { useAuth } from '@/auth/AuthProvider';
import { Building2, CheckCircle2, XCircle } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();
  const hasValidTenant = user?.tenantId === 'shop-a' || user?.tenantId === 'shop-b';
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Overview</h1>
        <p className="text-slate-400">Multi-tenant AI-powered customer support platform</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Connected Business</p>
              <p className="text-lg font-medium">{user?.tenantName || 'Unknown'}</p>
              <p className="text-xs text-slate-500 mt-1">Tenant ID: {user?.tenantId || 'N/A'}</p>
            </div>
            <Building2 className="h-8 w-8 text-blue-400" />
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Authentication Status</p>
              <p className="text-lg font-medium flex items-center gap-2">
                {hasValidTenant ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <XCircle className="h-5 w-5 text-rose-400" />}
                {hasValidTenant ? 'Authenticated' : 'Invalid Tenant'}
              </p>
              <p className="text-xs text-slate-500 mt-1">Cognito groups: {user?.groups.join(', ') || 'None'}</p>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div>
            <p className="text-sm text-slate-400">Order Lookup</p>
            <p className="text-lg font-medium">Real API</p>
            <p className="text-xs text-slate-500 mt-1">GET /orders/{'{orderId}'} with JWT</p>
          </div>
        </Card>
        <Card className="p-4">
          <div>
            <p className="text-sm text-slate-400">Knowledge Source</p>
            <p className="text-lg font-medium">S3-backed (via API)</p>
            <p className="text-xs text-slate-500 mt-1">GET /policy</p>
          </div>
        </Card>
      </div>
      <Card className="p-6">
        <h2 className="text-lg font-medium mb-2">Architecture</h2>
        <p className="text-sm text-slate-400 mb-4">Currently implemented backend flow</p>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-slate-800 px-3 py-1">Cognito</span>
          <span className="text-slate-500">→</span>
          <span className="rounded-full bg-slate-800 px-3 py-1">API Gateway (HTTP API)</span>
          <span className="text-slate-500">→</span>
          <span className="rounded-full bg-slate-800 px-3 py-1">Lambda (vrforce-assistant)</span>
          <span className="text-slate-500">→</span>
          <span className="rounded-full bg-slate-800 px-3 py-1">DynamoDB (vrforce-orders)</span>
          <span className="text-slate-500">+</span>
          <span className="rounded-full bg-slate-800 px-3 py-1">S3 (policy documents)</span>
        </div>
      </Card>
    </div>
  );
}
