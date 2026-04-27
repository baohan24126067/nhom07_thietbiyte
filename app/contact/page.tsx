"use client";

import { FormEvent, useState } from "react";

type ContactForm = {
  fullName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const initialContact: ContactForm = {
  fullName: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialContact);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof ContactForm, string>> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Vui lòng nhập họ và tên.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Email chưa đúng định dạng.";
    }

    if (!/^(0|\+84)\d{9,10}$/.test(form.phone.trim())) {
      nextErrors.phone = "Số điện thoại chưa đúng định dạng.";
    }

    if (form.topic.trim().length < 4) {
      nextErrors.topic = "Chủ đề cần rõ ràng hơn.";
    }

    if (form.message.trim().length < 12) {
      nextErrors.message = "Nội dung liên hệ cần chi tiết hơn.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <section className="rounded-[32px] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Contact us
          </p>
          <h1 className="mt-3 font-display text-[38px] font-extrabold leading-none text-[var(--color-ink)]">
            Liên hệ đội ngũ MediShop
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Gửi câu hỏi về sản phẩm, đơn hàng hoặc nhu cầu tư vấn thiết bị y tế.
            Đội ngũ sẽ phản hồi trong khung giờ làm việc qua email hoặc điện thoại.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <Field
              label="Họ và tên"
              value={form.fullName}
              error={errors.fullName}
              onChange={(value) => setForm((current) => ({ ...current, fullName: value }))}
            />
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Email"
                value={form.email}
                error={errors.email}
                onChange={(value) => setForm((current) => ({ ...current, email: value }))}
              />
              <Field
                label="Số điện thoại"
                value={form.phone}
                error={errors.phone}
                onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
              />
            </div>
            <Field
              label="Chủ đề"
              value={form.topic}
              error={errors.topic}
              onChange={(value) => setForm((current) => ({ ...current, topic: value }))}
            />
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
                Nội dung
              </span>
              <textarea
                rows={5}
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({ ...current, message: event.target.value }))
                }
                className={`w-full rounded-[24px] border px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition ${
                  errors.message
                    ? "border-[#d64545] bg-[#fff6f6]"
                    : "border-[var(--color-line)] bg-[var(--color-brand-soft)] focus:border-[var(--color-brand)]"
                }`}
              />
              {errors.message ? (
                <span className="mt-2 block text-sm text-[#d64545]">
                  {errors.message}
                </span>
              ) : null}
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
            >
              Gửi liên hệ
            </button>
            {submitted ? (
              <div className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-4 text-sm text-[var(--color-ink)]">
                Yêu cầu đã được ghi nhận. MediShop sẽ liên hệ lại trong khung giờ làm
                việc qua thông tin bạn đã cung cấp.
              </div>
            ) : null}
          </form>
        </section>

        <section className="space-y-6">
          <div className="rounded-[32px] border border-[var(--color-line)] bg-[linear-gradient(145deg,#ffffff,#eaf5ff)] p-6 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-8">
            <h2 className="font-display text-[30px] font-extrabold leading-none text-[var(--color-ink)]">
              Thông tin hỗ trợ
            </h2>
            <div className="mt-5 space-y-4 text-sm text-[var(--color-muted)]">
              <p>
                <strong className="text-[var(--color-ink)]">Hotline:</strong> 1900 24 85
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Email:</strong> 24126067@student.hcmute.edu.vn
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Địa chỉ:</strong> 91 Võ Văn Ngân,
                Phường Linh Chiểu, TP. Thủ Đức, TP. Hồ Chí Minh
              </p>
              <p>
                <strong className="text-[var(--color-ink)]">Giờ làm việc:</strong> 08:00 - 18:00
                (Thứ 2 - Thứ 7)
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
            <iframe
              title="Bản đồ MediShop"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.7612%2C10.8482%2C106.7720%2C10.8588&layer=mapnik&marker=10.8536%2C106.7666"
              className="h-[380px] w-full border-0"
              loading="lazy"
            />
          </div>
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
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
        {label}
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
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
