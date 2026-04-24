import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#ffffff,#eaf5ff)] p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          Product catalog
        </p>
        <div className="mt-3">
          <h1 className="font-display text-[38px] font-extrabold leading-none text-[var(--color-ink)]">
            Chờ bạn Thanh Ngân thực hiện
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
            Route này được giữ lại để khớp cấu trúc điều hướng của website.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5">
            <p className="text-sm font-bold text-[var(--color-ink)]">
              Hạng mục được giữ chỗ
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Chờ bạn Thanh Ngân thực hiện.
            </p>
          </div>
          <div className="rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5">
            <p className="text-sm font-bold text-[var(--color-ink)]">
              Điều hướng thay thế
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Bạn vẫn có thể dùng trang tìm kiếm, giỏ hàng, thanh toán, liên hệ và
              FAQ để kiểm tra các phần đã hoàn thiện của nhóm.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
          >
            Sang trang tìm kiếm
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
          >
            Về trang chủ
          </Link>
        </div>
      </section>
    </div>
  );
}
