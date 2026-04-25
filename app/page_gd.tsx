"use client";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb"; 
import AddToCartButton from "../components/AddToCartButton";
import { products } from "@/data/products";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 bg-white min-h-screen">
      
      {/* 1. BREADCRUMB */}
      <div className="mb-6">
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Thiết bị y tế" }, { label: "Máy đo huyết áp" }]} />
      </div>
      
      {/* 2. BANNER HERO */}
      <section className="relative w-full h-[400px] md:h-[480px] bg-[#E3F2FD] rounded-[40px] overflow-hidden flex items-center mb-12 shadow-sm">
        {/* Lớp nội dung chữ */}
        <div className="relative z-10 pl-8 md:pl-20 w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 leading-tight uppercase tracking-tighter">
            Mua sắm <span className="text-blue-600">an tâm</span> — <br />
            <span className="text-blue-600">Sống khỏe</span> mỗi ngày
          </h1>
          <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-md">
            MediShop đồng hành cùng gia đình bạn <br />
            trên hành trình chăm sóc sức khỏe mỗi ngày.
          </p>
          <button className="bg-blue-600 text-white py-4 px-10 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all w-fit shadow-lg shadow-blue-100 uppercase">
            Khám phá ngay
          </button>
        </div>

        <div className="absolute top-0 right-0 h-full w-full md:w-[70%] z-0">
        <img 
          src="/image/banner-doctor.png"
          alt="Bác sĩ MediShop" 
          className="h-full w-full object-contain object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E3F2FD] via-[#E3F2FD]/30 to-transparent w-[50%] md:block hidden" />
    </div>
      </section>

      {/* 3. DANH SÁCH SẢN PHẨM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border border-gray-100 p-6 rounded-3xl flex flex-col gap-4 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 group bg-white"
          >
            <Link href={`/products/${product.id}`} className="block cursor-pointer">
              <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-50 transition-colors mb-4 border border-gray-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-base font-bold h-12 overflow-hidden text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                {product.name}
              </h3>
            </Link>

            <div className="mt-auto space-y-4">
              <p className="bg-blue-600 text-white w-fit px-6 py-2 rounded-xl font-black text-sm shadow-md shadow-blue-50">
                {product.price}
              </p>

              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                ĐVT: {product.unit}
              </p>

              <div className="pt-2">
                <AddToCartButton />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
