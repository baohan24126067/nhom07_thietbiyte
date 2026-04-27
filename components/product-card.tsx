import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductIllustration } from "@/components/product-illustration";
import { formatCurrency } from "@/lib/currency";
import type { Product } from "@/lib/products";

export function ProductCard({
  product,
  compact = false,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <article className="rounded-[6px] border border-[var(--color-line)] bg-white p-4 shadow-[0_1px_0_rgba(255,255,255,0.65)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(17,57,95,0.10)] motion-safe">
      <Link
        href={`/products/${product.slug}`}
        className="flex aspect-[1/0.82] items-center justify-center rounded-[4px] bg-[linear-gradient(180deg,#fefefe,#edf5fc)] p-5"
      >
        <ProductIllustration
          product={product}
          className={compact ? "h-28 w-24" : "h-40 w-36"}
        />
      </Link>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
        {product.category}
      </p>
      <Link
        href={`/products/${product.slug}`}
        className="mt-2 block min-h-14 text-[18px] font-bold text-[var(--color-ink)] transition hover:text-[var(--color-brand-deep)]"
      >
        {product.name}
      </Link>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
        {product.shortDescription}
      </p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-extrabold text-[var(--color-ink)]">
            {formatCurrency(product.price)}
          </p>
          <p className="text-sm text-[var(--color-muted)]">ĐVT: {product.unit}</p>
        </div>
        <div className="text-right text-sm text-[var(--color-muted)]">
          <p>{product.rating.toFixed(1)} / 5</p>
          <p>{product.reviewCount} đánh giá</p>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <AddToCartButton
          productId={product.id}
          className="inline-flex items-center justify-center rounded-[6px] bg-[var(--color-brand)] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
        />
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-semibold text-[var(--color-brand-deep)] transition hover:text-[var(--color-brand)]"
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  );
}
