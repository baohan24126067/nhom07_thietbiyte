"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import catalogProducts from "@/lib/catalog-products.json";
import { products } from "@/lib/products";

const ITEMS_PER_PAGE = 6;

const priceRanges = [
  { value: "all", label: "Tất cả giá", min: 0, max: Number.POSITIVE_INFINITY },
  { value: "under100", label: "Dưới 100.000đ", min: 0, max: 100000 },
  { value: "100to500", label: "100.000đ - 500.000đ", min: 100000, max: 500000 },
  { value: "500to1m", label: "500.000đ - 1.000.000đ", min: 500000, max: 1000000 },
  { value: "over1m", label: "Trên 1.000.000đ", min: 1000000, max: Number.POSITIVE_INFINITY },
] as const;

type PriceRangeValue = (typeof priceRanges)[number]["value"];
type SortValue = "default" | "asc" | "desc";

export default function ProductsPage() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState<PriceRangeValue>("all");
  const [priceSort, setPriceSort] = useState<SortValue>("default");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => Array.from(new Set(catalogProducts.map((product) => product.category))),
    [],
  );

  const processedProducts = useMemo(() => {
    const selectedRange =
      priceRanges.find((range) => range.value === priceFilter) ?? priceRanges[0];
    const allowedIds = new Set(
      catalogProducts
        .filter((product) => {
          const matchesCategory =
            categoryFilter === "all" || product.category === categoryFilter;
          const matchesPrice =
            product.price >= selectedRange.min && product.price <= selectedRange.max;
          return matchesCategory && matchesPrice;
        })
        .map((product) => product.id),
    );

    const result = products.filter((product) => allowedIds.has(product.id));

    if (priceSort === "asc") {
      return [...result].sort((a, b) => a.price - b.price);
    }

    if (priceSort === "desc") {
      return [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [categoryFilter, priceFilter, priceSort]);

  const totalPages = Math.max(1, Math.ceil(processedProducts.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedProducts = processedProducts.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE,
  );

  const resetFilters = () => {
    setCategoryFilter("all");
    setPriceFilter("all");
    setPriceSort("default");
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
    setCurrentPage(1);
  };

  const handlePriceChange = (value: PriceRangeValue) => {
    setPriceFilter(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: SortValue) => {
    setPriceSort(value);
    setCurrentPage(1);
  };

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
              Danh mục sản phẩm hỗ trợ lọc theo loại, khoảng giá, sắp xếp giá và
              phân trang để người dùng so sánh thiết bị nhanh hơn.
            </p>
          </div>
          <div className="rounded-[8px] bg-white px-5 py-4 text-sm text-[var(--color-muted)] shadow-[0_12px_30px_rgba(17,57,95,0.06)]">
            <strong className="text-[var(--color-ink)]">{processedProducts.length}</strong>{" "}
            sản phẩm phù hợp
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[8px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
              Danh mục
            </span>
            <select
              value={categoryFilter}
              onChange={(event) => handleCategoryChange(event.target.value)}
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

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
              Khoảng giá
            </span>
            <select
              value={priceFilter}
              onChange={(event) => handlePriceChange(event.target.value as PriceRangeValue)}
              className="w-full rounded-[8px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)]"
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
              Sắp xếp
            </span>
            <select
              value={priceSort}
              onChange={(event) => handleSortChange(event.target.value as SortValue)}
              className="w-full rounded-[8px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)]"
            >
              <option value="default">Mặc định</option>
              <option value="asc">Giá: thấp đến cao</option>
              <option value="desc">Giá: cao đến thấp</option>
            </select>
          </label>

          <button
            type="button"
            onClick={resetFilters}
            className="self-end rounded-[8px] border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
          >
            Đặt lại
          </button>
        </div>
      </section>

      {paginatedProducts.length > 0 ? (
        <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {paginatedProducts.map((product, index) => (
            <div
              key={product.id}
              className="motion-safe motion-rise"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </section>
      ) : (
        <section className="mt-6 rounded-[8px] border border-[var(--color-line)] bg-white p-10 text-center shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
          <h2 className="font-display text-[30px] font-extrabold leading-none text-[var(--color-ink)]">
            Không tìm thấy sản phẩm phù hợp
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Hãy thử đổi danh mục, khoảng giá hoặc đặt lại bộ lọc.
          </p>
        </section>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          disabled={safeCurrentPage === 1}
          className="rounded-[8px] border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Trước
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            className={`h-10 w-10 rounded-[8px] text-sm font-bold transition ${
              safeCurrentPage === page
                ? "bg-[var(--color-brand)] text-white"
                : "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)]"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
          disabled={safeCurrentPage === totalPages}
          className="rounded-[8px] border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Sau
        </button>
      </div>
    </div>
  );
}
