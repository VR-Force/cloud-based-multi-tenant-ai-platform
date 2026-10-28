import { userManager } from '@/auth/cognito';
import { config } from '@/config/env';

export class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const user = await userManager.getUser();

  if (!user || user.expired || !user.id_token) {
    throw new ApiError('Your session has expired. Please sign in again.', 401);
  }

  if (!config.apiBaseUrl) {
    throw new Error('VITE_API_BASE_URL is missing from .env.local');
  }

  const base = config.apiBaseUrl.replace(/\/+$/, '');
  const headers = new Headers(init?.headers);

  headers.set('Authorization', `Bearer ${user.id_token}`);

  if (init?.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${base}/${path.replace(/^\/+/, '')}`, {
    ...init,
    headers,
  });

  const text = await response.text();
  let data: unknown = null;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new ApiError('The API returned a non-JSON response.', response.status);
    }
  }

  if (!response.ok) {
    const details = data as { message?: string; error?: string } | null;
    throw new ApiError(
      details?.message || details?.error || `Request failed (${response.status})`,
      response.status,
    );
  }

  return data as T;
}