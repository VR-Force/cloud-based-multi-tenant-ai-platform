import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner } from './Spinner';
export function Loading({ text = 'Loading...' }) {
    return (_jsxs("div", { className: "min-h-[50vh] flex flex-col items-center justify-center gap-3 text-slate-400", children: [_jsx(Spinner, {}), _jsx("span", { className: "text-sm", children: text })] }));
}
export function SkeletonCard() {
    return (_jsxs("div", { className: "animate-pulse rounded-2xl border border-slate-800 bg-slate-900/60 p-6", children: [_jsx("div", { className: "h-4 w-1/3 bg-slate-800 rounded" }), _jsxs("div", { className: "mt-4 space-y-2", children: [_jsx("div", { className: "h-3 bg-slate-800 rounded" }), _jsx("div", { className: "h-3 bg-slate-800 rounded w-5/6" }), _jsx("div", { className: "h-3 bg-slate-800 rounded w-4/6" })] })] }));
}
