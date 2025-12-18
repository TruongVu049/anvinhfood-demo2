"use client"

import { Star, Check, Truck, Shield, Info } from "lucide-react"
import { formatPrice } from "@/lib/data"

interface ProductInfoProps {
  product: {
    name: string
    price: number
    originalPrice: number
    discount: number
    rating: number
    reviewCount: number
    soldCount: number
    badges: string[]
    brand: string
    features: string[]
    specifications: {
      weight: string
      origin: string
      storage: string
      expiry: string
      capacity?: string
      power?: string
      material?: string
    }
  }
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="bg-white rounded-lg p-4 space-y-4">
      {/* Badges - Updated badge styling */}
      <div className="flex flex-wrap gap-2">
        {product.badges.includes("TOP DEAL") && (
          <span className="inline-flex items-center gap-1 bg-[#ff424e] text-white text-xs px-2 py-1 rounded font-medium">
            👍 TOP DEAL
          </span>
        )}
        {product.badges.includes("FREESHIP XTRA") && (
          <span className="inline-flex items-center bg-[#00ab56] text-white text-xs px-2 py-1 rounded font-medium">
            FREESHIP XTRA
          </span>
        )}
        <span className="inline-flex items-center bg-[#f0f8ff] text-[#0b74e5] text-xs px-2 py-1 rounded font-medium border border-[#0b74e5]/20">
          🔄 30 NGÀY ĐỔI TRẢ
        </span>
        {product.badges.includes("CHÍNH HÃNG") && (
          <span className="inline-flex items-center gap-1 bg-[#0b74e5] text-white text-xs px-2 py-1 rounded font-medium">
            ✓ CHÍNH HÃNG
          </span>
        )}
      </div>

      {/* Brand */}
      <div className="text-sm text-gray-500">
        Thương hiệu: <span className="text-[#0b74e5] font-medium cursor-pointer hover:underline">{product.brand}</span>
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold text-[#27272a] leading-tight">{product.name}</h1>

      {/* Rating & Sold - Updated to match Tiki exactly */}
      <div className="flex items-center gap-3 text-sm">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-[#27272a]">{product.rating}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200 fill-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-500">({product.reviewCount.toLocaleString()})</span>
        </div>
        <span className="text-gray-300">|</span>
        <span className="text-gray-500">Đã bán {(product.soldCount / 1000).toFixed(0)}k</span>
      </div>

      {/* Price - Updated price section styling */}
      <div className="bg-[#fafafa] rounded-lg p-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-[#ff424e]">{formatPrice(product.price)}</span>
          <span className="text-sm text-white bg-[#ff424e] px-1.5 py-0.5 rounded font-medium">
            -{product.discount}%
          </span>
          <span className="flex items-center gap-1">
            <span className="line-through text-gray-400">{formatPrice(product.originalPrice)}</span>
            <Info className="h-4 w-4 text-gray-400" />
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">Giá sau áp dụng mã khuyến mãi</p>

        {/* Coupons */}
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#0b74e5]">🎫</span>
            <span className="text-gray-700">
              Giảm <span className="font-semibold text-[#ff424e]">20.000đ</span> từ mã khuyến mãi của nhà bán
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#0b74e5]">🎫</span>
            <span className="text-gray-700">
              Giảm <span className="font-semibold text-[#ff424e]">50.000đ</span> từ mã khuyến mãi của Tiki
            </span>
          </div>
        </div>
      </div>

      {/* Color/Variant selector - Added variant selector like Tiki */}
      <div>
        <div className="text-sm text-gray-600 mb-2">Màu</div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 border-2 border-[#0b74e5] rounded-lg bg-blue-50">
            <div className="w-8 h-8 bg-gray-800 rounded"></div>
            <span className="text-sm font-medium">Đen</span>
            <Check className="h-4 w-4 text-[#0b74e5]" />
          </button>
        </div>
      </div>

      {/* Delivery info - Updated delivery section */}
      <div className="border rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-[#27272a]">Thông tin vận chuyển</h3>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
          </div>
          <button className="text-[#0b74e5] font-medium">Đổi</button>
        </div>

        <div className="bg-[#f0fff4] rounded-lg p-3">
          <div className="flex items-center gap-2">
            <span className="font-black text-[#00ab56] text-sm tracking-tight">NOW</span>
            <span className="font-medium text-[#27272a]">Giao siêu tốc 2h</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Trước 10h ngày mai: <span className="text-[#00ab56] font-medium">Miễn phí</span>{" "}
            <span className="text-gray-400 line-through">45.000đ</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Truck className="h-5 w-5 text-gray-400" />
          <span className="text-gray-600">Giao đúng chiều mai</span>
        </div>
        <p className="text-sm text-gray-600 ml-7">
          13h - 18h, 19/12: <span className="text-[#00ab56] font-medium">Miễn phí</span>{" "}
          <span className="text-gray-400 line-through">23.600đ</span>
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t">
          <Shield className="h-4 w-4" />
          <span>
            <span className="font-semibold text-[#00ab56]">FREESHIP XTRA</span> Freeship 15k đơn từ 45k, Freeship 30k
            đơn từ 100k <Info className="h-4 w-4 text-gray-400 inline" />
          </span>
        </div>
      </div>

      {/* Other offers */}
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold text-[#27272a] mb-3">Ưu đãi khác</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">12 Mã Giảm Giá</span>
          <div className="flex gap-2">
            <span className="border border-[#0b74e5] text-[#0b74e5] px-3 py-1 rounded text-sm">Giảm 20%</span>
            <span className="border border-[#0b74e5] text-[#0b74e5] px-3 py-1 rounded text-sm">Giảm 20%</span>
          </div>
        </div>
      </div>

      {/* Additional services - Added services section */}
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold text-[#27272a] mb-3">Dịch vụ bổ sung</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">TIKI CARD</span>
              </div>
              <span className="text-sm text-gray-700">Ưu đãi đến 600k với thẻ TikiCard</span>
            </div>
            <button className="text-[#0b74e5] text-sm font-medium">Đăng ký</button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-6 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">Pay Later</span>
              </div>
              <span className="text-sm text-gray-700">Mua trước trả sau</span>
            </div>
            <button className="text-[#0b74e5] text-sm font-medium">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  )
}
