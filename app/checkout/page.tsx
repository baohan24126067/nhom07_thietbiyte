"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useCart } from "@/components/cart-provider";
import { ProductIllustration } from "@/components/product-illustration";
import { formatCurrency } from "@/lib/currency";
import { getCartLineItems } from "@/lib/cart";

type CheckoutForm = {
  fullName: string;
  phone: string;
  address: string;
  ward: string;
  note: string;
  paymentMethod: "cod" | "banking";
};

const initialForm: CheckoutForm = {
  fullName: "",
  phone: "",
  address: "",
  ward: "",
  note: "",
  paymentMethod: "cod",
};

export default function CheckoutPage() {
  const {
    items,
    subtotal,
    discountAmount,
    shippingFee,
    total,
    isHydrated,
    resetCart,
  } = useCart();
  const lineItems = useMemo(() => getCartLineItems(items), [items]);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutForm, string>>>(
    {},
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [orderCode, setOrderCode] = useState("");

  const canCheckout = lineItems.length > 0;

  const validate = () => {
    const nextErrors: Partial<Record<keyof CheckoutForm, string>> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Vui lòng nhập họ và tên.";
    }

    if (!/^(0|\+84)\d{9,10}$/.test(form.phone.trim())) {
      nextErrors.phone = "Số điện thoại chưa đúng định dạng.";
    }

    if (form.address.trim().length < 8) {
      nextErrors.address = "Địa chỉ giao hàng cần rõ ràng hơn.";
    }

    if (!form.ward.trim()) {
      nextErrors.ward = "Vui lòng nhập phường/xã hoặc khu vực giao hàng.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canCheckout || !validate()) {
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    const generatedCode = `MD${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderCode(generatedCode);
    resetCart();
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full rounded-[32px] border border-[var(--color-line)] bg-white p-8 text-center shadow-[0_24px_80px_rgba(17,57,95,0.10)]">
          <div className="mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-3xl text-[var(--color-brand)]">
            ✓
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
            Order confirmed
          </p>
          <h1 className="mt-3 font-display text-[40px] font-extrabold leading-none text-[var(--color-ink)]">
            Đặt hàng thành công
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
            Đơn hàng <strong>{orderCode}</strong> đã được ghi nhận. Nhóm vận
            hành sẽ liên hệ xác nhận trong giờ làm việc và giao hàng theo khung
            thời gian bạn đã chọn.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
            >
              Về trang chủ
            </Link>
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-brand)]"
            >
              Xem lại giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
        <Link href="/" className="transition hover:text-[var(--color-brand)]">
          Trang chủ
        </Link>
        <span>/</span>
        <Link href="/cart" className="transition hover:text-[var(--color-brand)]">
          Giỏ hàng
        </Link>
        <span>/</span>
        <span className="font-semibold text-[var(--color-ink)]">Thanh toán</span>
      </div>

      {!isHydrated ? (
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="h-80 animate-pulse rounded-[28px] border border-[var(--color-line)] bg-white"
            />
          ))}
        </div>
      ) : !canCheckout ? (
        <div className="rounded-[32px] border border-[var(--color-line)] bg-white p-8 text-center shadow-[0_24px_80px_rgba(17,57,95,0.10)]">
          <h1 className="font-display text-[36px] font-extrabold leading-none text-[var(--color-ink)]">
            Chưa có sản phẩm để thanh toán
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Bạn cần thêm ít nhất một sản phẩm vào giỏ trước khi điền thông tin
            giao hàng và đặt đơn.
          </p>
          <Link
            href="/cart"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
          >
            Quay về giỏ hàng
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-6"
          >
            <div className="border-b border-[var(--color-line)] pb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Checkout
              </p>
              <h1 className="mt-2 font-display text-[34px] font-extrabold leading-none text-[var(--color-ink)]">
                Thông tin giao hàng
              </h1>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Field
                label="Họ và tên"
                value={form.fullName}
                error={errors.fullName}
                onChange={(value) => setForm((current) => ({ ...current, fullName: value }))}
                placeholder="Nguyễn Văn A"
              />
              <Field
                label="Số điện thoại"
                value={form.phone}
                error={errors.phone}
                onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
                placeholder="0901234567"
              />
            </div>

            <div className="mt-4 grid gap-4">
              <Field
                label="Địa chỉ giao hàng"
                value={form.address}
                error={errors.address}
                onChange={(value) => setForm((current) => ({ ...current, address: value }))}
                placeholder="123 Lê Lợi, Quận 1"
              />
              <Field
                label="Phường / Xã / Khu vực"
                value={form.ward}
                error={errors.ward}
                onChange={(value) => setForm((current) => ({ ...current, ward: value }))}
                placeholder="Phường Bến Thành"
              />
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
                Ghi chú cho đơn hàng
              </label>
              <textarea
                value={form.note}
                onChange={(event) =>
                  setForm((current) => ({ ...current, note: event.target.value }))
                }
                rows={4}
                placeholder="Ví dụ: giao giờ hành chính, gọi trước khi đến..."
                className="w-full rounded-[24px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)]"
              />
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Phương thức thanh toán
              </h2>
              <div className="mt-3 grid gap-3">
                {[
                  {
                    id: "cod",
                    title: "Thanh toán khi nhận hàng",
                    detail: "Phù hợp với đơn gia đình, xác nhận trước khi giao.",
                  },
                  {
                    id: "banking",
                    title: "Chuyển khoản ngân hàng",
                    detail: "Nhận thông tin tài khoản sau khi nhân viên gọi xác nhận.",
                  },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`rounded-[24px] border p-4 transition ${
                      form.paymentMethod === option.id
                        ? "border-[var(--color-brand)] bg-[var(--color-brand-soft)]"
                        : "border-[var(--color-line)] bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={form.paymentMethod === option.id}
                        onChange={() =>
                          setForm((current) => ({
                            ...current,
                            paymentMethod: option.id as CheckoutForm["paymentMethod"],
                          }))
                        }
                        className="mt-1"
                      />
                      <div>
                        <p className="text-sm font-bold text-[var(--color-ink)]">
                          {option.title}
                        </p>
                        <p className="mt-1 text-sm text-[var(--color-muted)]">
                          {option.detail}
                        </p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)] disabled:cursor-wait disabled:bg-[#8dc5f7]"
            >
              {status === "submitting" ? "Đang xử lý đơn hàng..." : "Đặt hàng ngay"}
            </button>
          </form>

          <aside className="rounded-[28px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-6">
            <h2 className="font-display text-[30px] font-extrabold leading-none text-[var(--color-ink)]">
              Tóm tắt thanh toán
            </h2>
            <div className="mt-5 space-y-4">
              {lineItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 rounded-[24px] bg-[var(--color-brand-soft)] p-3"
                >
                  <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[20px] bg-white">
                    <ProductIllustration product={item.product} className="h-12 w-12" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-bold text-[var(--color-ink)]">
                      {item.product.name}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      SL: {item.quantity}
                    </p>
                  </div>
                  <strong className="text-sm text-[var(--color-ink)]">
                    {formatCurrency(item.lineTotal)}
                  </strong>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 rounded-[24px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff,#eef7ff)] p-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-muted)]">Tạm tính</span>
                <strong className="text-[var(--color-ink)]">
                  {formatCurrency(subtotal)}
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-muted)]">Giảm giá</span>
                <strong className="text-[var(--color-ink)]">
                  -{formatCurrency(discountAmount)}
                </strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-muted)]">Giao hàng</span>
                <strong className="text-[var(--color-ink)]">
                  {shippingFee === 0 ? "Miễn phí" : formatCurrency(shippingFee)}
                </strong>
              </div>
              <div className="flex items-center justify-between border-t border-[var(--color-line)] pt-3">
                <span className="font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Total
                </span>
                <strong className="font-display text-[32px] leading-none text-[var(--color-ink)]">
                  {formatCurrency(total)}
                </strong>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  error,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[var(--color-ink)]">
        {label}
      </span>
      <input
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
