"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { useCart } from "@/components/cart-provider";
import { ProductIllustration } from "@/components/product-illustration";
import { QuantityStepper } from "@/components/quantity-stepper";
import { formatCurrency } from "@/lib/currency";
import { getCartLineItems } from "@/lib/cart";
import { products } from "@/lib/products";

export default function CartPage() {
  const {
    items,
    couponCode,
    subtotal,
    discountAmount,
    shippingFee,
    total,
    isHydrated,
    updateQuantity,
    removeItem,
    applyCoupon,
  } = useCart();
  const [couponInput, setCouponInput] = useState(couponCode);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  const lineItems = useMemo(() => getCartLineItems(items), [items]);
  const suggestions = products.filter(
    (product) => !items.some((item) => item.productId === product.id),
  );

  const handleApplyCoupon = () => {
    const result = applyCoupon(couponInput);
    setCouponMessage(result.message);
    if (result.ok) {
      setCouponInput(couponInput.trim().toUpperCase());
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
        <Link href="/" className="transition hover:text-[var(--color-brand)]">
          Trang chủ
        </Link>
        <span>/</span>
        <span className="font-semibold text-[var(--color-ink)]">Giỏ hàng</span>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[28px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)] sm:p-6">
          <div className="flex items-end justify-between gap-4 border-b border-[var(--color-line)] pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                Shopping Cart
              </p>
              <h1 className="mt-2 font-display text-[34px] font-extrabold leading-none text-[var(--color-ink)]">
                Giỏ hàng của bạn
              </h1>
            </div>
            <p className="text-sm text-[var(--color-muted)]">
              {lineItems.length} sản phẩm đang chờ thanh toán
            </p>
          </div>

          {!isHydrated ? (
            <div className="space-y-4 py-6">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[var(--color-line)] bg-[var(--color-brand-soft)] p-4"
                >
                  <div className="h-28 animate-pulse rounded-[20px] bg-white/80" />
                </div>
              ))}
            </div>
          ) : lineItems.length === 0 ? (
            <div className="py-12 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-3xl text-[var(--color-brand)]">
                C
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-[var(--color-ink)]">
                Giỏ hàng đang trống
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-[var(--color-muted)]">
                Hãy chọn các thiết bị y tế cần thiết cho gia đình bạn. Khi đã
                có sản phẩm trong giỏ, phần thanh toán sẽ được bật ngay.
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
              >
                Quay về trang chủ
              </Link>
            </div>
          ) : (
            <div className="space-y-4 py-6">
              {lineItems.map((item) => (
                <article
                  key={item.product.id}
                  className="grid gap-4 rounded-[24px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff,#f6fbff)] p-4 sm:grid-cols-[8rem_1fr]"
                >
                  <div className="flex aspect-square items-center justify-center rounded-[18px] bg-[var(--color-brand-soft)] p-4">
                    <ProductIllustration product={item.product} />
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                        {item.product.category}
                      </p>
                      <h2 className="mt-2 text-lg font-bold text-[var(--color-ink)]">
                        {item.product.name}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                        {item.product.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <QuantityStepper
                          quantity={item.quantity}
                          onDecrease={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          onIncrease={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                        />
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="text-sm font-semibold text-[#d64545] transition hover:text-[#b72f2f]"
                        >
                          Xoá sản phẩm
                        </button>
                      </div>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-sm text-[var(--color-muted)]">
                        {formatCurrency(item.product.price)} / {item.product.unit}
                      </p>
                      <p className="mt-2 text-2xl font-extrabold text-[var(--color-ink)]">
                        {formatCurrency(item.lineTotal)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <aside className="space-y-5">
          <section className="rounded-[28px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
            <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              Mã ưu đãi
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              Dùng thử <strong>MEDI10</strong> hoặc <strong>FREESHIP</strong> để
              kiểm tra flow giảm giá.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["MEDI10", "FREESHIP"].map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setCouponInput(code);
                    setCouponMessage(`Đã chọn mã ${code}. Bấm áp dụng để kiểm tra.`);
                  }}
                  className="rounded-full border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-3 py-1.5 text-xs font-bold text-[var(--color-brand-deep)] transition hover:border-[var(--color-brand)]"
                >
                  {code}
                </button>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <input
                value={couponInput}
                onChange={(event) => setCouponInput(event.target.value)}
                placeholder="Nhập mã giảm giá"
                className="w-full rounded-full border border-[var(--color-line)] bg-[var(--color-brand-soft)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)]"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
              >
                Áp dụng
              </button>
            </div>
            {couponMessage ? (
              <p className="mt-3 text-sm text-[var(--color-muted)]">
                {couponMessage}
              </p>
            ) : null}
          </section>

          <section className="rounded-[28px] border border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff,#eef7ff)] p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
            <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">
              Tóm tắt đơn hàng
            </h2>
            <div className="mt-5 space-y-3 text-sm">
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
                <span className="text-[var(--color-muted)]">Phí giao hàng</span>
                <strong className="text-[var(--color-ink)]">
                  {shippingFee === 0 ? "Miễn phí" : formatCurrency(shippingFee)}
                </strong>
              </div>
            </div>
            <div className="mt-5 rounded-[24px] bg-[var(--color-footer)] px-4 py-5 text-white">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.18em] text-white/70">
                  Tổng cộng
                </span>
                <strong className="font-display text-[30px] leading-none">
                  {formatCurrency(total)}
                </strong>
              </div>
            </div>
            <Link
              href={lineItems.length === 0 ? "/" : "/checkout"}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
            >
              {lineItems.length === 0 ? "Chọn sản phẩm ngay" : "Tiếp tục thanh toán"}
            </Link>
          </section>

          {suggestions.length > 0 ? (
            <section className="rounded-[28px] border border-[var(--color-line)] bg-white p-5 shadow-[0_20px_60px_rgba(17,57,95,0.08)]">
              <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">
                Gợi ý mua thêm
              </h2>
              <div className="mt-4 space-y-3">
                {suggestions.slice(0, 2).map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 rounded-[22px] bg-[var(--color-brand-soft)] p-3"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-white">
                      <ProductIllustration product={product} className="h-10 w-10" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-[var(--color-ink)]">
                        {product.name}
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                    <AddToCartButton
                      productId={product.id}
                      label="Thêm"
                      className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-3 py-2 text-xs font-bold text-white transition hover:bg-[var(--color-brand-deep)]"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </aside>
      </div>
    </div>
  );
}
