"use client";

import { useState } from "react";
import { Minus, Plus, Star, Search } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/data";

interface BuyBoxProps {
  product: {
    price: number;
    image?: string;
    seller: {
      name: string;
      isOfficial: boolean;
      rating: number;
      reviewCount: number;
    };
  };
}

export function BuyBox({ product }: BuyBoxProps) {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="bg-white rounded-lg border p-3 md:p-4 lg:sticky lg:top-0 space-y-3 md:space-y-4">
      {/* Variant display */}
      <div className="flex items-center gap-3 py-2 border-t border-b">
        <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
          <Image
            src={
              product.image ||
              "/placeholder.svg?height=40&width=40&query=product"
            }
            alt="Variant"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <span className="text-sm font-medium text-[#27272a]">Màu Trắng</span>
      </div>

      {/* Quantity - Updated quantity selector */}
      <div>
        <div className="text-sm text-gray-600 mb-2">Số Lượng</div>
        <div className="flex items-center gap-0">
          <button
            onClick={decreaseQuantity}
            className="w-8 h-8 border border-r-0 rounded-l flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4 text-gray-500" />
          </button>
          <div className="w-10 h-8 border flex items-center justify-center">
            <span className="font-medium text-[#27272a]">{quantity}</span>
          </div>
          <button
            onClick={increaseQuantity}
            className="w-8 h-8 border border-l-0 rounded-r flex items-center justify-center hover:bg-gray-50"
          >
            <Plus className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Total */}
      <div>
        <div className="text-sm text-gray-600 mb-1">Tạm tính</div>
        <div className="text-2xl font-bold text-[#27272a]">
          {formatPrice(product.price * quantity)}
        </div>
      </div>

      {/* Action buttons - Updated button styling to match Tiki */}
      <div className="space-y-2">
        <button className="w-full bg-[#ff424e] hover:bg-[#ff424e]/90 text-white font-semibold py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base">
          Mua ngay
        </button>
        <button className="w-full border-2 border-[#0b74e5] text-[#0b74e5] hover:bg-blue-50 font-semibold py-2.5 md:py-3 rounded-lg transition-colors text-sm md:text-base">
          Thêm vào giỏ
        </button>
      </div>

      {/* Promo banner - Updated promo banner */}
      <div className="bg-gradient-to-r from-[#1a2b49] to-[#2d3a5c] rounded-lg p-4 text-white overflow-hidden relative">
        <p className="text-sm font-bold text-white">Khuyến mãi tháng 1</p>
        <p className="text-yellow-400 font-bold">Vô vàn deal hot</p>
        <div className="flex gap-1 mt-2">
          <span className="bg-[#ff424e] text-[10px] px-2 py-0.5 rounded">
            Giảm đến 30%
          </span>
          <span className="bg-[#ff424e] text-[10px] px-2 py-0.5 rounded">
            Coupon 300K
          </span>
        </div>
      </div>
    </div>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
