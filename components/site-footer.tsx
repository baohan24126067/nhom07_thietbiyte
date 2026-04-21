import Link from "next/link";

type FooterItem = {
  label: string;
  href?: string;
};

const footerColumns: Array<{ title: string; items: FooterItem[] }> = [
  {
    title: "ĐIỀU HƯỚNG",
    items: [
      { label: "Trang chủ", href: "/" },
      { label: "Giỏ hàng", href: "/cart" },
      { label: "Thanh toán", href: "/checkout" },
      { label: "Đăng nhập", href: "/login" },
      { label: "Tìm kiếm", href: "/search" },
      { label: "About", href: "/about" },
      { label: "Liên hệ", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "HỖ TRỢ KHÁCH HÀNG",
    items: [
      { label: "Chính sách bảo mật" },
      { label: "Chính sách đổi trả" },
      { label: "Hướng dẫn mua hàng" },
    ],
  },
  {
    title: "LIÊN HỆ",
    items: [
      { label: "Địa chỉ: Quận 1, TP. Hồ Chí Minh" },
      { label: "Hotline: 1900 24 85" },
      { label: "Email: contact@medishop.vn" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[var(--color-footer)] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1e88e5] font-display text-sm font-bold">
              M
            </span>
            <div>
              <p className="font-display text-sm font-bold tracking-tight">
                MEDISHOP
              </p>
              <p className="text-xs text-white/70">
                Thiết bị y tế tại nhà
              </p>
            </div>
          </div>
          <p className="max-w-sm leading-6 text-white/74">
            Medicare đồng hành cùng gia đình bạn trên hành trình chăm sóc sức
            khỏe mỗi ngày với giao diện rõ ràng, gọn và dễ tin cậy.
          </p>
          <div className="space-y-2 text-white/74">
            <p>https://www.facebook.com/medishop.vn</p>
            <p>https://www.youtube.com/@medishop</p>
            <p>https://www.tiktok.com/@medishop</p>
            <p>Zalo: 19002485</p>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
              {column.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              {column.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/12 px-4 py-3 text-center text-xs text-white/58">
        © 2026 Medishop. All rights reserved.
      </div>
    </footer>
  );
}
