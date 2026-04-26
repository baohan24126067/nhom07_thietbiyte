"use client";

import Image from "next/image";

import Link from "next/link";
import { HeartPulse, Pill, HeartHandshake } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="bg-[#F0F7FF] overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative h-[400px] flex items-center">
        {/* Background Image - Now restricted within the max-w container to match products grid */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[85%] z-0">
          <Image
            src="/hero-banner.png"
            alt="Gia đình sức khỏe"
            fill
            className="object-cover lg:object-left"
            priority
          />
          {/* Gradient and blur overlay to make text readable over the image */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] bg-gradient-to-r from-[#F0F7FF] via-[#F0F7FF]/70 to-transparent z-10" />
        </div>

        <div className="px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-0 py-8 lg:py-0">

            {/* Left Content Section - Overlays the image */}
            <div className="w-full lg:w-[55%] text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-[36px] sm:text-[48px] lg:text-[52px] font-black leading-[1.2] mb-6">
                <span className="text-slate-900">Mua sắm </span>
                <span className="text-[#007BFF]">AN TÂM </span>
                <span className="text-slate-900">—</span>
                <br />
                <span className="text-[#007BFF]">SỐNG KHỎE </span>
                <span className="text-slate-900">Mỗi ngày</span>
              </h1>

              <div className="text-[17px] sm:text-[19px] text-slate-900 italic font-medium leading-relaxed mb-10 max-w-[500px] mx-auto lg:mx-0">
                <p>MediShop đồng hành cùng gia đình bạn</p>
                <p>trên hành trình chăm sóc sức khỏe mỗi ngày.</p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-[#007BFF] text-white text-[18px] font-black uppercase tracking-wide shadow-lg shadow-blue-100 hover:bg-[#0069d9] transition-all"
                >
                  KHÁM PHÁ NGAY
                </Link>
              </div>
            </div>

            {/* Right Area - Spacing */}
            <div className="w-full lg:w-[45%] relative h-[300px] lg:h-[400px] pointer-events-none">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
