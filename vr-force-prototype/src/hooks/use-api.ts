import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/auth/AuthProvider';
import { apiFetch } from '@/services/api';
import type { OrderResponse, PolicyResponse } from '@/types/api';

export function useOrder(orderId: string | null) {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['order', user?.username, user?.tenantId, orderId],
    queryFn: () =>
      apiFetch<OrderResponse>(
        `/orders/${encodeURIComponent(orderId!)}`,
      ),
    enabled: !!user && !!orderId,
  });
}

export function usePolicy() {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['policy', user?.username, user?.tenantId],
    queryFn: () => apiFetch<PolicyResponse>('/policy'),
    enabled: !!user,
  });
}