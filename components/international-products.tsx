"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"
import { internationalProducts, formatPrice } from "@/lib/data"

export function InternationalProducts() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: "smooth" })
    }
  }

  return (
    <section className="py-4 bg-white rounded-lg mt-4 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#27272a]">Hàng ngoại giá hot</h2>
        <Link href="#" className="flex items-center gap-1 text-[#0b74e5] text-sm font-medium">
          Xem tất cả
        </Link>
      </div>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {internationalProducts.map((product) => (
            <Link
              key={product.id}
              href="#"
              className="flex-shrink-0 w-[180px] border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
            >
              {/* Seller badge */}
              <div className="relative">
                <div className="absolute top-2 left-2 right-2 z-10 flex items-center gap-1">
                  <div className="bg-white/95 rounded px-1.5 py-0.5 text-[9px] text-gray-600 truncate flex items-center gap-1">
                    <span className="text-[#0b74e5] font-medium">TIKITRADING</span>
                    <span className="text-gray-400">|</span>
                    <span>{product.seller?.split("|")[1]?.trim()}</span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 z-10 bg-gray-200 text-gray-600 text-[9px] px-1 py-0.5 rounded">
                  AD
                </div>
                <div className="relative aspect-square bg-white p-3">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
              </div>

              {/* Badges */}
              <div className="px-2 pt-1 flex flex-wrap gap-0.5">
                {product.badges.includes("TOP DEAL") && (
                  <span className="inline-flex items-center gap-0.5 bg-[#ff424e] text-white text-[8px] px-1 py-0.5 rounded font-medium">
                    👍 TOP DEAL
                  </span>
                )}
                {product.badges.includes("FREESHIP XTRA") && (
                  <span className="inline-flex items-center bg-[#00ab56] text-white text-[8px] px-1 py-0.5 rounded font-medium">
                    FREESHIP XTRA
                  </span>
                )}
                {product.badges.includes("CHÍNH HÃNG") && (
                  <span className="inline-flex items-center text-[8px] px-1 py-0.5 rounded font-medium bg-[#0b74e5] text-white">
                    ✓ CHÍNH HÃNG
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-2">
                <h3 className="text-xs text-gray-800 line-clamp-2 mb-1 leading-4">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-2.5 w-2.5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-200 fill-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-[#ff424e]">{formatPrice(product.price)}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-[#00ab56] font-medium">-{product.discount}%</span>
                  <span className="text-[10px] text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                </div>

                {/* Origin */}
                <div className="mt-1 text-[10px] text-gray-500">{product.origin}</div>

                {/* Delivery */}
                <div className="flex items-center gap-1 mt-1 text-[10px]">
                  {product.nowDelivery ? (
                    <>
                      <span className="font-black text-[#00ab56]">NOW</span>
                      <span className="text-gray-500">Giao siêu tốc 2h</span>
                    </>
                  ) : (
                    <span className="text-gray-500">{product.deliveryTime}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={scroll}
          className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 z-10"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </section>
  )
}
