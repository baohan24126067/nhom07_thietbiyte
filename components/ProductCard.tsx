"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface LocalProduct {
  id: number | string;
  name: string;
  price: number;
  unit?: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: LocalProduct;
  onAddToCart?: (product: LocalProduct) => void;
}

export function formatPrice(price: number): string {
  return price.toLocaleString("vi-VN") + "đ";
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl overflow-hidden flex flex-col p-4 shadow-sm hover:shadow-md transition-shadow duration-300 group"
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square bg-transparent flex items-center justify-center mb-4 overflow-hidden">
        <motion.div
          className="relative w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4 flex-1">
        {/* Name */}
        <h3 className="text-black text-[18px] leading-[1.3] font-normal line-clamp-3">
          {product.name}
        </h3>

        {/* Price Tag */}
        <div className="flex">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#007BFF]">
            <span className="text-white text-[18px] font-semibold">
              {formatPrice(product.price)}/ {product.unit || "Sản phẩm"}
            </span>
          </div>
        </div>

        {/* Unit Text */}
        <div className="text-black text-[18px] font-normal">
          ĐVT: {product.unit || "Sản phẩm"}
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="pt-4 mt-auto">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => onAddToCart?.(product)}
          className="w-full py-3.5 rounded-xl bg-[#0EA5E9] text-white text-[18px] font-medium flex items-center justify-center hover:bg-[#0284c7] transition-colors"
        >
          Thêm vào giỏ hàng
        </motion.button>
      </div>
    </motion.div>
  );
}
