import Link from "next/link";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          Product detail
        </p>
        <h1 className="mt-3 font-display text-[38px] font-extrabold leading-none text-[var(--color-ink)]">
          Chờ bạn Bích Sơn thực hiện
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
          Route chi tiết sản phẩm được giữ lại để tránh vỡ điều hướng của website.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-5 py-5">
            <p className="text-sm font-bold text-[var(--color-ink)]">
              Phần đang chờ tích hợp
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Chờ bạn Bích Sơn thực hiện.
            </p>
          </div>
          <div className="rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5">
            <p className="text-sm font-bold text-[var(--color-ink)]">
              Luồng hiện có thể kiểm tra
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Tài khoản, tìm kiếm, FAQ, about, liên hệ, giỏ hàng và thanh toán vẫn
              hoạt động bình thường trong phạm vi các thành viên đã hoàn thiện.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
          >
            Tìm kiếm sản phẩm
          </Link>
          <Link
            href="/cart"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
          >
            Xem giỏ hàng
          </Link>
        </div>
      </section>
    </div>
  );
}
