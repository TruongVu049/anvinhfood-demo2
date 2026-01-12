"use client";

import { useState, useEffect } from "react";
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
  { label: "xi măng & vữa", slug: "xi-mang-vua" },
  { label: "gạch xây", slug: "gach-xay-op-lat" },
  { label: "sơn nhà", slug: "son-chong-tham" },
  { label: "thép xây dựng", slug: "thep-xay-dung" },
  { label: "ống nước", slug: "ong-nuoc-phu-kien" },
  { label: "thiết bị điện", slug: "dien-den-chieu-sang" },
  { label: "công cụ xd", slug: "cong-cu-xay-dung" },
];

const commitments = [
  {
    icon: "/checkmark-blue-icon.jpg",
    text: "Vật liệu chính hãng 100%",
  },
  { icon: "/truck-delivery-icon.jpg", text: "Freeship đơn từ 500K" },
  { icon: "/fast-delivery-rocket-icon.jpg", text: "Giao nhanh trong ngày" },
  { icon: "/price-tag-discount-icon.jpg", text: "Giá tốt nhất thị trường" },
];

export function Header() {
  const [cartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 bg-gradient-to-r from-[#1ba8ff] to-[#0b74e5] text-white shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Top banner - Hidden when scrolled */}
      <div className={`hidden md:block text-center text-sm transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 py-0' : 'max-h-20 py-2'}`}>
        Freeship đơn từ 500K - Vật liệu xây dựng chất lượng, giá tốt, giảm nhiều hơn cùng{" "}
        <span className="font-bold text-yellow-300 underline cursor-pointer">
          ƯU ĐÃI SỐC
        </span>
      </div>

      {/* Main header */}
      <div className="bg-gradient-to-r from-[#1ba8ff] to-[#0b74e5] border-b shadow-sm">
        <div className={`max-w-[1240px] mx-auto px-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
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
              <div className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <div className={`bg-white rounded-lg shadow-sm transition-all duration-300 ${isScrolled ? 'p-1' : 'p-1.5'}`}>
                  <Image
                    src="/Logo-MeU.png"
                    alt="MeU Building Materials Logo"
                    width={32}
                    height={32}
                    className={`object-contain transition-all duration-300 ${isScrolled ? 'w-6 h-6' : 'w-8 h-8'}`}
                  />
                </div>
                <div className={`flex flex-col transition-all duration-300 ${isScrolled ? 'hidden md:flex' : 'flex'}`}>
                  <span className={`font-bold leading-tight transition-all duration-300 ${isScrolled ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>MeU Materials</span>
                  <span className={`font-medium text-blue-100 leading-tight transition-all duration-300 ${isScrolled ? 'text-[9px] md:text-[10px]' : 'text-[10px] md:text-xs'}`}>Vật Liệu Xây Dựng</span>
                </div>
              </div>
            </Link>

            {/* Search - Updated styling to match Tiki */}
            <div className="flex-1 max-w-[680px] text-white">
              <div className={`relative flex items-center border-2 border-[#0b74e5] rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-300 ${isScrolled ? 'h-8 md:h-9' : 'h-9 md:h-10'}`}>
                <div className="flex items-center pl-2 md:pl-3">
                  <Search className={`text-gray-500 transition-all duration-300 ${isScrolled ? 'h-3.5 w-3.5 md:h-4 md:w-4' : 'h-4 w-4 md:h-5 md:w-5'}`} />
                </div>
                <Input
                  placeholder="Tìm vật liệu, ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`border-0 focus-visible:ring-0 pl-2 text-sm text-gray-900 placeholder:text-gray-500 transition-all duration-300 ${isScrolled ? 'h-8 md:h-9' : 'h-9 md:h-10'}`}
                />
                <Button
                  variant="ghost"
                  onClick={handleSearch}
                  className={`hidden md:flex px-4 text-white bg-[#0b74e5] font-medium hover:text-white cursor-pointer hover:bg-[#0a68ce] rounded-none transition-all duration-300 ${isScrolled ? 'h-9' : 'h-10'}`}
                >
                  Tìm kiếm
                </Button>
              </div>

              {/* Nav links - hidden on mobile and when scrolled */}
              <div className={`hidden lg:flex items-center gap-4 text-sm text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 mt-0' : 'max-h-20 mt-2'}`}>
                {navLinks.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/category/${link.slug}`}
                    className="hover:text-yellow-300 transition-colors capitalize"
                  >
                    {link.label}
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
                key={link.slug}
                href={`/category/${link.slug}`}
                className="block py-3 text-sm text-gray-700 hover:text-[#0b74e5] border-b capitalize"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
