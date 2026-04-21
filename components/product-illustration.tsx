import Image from "next/image";
import type { Product } from "@/lib/products";

export function ProductIllustration({
  product,
  className = "h-28 w-24",
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={product.imagePath}
        alt={product.imageAlt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 160px, 220px"
      />
    </div>
  );
}
