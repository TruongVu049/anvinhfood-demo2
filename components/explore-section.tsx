"use client";

import { products } from "@/lib/data";
import { ProductCard } from "./product-card";
import Image from "next/image";
import Link from "next/link";

export function ExploreSection() {
  return (
    <section className="py-4 bg-white rounded-lg mt-4 px-4">
      <h2 className="text-base font-bold text-[#27272a] mb-4">Gợi ý cho bạn</h2>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 mb-3 md:mb-4">
        <Link
          href="#"
          className="hidden lg:block lg:col-span-1 lg:row-span-2 relative rounded-lg overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300">
            <Image
              src="/combo.avif"
              alt="Featured product"
              fill
              className="object-cover opacity-90"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white p-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-[#0b74e5]">
                COMBO TIẾT KIỆM
              </span>
            </div>
            <h3 className="text-xs font-medium text-gray-800 line-clamp-2 mb-1">
              Combo Vật Liệu Xây Dựng - Tiết Kiệm Nhất
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">595.000 đ</span>
              <span className="text-xs text-gray-500 line-through">
                750.000 đ
              </span>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">
              Bảo trợ bởi An Vĩnh Building
            </p>
          </div>
        </Link>

        {products.slice(0, 5).map((product, idx) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} showAd={idx < 4} showSeller={true} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {products.slice(0, 12).map((product, idx) => (
          <ProductCard
            key={`more-${product.id}-${idx}`}
            product={product}
            showAd={idx % 3 === 0}
          />
        ))}
      </div>
    </section>
  );
}
