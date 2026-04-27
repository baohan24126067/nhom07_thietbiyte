"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { useCart } from "@/components/cart-provider";
import { formatCurrency } from "@/lib/currency";
import { products } from "@/lib/products";

const PRICE_RANGES = [
  { label: "Tất cả giá", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "Dưới 100k", min: 0, max: 100000 },
  { label: "100k - 500k", min: 100000, max: 500000 },
  { label: "500k - 1tr", min: 500000, max: 1000000 },
  { label: "Trên 1tr", min: 1000000, max: Number.POSITIVE_INFINITY },
] as const;

const SORT_OPTIONS = [
  { label: "Mặc định", value: "default" },
  { label: "Giá: Thấp đến Cao", value: "price-asc" },
  { label: "Giá: Cao đến Thấp", value: "price-desc" },
  { label: "Đánh giá cao nhất", value: "rating-desc" },
] as const;

const ITEMS_PER_PAGE = 6;
type PriceRange = (typeof PRICE_RANGES)[number];
type SortOption = (typeof SORT_OPTIONS)[number];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>(
    PRICE_RANGES[0],
  );
  const [selectedSort, setSelectedSort] = useState<SortOption>(SORT_OPTIONS[0]);
  const { addItem, applyCoupon } = useCart();

  const categories = useMemo(
    () => ["Tất cả", ...Array.from(new Set(products.map((product) => product.category)))],
    [],
  );

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "Tất cả") {
      result = result.filter((product) => product.category === selectedCategory);
    }

    result = result.filter(
      (product) =>
        product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max,
    );

    if (selectedSort.value === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (selectedSort.value === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    if (selectedSort.value === "rating-desc") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedSort]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const visibleProducts = filteredAndSortedProducts.slice(
    (safeCurrentPage - 1) * ITEMS_PER_PAGE,
    safeCurrentPage * ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 760, behavior: "smooth" });
  };

  const handleAddCombo = () => {
    ["yuwell-ye610d", "accu-chek-instant", "infrared-nc1", "omron-hvf013"].forEach(
      (id) => addItem(id, 1),
    );
    applyCoupon("MEDI10");
  };

  return (
    <div className="bg-background pb-20 transition-colors duration-300">
      <section className="w-full">
        <div className="relative w-full overflow-hidden bg-surface transition-colors">
          <div className="relative min-h-[400px] w-full">
            <div className="absolute inset-0 z-0 opacity-30 sm:opacity-100">
              <Image
                src="/assets/images/hero.jpg"
                alt="Gia đình chăm sóc sức khỏe cùng MediCare"
                fill
                className="object-contain object-right"
                priority
              />
            </div>

            <div className="relative z-10 flex min-h-[360px] flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
              <div className="max-w-2xl space-y-6">
                <h1 className="font-display text-[28px] font-extrabold leading-[1.2] tracking-tight text-foreground sm:text-[36px] md:text-[54px]">
                  Mua sắm <span className="text-brand">AN TÂM</span>
                  <br className="hidden sm:block" />{" "}
                  <span className="text-brand">SỐNG KHỎE</span> mỗi ngày
                </h1>
                <p className="max-w-md text-[14px] font-medium leading-relaxed text-muted sm:text-[16px]">
                  MediShop đồng hành cùng gia đình bạn trên hành trình chăm sóc
                  sức khỏe mỗi ngày.
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-[10px] bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-deep active:scale-95 sm:px-10 sm:py-3.5 sm:text-base"
                >
                  Khám phá ngay
                </Link>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent sm:via-background/60" />
          </div>
        </div>
      </section>

      <section className="mt-12 w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-display text-2xl font-black tracking-tight text-foreground sm:text-3xl">
              Combo <span className="text-brand">sức khỏe gia đình</span>
            </h2>
            <p className="text-sm font-medium text-muted">
              Lợi ích vượt trội khi mua trọn bộ thiết bị chăm sóc sức khỏe.
            </p>
          </div>
          <Link href="/products" className="group flex items-center gap-2 text-sm font-bold text-brand">
            Xem danh mục <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <div className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[20px] bg-[#1e293b] p-6 text-white lg:col-span-7">
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                    Best Seller
                  </span>
                  <div className="flex items-center gap-2 text-xs font-bold text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    Tự động áp mã MEDI10
                  </div>
                </div>
                <h3 className="max-w-md font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                  Bộ thiết bị <br />
                  <span className="text-[#38bdf8]">theo dõi sức khỏe toàn diện</span>
                </h3>
                <p className="max-w-sm text-[13px] font-medium leading-relaxed text-white/70">
                  Bao gồm máy đo huyết áp Yuwell, máy đo đường huyết Accu-Chek,
                  nhiệt kế hồng ngoại và máy massage Omron.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 line-through">
                    {formatCurrency(3250500)}
                  </span>
                  <span className="text-2xl font-black text-white">
                    {formatCurrency(2490000)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleAddCombo}
                  className="rounded-lg bg-brand px-8 py-3 text-sm font-black uppercase tracking-wider text-white shadow-lg transition-transform hover:bg-brand-deep active:scale-95"
                >
                  Mua combo ngay
                </button>
              </div>
            </div>

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#38bdf8]/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-52 w-52 opacity-20">
              <Image
                src="/assets/images/product-1.jpg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {[
              {
                eyebrow: "Lợi ích 01",
                title: "Giá ưu đãi tiết kiệm",
                note: "Rẻ hơn mua lẻ",
                className: "bg-gradient-to-br from-[#43a047] to-[#2e7d32] text-white",
              },
              {
                eyebrow: "Lợi ích 02",
                title: "Bảo hành rõ ràng",
                note: "Yên tâm sử dụng",
                className: "bg-card text-foreground",
              },
              {
                eyebrow: "Lợi ích 03",
                title: "Quà tặng máy massage",
                note: "Omron HV-F013",
                className: "bg-gradient-to-br from-[#1e88e5] to-[#1565c0] text-white",
              },
              {
                eyebrow: "Lợi ích 04",
                title: "Tư vấn 24/7",
                note: "Chuyên gia hỗ trợ",
                className: "bg-[#f59e0b] text-[#78350f]",
              },
            ].map((benefit) => (
              <div
                key={benefit.eyebrow}
                className={`group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[20px] p-5 shadow-sm transition-all hover:-translate-y-1 ${benefit.className}`}
              >
                <span className="text-[9px] font-black uppercase tracking-widest opacity-70">
                  {benefit.eyebrow}
                </span>
                <h4 className="max-w-[11rem] text-[17px] font-extrabold leading-snug">
                  {benefit.title}
                </h4>
                <span className="text-[10px] font-bold opacity-80">{benefit.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-transparent bg-card p-6 shadow-sm transition-colors">
          <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-muted">
            <label className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest opacity-60">
                Danh mục:
              </span>
              <select
                value={selectedCategory}
                onChange={(event) => {
                  setSelectedCategory(event.target.value);
                  setCurrentPage(1);
                }}
                className="rounded-lg bg-surface-strong px-3 py-1.5 text-foreground outline-none transition focus:ring-2 focus:ring-brand"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest opacity-60">
                Mức giá:
              </span>
              <select
                value={selectedPriceRange.label}
                onChange={(event) => {
                  const range = PRICE_RANGES.find(
                    (item) => item.label === event.target.value,
                  );
                  if (range) {
                    setSelectedPriceRange(range);
                    setCurrentPage(1);
                  }
                }}
                className="rounded-lg bg-surface-strong px-3 py-1.5 text-foreground outline-none transition focus:ring-2 focus:ring-brand"
              >
                {PRICE_RANGES.map((range) => (
                  <option key={range.label} value={range.label}>
                    {range.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest opacity-60">
                Sắp xếp:
              </span>
              <select
                value={selectedSort.value}
                onChange={(event) => {
                  const sort = SORT_OPTIONS.find((item) => item.value === event.target.value);
                  if (sort) {
                    setSelectedSort(sort);
                    setCurrentPage(1);
                  }
                }}
                className="rounded-lg bg-surface-strong px-3 py-1.5 text-foreground outline-none transition focus:ring-2 focus:ring-brand"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="text-sm font-bold text-brand">
            {visibleProducts.length} / {filteredAndSortedProducts.length} sản phẩm
          </div>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] bg-card py-20 text-center">
            <h3 className="text-lg font-bold text-foreground">
              Không tìm thấy sản phẩm nào
            </h3>
            <p className="text-muted">Vui lòng điều chỉnh bộ lọc để tìm sản phẩm phù hợp.</p>
          </div>
        )}

        {totalPages > 1 ? (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handlePageChange(Math.max(1, safeCurrentPage - 1))}
              disabled={safeCurrentPage === 1}
              className="flex h-10 items-center justify-center rounded-lg bg-card px-4 text-xs font-bold uppercase tracking-wider text-muted shadow-sm transition hover:bg-brand hover:text-white disabled:opacity-50"
            >
              Trước
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition ${
                    safeCurrentPage === page
                      ? "bg-brand text-white shadow-md"
                      : "bg-card text-muted shadow-sm hover:bg-brand hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handlePageChange(Math.min(totalPages, safeCurrentPage + 1))}
              disabled={safeCurrentPage === totalPages}
              className="flex h-10 items-center justify-center rounded-lg bg-card px-4 text-xs font-bold uppercase tracking-wider text-muted shadow-sm transition hover:bg-brand hover:text-white disabled:opacity-50"
            >
              Sau
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
