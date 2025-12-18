"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, MapPin, Home, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const navLinks = ["điện gia dụng", "xe cộ", "mẹ & bé", "khỏe đẹp", "nhà cửa", "sách", "thể thao"]

const commitments = [
  { icon: "/checkmark-blue-icon.jpg", text: "100% hàng thật" },
  { icon: "/truck-delivery-icon.jpg", text: "Freeship mọi đơn" },
  { icon: "/money-back-guarantee-icon.png", text: "Hoàn 200% nếu hàng giả" },
  { icon: "/return-exchange-icon.jpg", text: "30 ngày đổi trả" },
  { icon: "/fast-delivery-rocket-icon.jpg", text: "Giao nhanh 2h" },
  { icon: "/price-tag-discount-icon.jpg", text: "Giá siêu rẻ" },
]

export function Header() {
  const [cartCount] = useState(0)

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top banner - Updated to match Tiki's pink/red gradient banner */}
      <div className="bg-gradient-to-r from-[#ff424e] to-[#ff424e] text-white text-center py-2 text-sm">
        Freeship đơn từ 45k, giảm nhiều hơn cùng{" "}
        <span className="font-bold text-yellow-300 underline cursor-pointer">FREESHIP XTRA</span>
      </div>

      {/* Main header */}
      <div className="bg-white border-b">
        <div className="max-w-[1240px] mx-auto px-4 py-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex-shrink-0">
              <div className="flex flex-col items-start">
                <span className="text-[32px] font-black text-[#0b74e5] tracking-tight leading-none">TIKI</span>
                <span className="text-xs text-[#f7941e] font-semibold">Tốt & Nhanh</span>
              </div>
            </Link>

            {/* Search - Updated styling to match Tiki */}
            <div className="flex-1 max-w-[680px]">
              <div className="relative flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <div className="flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input placeholder="Freeship đơn từ 45k" className="border-0 focus-visible:ring-0 h-10 pl-2" />
                <div className="h-6 w-px bg-gray-200 mx-2"></div>
                <Button
                  variant="ghost"
                  className="h-10 px-4 text-[#0b74e5] font-medium hover:bg-transparent hover:text-[#0b74e5]"
                >
                  Tìm kiếm
                </Button>
              </div>

              {/* Nav links */}
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                {navLinks.map((link) => (
                  <Link key={link} href="#" className="hover:text-[#0b74e5] transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right actions - Updated to match Tiki style */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 text-gray-700 hover:text-[#0b74e5] transition-colors">
                <Home className="h-5 w-5" />
                <span className="text-sm">Trang chủ</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#0b74e5] transition-colors">
                <User className="h-5 w-5" />
                <span className="text-sm">Tài khoản</span>
              </Link>
              <Link
                href="#"
                className="relative flex items-center text-gray-700 hover:text-[#0b74e5] transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-[#ff424e] text-white text-xs min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Commitments bar - Updated to match Tiki style */}
      <div className="bg-white border-b">
        <div className="max-w-[1240px] mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-gray-700 font-medium text-sm mr-2">Cam kết</span>
              {commitments.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-2 py-1 text-gray-600">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>Giao đến:</span>
              <span className="text-gray-900 font-medium underline cursor-pointer">Q. 1, P. Bến Nghé, Hồ Chí Minh</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
