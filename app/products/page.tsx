import { ProductCard } from "@/components/product-card";
import catalogProducts from "@/lib/catalog-products.json";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const visibleProducts = products.filter((product) =>
    catalogProducts.some((catalogProduct) => catalogProduct.id === product.id),
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-[8px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#ffffff,#eaf5ff)] p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8 motion-safe motion-rise">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          Product catalog
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-[38px] font-extrabold leading-none text-[var(--color-ink)]">
              Danh sách thiết bị y tế
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              Danh mục sản phẩm giúp người dùng so sánh thiết bị y tế nhanh hơn.
            </p>
          </div>
          <div className="rounded-[8px] bg-white px-5 py-4 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_rgba(17,57,95,0.06)]">
            <strong className="text-[var(--color-ink)]">{visibleProducts.length}</strong>{" "}
            sản phẩm
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
