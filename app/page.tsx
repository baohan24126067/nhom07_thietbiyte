import Link from "next/link";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { ProductIllustration } from "@/components/product-illustration";
import { formatCurrency } from "@/lib/currency";
import { getFeaturedProducts } from "@/lib/products";
import { withBasePath } from "@/lib/site";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="pb-20">
      <section className="mx-auto w-full max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#f8fbff,#edf6ff)] p-5">
            <div className="space-y-4 pt-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Thiết bị y tế tại nhà
              </p>
              <h1 className="max-w-xl font-display text-[42px] font-extrabold leading-[0.98] tracking-tight text-[var(--color-ink)]">
                Mua sắm <span className="text-[var(--color-brand)]">AN TÂM</span>
                <br />
                <span className="text-[var(--color-brand)]">SỐNG KHỎE</span> mỗi
                ngày
              </h1>
              <p className="max-w-md text-[16px] leading-6 text-[var(--color-ink)]">
                MediShop đồng hành cùng gia đình bạn trên hành trình chăm sóc
                sức khỏe mỗi ngày.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/search"
                  className="inline-flex items-center justify-center rounded-[8px] bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white"
                >
                  TÌM KIẾM SẢN PHẨM
                </Link>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-brand)]">
                  +
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#cde7ff,#8ab8e7_55%,#dceeff)] p-3">
            <div className="relative min-h-[250px] overflow-hidden rounded-[4px]">
              <img
                src={withBasePath("/assets/images/hero.jpg")}
                alt="Gia đình tham khảo thiết bị y tế cùng đội ngũ bác sĩ"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((item, index) => (
            <article
              key={item.name}
              className="motion-safe motion-rise rounded-[6px] border border-[#e5edf5] bg-white p-4 shadow-[0_1px_0_rgba(255,255,255,0.65)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <Link
                href={`/products/${item.slug}`}
                className="mb-4 flex aspect-[1/0.88] items-center justify-center rounded-[4px] bg-[linear-gradient(180deg,#fefefe,#edf5fc)] p-4 transition hover:shadow-[inset_0_0_0_1px_rgba(27,141,238,0.22)]"
              >
                <ProductIllustration
                  product={item}
                  className="h-44 w-full max-w-[240px]"
                />
              </Link>
              <Link
                href={`/products/${item.slug}`}
                className="block min-h-12 text-[14px] font-semibold leading-5 text-[var(--color-ink)] transition hover:text-[var(--color-brand-deep)]"
              >
                {item.name}
              </Link>
              <p className="mt-3 inline-flex rounded-[4px] bg-[var(--color-brand)] px-2 py-1 text-[12px] font-bold text-white">
                {formatCurrency(item.price)} / {item.unit}
              </p>
              <p className="mt-2 text-[12px] text-[var(--color-muted)]">
                DVT: {item.unit}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <AddToCartButton
                  productId={item.id}
                  className="inline-flex items-center justify-center rounded-[6px] bg-[var(--color-brand)] px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-[var(--color-brand-deep)]"
                />
                <Link
                  href={`/products/${item.slug}`}
                  className="text-[12px] font-bold text-[var(--color-brand-deep)] transition hover:text-[var(--color-brand)]"
                >
                  Xem chi tiết
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
          >
            Xem toàn bộ danh mục
          </Link>
        </div>
      </section>
    </div>
  );
}
