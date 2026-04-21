import { Suspense } from "react";
import { SearchResults } from "@/components/search-results";

export default function SearchPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <Suspense fallback={<SearchFallback />}>
        <SearchResults />
      </Suspense>
    </div>
  );
}

function SearchFallback() {
  return (
    <section className="rounded-[32px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
        Product search
      </p>
      <div className="mt-3">
        <h1 className="font-display text-[36px] font-extrabold leading-none text-[var(--color-ink)]">
          Đang tải kết quả tìm kiếm
        </h1>
        <div className="mt-6 h-40 animate-pulse rounded-[24px] bg-[var(--color-brand-soft)]" />
      </div>
    </section>
  );
}
