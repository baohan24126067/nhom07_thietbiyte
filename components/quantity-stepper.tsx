"use client";

type QuantityStepperProps = {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
}: QuantityStepperProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-white p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-8 w-8 items-center justify-center rounded-full text-base font-bold text-[var(--color-brand-deep)] transition hover:bg-[var(--color-brand-soft)]"
        aria-label="Giảm số lượng"
      >
        -
      </button>
      <span className="min-w-10 text-center text-sm font-bold text-[var(--color-ink)]">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex h-8 w-8 items-center justify-center rounded-full text-base font-bold text-[var(--color-brand-deep)] transition hover:bg-[var(--color-brand-soft)]"
        aria-label="Tăng số lượng"
      >
        +
      </button>
    </div>
  );
}
