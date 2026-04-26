import { create } from 'zustand';
import { Product } from '@/lib/products';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  getTotalCount: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === product.id);

    if (existingItem) {
      set({
        items: currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
    } else {
      set({ items: [...currentItems, { ...product, quantity: 1 }] });
    }
  },
  removeItem: (productId) => {
    set({ items: get().items.filter((item) => item.id !== productId) });
  },
  clearCart: () => set({ items: [] }),
  getTotalCount: () => get().items.reduce((total, item) => total + item.quantity, 0),
}));
