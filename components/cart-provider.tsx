"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { toast } from "sonner";
import { getProductById } from "@/lib/products";

const STORAGE_KEY = "medishop-cart";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  couponCode: string;
  discountRate: number;
};

type CartAction =
  | { type: "hydrate"; payload: CartState }
  | { type: "add"; productId: string; quantity: number }
  | { type: "update"; productId: string; quantity: number }
  | { type: "remove"; productId: string }
  | { type: "applyCoupon"; code: string; discountRate: number }
  | { type: "clearCoupon" }
  | { type: "reset" };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  couponCode: string;
  discountRate: number;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  total: number;
  isHydrated: boolean;
  addItem: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  applyCoupon: (code: string) => { ok: boolean; message: string };
  clearCoupon: () => void;
  resetCart: () => void;
};

const initialState: CartState = {
  items: [],
  couponCode: "",
  discountRate: 0,
};

const CartContext = createContext<CartContextValue | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return action.payload;
    case "add": {
      const existing = state.items.find(
        (item) => item.productId === action.productId,
      );

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.productId
              ? { ...item, quantity: item.quantity + action.quantity }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { productId: action.productId, quantity: action.quantity },
        ],
      };
    }
    case "update":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.productId === action.productId
              ? { ...item, quantity: action.quantity }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "remove":
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.productId),
      };
    case "applyCoupon":
      return {
        ...state,
        couponCode: action.code,
        discountRate: action.discountRate,
      };
    case "clearCoupon":
      return {
        ...state,
        couponCode: "",
        discountRate: 0,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function getDiscountRate(code: string) {
  const normalized = code.trim().toUpperCase();

  if (normalized === "MEDI10") {
    return 0.1;
  }

  if (normalized === "FREESHIP") {
    return 0.05;
  }

  return 0;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);

      if (raw) {
        const parsed = JSON.parse(raw) as CartState;
        dispatch({ type: "hydrate", payload: parsed });
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [isHydrated, state]);

  const addItem = useCallback(
    (productId: string, quantity = 1) => {
      const product = getProductById(productId);
      dispatch({ type: "add", productId, quantity });
      if (product) {
        toast.success("Đã thêm vào giỏ", { description: product.name });
      }
    },
    [],
  );

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({
      type: "update",
      productId,
      quantity: Math.max(0, Math.min(quantity, 20)),
    });
  }, []);

  const removeItem = useCallback(
    (productId: string) => {
      const product = getProductById(productId);
      dispatch({ type: "remove", productId });
      if (product) {
        toast("Đã xoá khỏi giỏ", { description: product.name });
      }
    },
    [],
  );

  const applyCoupon = useCallback(
    (code: string) => {
      const discountRate = getDiscountRate(code);
      if (!discountRate) {
        dispatch({ type: "clearCoupon" });
        return {
          ok: false,
          message: "Mã giảm giá không hợp lệ. Hãy thử MEDI10 hoặc FREESHIP.",
        };
      }

      dispatch({
        type: "applyCoupon",
        code: code.trim().toUpperCase(),
        discountRate,
      });
      toast.success("Áp mã thành công", { description: code.trim().toUpperCase() });
      return { ok: true, message: "Mã giảm giá đã được áp dụng." };
    },
    [],
  );

  const clearCoupon = useCallback(() => {
    dispatch({ type: "clearCoupon" });
  }, []);

  const resetCart = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const summary = useMemo(() => {
    const subtotal = state.items.reduce((sum, item) => {
      const product = getProductById(item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    const discountAmount = Math.round(subtotal * state.discountRate);
    const shippingFee = subtotal >= 1500000 || subtotal === 0 ? 0 : 30000;
    const total = Math.max(subtotal - discountAmount + shippingFee, 0);
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

    return {
      subtotal,
      discountAmount,
      shippingFee,
      total,
      itemCount,
    };
  }, [state.discountRate, state.items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      couponCode: state.couponCode,
      discountRate: state.discountRate,
      isHydrated,
      addItem,
      updateQuantity,
      removeItem,
      applyCoupon,
      clearCoupon,
      resetCart,
      ...summary,
    }),
    [
      addItem,
      applyCoupon,
      clearCoupon,
      isHydrated,
      removeItem,
      resetCart,
      state.couponCode,
      state.discountRate,
      state.items,
      summary,
      updateQuantity,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
