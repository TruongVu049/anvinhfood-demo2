"use client";

import { useRef } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "./product-card";
import { ChevronRight, ThumbsUp } from "lucide-react";
import Link from "next/link";

export function TopDeals() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const topProducts = products
    .filter((p) => p.badges.includes("TOP DEAL"))
    .slice(0, 12);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-3 md:py-4 bg-white rounded-lg mt-2 md:mt-4 px-2 md:px-4">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <ThumbsUp className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-yellow-500" />
          <h2 className="text-sm md:text-base font-bold text-[#ff424e]">
            DEAL SỐC HÔM NAY • GIẢM SÂU
          </h2>
        </div>
        <Link
          href="/category/top-deal"
          className="flex items-center gap-1 text-[#0b74e5] hover:text-[#0b74e5] text-xs md:text-sm font-medium"
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
          {[...topProducts, ...topProducts].map((product) => (
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
