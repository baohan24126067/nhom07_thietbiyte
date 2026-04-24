"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type LoginFormState = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const initialFormState: LoginFormState = {
  email: "",
  password: "",
  rememberMe: true,
};

export default function LoginPage() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormState, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const nextErrors: Partial<Record<keyof LoginFormState, string>> = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Email chưa đúng định dạng.";
    }

    if (form.password.trim().length < 6) {
      nextErrors.password = "Mật khẩu cần ít nhất 6 ký tự.";
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
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setStatus("success");
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#f6fbff,#dceeff)] p-8 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Secure access
          </p>
          <h1 className="mt-4 font-display text-[42px] font-extrabold leading-[0.95] text-[var(--color-ink)]">
            Đăng nhập để theo dõi đơn hàng và nhận hỗ trợ nhanh hơn
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[var(--color-muted)]">
            Khu vực tài khoản giúp khách hàng xem nhanh trạng thái đơn, lưu thông
            tin giao hàng và nhận tư vấn thiết bị y tế phù hợp với nhu cầu gia đình.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Lưu địa chỉ nhận hàng",
              "Theo dõi lịch sử đơn và thanh toán",
              "Nhận thông báo giảm giá thiết bị y tế",
              "Hỗ trợ kỹ thuật nhanh qua hotline",
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
              Login
            </p>
            <h2 className="mt-2 font-display text-[32px] font-extrabold leading-none text-[var(--color-ink)]">
              Chào mừng quay lại
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <Field
              label="Email"
              type="email"
              value={form.email}
              error={errors.email}
              placeholder="you@example.com"
              onChange={(value) => setForm((current) => ({ ...current, email: value }))}
            />
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

            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-[var(--color-muted)]">
                <input
                  type="checkbox"
                  checked={form.rememberMe}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      rememberMe: event.target.checked,
                    }))
                  }
                />
                Ghi nhớ đăng nhập
              </label>
              <Link
                href="/contact"
                className="font-semibold text-[var(--color-brand-deep)] transition hover:text-[var(--color-brand)]"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)] disabled:cursor-wait disabled:bg-[#8dc5f7]"
            >
              {status === "submitting" ? "Đang xác thực..." : "Đăng nhập"}
            </button>

            {status === "success" ? (
              <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-4 text-sm text-[var(--color-ink)]">
                Đăng nhập mô phỏng thành công. Bạn có thể tiếp tục tra cứu sản phẩm
                hoặc liên hệ đội ngũ tư vấn.
              </div>
            ) : null}

            <p className="text-center text-sm text-[var(--color-muted)]">
              Chưa có tài khoản?{" "}
              <Link
                href="/register"
                className="font-semibold text-[var(--color-brand-deep)] transition hover:text-[var(--color-brand)]"
              >
                Đăng ký ngay
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
