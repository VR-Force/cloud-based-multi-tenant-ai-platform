export function mapTenant(tenantId: string | null): { tenantId: string | null; tenantName: string | null } {
  if (tenantId === 'shop-a') return { tenantId: 'shop-a', tenantName: 'Lotus Books' };
  if (tenantId === 'shop-b') return { tenantId: 'shop-b', tenantName: 'Ceylon Gadgets' };
  return { tenantId: null, tenantName: null };
}

export function getTokenValue(claims: Record<string, unknown>, key: string): unknown {
  return claims[key];
}
