import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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

    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-semibold", children: "Orders" }), _jsx("p", { className: "text-slate-400", children: "Retrieve tenant-scoped order details from the real API" })] }), _jsxs(Card, { className: "p-4", children: [_jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [_jsxs("div", { className: "flex-1 relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" }), _jsx("input", { value: input, onChange: (e) => setInput(e.target.value), className: "w-full rounded-xl bg-slate-950/50 border border-slate-800 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/40", placeholder: "Enter order ID (e.g. ORD-1001)" })] }), _jsxs(Button, { onClick: handleSearch, disabled: !input.trim(), children: [_jsx(Search, { className: "h-4 w-4" }), "Search"] }), _jsx(Button, { variant: "secondary", onClick: () => refetch(), disabled: isLoading, children: "Refresh" })] }), _jsx("p", { className: "text-xs text-slate-500 mt-2", children: "Sample: ORD-1001 (tenant determined by your Cognito group)" })] }), isLoading && _jsx(Card, { className: "p-6", children: _jsx("p", { className: "text-slate-400", children: "Loading order..." }) }), error && (_jsxs(Card, { className: "p-6 border-rose-500/30", children: [_jsxs("p", { className: "text-rose-400", children: ["Error: ", error.message] }), _jsx("p", { className: "text-xs text-slate-500 mt-2", children: "401/403 indicate auth/tenant issues; 404 if not found" })] })), data?.order && (_jsxs(Card, { className: "p-6", children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center", children: _jsx(Package, { className: "h-5 w-5 text-blue-400" }) }), _jsxs("div", { children: [_jsxs("h2", { className: "text-lg font-medium", children: ["Order ", data.order.orderId] }), _jsxs("p", { className: "text-sm text-slate-400", children: [data.order.shopName, " \u2022 Tenant: ", data.order.tenantId] })] })] }), _jsx("span", { className: "rounded-full bg-slate-800 px-3 py-1 text-xs", children: data.order.status })] }), _jsxs("div", { className: "mt-6 grid gap-4 sm:grid-cols-2", children: [_jsxs("div", { className: "rounded-xl border border-slate-800 p-4", children: [_jsx("p", { className: "text-sm text-slate-400", children: "Product" }), _jsx("p", { className: "text-base font-medium", children: data.order.productName })] }), _jsxs("div", { className: "rounded-xl border border-slate-800 p-4", children: [_jsx("p", { className: "text-sm text-slate-400", children: "Amount" }), _jsxs("p", { className: "text-base font-medium", children: [data.order.currency, " ", data.order.amount] })] })] })] }))] }));
}
