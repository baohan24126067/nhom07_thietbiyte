import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductCard } from "@/components/product-card";
import { ProductIllustration } from "@/components/product-illustration";
import { formatCurrency } from "@/lib/currency";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
        <Link href="/" className="transition hover:text-[var(--color-brand)]">
          Trang chủ
        </Link>
        <span>/</span>
        <Link href="/products" className="transition hover:text-[var(--color-brand)]">
          Danh sách sản phẩm
        </Link>
        <span>/</span>
        <span className="font-semibold text-[var(--color-ink)]">{product.name}</span>
      </div>

      <section className="grid gap-6 rounded-[32px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] lg:grid-cols-[0.9fr_1.1fr] sm:p-8 motion-safe motion-rise">
        <div className="rounded-[28px] bg-[linear-gradient(180deg,#fefefe,#edf5fc)] p-8">
          <div className="flex aspect-square items-center justify-center rounded-[24px] bg-white shadow-[0_12px_30px_rgba(17,57,95,0.06)]">
            <ProductIllustration product={product} className="h-64 w-56" />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            {product.category}
          </p>
          <h1 className="mt-3 font-display text-[40px] font-extrabold leading-none text-[var(--color-ink)]">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
            <span>{product.rating.toFixed(1)} / 5</span>
            <span>•</span>
            <span>{product.reviewCount} đánh giá</span>
            <span>•</span>
            <span>Còn hàng</span>
          </div>
          <p className="mt-6 text-base leading-7 text-[var(--color-muted)]">
            {product.description}
          </p>

          <div className="mt-6 rounded-[28px] bg-[var(--color-brand-soft)] p-5">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  Giá bán
                </p>
                <p className="mt-2 font-display text-[42px] font-extrabold leading-none text-[var(--color-ink)]">
                  {formatCurrency(product.price)}
                </p>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  ĐVT: {product.unit}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <AddToCartButton
                  productId={product.id}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
                />
                <Link
                  href="/checkout"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
                >
                  Thanh toán ngay
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${encodeURIComponent(tag)}`}
                className="rounded-full border border-[var(--color-line)] bg-white px-3 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[28px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] motion-safe motion-rise">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
            Thông số kỹ thuật
          </p>
          <div className="mt-5 space-y-3">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between gap-4 rounded-[20px] bg-[var(--color-brand-soft)] px-4 py-3 text-sm"
              >
                <span className="font-semibold text-[var(--color-muted)]">{spec.label}</span>
                <span className="text-right font-bold text-[var(--color-ink)]">{spec.value}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[28px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] motion-safe motion-rise">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
            Lợi ích nổi bật
          </p>
          <div className="mt-5 grid gap-3">
            {[
              "Thiết kế phù hợp sử dụng tại nhà, thao tác đơn giản.",
              "Dễ kết hợp với quy trình chăm sóc sức khỏe gia đình.",
              "Thông tin sản phẩm rõ ràng, hỗ trợ ra quyết định nhanh.",
              "Có thể thêm vào giỏ và thanh toán trực tiếp ngay trên website.",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-[20px] border border-[var(--color-line)] px-4 py-4 text-sm leading-6 text-[var(--color-ink)]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </article>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="mt-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Related products
              </p>
              <h2 className="mt-2 font-display text-[32px] font-extrabold leading-none text-[var(--color-ink)]">
                Sản phẩm liên quan
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-[var(--color-brand-deep)] transition hover:text-[var(--color-brand)]"
            >
              Xem toàn bộ danh mục
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((related, index) => (
              <div
                key={related.id}
                className="motion-safe motion-rise"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <ProductCard product={related} compact />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
