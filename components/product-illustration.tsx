import type { Product } from "@/lib/products";

export function ProductIllustration({
  product,
  className = "h-28 w-24",
}: {
  product: Product;
  className?: string;
}) {
  if (product.imageStyle === "slim") {
    return (
      <div
        className={`${className} rotate-12 rounded-[28px]`}
        style={{ backgroundColor: product.accent }}
      />
    );
  }

  if (product.imageStyle === "kit") {
    return (
      <div className="grid gap-2">
        <div
          className="h-16 w-20 rounded-2xl"
          style={{ backgroundColor: product.accent }}
        />
        <div className="flex gap-2">
          <div className="h-6 w-6 rounded-full bg-white shadow-inner" />
          <div className="h-6 w-6 rounded-full bg-white shadow-inner" />
          <div className="h-6 w-6 rounded-full bg-white shadow-inner" />
        </div>
      </div>
    );
  }

  if (product.imageStyle === "device") {
    return (
      <div className="grid gap-3">
        <div
          className="h-[4.5rem] w-28 rounded-[28px] border border-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
          style={{ backgroundColor: product.accent }}
        />
        <div className="mx-auto h-3 w-14 rounded-full bg-white/85" />
      </div>
    );
  }

  return (
    <div
      className={`${className} rounded-2xl`}
      style={{ backgroundColor: product.accent }}
    />
  );
}
