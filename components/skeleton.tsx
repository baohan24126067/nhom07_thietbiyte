"use client";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-[var(--color-surface-strong)] ${className}`}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="rounded-[6px] border border-[var(--color-line)] bg-[var(--color-card)] p-4 shadow-sm">
      <Skeleton className="aspect-[1/0.82] w-full" />
      <Skeleton className="mt-5 h-4 w-1/4" />
      <Skeleton className="mt-2 h-6 w-3/4" />
      <Skeleton className="mt-2 h-16 w-full" />
      <div className="mt-4 flex justify-between">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-16" />
      </div>
      <div className="mt-5 flex gap-3">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}
