"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  MapPin,
  Home,
  User,
  Menu,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navLinks = [
  "thực phẩm tươi",
  "cá, hải sản",
  "thịt, trứng",
  "rau củ",
  "đồ khô",
  "đồ ăn vặt",
  "combo",
];

const commitments = [
  {
    icon: "/checkmark-blue-icon.jpg",
    text: "Đảm bảo vệ sinh an toàn thực phẩm",
  },
  { icon: "/truck-delivery-icon.jpg", text: "Freeship mọi đơn" },
  { icon: "/fast-delivery-rocket-icon.jpg", text: "Giao nhanh 2h" },
  { icon: "/price-tag-discount-icon.jpg", text: "Giá siêu rẻ" },
];

export function Header() {
  const [cartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(
        `/category/search?q=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className="z-50 bg-gradient-to-r from-[#1ba8ff] to-[#0b74e5] text-white">
      {/* Top banner - Updated to match Tiki's pink/red gradient banner */}
      <div className="hidden md:block  text-center py-2 text-sm">
        Freeship đơn từ 0đ - Thực phẩm tươi ngon giao nhanh 2h, giảm nhiều hơn
        cùng{" "}
        <span className="font-bold text-yellow-300 underline cursor-pointer">
          FREESHIP XTRA
        </span>
      </div>

      {/* Main header */}
      <div className="bg-gradient-to-r from-[#1ba8ff] to-[#0b74e5] border-b shadow-sm">
        <div className="max-w-[1240px] mx-auto px-4 py-3">
          <div className="flex items-start justify-between  gap-2 md:gap-6">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 -ml-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Frozen Food Logo"
                  width={48}
                  height={48}
                  className="w-44 h-auto object-contain"
                />
              </div>
            </Link>

            {/* Search - Updated styling to match Tiki */}
            <div className="flex-1 max-w-[680px] text-white">
              <div className="relative flex items-center border-2 border-[#0b74e5] rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center pl-2 md:pl-3">
                  <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                </div>
                <Input
                  placeholder="Tìm thực phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="border-0 focus-visible:ring-0 h-9 md:h-10 pl-2 text-sm text-gray-900 placeholder:text-gray-500"
                />
                <Button
                  variant="ghost"
                  onClick={handleSearch}
                  className="hidden md:flex h-10 px-4 text-white bg-[#0b74e5] font-medium hover:text-white cursor-pointer hover:bg-[#0a68ce] rounded-none"
                >
                  Tìm kiếm
                </Button>
              </div>

              {/* Nav links - hidden on mobile */}
              <div className="hidden lg:flex items-center gap-4 mt-2 text-sm text-white">
                {navLinks.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="hover:text-yellow-300 transition-colors capitalize"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right actions - Updated to match Tiki style */}
            <div className="flex items-center gap-3 md:gap-6">
              <Link
                href="#"
                className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
              >
                <User className="h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden md:inline text-sm">Tài khoản</span>
              </Link>
              <Link
                href="#"
                className="relative flex items-center text-white hover:text-yellow-300 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
                <span className="absolute -top-2 -right-2 bg-[#ff424e] text-white text-xs min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Commitments bar - Updated to match Tiki style */}
      <div className="bg-white border-b overflow-x-auto">
        <div className="max-w-[1240px] mx-auto px-4 py-2">
          <div className="flex items-center justify-between min-w-max md:min-w-0">
            <div className="flex items-center gap-1">
              <span className="hidden md:inline text-gray-700 font-medium text-sm mr-2">
                Cam kết
              </span>
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2 py-1 text-gray-600"
                >
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt=""
                    width={16}
                    height={16}
                    className="object-contain flex-shrink-0"
                  />
                  <span className="text-xs md:text-sm whitespace-nowrap">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <nav className="px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="block py-3 text-sm text-gray-700 hover:text-[#0b74e5] border-b capitalize"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
