"use client";

import { toast } from "sonner";
import { useCart } from "@/components/cart-provider";

type AddToCartButtonProps = {
  productId: string;
  className?: string;
  label?: string;
};

export function AddToCartButton({
  productId,
  className,
  label = "Thêm vào giỏ hàng",
}: AddToCartButtonProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(productId);
    toast.success("Đã thêm vào giỏ hàng thành công!");
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className={
        className ??
        "inline-flex items-center justify-center rounded-[6px] bg-[var(--color-brand)] px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-[var(--color-brand-deep)]"
      }
    >
      {label}
    </button>
  );
}
