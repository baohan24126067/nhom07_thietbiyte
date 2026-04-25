"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Breadcrumb from "@/components/Breadcrumb";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.id === String(params.id));

  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(product?.image);
  const [tab, setTab] = useState("Mô tả");

  if (!product) return <div className="p-10 text-center">Không tìm thấy sản phẩm</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/" },
          { label: product.name },
        ]}
      />

      {/* TOP */}
      <div className="grid md:grid-cols-2 gap-10 mt-6">

        {/* LEFT - IMAGE */}
        <div>
          <div className="bg-gray-50 p-6 rounded-3xl border">
            <img
              src={activeImg}
              alt={product.name}
              className="w-full h-[400px] object-contain"
            />
          </div>

          {/* THUMBNAIL */}
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImg(img)}
                className={`w-16 h-16 border rounded-xl cursor-pointer ${
                  activeImg === img ? "border-blue-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - INFO */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-blue-600 text-4xl font-bold">
            {product.price} / {product.unit}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-1 border rounded">-</button>
            <span className="text-xl font-bold">{qty}</span>
            <button onClick={() => setQty(q => q + 1)} className="px-3 py-1 border rounded">+</button>
          </div>

          {/* Button */}
          <div className="w-full md:w-fit">
            <AddToCartButton quantity={qty} />
          </div>

          {/* Short desc */}
          <ul className="list-disc pl-5 text-gray-600">
            {product.desc.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="grid md:grid-cols-4 gap-10 mt-12">

        {/* LEFT MENU */}
        <div className="space-y-3">
          {["Mô tả", "Công dụng", "Cách dùng", "Lưu ý", "Bảo quản"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`block w-full text-left px-4 py-2 rounded-xl transition-all duration-300 ${
                tab === t
                  ? "bg-blue-600 text-white shadow-md"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 bg-gray-50 p-8 rounded-3xl border border-gray-200 text-gray-800">

          {tab === "Mô tả" && <p className="text-gray-700">{product.moTa}</p>}
          {tab === "Công dụng" && <p className="text-gray-700">{product.congDung}</p>}
          {tab === "Cách dùng" && <p className="text-gray-700">{product.cachDung}</p>}
          {tab === "Lưu ý" && <p className="text-gray-700">{product.luuY}</p>}
          {tab === "Bảo quản" && <p className="text-gray-700">{product.baoQuan}</p>}

        </div>
      </div>
    </div>
  );
}
