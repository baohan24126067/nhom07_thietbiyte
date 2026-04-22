import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map((product) => product.category)));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#ffffff,#eaf5ff)] p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8 motion-safe motion-rise">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          Product catalog
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-[38px] font-extrabold leading-none text-[var(--color-ink)]">
              Danh sách thiết bị y tế
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              Danh mục sản phẩm được sắp theo nhóm nhu cầu sử dụng tại nhà, giúp
              người dùng dễ so sánh, tìm kiếm và chọn nhanh thiết bị phù hợp.
            </p>
          </div>
          <div className="rounded-[24px] bg-white px-5 py-4 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_rgba(17,57,95,0.06)]">
            <strong className="text-[var(--color-ink)]">{products.length}</strong> sản phẩm
          </div>
        </div>
      </section>

      <section className="mt-6 flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <span
            key={category}
            className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-ink)] motion-safe motion-rise"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {category}
          </span>
        ))}
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
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
