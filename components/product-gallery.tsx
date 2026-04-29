"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/site";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeImages = images.length ? images : ["/assets/images/product-1.jpg"];
  const visibleImages = safeImages.slice(0, 4);
  const activeImage = visibleImages[activeIndex] ?? visibleImages[0];

  useEffect(() => {
    if (visibleImages.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % visibleImages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [visibleImages.length]);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[8px] border border-[var(--color-line)] bg-[var(--color-card)]">
        <Image
          src={withBasePath(activeImage)}
          alt={alt}
          fill
          className="object-contain p-8 transition duration-500"
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {visibleImages.map((image, index) => {
          const isActive = image === activeImage;

          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Xem ảnh sản phẩm ${index + 1}`}
              aria-pressed={isActive}
              className={`relative aspect-square overflow-hidden rounded-[8px] border bg-[var(--color-card)] transition ${
                isActive
                  ? "border-[var(--color-brand)] shadow-[0_10px_30px_rgba(33,150,243,0.18)]"
                  : "border-[var(--color-line)] hover:border-[var(--color-brand)]"
              }`}
            >
              <Image
                src={withBasePath(image)}
                alt={alt}
                fill
                className="object-contain p-2"
                sizes="120px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
