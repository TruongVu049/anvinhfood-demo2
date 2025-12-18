"use client";

import { useRef } from "react";
import Image from "next/image";
import { products, formatPrice } from "@/lib/data";
import { Star, ChevronDown, Sparkles } from "lucide-react";

interface SimilarProductsProps {
  currentProductId: number;
}

export function SimilarProducts({ currentProductId }: SimilarProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const similarProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-[#27272a]">
          Sản phẩm tương tự
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {similarProducts.map((product, idx) => (
          <div key={product.id} className="border rounded-lg overflow-hidden">
            <div className="p-2">
              <div className="relative aspect-square bg-white rounded mb-2">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xs text-gray-800 line-clamp-2 min-h-[32px] leading-4">
                {product.name}
              </h3>
              {idx === 0 && (
                <p className="text-[10px] text-gray-500 mt-0.5">Đen</p>
              )}

              <button className="w-full mt-2 bg-[#0b74e5] text-white text-xs py-2 rounded hover:bg-[#0a68ce] transition-colors">
                Thêm vào giỏ
              </button>

              <div className="mt-2 text-[#ff424e] font-semibold text-sm">
                {formatPrice(product.price)}
              </div>

              <div className="flex items-center gap-1 mt-1 text-xs">
                <span className="text-[#27272a]">
                  {product.rating.toFixed(2)}
                </span>
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-gray-500">({product.reviewCount})</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-1 text-[#0b74e5] font-medium text-sm mx-auto mt-4">
        Xem thêm
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}
