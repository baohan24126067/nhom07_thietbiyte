"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type RegisterFormState = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

const initialFormState: RegisterFormState = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
};

export default function RegisterPage() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterFormState, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const nextErrors: Partial<Record<keyof RegisterFormState, string>> = {};

    if (form.fullName.trim().length < 4) {
      nextErrors.fullName = "Họ tên cần ít nhất 4 ký tự.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Email chưa đúng định dạng.";
    }

    if (!/^(0|\+84)\d{9,10}$/.test(form.phone.trim())) {
      nextErrors.phone = "Số điện thoại chưa đúng định dạng.";
    }

    if (form.password.trim().length < 6) {
      nextErrors.password = "Mật khẩu cần ít nhất 6 ký tự.";
    }

    if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = "Mật khẩu xác nhận chưa khớp.";
    }

    if (!form.agreeTerms) {
      nextErrors.agreeTerms = "Bạn cần đồng ý điều khoản để tạo tài khoản.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => window.setTimeout(resolve, 800));
    setStatus("success");
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <section className="overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(140deg,#f6fbff,#d9edff)] p-8 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Create account
          </p>
          <h1 className="mt-4 font-display text-[42px] font-extrabold leading-[0.95] text-[var(--color-ink)]">
            Tạo tài khoản để lưu đơn hàng và nhận tư vấn nhanh
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[var(--color-muted)]">
            Khu vực đăng ký phù hợp với yêu cầu bài làm của Gia Hân, hỗ trợ khách
            hàng lưu thông tin giao hàng, theo dõi mua sắm và nhận tư vấn thiết bị
            y tế thuận tiện hơn.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Lưu hồ sơ giao hàng cho lần mua sau",
              "Nhận gợi ý thiết bị theo nhu cầu",
              "Theo dõi ưu đãi và mã giảm giá",
              "Liên hệ hỗ trợ nhanh từ tài khoản",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] bg-white/80 px-4 py-4 text-sm font-semibold text-[var(--color-ink)]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8">
          <div className="border-b border-[var(--color-line)] pb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
              Register
            </p>
            <h2 className="mt-2 font-display text-[32px] font-extrabold leading-none text-[var(--color-ink)]">
              Tạo tài khoản MediCare
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <Field
              label="Họ và tên"
              type="text"
              value={form.fullName}
              error={errors.fullName}
              placeholder="Nguyễn Văn A"
              onChange={(value) => setForm((current) => ({ ...current, fullName: value }))}
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Email"
                type="email"
                value={form.email}
                error={errors.email}
                placeholder="you@example.com"
                onChange={(value) => setForm((current) => ({ ...current, email: value }))}
              />
              <Field
                label="Số điện thoại"
                type="tel"
                value={form.phone}
                error={errors.phone}
                placeholder="0901234567"
                onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Mật khẩu"
                type="password"
                value={form.password}
                error={errors.password}
                placeholder="••••••••"
                onChange={(value) =>
                  setForm((current) => ({ ...current, password: value }))
                }
              />
              <Field
                label="Xác nhận mật khẩu"
                type="password"
                value={form.confirmPassword}
                error={errors.confirmPassword}
                placeholder="••••••••"
                onChange={(value) =>
                  setForm((current) => ({ ...current, confirmPassword: value }))
                }
              />
            </div>

            <label className="block text-sm text-[var(--color-muted)]">
              <span className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={form.agreeTerms}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      agreeTerms: event.target.checked,
                    }))
                  }
                />
                <span>
                  Tôi đồng ý với điều khoản sử dụng và chính sách bảo mật của
                  MediCare.
                </span>
              </span>
              {errors.agreeTerms ? (
                <span className="mt-2 block text-sm text-[#d64545]">
                  {errors.agreeTerms}
                </span>
              ) : null}
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)] disabled:cursor-wait disabled:bg-[#8dc5f7]"
            >
              {status === "submitting" ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
            </button>

            {status === "success" ? (
              <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-4 text-sm text-[var(--color-ink)]">
                Tạo tài khoản mô phỏng thành công. Bạn có thể đăng nhập và tiếp tục
                tìm kiếm sản phẩm hoặc mua hàng.
              </div>
            ) : null}

            <p className="text-center text-sm text-[var(--color-muted)]">
              Đã có tài khoản?{" "}
              <Link
                href="/login"
                className="font-semibold text-[var(--color-brand-deep)] transition hover:text-[var(--color-brand)]"
              >
                Đăng nhập ngay
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  error,
  onChange,
  type,
  placeholder,
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-full border px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition ${
          error
            ? "border-[#d64545] bg-[#fff6f6]"
            : "border-[var(--color-line)] bg-[var(--color-brand-soft)] focus:border-[var(--color-brand)]"
        }`}
      />
      {error ? <span className="mt-2 block text-sm text-[#d64545]">{error}</span> : null}
    </label>
  );
}
