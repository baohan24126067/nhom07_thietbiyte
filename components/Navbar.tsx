"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [cartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-200 border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-11 h-11 rounded-[14px] bg-[#007BFF] flex items-center justify-center">
              <span className="text-white font-black text-[28px] leading-none">M</span>
            </div>
            <span className="text-[28px] font-black tracking-tight leading-none">
              <span className="text-[#007BFF]">MEDI</span>
              <span className="text-[#4A4A4A]">SHOP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 ml-auto mr-32">
            <Link href="/" className="flex flex-col items-center gap-0.5 text-black hover:text-brand transition-colors group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.363 17.588C12.471 17.546 12.575 17.4833 12.675 17.4C13.2083 16.9167 13.7167 16.4417 14.2 15.975C14.6833 15.5083 15.1043 15.05 15.463 14.6C15.8217 14.15 16.109 13.7127 16.325 13.288C16.541 12.8633 16.6493 12.4507 16.65 12.05C16.65 11.3167 16.4 10.7083 15.9 10.225C15.4 9.74166 14.8 9.49999 14.1 9.49999C13.6667 9.49999 13.271 9.58766 12.913 9.76299C12.555 9.93833 12.2507 10.1673 12 10.45C11.75 10.1667 11.4377 9.93766 11.063 9.76299C10.6883 9.58833 10.3007 9.50066 9.9 9.49999C9.2 9.49999 8.6 9.74166 8.1 10.225C7.6 10.7083 7.35 11.3167 7.35 12.05C7.35 12.45 7.45833 12.8627 7.675 13.288C7.89167 13.7133 8.17933 14.1507 8.538 14.6C8.89667 15.0493 9.31733 15.5077 9.8 15.975C10.2827 16.4423 10.791 16.9173 11.325 17.4C11.425 17.4833 11.5293 17.546 11.638 17.588C11.7467 17.63 11.8673 17.6507 12 17.65C12.1327 17.6493 12.2537 17.6287 12.363 17.588ZM6 21C5.45 21 4.97933 20.8043 4.588 20.413C4.19667 20.0217 4.00067 19.5507 4 19V11.625L3 12.4C2.76667 12.5667 2.51667 12.6333 2.25 12.6C1.98333 12.5667 1.76667 12.4333 1.6 12.2C1.43333 11.9667 1.371 11.7167 1.413 11.45C1.455 11.1833 1.584 10.9667 1.8 10.8L10.775 3.92499C10.9583 3.79166 11.1543 3.69166 11.363 3.62499C11.5717 3.55833 11.784 3.52499 12 3.52499C12.216 3.52499 12.4287 3.55833 12.638 3.62499C12.8473 3.69166 13.043 3.79166 13.225 3.92499L22.225 10.8C22.4417 10.9667 22.5667 11.1833 22.6 11.45C22.6333 11.7167 22.5667 11.9667 22.4 12.2C22.2333 12.4167 22.0167 12.5417 21.75 12.575C21.4833 12.6083 21.2417 12.5417 21.025 12.375L20 11.625V19C20 19.55 19.8043 20.021 19.413 20.413C19.0217 20.805 18.5507 21.0007 18 21H6ZM6 19H18V10.1L12 5.52499L6 10.1V19Z" fill="black" />
              </svg>

              <span className="text-sm font-medium">Home</span>
            </Link>
            <Link href="/products" className="flex flex-col items-center gap-0.5 text-black hover:text-brand transition-colors group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L8.00001 5V7H5.00001C3.85001 7 3.12001 8 3.00001 9L2.00001 19C1.88001 20 2.54001 21 4.00001 21H20C21.46 21 22.12 20 22 19L21 9C20.88 8 20.06 7 19 7H16V5L14 3H10ZM10 5H14V7H10V5ZM11 10H13V13H16V15H13V18H11V15H8.00001V13H11V10Z" fill="currentColor" />
              </svg>
              <span className="text-sm font-medium">Products</span>
            </Link>
            <Link href="/about" className="flex flex-col items-center gap-0.5 text-black hover:text-brand transition-colors group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10C3 6.229 3 4.343 4.172 3.172C5.344 2.001 7.229 2 11 2H13C16.771 2 18.657 2 19.828 3.172C20.999 4.344 21 6.229 21 10V14C21 17.771 21 19.657 19.828 20.828C18.656 21.999 16.771 22 13 22H11C7.229 22 5.343 22 4.172 20.828C3.001 19.656 3 17.771 3 14V10Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 6V8M12 8V10M12 8H10M12 8H14M8 14H16M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-sm font-medium">About</span>
            </Link>
            <Link href="/contact" className="flex flex-col items-center gap-0.5 text-black hover:text-brand transition-colors group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17 2.74999C16.2763 2.74976 15.5645 2.93435 14.932 3.28627C14.2996 3.6382 13.7676 4.14579 13.3863 4.76094C13.005 5.37609 12.7871 6.07843 12.7533 6.80137C12.7195 7.52432 12.8708 8.24393 13.193 8.89199C13.353 9.21199 13.418 9.60199 13.313 9.99399L13.06 10.94L14.006 10.687C14.3757 10.5917 14.7675 10.6343 15.108 10.807C15.6817 11.0917 16.3124 11.2431 16.9528 11.2498C17.5933 11.2565 18.227 11.1183 18.8065 10.8456C19.3861 10.573 19.8965 10.1728 20.2997 9.67516C20.7028 9.17747 20.9883 8.5951 21.1347 7.97158C21.2811 7.34805 21.2847 6.69949 21.1452 6.07438C21.0057 5.44926 20.7268 4.86376 20.3291 4.36163C19.9315 3.85951 19.4256 3.45374 18.8491 3.17466C18.2726 2.89558 17.6405 2.75041 17 2.74999ZM11.25 6.99999C11.2503 5.74958 11.6582 4.53333 12.4118 3.53558C13.1655 2.53782 14.2239 1.81293 15.4266 1.47077C16.6293 1.12861 17.9107 1.18783 19.0767 1.63944C20.2428 2.09106 21.2298 2.91046 21.8882 3.97347C22.5467 5.03648 22.8406 6.28515 22.7256 7.53027C22.6106 8.77538 22.0928 9.94906 21.2508 10.8735C20.4087 11.7978 19.2883 12.4225 18.0593 12.6529C16.8303 12.8833 15.5597 12.7067 14.44 12.15C14.4277 12.1429 14.4141 12.1384 14.4 12.137H14.393L13.281 12.434C13.0437 12.4976 12.7938 12.4977 12.5564 12.4341C12.319 12.3706 12.1026 12.2457 11.9288 12.072C11.755 11.8983 11.63 11.6819 11.5663 11.4446C11.5026 11.2073 11.5025 10.9574 11.566 10.72L11.864 9.60699V9.59999C11.8622 9.58581 11.8575 9.57217 11.85 9.55999C11.4532 8.76508 11.2478 7.88842 11.25 6.99999ZM3.718 4.09199C4.944 2.80199 6.972 3.04299 7.986 4.47699L9.246 6.25999C10.057 7.40699 9.989 8.99999 9.021 10.02L8.776 10.277L8.774 10.283C8.761 10.32 8.729 10.435 8.761 10.655C8.828 11.111 9.179 12.036 10.607 13.539C12.039 15.047 12.907 15.403 13.31 15.468C13.4071 15.4901 13.5081 15.4877 13.604 15.461L14.012 15.031C14.886 14.111 16.248 13.93 17.347 14.562L19.257 15.662C20.89 16.602 21.27 18.901 19.965 20.275L18.545 21.77C18.102 22.237 17.497 22.636 16.75 22.71C14.926 22.89 10.701 22.655 6.272 17.992C2.138 13.64 1.353 9.85499 1.254 8.00599C1.205 7.09199 1.612 6.30899 2.148 5.74499L3.718 4.09199Z" fill="currentColor" />
              </svg>
              <span className="text-sm font-medium">Contact</span>
            </Link>
            <Link href="/cart" className="relative flex flex-col items-center gap-0.5 text-black hover:text-brand transition-colors">
              <div className="relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.03998 2.29199C2.85221 2.22609 2.64595 2.23747 2.46657 2.32365C2.28719 2.40982 2.14939 2.56372 2.08348 2.75149C2.01758 2.93927 2.02896 3.14553 2.11513 3.32491C2.20131 3.50429 2.35521 3.64209 2.54298 3.70799L2.80398 3.79899C3.47198 4.03399 3.91098 4.18899 4.23398 4.34799C4.53698 4.49699 4.66998 4.61799 4.75798 4.74599C4.84798 4.87799 4.91798 5.05999 4.95798 5.42299C4.99798 5.80299 4.99998 6.29799 4.99998 7.03799V9.63999C4.99998 12.582 5.06298 13.552 5.92998 14.466C6.79598 15.38 8.18998 15.38 10.98 15.38H16.282C17.843 15.38 18.624 15.38 19.175 14.93C19.727 14.48 19.885 13.716 20.2 12.188L20.7 9.76299C21.047 8.02299 21.22 7.15399 20.776 6.57699C20.332 5.99999 18.816 5.99999 17.131 5.99999H6.49198C6.48776 5.75351 6.47342 5.5073 6.44898 5.26199C6.39498 4.76499 6.27898 4.31199 5.99698 3.89999C5.71298 3.48399 5.33498 3.21799 4.89398 3.00099C4.48198 2.79899 3.95798 2.61499 3.34198 2.39799L3.03998 2.29199ZM13 8.24999C13.1989 8.24999 13.3897 8.32901 13.5303 8.46966C13.671 8.61032 13.75 8.80108 13.75 8.99999V10.25H15C15.1989 10.25 15.3897 10.329 15.5303 10.4697C15.671 10.6103 15.75 10.8011 15.75 11C15.75 11.1989 15.671 11.3897 15.5303 11.5303C15.3897 11.671 15.1989 11.75 15 11.75H13.75V13C13.75 13.1989 13.671 13.3897 13.5303 13.5303C13.3897 13.671 13.1989 13.75 13 13.75C12.8011 13.75 12.6103 13.671 12.4697 13.5303C12.329 13.3897 12.25 13.1989 12.25 13V11.75H11C10.8011 11.75 10.6103 11.671 10.4697 11.5303C10.329 11.3897 10.25 11.1989 10.25 11C10.25 10.8011 10.329 10.6103 10.4697 10.4697C10.6103 10.329 10.8011 10.25 11 10.25H12.25V8.99999C12.25 8.80108 12.329 8.61032 12.4697 8.46966C12.6103 8.32901 12.8011 8.24999 13 8.24999Z" fill="currentColor" />
                  <path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="currentColor" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-[#FF4D4F] border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-[9px] font-bold text-black leading-none">{cartCount}</span>
                  </span>
                )}
              </div>
              <span className="text-sm font-medium">Cart</span>
            </Link>
          </nav>

          {/* Cart + Login */}
          <div className="hidden md:flex items-center gap-5">

            <Link href="/login" className="flex items-center gap-1.5 text-black hover:text-brand transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.85 17.1C6.7 16.45 7.65 15.9377 8.7 15.563C9.75 15.1883 10.85 15.0007 12 15C13.15 14.9993 14.25 15.187 15.3 15.563C16.35 15.939 17.3 16.4513 18.15 17.1C18.7333 16.4167 19.1877 15.6417 19.513 14.775C19.8383 13.9083 20.0007 12.9833 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.105 4.77833 14.2173 3.99933 12 4C9.78267 4.00067 7.895 4.78 6.337 6.338C4.779 7.896 4 9.78333 4 12C4 12.9833 4.16267 13.9083 4.488 14.775C4.81333 15.6417 5.26733 16.4167 5.85 17.1ZM9.513 11.987C8.83767 11.313 8.5 10.484 8.5 9.5C8.5 8.516 8.83767 7.68667 9.513 7.012C10.1883 6.33733 11.0173 6 12 6C12.9827 6 13.812 6.33767 14.488 7.013C15.164 7.68833 15.5013 8.51733 15.5 9.5C15.4987 10.4827 15.1613 11.312 14.488 11.988C13.8147 12.664 12.9853 13.0013 12 13C11.0147 12.9987 10.1853 12.6613 9.512 11.988M12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z" fill="currentColor" />
              </svg>
              <span className="text-sm font-medium">Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-300 py-3 flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 px-2 py-2 text-black font-medium hover:text-brand" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/products" className="flex items-center gap-2 px-2 py-2 text-black font-medium hover:text-brand" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/about" className="flex items-center gap-2 px-2 py-2 text-black font-medium hover:text-brand" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" className="flex items-center gap-2 px-2 py-2 text-black font-medium hover:text-brand" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link href="/cart" className="flex items-center gap-2 px-2 py-2 text-black font-medium hover:text-brand" onClick={() => setMenuOpen(false)}>Cart ({cartCount})</Link>
            <Link href="/login" className="flex items-center gap-2 px-2 py-2 text-black font-medium hover:text-brand" onClick={() => setMenuOpen(false)}>Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}
