import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/utils/cn';
export function Button({ className, variant = 'primary', as = 'button', href, children, ...props }) {
    const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 disabled:opacity-50 disabled:cursor-not-allowed';
    const variants = {
        primary: 'bg-gradient-to-r from-blue-500 to-violet-400 text-white shadow-glow hover:opacity-90',
        secondary: 'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700',
        ghost: 'text-slate-300 hover:bg-slate-800/70',
    };
    const cls = cn(base, variants[variant], className);
    if (as === 'a' && href) {
        return (_jsx("a", { className: cls, href: href, children: children }));
    }
    return (_jsx("button", { className: cls, ...props, children: children }));
}
