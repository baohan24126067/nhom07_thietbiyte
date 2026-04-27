import Image from "next/image";
import type { Product } from "@/lib/products";
import { withBasePath } from "@/lib/site";

export function ProductIllustration({
  product,
  className = "h-44 w-full max-w-[220px]",
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={withBasePath(product.imagePath)}
        alt={product.imageAlt}
        fill
        className="object-contain p-1"
        sizes="(max-width: 768px) 180px, 260px"
      />
    </div>
  );
}
