"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import productsData from "@/lib/products.json";

export interface Product {
  id: number;
  name: string;
  price: number;
  unit?: string;
  category: string;
  image: string;
  description?: string;
  specs?: string;
}

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [priceSort, setPriceSort] = useState("none"); // "none" | "asc" | "desc"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Derive unique categories from data
  const categories = useMemo(() => {
    const cats = Array.from(new Set(productsData.map((p) => p.category)));
    return cats;
  }, []);

  // Process products: Filter -> Sort
  const processedProducts = useMemo(() => {
    let result = productsData as Product[];

    // Filter by category
    if (categoryFilter !== "all") {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Filter by price range
    if (priceFilter !== "all") {
      result = result.filter((p) => {
        if (priceFilter === "under100") return p.price < 100000;
        if (priceFilter === "100to500") return p.price >= 100000 && p.price <= 500000;
        if (priceFilter === "500to1m") return p.price > 500000 && p.price <= 1000000;
        if (priceFilter === "over1m") return p.price > 1000000;
        return true;
      });
    }

    // Sort by price
    if (priceSort === "asc") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (priceSort === "desc") {
      result = result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, 
  
  [categoryFilter, priceFilter, priceSort]);

  // Pagination calculations
  const totalPages = Math.ceil(processedProducts.length / itemsPerPage);
  
  // Ensure current page is within bounds when filtering reduces total pages
  const validCurrentPage = Math.min(currentPage, totalPages > 0 ? totalPages : 1);
  if (validCurrentPage !== currentPage) {
    setCurrentPage(validCurrentPage);
  }

  const paginatedProducts = processedProducts.slice(
    (validCurrentPage - 1) * itemsPerPage,
    validCurrentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full">

      {/* Breadcrumb + Search */}
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-[#929090] text-sm font-medium">
            <Link href="/" className="hover:text-brand transition-colors">Trang chủ</Link>
            <span>&nbsp;&gt;&nbsp;</span>
            <span>Thiết bị y tế</span>
          </nav>

          {/* Search Bar */}
          <div className="relative w-full sm:w-[450px]">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-11 pl-6 pr-12 rounded-full border border-gray-300 bg-white text-[16px] font-normal placeholder-[#A39A9A] focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#898080]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <HeroBanner />

      {/* Filter and Sort UI (Between Banner and Products Grid) */}
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8 mb-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Danh mục:</span>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/20 cursor-pointer"
              >
                <option value="all">Tất cả danh mục</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Khoảng giá:</span>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/20 cursor-pointer"
              >
                <option value="all">Tất cả giá</option>
                <option value="under100">Dưới 100.000đ</option>
                <option value="100to500">100.000đ - 500.000đ</option>
                <option value="500to1m">500.000đ - 1.000.000đ</option>
                <option value="over1m">Trên 1.000.000đ</option>
              </select>
            </div>

            {/* Price Sort */}
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Sắp xếp:</span>
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand/20 cursor-pointer"
              >
                <option value="none">Mặc định</option>
                <option value="asc">Giá: Thấp đến Cao</option>
                <option value="desc">Giá: Cao đến Thấp</option>
              </select>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 font-medium">
            Hiển thị {paginatedProducts.length} trên tổng số {processedProducts.length} sản phẩm
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-2">
        {paginatedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => {
                    console.log(`Added ${product.name} to cart`);
                  }}
                />
              ))}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={validCurrentPage === 1}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Trước
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNum = idx + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
                          validCurrentPage === pageNum
                            ? "bg-brand text-white"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={validCurrentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                  Sau
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center py-20 text-gray-500 text-lg">
            Không tìm thấy sản phẩm phù hợp.
          </div>
        )}
      </main>

    </div>
  );
}
