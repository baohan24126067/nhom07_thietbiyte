"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/cart-provider";
import { SiteSearchForm } from "@/components/site-search-form";

const navItems = [
  { href: "/", label: "Home", glyph: "🏠" },
  { href: "/search", label: "Products", glyph: "📦" },
  { href: "/about", label: "About", glyph: "ℹ️" },
  { href: "/contact", label: "Contact", glyph: "📞" },
];

export function SiteHeader() {
  const { itemCount, isHydrated } = useCart();
  const pathname = usePathname();
  const breadcrumbLabel = getBreadcrumbLabel(pathname);

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--color-line)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1e88e5] text-xl font-black text-white">
            M
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-[#334155]">
            MEDISHOP
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-[12px] font-bold transition-all ${
                pathname === item.href
                  ? "text-[#1e88e5]"
                  : "text-[#64748b] hover:text-[#1e88e5]"
              }`}
            >
              <span className="text-[18px]">{item.glyph}</span>
              <span className="uppercase tracking-wide">{item.label}</span>
            </Link>
          ))}
          <Link
            href="/cart"
            className={`relative flex flex-col items-center gap-1 text-[12px] font-bold transition-all ${
              pathname === "/cart"
                ? "text-[#1e88e5]"
                : "text-[#64748b] hover:text-[#1e88e5]"
            }`}
          >
            <div className="relative">
              <span className="text-[18px]">🛒</span>
              {isHydrated && itemCount > 0 && (
                <span className="absolute -right-2.5 -top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white shadow-sm ring-2 ring-white">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="uppercase tracking-wide">Cart</span>
          </Link>
        </nav>

        <Link
          href="/login"
          className="flex items-center gap-2 text-[12px] font-bold text-[#64748b] transition hover:text-[#1e88e5]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#e2e8f0] text-[14px]">
            👤
          </span>
          <span className="uppercase tracking-wide">Login</span>
        </Link>
      </div>

      <div className="bg-[#f0f7ff] border-t border-[#e2e8f0] py-2">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <p className="hidden text-[11px] font-medium text-[#94a3b8] md:block">
            {breadcrumbLabel}
          </p>
          <div className="w-full md:ml-auto md:w-[28rem]">
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
  const p = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  if (p === "/cart") return "Trang chủ > Giỏ hàng > Kiểm tra đơn";
  if (p === "/checkout") return "Trang chủ > Giỏ hàng > Thanh toán";
  if (p === "/search") return "Trang chủ > Tìm kiếm > Kết quả sản phẩm";
  if (p === "/products") return "Trang chủ > Sản phẩm > Danh sách thiết bị y tế";
  if (p === "/about") return "Trang chủ > Về chúng tôi > Thành viên nhóm";
  if (p === "/contact") return "Trang chủ > Hỗ trợ khách hàng > Liên hệ";
  return "Trang chủ > Thiết bị y tế > Máy đo huyết áp";
}

function SearchFallback() {
  return (
    <div className="flex items-center rounded-full border border-[#e2e8f0] bg-white px-4 py-1.5">
      <div className="w-full text-xs text-[#94a3b8]">Tìm kiếm sản phẩm</div>
    </div>
  );
}
