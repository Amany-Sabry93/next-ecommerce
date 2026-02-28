 export interface CartItem {
  count: number;
  price: number;
  product: string; // product ID
  _id: string;    // unique cart item ID
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface Order {
  id: number;
  createdAt: string;
  updatedAt: string;
  isDelivered: boolean;
  isPaid: boolean;
  paymentMethodType: string;
  shippingAddress: ShippingAddress;
  shippingPrice: number;
  taxPrice: number;
  totalOrderPrice: number;
  user: string;
  __v: number;
  _id: string;
  cartItems: CartItem[];
}

