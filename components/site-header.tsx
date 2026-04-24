"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { SiteSearchForm } from "@/components/site-search-form";

const navItems = [
  { href: "/", label: "Home", glyph: "⌂", available: true },
  { href: "/search", label: "Products", glyph: "◫", available: true },
  { href: "/about", label: "About", glyph: "ⓘ", available: true },
  { href: "/contact", label: "Contact", glyph: "✉", available: true },
  { href: "/cart", label: "Cart", glyph: "🛒", available: true },
  { href: "/faq", label: "FAQ", glyph: "?", available: true },
];

export function SiteHeader() {
  const { itemCount, isHydrated } = useCart();
  const pathname = usePathname();
  const breadcrumbLabel = getBreadcrumbLabel(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-site-menu"
          aria-label={isMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink)] transition hover:border-[var(--color-brand)] md:hidden"
        >
          <span className="flex flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav className="hidden items-end gap-6 md:flex">
          {navItems.map((item) =>
            item.available ? (
              <Link
                key={item.label}
                href={item.href}
                className={`flex min-w-14 flex-col items-center gap-1 text-[11px] font-semibold transition ${
                  pathname === item.href
                    ? "text-[var(--color-brand)]"
                    : "text-[var(--color-ink)] hover:text-[var(--color-brand-deep)]"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-[12px] ${
                    pathname === item.href
                      ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)]"
                      : "border-[var(--color-line)]"
                  }`}
                >
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
          <Link
            href="/cart"
            className="hidden items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-3 py-1.5 transition hover:border-[var(--color-brand)] lg:flex"
          >
            <span className="text-xs text-[var(--color-ink)]">Cart</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#e53935] px-1 text-[10px] font-bold text-white">
              {isHydrated ? itemCount : 0}
            </span>
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 text-xs font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-brand-deep)]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-line)]">
              ○
            </span>
            <span className="hidden sm:inline">Login</span>
          </Link>
        </div>
      </div>

      {isMenuOpen ? (
        <div
          id="mobile-site-menu"
          className="border-t border-[var(--color-line)] bg-white md:hidden"
        >
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between rounded-[18px] border px-4 py-3 text-sm font-semibold transition ${
                  pathname === item.href
                    ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)] text-[var(--color-brand-deep)]"
                    : "border-[var(--color-line)] text-[var(--color-ink)]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] text-[13px]">
                    {item.glyph}
                  </span>
                  {item.label}
                </span>
                {item.href === "/cart" ? (
                  <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#e53935] px-1 text-[10px] font-bold text-white">
                    {isHydrated ? itemCount : 0}
                  </span>
                ) : (
                  <span className="text-xs text-[var(--color-muted)]">Open</span>
                )}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-4 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
            >
              Đăng nhập tài khoản
            </Link>
          </nav>
        </div>
      ) : null}

      <div className="border-t border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          <p className="hidden text-[11px] text-[var(--color-muted)] md:block">
            {breadcrumbLabel}
          </p>
          <div className="md:ml-auto md:w-[20rem]">
            <Suspense fallback={<SearchFallback />}>
              <SiteSearchForm />
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}

function getBreadcrumbLabel(pathname: string) {
  if (pathname === "/cart") {
    return "Trang chủ > Giỏ hàng > Kiểm tra đơn";
  }

  if (pathname === "/checkout") {
    return "Trang chủ > Giỏ hàng > Thanh toán";
  }

  if (pathname === "/faq") {
    return "Trang chủ > Hỗ trợ khách hàng > Câu hỏi thường gặp";
  }

  if (pathname === "/login") {
    return "Trang chủ > Tài khoản > Đăng nhập";
  }

  if (pathname === "/register") {
    return "Trang chủ > Tài khoản > Đăng ký";
  }

  if (pathname === "/search") {
    return "Trang chủ > Tìm kiếm > Kết quả sản phẩm";
  }

  if (pathname === "/products") {
    return "Trang chủ > Sản phẩm > Chờ bạn Thanh Ngân thực hiện";
  }

  if (pathname.startsWith("/products/")) {
    return "Trang chủ > Sản phẩm > Chờ bạn Bích Sơn thực hiện";
  }

  if (pathname === "/about") {
    return "Trang chủ > Về chúng tôi > Thành viên nhóm";
  }

  if (pathname === "/contact") {
    return "Trang chủ > Hỗ trợ khách hàng > Liên hệ";
  }

  return "Trang chủ > Thiết bị y tế > Máy đo huyết áp";
}

function SearchFallback() {
  return (
    <div className="flex items-center rounded-full border border-[var(--color-line)] bg-white px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
      <div className="w-full text-xs text-[var(--color-muted)]">Tìm kiếm sản phẩm</div>
      <span className="text-[12px] text-[var(--color-muted)]">⌕</span>
    </div>
  );
}
