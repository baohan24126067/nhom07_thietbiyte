import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductDetailTabs } from "@/components/product-detail-tabs";
import { ProductGallery } from "@/components/product-gallery";
import { ProductCard } from "@/components/product-card";
import { formatCurrency } from "@/lib/currency";
import {
  getProductBySlug,
  getProductDetailContent,
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

  const detail = getProductDetailContent(product.id);
  const relatedProducts = getRelatedProducts(product.id);
  const gallery = detail?.gallery.length ? detail.gallery : [product.imagePath];
  const detailItems = [
    { title: "Mô tả", body: detail?.description ?? product.description },
    { title: "Công dụng", body: detail?.uses ?? product.description },
    {
      title: "Cách dùng",
      body: detail?.usage ?? "Đọc kỹ hướng dẫn sử dụng trước khi dùng.",
    },
    {
      title: "Lưu ý",
      body: detail?.cautions ?? "Kiểm tra tình trạng sản phẩm trước khi dùng.",
    },
    {
      title: "Bảo quản",
      body: detail?.storage ?? "Bảo quản nơi khô ráo, thoáng mát.",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
        <Link href="/" className="font-semibold transition hover:text-[var(--color-brand)]">
          Trang chủ
        </Link>
        <span>/</span>
        <Link
          href="/products"
          className="font-semibold transition hover:text-[var(--color-brand)]"
        >
          Sản phẩm
        </Link>
        <span>/</span>
        <span className="font-semibold text-[var(--color-ink)]">{product.name}</span>
      </div>

      <section className="grid gap-6 rounded-[8px] border border-[var(--color-line)] bg-[var(--color-card)] p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)] lg:grid-cols-[0.9fr_1.1fr] sm:p-8">
        <ProductGallery images={gallery} alt={product.imageAlt} />

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            {product.category}
          </p>
          <h1 className="mt-3 font-display text-[40px] font-extrabold leading-none text-[var(--color-ink)]">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
            <span>{product.rating.toFixed(1)} / 5</span>
            <span>{product.reviewCount} đánh giá</span>
            <span>Còn hàng</span>
          </div>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            {detail?.description ?? product.description}
          </p>

          <div className="mt-6 rounded-[8px] bg-[var(--color-brand-soft)] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Giá bán
            </p>
            <p className="mt-2 font-display text-[42px] font-extrabold leading-none text-[var(--color-ink)]">
              {formatCurrency(product.price)}
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">ĐVT: {product.unit}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <AddToCartButton
                productId={product.id}
                className="inline-flex items-center justify-center rounded-[8px] bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
              />
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-[8px] border border-[var(--color-line)] bg-[var(--color-card)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
              >
                Thanh toán ngay
              </Link>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {(detail?.summary ?? product.specs.map((spec) => spec.value)).map((item) => (
              <li
                key={item}
                className="rounded-[8px] border border-[var(--color-line)] bg-[var(--color-card)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProductDetailTabs items={detailItems} />

      {relatedProducts.length > 0 ? (
        <section className="mt-8">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
              Related products
            </p>
            <h2 className="mt-2 font-display text-[32px] font-extrabold leading-none text-[var(--color-ink)]">
              Sản phẩm liên quan
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} compact />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
