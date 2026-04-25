"use client";
import Link from "next/link";
import { ShoppingCart, User, Home, Package, Info, Phone, Search, Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
        setMounted(true);
    });
    return () => cancelAnimationFrame(timer);
},[]);

  return (
    <header className="sticky top-0 z-50 shadow-sm transition-colors duration-300">
      {/* PHẦN 1: MENU CHÍNH */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Medishop */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200 dark:shadow-none">M</div>
            <span className="font-extrabold text-2xl tracking-tighter text-blue-600 uppercase">Medishop</span>
          </Link>

          {/* Cụm Menu + Tools */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-8">
              <NavLink href="/" icon={<Home size={22} />} label="Home" />
              <NavLink href="/products" icon={<Package size={22} />} label="Products" />
              <NavLink href="/about" icon={<Info size={22} />} label="About" />
              <NavLink href="/contact" icon={<Phone size={22} />} label="Contact" />
              
              <Link href="/cart" className="relative flex flex-col items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group transition-all">
                <div className="relative">
                  <ShoppingCart size={22} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-slate-900">
                    0
                  </span>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest">Cart</span>
              </Link>
            </nav>

            {/* Nút Login */}
            <div className="flex items-center gap-4 border-l pl-6 border-gray-200 dark:border-slate-700">
              <Link href="/login" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 font-bold transition-all">
                <User size={24} />
                <span className="text-sm hidden md:block">Login</span>
              </Link>

              {/* NÚT DARK MODE */}
              {mounted && (
                <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-yellow-400 hover:ring-4 hover:ring-blue-100 dark:hover:ring-slate-700 transition-all active:scale-90"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === "dark" ? <Sun size={20} fill="currentColor" /> : <Moon size={20} fill="currentColor" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* PHẦN 2: DẢI XANH NHẠT (SEARCH) */}
      <div className="bg-[#E3F2FD] dark:bg-slate-800 w-full border-b border-blue-100 dark:border-slate-700 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-end items-center">
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm y tế..."
              className="w-full bg-white dark:bg-slate-700 dark:text-white border border-transparent py-2.5 px-6 pr-12 rounded-full text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/30 transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex flex-col items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all group">
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-[11px] font-bold uppercase tracking-widest">{label}</span>
    </Link>
  );
}
