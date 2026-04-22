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
      { label: "Sản phẩm", href: "/search" },
      { label: "Về chúng tôi", href: "/about" },
      { label: "Tin tức y tế", href: "/faq" },
    ],
  },
  {
    title: "HỖ TRỢ KHÁCH HÀNG",
    items: [
      { label: "Chính sách bảo mật" },
      { label: "Chính sách đổi trả" },
      { label: "Hướng dẫn mua hàng" },
      { label: "Quy định sử dụng" },
    ],
  },
  {
    title: "LIÊN HỆ",
    items: [
      { label: "Địa chỉ: Số 1 Võ Văn Ngân, Phường Linh Chiểu, TP. Thủ Đức, TP. Hồ Chí Minh" },
      { label: "Hotline: 1900 84 85" },
      { label: "Email: contact@medishop.vn" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#002d57] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#1e88e5] font-display text-lg font-bold">
              M
            </span>
            <span className="font-display text-xl font-bold tracking-tight">
              MEDISHOP
            </span>
          </div>
          <p className="max-w-md text-[14px] italic leading-relaxed text-white">
            MediShop - Hệ thống nhà thuốc cung cấp sản phẩm chăm sóc sức khỏe
            chính hãng, đồng hành cùng gia đình bạn mỗi ngày.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4 text-[14px] text-white transition-colors hover:text-[#1877f2]">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1877f2] text-xl font-bold">f</span>
              <span className="truncate">https://www.facebook.com/medishop.vn</span>
            </div>
            <div className="flex items-center gap-4 text-[14px] text-white transition-colors hover:text-[#ff0000]">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ff0000] text-lg font-bold">▶</span>
              <span className="truncate">https://www.youtube.com/@medishop</span>
            </div>
            <div className="flex items-center gap-4 text-[14px] text-white transition-colors hover:opacity-80">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .57.04.83.12V9.5a6.33 6.33 0 0 0-3.14-.83C3.95 8.67 1 11.62 1 15.26 1 18.9 3.95 21.85 7.59 21.85s6.59-2.95 6.59-6.59V9.11a8.27 8.27 0 0 0 5.41 2.02V7.68c-.62 0-1.21-.36-1.59-.99z"/></svg>
              </span>
              <span className="truncate">https://www.tiktok.com/@medishop</span>
            </div>
            <div className="flex items-center gap-4 text-[14px] text-white transition-colors hover:text-[#0068ff]">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white p-1 text-[12px] font-black text-[#0068ff]">Zalo</span>
              <span className="truncate">https://zalo.me/19008485</span>
            </div>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h2 className="text-[14px] font-bold uppercase tracking-widest text-white">
              {column.title}
            </h2>
            <ul className="mt-8 space-y-4 text-[14px] text-white/80">
              {column.items.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="block leading-relaxed">
                      {item.label.includes("1900 84 85") ? (
                        <>
                          Hotline:{" "}
                          <span className="font-extrabold text-[#1e88e5]">
                            1900 84 85
                          </span>
                        </>
                      ) : (
                        item.label
                      )}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto w-full max-w-7xl border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <p className="text-[14px] font-medium text-white/60">
            © 2026 MediShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
