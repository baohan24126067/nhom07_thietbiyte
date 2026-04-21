const footerColumns = [
  {
    title: "ĐIỀU HƯỚNG",
    items: ["Trang chủ", "Sản phẩm", "FAQ", "Tin tức y tế"],
  },
  {
    title: "HỖ TRỢ KHÁCH HÀNG",
    items: [
      "Chính sách bảo mật",
      "Chính sách đổi trả",
      "Hướng dẫn mua hàng",
    ],
  },
  {
    title: "LIÊN HỆ",
    items: [
      "Địa chỉ: Quận 1, TP. Hồ Chí Minh",
      "Hotline: 1900 24 85",
      "Email: contact@medishop.vn",
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
                <li key={item}>{item}</li>
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
