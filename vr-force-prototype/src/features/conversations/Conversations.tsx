import { Card } from '@/components/ui/Card';
import { MessageCircle } from 'lucide-react';

export function Conversations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Conversations</h1>
        <p className="text-slate-400">Future-ready tenant-scoped conversation history (preview)</p>
      </div>
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <MessageCircle className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-medium">Preview</h2>
            <p className="text-sm text-slate-400">No conversation persistence API currently exists</p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-8 text-center">
          <p className="text-sm text-slate-400">No conversations to display</p>
          <p className="text-xs text-slate-500 mt-1">Future: tenant-scoped history, handoff, audit trails</p>
        </div>
      </Card>
    </div>
  );
}
