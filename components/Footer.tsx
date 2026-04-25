import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { SiTiktok, SiZalo } from "react-icons/si";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Logo + mô tả */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-[#003366] rounded flex items-center justify-center font-bold">
              M
            </div>
            <span className="font-bold text-xl uppercase tracking-tight">
              Medishop
            </span>
          </div>

          <p className="text-sm text-blue-100 leading-relaxed">
            Hệ thống nhà thuốc cung cấp sản phẩm chăm sóc sức khỏe chính hãng, đồng hành cùng gia đình bạn.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <SocialIcon icon={<FaFacebook size={18} />} title="Facebook" />
            <SocialIcon icon={<FaYoutube size={18} />} title="Youtube" />
            <SocialIcon icon={<SiTiktok size={18} />} title="Tiktok" />
            <SocialIcon icon={<SiZalo size={18} />} title="Zalo" />
          </div>
        </div>

        {/* Điều hướng */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase border-b border-blue-400 w-fit pb-1">
            Điều hướng
          </h4>
          <ul className="space-y-3 text-sm text-blue-100">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/products">Sản phẩm</Link></li>
            <li><Link href="#">Về chúng tôi</Link></li>
            <li><Link href="#">Tin tức y tế</Link></li>
          </ul>
        </div>

        {/* Hỗ trợ */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase border-b border-blue-400 w-fit pb-1">
            Hỗ trợ khách hàng
          </h4>
          <ul className="space-y-3 text-sm text-blue-100">
            <li><Link href="#">Chính sách bảo mật</Link></li>
            <li><Link href="#">Chính sách đổi trả</Link></li>
            <li><Link href="#">Hướng dẫn mua hàng</Link></li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase border-b border-blue-400 w-fit pb-1">
            Liên hệ
          </h4>
          <ul className="space-y-4 text-sm text-blue-100">
            <li className="flex gap-3">
              <MapPin size={18} className="text-blue-300" />
              <span>Số 1 Võ Văn Ngân, Thủ Đức</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-blue-300" />
              <span>Hotline: 1900 84 85</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-blue-300" />
              <span>Email: contact@medishop.vn</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-blue-800 text-center text-[10px] text-blue-300 uppercase tracking-widest">
        © 2026 MediShop. All rights reserved.
      </div>
    </footer>
  );
}

function SocialIcon({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div
      className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-500 transition-all cursor-pointer"
      title={title}
    >
      {icon}
    </div>
  );
}
