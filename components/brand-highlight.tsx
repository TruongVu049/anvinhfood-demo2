"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { featuredBrands } from "@/lib/data"

export function BrandHighlight() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-4 bg-white rounded-lg mt-4 px-4">
      <h2 className="text-base font-bold text-[#27272a] mb-4">Thương hiệu nổi bật</h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featuredBrands.map((brand) => (
            <Link
              key={brand.id}
              href="#"
              className="flex-shrink-0 w-[200px] border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Brand promo image */}
              <div className="relative h-[140px] bg-gradient-to-br from-pink-100 to-blue-100">
                <Image src={brand.image || "/placeholder.svg"} alt={brand.name} fill className="object-contain p-2" />
              </div>
              {/* Brand logo & info */}
              <div className="p-3 bg-white">
                <div className="h-8 flex items-center mb-1">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={80}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-gray-700">{brand.promo}</p>
                <p className="text-xs text-gray-500">{brand.discount}</p>
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
