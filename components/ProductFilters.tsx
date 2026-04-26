"use client";

import { useProductStore } from "@/hooks/useStore";
import { Filter, SlidersHorizontal, ArrowUpDown, Banknote } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";

export default function ProductFilters() {
  const { 
    category, 
    setCategory, 
    sortBy, 
    setSortBy, 
    allProducts,
    priceRange,
    setPriceRange,
    resetFilters 
  } = useProductStore();

  // Get unique categories
  const categories = ["All", ...Array.from(new Set<string>(allProducts.map((p: Product) => p.category)))];

  const priceOptions = [
    { label: "Tất cả giá", range: [0, 100000000] as [number, number] },
    { label: "Dưới 500k", range: [0, 500000] as [number, number] },
    { label: "500k - 2tr", range: [500000, 2000000] as [number, number] },
    { label: "Trên 2tr", range: [2000000, 100000000] as [number, number] },
  ];

  return (
    <div className="flex flex-col gap-8 mb-10 bg-white p-8 rounded-[32px] border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.02)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Category Filters */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
              <Filter size={16} className="text-[#0090ff]" />
            </div>
            <span>Danh mục sản phẩm</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight transition-all ${
                  category === cat
                    ? "bg-[#0090ff] text-white shadow-lg shadow-blue-100 scale-105"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Price Filters */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center">
              <Banknote size={16} className="text-green-600" />
            </div>
            <span>Khoảng giá</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {priceOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setPriceRange(opt.range)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight transition-all ${
                  priceRange[0] === opt.range[0] && priceRange[1] === opt.range[1]
                    ? "bg-green-600 text-white shadow-lg shadow-green-100 scale-105"
                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort and Actions */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold">
            <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center">
              <ArrowUpDown size={16} className="text-orange-600" />
            </div>
            <span>Sắp xếp</span>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "price-asc" | "price-desc" | "default")}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border-none text-xs font-black uppercase tracking-tight text-slate-600 focus:ring-2 focus:ring-[#0090ff] outline-none cursor-pointer"
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
            </select>

            <button
              onClick={resetFilters}
              className="w-11 h-11 rounded-xl bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-all"
              title="Đặt lại bộ lọc"
            >
              <SlidersHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
