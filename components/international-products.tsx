"use client";

import { useRef } from "react";
import Link from "next/link";
import { products } from "@/lib/data";
import { ProductCard } from "./product-card";
import { ChevronRight } from "lucide-react";

export function InternationalProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-3 md:py-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-lg mt-2 md:mt-4 px-2 md:px-4 border-2 border-blue-200">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🔥</span>
          <h2 className="text-sm md:text-base font-bold text-[#27272a]">
            VẬT LIỆU NHẬP KHẨU - CHẤT LƯỢNG CAO
          </h2>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1 text-[#0b74e5] text-xs md:text-sm font-medium hover:underline"
        >
          Xem tất cả →
        </Link>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[140px] md:w-[160px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Scroll buttons - hidden on mobile */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-50 z-10"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
