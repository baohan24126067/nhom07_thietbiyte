import Link from "next/link";

type Item = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <div className="text-sm mb-4">
      {items.map((item, i) => (
        <span key={i}>
          {item.href ? (
            <Link href={item.href} className="text-blue-600">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {i < items.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
