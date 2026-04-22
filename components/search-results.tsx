"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { searchProducts } from "@/lib/search";

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = searchProducts(query);

  return (
    <>
      <section className="rounded-[32px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          Product search
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-[36px] font-extrabold leading-none text-[var(--color-ink)]">
              {query ? `Kết quả cho “${query}”` : "Tra cứu thiết bị y tế"}
            </h1>
            <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
              {query
                ? `Tìm thấy ${results.length} sản phẩm phù hợp với từ khóa bạn nhập.`
                : "Nhập tên thiết bị, danh mục hoặc mô tả để lọc nhanh danh mục sản phẩm."}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
            >
              Về trang chủ
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
            >
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      </section>

      {results.length === 0 ? (
        <section className="mt-6 rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff,#eef7ff)] p-10 text-center shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-[var(--color-brand)]">
            ⌕
          </div>
          <h2 className="mt-5 font-display text-[30px] font-extrabold leading-none text-[var(--color-ink)]">
            Không có kết quả phù hợp
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Thử tìm bằng tên danh mục như “máy đo huyết áp”, “nhiệt kế” hoặc
            “tiểu đường” để có kết quả chính xác hơn.
          </p>
        </section>
      ) : (
        <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  );
}
