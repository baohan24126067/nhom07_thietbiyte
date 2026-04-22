import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { formatCurrency } from "@/lib/currency";
import { getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="pb-20">
      <section className="w-full">
        <div className="relative w-full overflow-hidden bg-[#f8fbff]">
          <div className="relative min-h-[400px] w-full">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 opacity-30 sm:opacity-100">
              <Image
                src="/assets/images/hero.jpg"
                alt="Medicare Family Care"
                fill
                className="object-contain object-right"
                priority
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
              <div className="max-w-2xl space-y-6">
                <h1 className="font-display text-[28px] font-extrabold leading-[1.2] tracking-tight text-[#1e293b] sm:text-[36px] md:text-[54px]">
                  Mua sắm <span className="text-[#1e88e5]">AN TÂM</span> —
                  <br className="hidden sm:block" />
                  {" "}<span className="text-[#1e88e5]">SỐNG KHỎE</span> Mỗi ngày
                </h1>
                <div className="space-y-6">
                  <p className="max-w-md text-[14px] font-medium leading-relaxed text-[#1e293b] opacity-80 sm:text-[16px]">
                    MediShop đồng hành cùng gia đình bạn{" "}
                    <br className="hidden sm:block" />
                    trên hành trình chăm sóc sức khỏe mỗi ngày.
                  </p>
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <Link
                      href="/products"
                      className="inline-flex items-center justify-center rounded-[10px] bg-[#007bff] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#0069d9] active:scale-95 sm:px-10 sm:py-3.5 sm:text-base"
                    >
                      KHÁM PHÁ NGAY
                    </Link>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e2e8f0] bg-white text-[#1e88e5] shadow-sm sm:h-12 sm:w-12">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Gradient for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/80 to-transparent sm:via-[#f8fbff]/60" />
          </div>
        </div>
      </section>

      <section className="mt-8 w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-8 py-3.5 text-sm font-bold text-[var(--color-ink)] transition-all hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] hover:shadow-md active:scale-95"
          >
            Xem toàn bộ danh sách sản phẩm
          </Link>
        </div>
      </section>
    </div>
  );
}

