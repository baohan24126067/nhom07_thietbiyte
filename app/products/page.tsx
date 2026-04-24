import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const visibleProducts = products.slice(0, 9);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-[6px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#ffffff,#eaf5ff)] p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8 motion-safe motion-rise">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          Product catalog
        </p>
        <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-[38px] font-extrabold leading-[0.98] text-[var(--color-ink)]">
              Danh sách thiết bị y tế
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              Giao diện được giữ theo nhịp đơn giản, rõ ràng và ưu tiên hình ảnh
              sản phẩm để bám sát bố cục catalog trong Figma.
            </p>
          </div>
          <div className="rounded-full bg-white px-5 py-4 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_rgba(17,57,95,0.06)]">
            <strong className="text-[var(--color-ink)]">{visibleProducts.length}</strong> sản phẩm
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product, index) => (
          <div
            key={product.id}
            className="motion-safe motion-rise"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </section>
    </div>
  );
}
