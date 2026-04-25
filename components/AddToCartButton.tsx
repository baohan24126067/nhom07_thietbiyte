"use client";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

type Props = {
  quantity?: number;
};

export default function AddToCartButton({ quantity = 1 }: Props) {
  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Hiển thị thông báo thành công
    toast.success(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`, {
      duration: 2500,
      position: "top-right",
      style: {
        borderRadius: '12px',
        background: '#333',
        color: '#fff',
        fontWeight: '600',
        padding: '12px 20px',
      },
      icon: '✅',
    });
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full bg-[#007BFF] hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-bold uppercase text-[12px] tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 shadow-md shadow-blue-100"
    >
      <ShoppingCart size={16} strokeWidth={3} />
      <span>Thêm vào giỏ hàng</span>
    </button>
  );
}
