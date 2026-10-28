import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { usePolicy } from '@/hooks/use-api';
import { BookOpen, RefreshCw } from 'lucide-react';

export function Knowledge() {
  const { data, isLoading, error, refetch } = usePolicy();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Knowledge Base</h1>
        <p className="text-slate-400">Authenticated business policy (retrieved via API Gateway from tenant-specific source)</p>
      </div>
      <Card className="p-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <p className="text-sm font-medium">Policy document</p>
          <p className="text-xs text-slate-400">Tenant: {data?.tenantId || 'N/A'} • File: {data?.policyFile || 'N/A'}</p>
        </div>
        <Button variant="secondary" onClick={() => refetch()} disabled={isLoading}>
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </Card>
      {isLoading && <Card className="p-6"><p className="text-slate-400">Loading policy...</p></Card>}
      {error && (
        <Card className="p-6 border-rose-500/30">
          <p className="text-rose-400">Error: {(error as Error).message}</p>
        </Card>
      )}
      {data?.policy && (
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-lg font-medium">Business Policy</h2>
              <p className="text-sm text-slate-400">Rendered from backend response</p>
            </div>
          </div>
          <pre className="whitespace-pre-wrap text-sm text-slate-300 leading-relaxed bg-slate-950/40 border border-slate-800 rounded-xl p-4 max-h-[60vh] overflow-auto">
            {data.policy}
          </pre>
        </Card>
      )}
      <Card className="p-4">
        <h3 className="text-sm font-medium mb-2">Future capabilities (preview only)</h3>
        <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
          <li>Document ingestion, semantic retrieval, AI knowledge grounding</li>
          <li>Document indexing & knowledge synchronization</li>
        </ul>
      </Card>
    </div>
  );
}
