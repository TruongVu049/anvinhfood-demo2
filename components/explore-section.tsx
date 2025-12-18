"use client"

import { products } from "@/lib/data"
import { ProductCard } from "./product-card"
import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ExploreSection() {
  return (
    <section className="py-4 bg-white rounded-lg mt-4 px-4">
      <h2 className="text-base font-bold text-[#27272a] mb-4">Gợi ý hôm nay</h2>

      {/* Tab - Added tab styling like Tiki */}
      <div className="flex gap-2 mb-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0b74e5] rounded-lg border-2 border-[#0b74e5]">
          <div className="w-6 h-6 bg-[#0b74e5] rounded-full flex items-center justify-center">
            <User className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-medium">Dành cho bạn</span>
        </button>
      </div>

      {/* Featured brand banner - Updated featured banner */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {/* Large featured banner */}
        <Link href="#" className="col-span-1 row-span-2 relative rounded-lg overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-300">
            <Image src="/placeholder.svg?height=400&width=300" alt="Featured product" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white p-3">
            <div className="flex items-center gap-2 mb-1">
              <Image
                src="/placeholder.svg?height=24&width=60"
                alt="Brand"
                width={60}
                height={24}
                className="object-contain"
              />
            </div>
            <h3 className="text-xs font-medium text-gray-800 line-clamp-2 mb-1">
              Tinh Chất Tế Bào Gốc Tái Tạo Phục Hồi Trẻ Hoá Da Cấp Ẩm...
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900">769.000 đ</span>
              <span className="text-xs text-gray-500">-18%</span>
            </div>
            <p className="text-[10px] text-gray-500 mt-1">Tài trợ bởi CELLKEY-SCIEN...</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="bg-[#0b74e5] text-white text-[9px] px-1.5 py-0.5 rounded">✓ OFFICIAL</span>
              <button className="bg-[#0b74e5] text-white text-[10px] px-3 py-1 rounded">Xem thêm</button>
            </div>
          </div>
        </Link>

        {/* Product grid */}
        {products.slice(0, 5).map((product, idx) => (
          <div key={product.id} className="col-span-1">
            <ProductCard product={product} showAd={idx < 4} showSeller={true} />
          </div>
        ))}
      </div>

      {/* More products grid */}
      <div className="grid grid-cols-6 gap-2">
        {products.slice(0, 12).map((product, idx) => (
          <ProductCard key={`more-${product.id}-${idx}`} product={product} showAd={idx % 3 === 0} />
        ))}
      </div>
    </section>
  )
}
