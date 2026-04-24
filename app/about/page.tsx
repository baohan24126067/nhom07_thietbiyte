import Link from "next/link";
import { teamMembers } from "@/lib/team";

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <section className="rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(140deg,#ffffff,#eaf5ff)] p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
          About the team
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-[38px] font-extrabold leading-none text-[var(--color-ink)]">
              Nhóm phát triển MediShop
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              Dự án được xây dựng theo hướng website thương mại điện tử thiết bị y tế
              gia đình, kết hợp UI rõ ràng, luồng mua hàng mạch lạc và bộ trang
              hỗ trợ đầy đủ theo đúng yêu cầu đề bài.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
              Danh sách bên dưới đã được cập nhật lại theo đúng file phân công Word,
              bao gồm cả những thành viên chưa hoàn thiện phần code trong source hiện tại.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
          >
            Liên hệ đội ngũ
          </Link>
        </div>
      </section>

      <section className="mt-6 grid gap-5 md:grid-cols-2">
        {teamMembers.map((member) => (
          <article
            key={`${member.name}-${member.studentId ?? "pending"}`}
            className="rounded-[28px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                  {member.studentId ? `MSSV ${member.studentId}` : "MSSV đang cập nhật"}
                </p>
                <h2 className="mt-2 font-display text-[28px] font-extrabold leading-none text-[var(--color-ink)]">
                  {member.name}
                </h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-xl font-extrabold text-[var(--color-brand)]">
                {member.name.slice(0, 1)}
              </div>
            </div>
            <p className="mt-4 text-sm font-bold text-[var(--color-ink)]">
              Vai trò: {member.role}
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
              {member.scope}
            </p>
            {member.githubUrl ? (
              <a
                href={member.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
              >
                GitHub cá nhân
              </a>
            ) : (
              <div className="mt-5 inline-flex items-center rounded-full bg-[var(--color-brand-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-muted)]">
                Nguồn tham chiếu tích hợp nội bộ
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
