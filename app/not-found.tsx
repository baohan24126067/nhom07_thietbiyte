import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full rounded-[36px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#ffffff,#eaf5ff)] p-8 text-center shadow-[0_24px_80px_rgba(17,57,95,0.10)] sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-brand)]">
          Error 404
        </p>
        <h1 className="mt-5 font-display text-[clamp(3.5rem,10vw,7rem)] font-extrabold leading-none text-[var(--color-ink)]">
          404
        </h1>
        <h2 className="mt-4 font-display text-[32px] font-extrabold leading-none text-[var(--color-ink)]">
          Không tìm thấy trang bạn yêu cầu
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
          Có thể đường dẫn đã thay đổi hoặc nội dung chưa được xuất bản. Bạn có
          thể quay về trang chủ, tra cứu thiết bị y tế hoặc liên hệ đội ngũ hỗ trợ.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
          >
            Về trang chủ
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
          >
            Tìm sản phẩm
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
          >
            Liên hệ hỗ trợ
          </Link>
        </div>
      </div>
    </div>
  );
}
