"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { formatPrice } from "@/lib/data";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviewCount: number;
    soldCount: number;
    image: string;
    badges: string[];
    nowDelivery: boolean;
    deliveryTime: string;
    origin?: string;
    seller?: { name: string };
  };
  showAd?: boolean;
  showSeller?: boolean;
}

export function ProductCard({
  product,
  showAd = false,
  showSeller = false,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col hover-lift"
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-white p-2">
        {/* Seller badge at top */}
        {showSeller && product.seller && (
          <div className="absolute top-2 left-2 right-10 z-10">
            <div className="flex items-center gap-1 bg-white/90 rounded px-1 py-0.5">
              <span className="text-[9px] text-gray-600 truncate">
                {product.seller.name}
              </span>
            </div>
          </div>
        )}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Badges row - Updated badge styling to match Tiki */}
      <div className="px-2 pt-2 flex flex-wrap gap-0.5">
        {product.badges.includes("TOP DEAL") && (
          <span className="inline-flex items-center gap-0.5 bg-[#ff424e] text-white text-[9px] px-1 py-0.5 rounded font-medium">
            <span className="text-[8px]">👍</span> TOP DEAL
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-2 flex-1 flex flex-col">
        <h3 className="text-xs text-gray-800 line-clamp-2 mb-1.5 leading-4 min-h-[32px]">
          {product.name}
        </h3>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="flex items-center gap-0.5 mb-1.5">
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
        )}

        {/* Price - Updated price styling */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-semibold text-[#ff424e]">
              {formatPrice(product.price)}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[11px] text-[#00ab56] font-medium">
              -{product.discount}%
            </span>
            <span className="text-[11px] text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          </div>
        </div>

        {/* Origin badge */}
        {product.origin && (
          <div className="mt-1.5 text-[10px] text-gray-500">
            {product.origin}
          </div>
        )}

        {/* Delivery - Updated NOW badge styling */}
        <div className="flex items-center gap-1 mt-1.5 text-[10px]">
          {product.nowDelivery ? (
            <>
              <span
                className="font-black text-[#00ab56] tracking-tight"
                style={{ fontFamily: "system-ui" }}
              >
                NOW
              </span>
              <span className="text-gray-500">Giao trong ngày</span>
            </>
          ) : (
            <span className="text-gray-500">{product.deliveryTime}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
