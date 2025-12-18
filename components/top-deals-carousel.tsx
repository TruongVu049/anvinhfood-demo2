"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { products, formatPrice } from "@/lib/data"

export function TopDealsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const similarProducts = products.slice(0, 8)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="bg-white rounded-lg p-4 mt-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#27272a]">Sản phẩm tương tự</h2>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {similarProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="flex-shrink-0 w-[140px] border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* AD badge */}
              <div className="relative">
                <div className="absolute top-1 right-1 bg-gray-200 text-gray-600 text-[9px] px-1 py-0.5 rounded z-10">
                  AD
                </div>
                <div className="relative aspect-square bg-white p-2">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
              </div>

              <div className="p-2">
                <h3 className="text-[11px] text-gray-800 line-clamp-2 mb-1 leading-4">{product.name}</h3>
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-200"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm font-semibold text-[#ff424e]">{formatPrice(product.price)}</div>
              </div>
            </Link>
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

      {/* Top Deals section */}
      <div className="mt-6 pt-4 border-t">
        <h3 className="text-base font-bold text-[#27272a] mb-4">Top Deals</h3>
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none" }}>
            {similarProducts.slice(0, 4).map((product) => (
              <Link
                key={`deal-${product.id}`}
                href={`/product/${product.slug}`}
                className="flex-shrink-0 w-[140px] border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square bg-white p-2">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
                <div className="p-2">
                  <h3 className="text-[11px] text-gray-800 line-clamp-2 mb-1 leading-4">{product.name}</h3>
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-200"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-[#ff424e]">{formatPrice(product.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
