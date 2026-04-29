import Link from "next/link";
import { teamMembers } from "@/lib/team";

const features = [
  {
    icon: "🌙",
    title: "Dark Mode toàn trang",
    desc: "Chuyển đổi Light / Dark tức thì qua CSS Variables + next-themes, nhất quán trên tất cả 13 trang.",
    badge: "+0.3đ bonus",
  },
  {
    icon: "🩺",
    title: "Trợ lý tư vấn sức khỏe",
    desc: "Trang /symptom-checker gợi ý thiết bị y tế phù hợp qua 2 câu hỏi về nhu cầu và đối tượng người dùng.",
    badge: "+0.5đ bonus",
  },
  {
    icon: "✨",
    title: "Animation Framer Motion",
    desc: "Hiệu ứng staggered fadeIn cho product cards, slide transition trên symptom checker, micro-interactions trên toàn site.",
    badge: "+0.2đ bonus",
  },
  {
    icon: "🔔",
    title: "Toast Notification (Sonner)",
    desc: "Phản hồi tức thì khi thêm/xoá giỏ hàng và áp mã giảm giá — không chồng chất, hỗ trợ Dark Mode.",
    badge: "UX nâng cao",
  },
  {
    icon: "📊",
    title: "Lighthouse 93 / 100 / 100",
    desc: "Accessibility 93 · Best Practices 100 · SEO 100 trên bản deploy GitHub Pages sau khi tối ưu WCAG AA.",
    badge: "+0.3đ bonus",
  },
  {
    icon: "📱",
    title: "Responsive 3 breakpoint",
    desc: "Mobile (<768px) · Tablet · Desktop với hamburger menu, grid co giãn và layout checkout tự điều chỉnh.",
    badge: "Yêu cầu cơ bản",
  },
];

const techStack = [
  { name: "Next.js 16", color: "bg-[var(--color-surface-strong)]" },
  { name: "TypeScript", color: "bg-[var(--color-surface-strong)]" },
  { name: "Tailwind CSS v4", color: "bg-[var(--color-surface-strong)]" },
  { name: "Framer Motion", color: "bg-[var(--color-surface-strong)]" },
  { name: "Sonner", color: "bg-[var(--color-surface-strong)]" },
  { name: "next-themes", color: "bg-[var(--color-surface-strong)]" },
  { name: "GitHub Pages", color: "bg-[var(--color-surface-strong)]" },
  { name: "Context + useReducer", color: "bg-[var(--color-surface-strong)]" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(140deg,var(--color-card),var(--color-surface))] p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8 transition-colors duration-300">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          Nhóm 07 · WEDE333308 · HCMUTE 2026
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-[38px] font-extrabold leading-none text-[var(--color-ink)]">
              MediShop — Thiết bị y tế
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              Website thương mại điện tử kinh doanh thiết bị y tế gia đình được xây dựng
              bằng Next.js 16 · TypeScript · Tailwind CSS v4. Nhóm 7 thành viên, mỗi người
              phụ trách một module hoàn chỉnh từ Figma đến code đến deploy.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
              Triển khai tại:{" "}
              <a
                href="https://baohan24126067.github.io/nhom07_thietbiyte/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[var(--color-brand)] underline underline-offset-2 hover:text-[var(--color-brand-deep)]"
              >
                baohan24126067.github.io/nhom07_thietbiyte
              </a>
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand-deep)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b5fa8]"
          >
            Liên hệ đội ngũ
          </Link>
        </div>

        {/* Tech badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t.name}
              className="rounded-full border border-[var(--color-line)] bg-[var(--color-surface-strong)] px-3 py-1 text-xs font-semibold text-[var(--color-ink)]"
            >
              {t.name}
            </span>
          ))}
        </div>
      </section>

      {/* ── Advanced features ──────────────────────────────────── */}
      <section className="mt-10">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Tính năng nổi bật
          </p>
          <h2 className="mt-1 font-display text-[28px] font-extrabold text-[var(--color-ink)]">
            Chức năng nâng cao đã triển khai
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3 rounded-[24px] border border-[var(--color-line)] bg-[var(--color-card)] p-5 shadow-sm transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{f.icon}</span>
                <span className="rounded-full bg-[var(--color-brand-soft)] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-[var(--color-brand-deep)]">
                  {f.badge}
                </span>
              </div>
              <h3 className="text-[15px] font-extrabold text-[var(--color-ink)]">
                {f.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats row ──────────────────────────────────────────── */}
      <section className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { value: "13", label: "Trang hoàn chỉnh" },
          { value: "35+", label: "Sản phẩm y tế" },
          { value: "100", label: "Best Practices" },
          { value: "93", label: "Accessibility" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-[20px] border border-[var(--color-line)] bg-[var(--color-card)] p-5 text-center transition-colors duration-300"
          >
            <p className="font-display text-[36px] font-black text-[var(--color-brand-deep)]">
              {s.value}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* ── Team members ───────────────────────────────────────── */}
      <section className="mt-10">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Thành viên nhóm
          </p>
          <h2 className="mt-1 font-display text-[28px] font-extrabold text-[var(--color-ink)]">
            7 thành viên · Nhóm 07
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={`${member.name}-${member.studentId ?? "pending"}`}
              className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-card)] p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                    {member.studentId ? `MSSV ${member.studentId}` : "MSSV đang cập nhật"}
                  </p>
                  <h2 className="mt-2 font-display text-[26px] font-extrabold leading-none text-[var(--color-ink)]">
                    {member.name}
                  </h2>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-xl font-extrabold text-[var(--color-brand)]">
                  {member.name.split(" ").at(-1)?.slice(0, 1)}
                </div>
              </div>
              <p className="mt-4 text-sm font-bold text-[var(--color-ink)]">
                Vai trò: {member.role}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {member.scope}
              </p>
              {member.githubUrl ? (
                <a
                  href={member.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
                >
                  GitHub cá nhân →
                </a>
              ) : (
                <div className="mt-5 inline-flex items-center rounded-full bg-[var(--color-brand-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-muted)]">
                  Nguồn tham chiếu tích hợp nội bộ
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
