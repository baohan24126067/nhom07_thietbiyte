 "use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import catalogProducts from "@/lib/catalog-products.json";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = useMemo(
    () => Array.from(new Set(catalogProducts.map((product) => product.category))),
    [],
  );

  const visibleProducts = useMemo(() => {
    const allowedIds = new Set(
      catalogProducts
        .filter(
          (product) => categoryFilter === "all" || product.category === categoryFilter,
        )
        .map((product) => product.id),
    );

    return products.filter((product) => allowedIds.has(product.id));
  }, [categoryFilter]);

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

      <section className="mt-6 rounded-[8px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
            Danh mục
          </span>
          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="w-full rounded-[8px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)]"
          >
            <option value="all">Tất cả danh mục</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
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
