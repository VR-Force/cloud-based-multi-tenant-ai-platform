import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/auth/AuthProvider';
import { Loading } from '@/components/feedback/Loading';
export function ProtectedRoute() {
    const { user, loading } = useAuth();
    if (loading)
        return _jsx(Loading, {});
    if (!user)
        return _jsx(Navigate, { to: "/login", replace: true });
    if (!user.tenantId || (user.tenantId !== 'shop-a' && user.tenantId !== 'shop-b')) {
        return _jsx(AccessDenied, {});
    }
    return _jsx(Outlet, {});
}
function AccessDenied() {
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center p-6", children: _jsxs("div", { className: "max-w-md w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-glow", children: [_jsx("h1", { className: "text-xl font-semibold mb-2", children: "Access denied" }), _jsx("p", { className: "text-sm text-slate-400", children: "Your account is not assigned to a recognized tenant group (shop-a or shop-b). Please contact the administrator." })] }) }));
}
