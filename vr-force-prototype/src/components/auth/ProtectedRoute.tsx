import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/auth/AuthProvider';
import { Loading } from '@/components/feedback/Loading';

export function ProtectedRoute() {
  const { user, loading } = useAuth();
  if (loading) return <Loading />;
  if (!user) return <Navigate to="/login" replace />;
  if (!user.tenantId || (user.tenantId !== 'shop-a' && user.tenantId !== 'shop-b')) {
    return <AccessDenied />;
  }
  return <Outlet />;
}

function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-glow">
        <h1 className="text-xl font-semibold mb-2">Access denied</h1>
        <p className="text-sm text-slate-400">
          Your account is not assigned to a recognized tenant group (shop-a or shop-b). Please contact the administrator.
        </p>
      </div>
    </div>
  );
}
