"use client";

import { useState } from "react";

export type ProductDetailTab = {
  title: string;
  body: string;
};

export function ProductDetailTabs({ items }: { items: ProductDetailTab[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <section className="mt-6 grid gap-5 lg:grid-cols-[0.35fr_0.65fr]">
      <aside className="rounded-[8px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
          Nội dung chi tiết
        </p>
        <div className="mt-4 space-y-2">
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                className={`w-full rounded-[8px] border px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)] text-[var(--color-brand-deep)] shadow-[0_10px_30px_rgba(33,150,243,0.12)]"
                    : "border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)]"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </aside>

      <article className="rounded-[8px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
          {activeItem.title}
        </p>
        <h2 className="mt-3 font-display text-[30px] font-extrabold leading-none text-[var(--color-ink)]">
          {activeItem.title}
        </h2>
        <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
          {activeItem.body}
        </p>
      </article>
    </section>
  );
}
