"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface ProductGalleryProps {
  images: string[]
  productName: string
  brand?: string
}

export function ProductGallery({ images, productName, brand }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 px-2">
        <div className="flex items-center gap-1">
          <span className="text-[#ff424e] font-bold text-xs">ĐIỆN GIA DỤNG</span>
          <Image src="/placeholder.svg?height=20&width=40" alt="Store badge" width={40} height={20} />
        </div>
        <div className="flex items-center gap-1.5 ml-auto">
          <span className="text-[#0b74e5] font-bold text-xs">TIKI</span>
          <span className="text-gray-400">x</span>
          <span className="text-gray-700 font-medium text-xs">{brand || "LocknLock"}</span>
        </div>
      </div>

      {/* Main image */}
      <div className="relative aspect-square bg-white rounded-lg overflow-hidden border">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${productName} - Ảnh ${selectedImage + 1}`}
          fill
          className="object-contain p-4"
        />

        {/* Badge - Updated styling */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-[#0b74e5] to-[#00c1f3] text-white px-3 py-1.5 rounded text-xs font-medium text-center">
            MIỄN PHÍ ĐỔI TRẢ TẬN NHÀ
          </div>
        </div>
      </div>

      {/* Thumbnails with scroll */}
      <div className="relative">
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-14 h-14 flex-shrink-0 rounded border-2 transition-colors overflow-hidden ${
                selectedImage === index ? "border-[#0b74e5]" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-contain" />
            </button>
          ))}
        </div>

        {/* Scroll arrow */}
        {images.length > 5 && (
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-white shadow rounded-full flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  )
}
