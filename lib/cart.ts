import type { CartItem } from "@/components/cart-provider";
import { getProductById, type Product } from "@/lib/products";

export type CartLineItem = {
  product: Product;
  quantity: number;
  lineTotal: number;
};

export function getCartLineItems(items: CartItem[]): CartLineItem[] {
  return items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) {
        return null;
      }

      return {
        product,
        quantity: item.quantity,
        lineTotal: product.price * item.quantity,
      };
    })
    .filter((item): item is CartLineItem => Boolean(item));
}
