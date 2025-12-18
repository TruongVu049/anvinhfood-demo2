"use client"

import { useRef } from "react"
import { products } from "@/lib/data"
import { ProductCard } from "./product-card"
import { ChevronRight, ThumbsUp } from "lucide-react"
import Link from "next/link"

export function TopDeals() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const topProducts = products.filter((p) => p.badges.includes("TOP DEAL")).slice(0, 12)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-4 bg-white rounded-lg mt-4 px-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ThumbsUp className="h-5 w-5 text-yellow-500 fill-yellow-500" />
          <h2 className="text-base font-bold text-[#ff424e]">TOP DEAL • SIÊU RẺ</h2>
        </div>
        <Link
          href="/category/top-deal"
          className="flex items-center gap-1 text-[#0b74e5] hover:text-[#0b74e5] text-sm font-medium"
        >
          Xem tất cả
        </Link>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {topProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[160px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 z-10"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </section>
  )
}
