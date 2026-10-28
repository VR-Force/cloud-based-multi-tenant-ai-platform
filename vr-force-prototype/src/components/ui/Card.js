import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/utils/cn';
export function Card({ className, children }) {
    return (_jsx("div", { className: cn('rounded-2xl border border-slate-800 bg-slate-900/70 shadow-glow backdrop-blur-sm', className), children: children }));
}
