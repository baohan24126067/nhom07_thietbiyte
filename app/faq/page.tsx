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
            <div className="grid h-full gap-4 sm:grid-cols-2">
              <div className="rounded-[6px] bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Tín hiệu thị giác
                </p>
                <div className="mt-4 space-y-4">
                  <div className="h-28 rounded-[6px] bg-[linear-gradient(145deg,#1b89ea,#66b6ff)]" />
                  <div className="h-3 w-28 rounded-full bg-[#c8ddef]" />
                  <div className="h-3 w-40 rounded-full bg-[#d6e7f6]" />
                  <div className="h-3 w-24 rounded-full bg-[#e1edf8]" />
                </div>
              </div>
              <div className="rounded-[6px] bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Mục tiêu trang
                </p>
                <div className="mt-4 space-y-4 text-sm leading-6 text-[var(--color-muted)]">
                  <p>
                    Trả lời các thắc mắc ngắn, rõ và dễ đọc, đúng tinh thần giao
                    diện của file Figma.
                  </p>
                  <p>
                    Bổ sung nội dung để website có chiều sâu hơn ngoài các trang
                    mua hàng bắt buộc.
                  </p>
                  <p>
                    Giữ cùng palette xanh - trắng để liền mạch với Home và các
                    page nhóm sẽ làm sau.
                  </p>
                </div>
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
