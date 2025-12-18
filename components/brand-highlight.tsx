"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { featuredBrands } from "@/lib/data";

export function BrandHighlight() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-3 md:py-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-lg mt-2 md:mt-4 px-2 md:px-4 border-2 border-purple-200">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⭐</span>
          <h2 className="text-sm md:text-base font-bold text-[#27272a]">
            Thương hiệu nổi bật
          </h2>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full font-bold">
            HOT
          </span>
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
          className="flex gap-2 md:gap-3 lg:gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredBrands.map((brand) => (
            <Link
              key={brand.id}
              href="#"
              className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] border-2 border-purple-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-1 bg-white snap-start"
            >
              {/* Brand promo image */}
              <div className="relative h-[90px] sm:h-[110px] md:h-[130px] lg:h-[140px] bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
                <Image
                  src={brand.image || "/placeholder.svg"}
                  alt={brand.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              {/* Brand logo & info */}
              <div className="p-2 md:p-3 bg-white">
                <div className="h-6 md:h-8 flex items-center mb-1">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={70}
                    height={20}
                    className="object-contain md:w-20 md:h-6"
                  />
                </div>
                <p className="text-[10px] md:text-xs text-gray-700 font-medium">
                  {brand.promo}
                </p>
                <p className="text-[10px] md:text-xs text-red-600 font-bold">
                  {brand.discount}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={scroll}
          className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-lg rounded-full items-center justify-center hover:bg-gray-50 z-10"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
