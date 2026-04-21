"use client";

import { FormEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SiteSearchForm() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextQuery = query.trim();

    if (!nextQuery) {
      router.push("/search");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(nextQuery)}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center rounded-full border border-[var(--color-line)] bg-white px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
    >
      <input
        aria-label="Tìm kiếm sản phẩm"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-full border-0 bg-transparent text-xs text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)]"
        placeholder={
          pathname === "/search" ? "Tìm trong danh mục thiết bị y tế" : "Tìm kiếm sản phẩm"
        }
      />
      <button
        type="submit"
        className="text-[12px] text-[var(--color-muted)] transition hover:text-[var(--color-brand)]"
        aria-label="Mở tìm kiếm"
      >
        ⌕
      </button>
    </form>
  );
}
