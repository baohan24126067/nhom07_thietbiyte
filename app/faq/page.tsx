import type { Metadata } from "next";
import Link from "next/link";
import { faqGroups, quickFacts } from "@/lib/faq-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Trang câu hỏi thường gặp về thiết bị y tế tại nhà theo phong cách Medishop.",
};

export default function FaqPage() {
  return (
    <div className="pb-20">
      <section className="mx-auto w-full max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[6px] bg-white p-6 shadow-[0_1px_0_rgba(255,255,255,0.65)]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-brand)]">
              Trang đặc trưng theo chủ đề
            </p>
            <h1 className="mt-4 font-display text-[40px] font-extrabold leading-[1.02] tracking-tight text-[var(--color-ink)]">
              FAQ thiết bị y tế
              <span className="block text-[var(--color-brand)]">
                cho nhu cầu tại nhà
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-7 text-[var(--color-muted)]">
              Đây là trang mở rộng mà Bảo Hân triển khai để tăng chiều sâu nội
              dung cho Medishop. Mục tiêu là giúp người dùng hiểu nhanh trước
              khi chọn mua hoặc sử dụng thiết bị y tế gia đình.
            </p>

            <div className="mt-6 space-y-3">
              {quickFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-[6px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-3 text-sm leading-6 text-[var(--color-ink)]"
                >
                  {fact}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-[6px] bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white"
              >
                Về trang chủ
              </Link>
              <span className="inline-flex items-center justify-center rounded-[6px] border border-[var(--color-line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)]">
                Foundation của Bảo Hân
              </span>
            </div>
          </div>

          <div className="rounded-[6px] border border-[var(--color-line)] bg-[linear-gradient(160deg,#d7ebff,#eef6ff)] p-5">
            <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[6px] bg-white p-5 shadow-[0_1px_0_rgba(255,255,255,0.65)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Hỗ trợ nhanh
                </p>
                <div className="mt-4 rounded-[6px] bg-[linear-gradient(145deg,#1694ff,#65bbff)] p-5 text-white">
                  <p className="text-sm font-semibold opacity-90">Tư vấn thiết bị</p>
                  <p className="mt-2 font-display text-[34px] font-extrabold leading-none">
                    1900 6868
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/85">
                    Gợi ý sản phẩm theo nhu cầu đo huyết áp, đường huyết, khí dung
                    và chăm sóc tại nhà.
                  </p>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-[6px] bg-[var(--color-brand-soft)] p-3">
                    <dt className="font-bold text-[var(--color-ink)]">4 nhóm</dt>
                    <dd className="mt-1 text-[var(--color-muted)]">câu hỏi chính</dd>
                  </div>
                  <div className="rounded-[6px] bg-[var(--color-brand-soft)] p-3">
                    <dt className="font-bold text-[var(--color-ink)]">12+</dt>
                    <dd className="mt-1 text-[var(--color-muted)]">tình huống FAQ</dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-[6px] bg-white p-5 shadow-[0_1px_0_rgba(255,255,255,0.65)]">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Kiểm tra trước khi dùng
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--color-muted)]">
                  {[
                    "Đọc nhanh hướng dẫn sử dụng và cảnh báo của nhà sản xuất.",
                    "Kiểm tra pin, dây dẫn, đầu kim, mặt nạ hoặc phụ kiện đi kèm.",
                    "Vệ sinh thiết bị sau khi dùng và bảo quản ở nơi khô thoáng.",
                    "Liên hệ cơ sở y tế nếu kết quả đo bất thường hoặc triệu chứng nặng.",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex gap-3 rounded-[6px] border border-[var(--color-line)] px-3 py-3"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-5 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 xl:grid-cols-3">
          {faqGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[6px] border border-[var(--color-line)] bg-white p-5 shadow-[0_1px_0_rgba(255,255,255,0.65)]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-brand)]">
                FAQ Group
              </p>
              <h2 className="mt-3 font-display text-[28px] font-bold leading-tight text-[var(--color-ink)]">
                {group.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {group.description}
              </p>

              <div className="mt-6 space-y-4">
                {group.items.map((item, index) => (
                  <div
                    key={item.question}
                    className="rounded-[6px] bg-[var(--color-surface)] px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold leading-6 text-[var(--color-ink)]">
                          {item.question}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
