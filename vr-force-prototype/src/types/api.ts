export interface Order {
  orderId: string;
  tenantId: string;
  shopName: string;
  productName: string;
  amount: string | number;
  currency: string;
  status: string;
}

export interface OrderResponse {
  message: string;
  order: Order;
}

export interface PolicyResponse {
  message: string;
  tenantId: string;
  policyFile: string;
  policy: string;
}
