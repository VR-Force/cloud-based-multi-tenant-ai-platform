import { Card } from '@/components/ui/Card';
import { BarChart3 } from 'lucide-react';

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-slate-400">Illustrative preview - no real analytics API deployed</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {['Total AI Conversations', 'Resolved', 'Avg Response Time', 'CSAT'].map((label) => (
          <Card key={label} className="p-4">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="text-2xl font-semibold mt-1">—</p>
            <p className="text-xs text-slate-500 mt-1">Preview (illustrative)</p>
          </Card>
        ))}
      </div>
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-5 w-5 text-blue-400" />
          <h2 className="text-lg font-medium">Usage Trends</h2>
        </div>
        <div className="h-64 rounded-xl border border-slate-800 bg-slate-950/30 flex items-center justify-center">
          <p className="text-sm text-slate-500">Chart placeholder (Recharts ready for future use)</p>
        </div>
      </Card>
    </div>
  );
}
