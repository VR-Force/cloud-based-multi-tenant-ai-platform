import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useOrder } from '@/hooks/use-api';
import { Search, Package } from 'lucide-react';

export function Orders() {
  const [orderId, setOrderId] = useState('ORD-1001');
  const [input, setInput] = useState(orderId);
  const { data, isLoading, error, refetch } = useOrder(orderId);

const handleSearch = () => {
  const nextOrderId = input.trim().toUpperCase();

  if (!nextOrderId) return;

  if (nextOrderId === orderId) {
    void refetch();
  } else {
    setOrderId(nextOrderId);
  }
};

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Orders</h1>
        <p className="text-slate-400">Retrieve tenant-scoped order details from the real API</p>
      </div>
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full rounded-xl bg-slate-950/50 border border-slate-800 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              placeholder="Enter order ID (e.g. ORD-1001)"
            />
          </div>
          <Button onClick={handleSearch} disabled={!input.trim()}>
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button variant="secondary" onClick={() => refetch()} disabled={isLoading}>
            Refresh
          </Button>
        </div>
        <p className="text-xs text-slate-500 mt-2">Sample: ORD-1001 (tenant determined by your Cognito group)</p>
      </Card>
      {isLoading && <Card className="p-6"><p className="text-slate-400">Loading order...</p></Card>}
      {error && (
        <Card className="p-6 border-rose-500/30">
          <p className="text-rose-400">Error: {(error as Error).message}</p>
          <p className="text-xs text-slate-500 mt-2">401/403 indicate auth/tenant issues; 404 if not found</p>
        </Card>
      )}
      {data?.order && (
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Package className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h2 className="text-lg font-medium">Order {data.order.orderId}</h2>
                <p className="text-sm text-slate-400">{data.order.shopName} • Tenant: {data.order.tenantId}</p>
              </div>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">{data.order.status}</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 p-4">
              <p className="text-sm text-slate-400">Product</p>
              <p className="text-base font-medium">{data.order.productName}</p>
            </div>
            <div className="rounded-xl border border-slate-800 p-4">
              <p className="text-sm text-slate-400">Amount</p>
              <p className="text-base font-medium">{data.order.currency} {data.order.amount}</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
