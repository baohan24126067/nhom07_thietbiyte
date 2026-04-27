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
      <img
        src={withBasePath(product.imagePath)}
        alt={product.imageAlt}
        className="h-full w-full object-contain p-1"
        loading="lazy"
      />
    </div>
  );
}
