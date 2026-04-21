import Link from "next/link";

const navItems = [
  { href: "/", label: "Home", glyph: "⌂", available: true },
  { href: "#", label: "Products", glyph: "◫", available: false },
  { href: "#", label: "About", glyph: "ⓘ", available: false },
  { href: "#", label: "Contact", glyph: "✉", available: false },
  { href: "/faq", label: "FAQ", glyph: "?", available: true },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-line)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--color-brand)] text-xs font-extrabold text-white">
            M
          </span>
          <span className="space-y-0">
            <span className="block font-display text-sm font-extrabold tracking-tight text-[var(--color-ink)]">
              MEDICARE
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Medical Equipment
            </span>
          </span>
        </Link>

        <nav className="hidden items-end gap-6 md:flex">
          {navItems.map((item) =>
            item.available ? (
              <Link
                key={item.label}
                href={item.href}
                className="flex min-w-14 flex-col items-center gap-1 text-[11px] font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-brand-deep)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-line)] text-[12px]">
                  {item.glyph}
                </span>
                {item.label}
              </Link>
            ) : (
              <span
                key={item.label}
                className="flex min-w-14 flex-col items-center gap-1 text-[11px] font-semibold text-[var(--color-muted)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-line)] text-[12px]">
                  {item.glyph}
                </span>
                {item.label}
              </span>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-3 py-1.5 lg:flex">
            <span className="text-xs text-[var(--color-ink)]">Cart</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#e53935] px-1 text-[10px] font-bold text-white">
              2
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-ink)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-line)]">
              ○
            </span>
            <span className="hidden sm:inline">Login</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <p className="hidden text-[11px] text-[var(--color-muted)] md:block">
            Trang chủ &gt; Thiết bị y tế &gt; Máy đo huyết áp
          </p>
          <div className="md:ml-auto md:w-[20rem]">
            <div className="flex items-center rounded-full border border-[var(--color-line)] bg-white px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <input
                aria-label="Tìm kiếm sản phẩm"
                className="w-full border-0 bg-transparent text-xs text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)]"
                placeholder="Tìm kiếm sản phẩm"
                readOnly
              />
              <span className="text-[12px] text-[var(--color-muted)]">⌕</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
