import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Login } from '@/components/auth/Login';
import { Callback } from '@/components/auth/Callback';
import { Dashboard } from '@/features/dashboard/Dashboard';
import { Orders } from '@/features/orders/Orders';
import { Knowledge } from '@/features/knowledge/Knowledge';
import { Assistant } from '@/features/assistant/Assistant';
import { Conversations } from '@/features/conversations/Conversations';
import { Analytics } from '@/features/analytics/Analytics';
import { Security } from '@/features/security/Security';
import { Settings } from '@/features/settings/Settings';

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/callback', element: <Callback /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          { path: '/', element: <Dashboard /> },
          { path: '/orders', element: <Orders /> },
          { path: '/knowledge', element: <Knowledge /> },
          { path: '/assistant', element: <Assistant /> },
          { path: '/conversations', element: <Conversations /> },
          { path: '/analytics', element: <Analytics /> },
          { path: '/security', element: <Security /> },
          { path: '/settings', element: <Settings /> },
          { path: '*', element: <Navigate to="/" replace /> },
        ],
      },
    ],
  },
]);
