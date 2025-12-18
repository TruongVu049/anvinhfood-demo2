"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ProductDescriptionProps {
  description: string
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

export function ProductDescription({ description, specifications }: ProductDescriptionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg p-4 space-y-4">
      <h2 className="text-base font-bold text-[#27272a]">Mô tả sản phẩm</h2>

      <div className={`text-sm text-gray-700 leading-relaxed ${!expanded ? "line-clamp-6" : ""}`}>
        <p className="mb-3">{description}</p>

        {specifications.capacity && (
          <p>
            <strong>Dung tích:</strong> {specifications.capacity}
          </p>
        )}
        {specifications.power && (
          <p>
            <strong>Công suất:</strong> {specifications.power}
          </p>
        )}
        {specifications.material && (
          <p>
            <strong>Chất liệu:</strong> {specifications.material}
          </p>
        )}
        <p>
          <strong>Xuất xứ:</strong> {specifications.origin}
        </p>
        <p>
          <strong>Xuất xứ thương hiệu:</strong> Hàn Quốc
        </p>
        <p className="mt-3 text-gray-500">Để xoay 360 độ có thể nấu ở nhiều góc độ khác</p>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 text-[#0b74e5] font-medium text-sm mx-auto hover:underline"
      >
        {expanded ? "Thu gọn" : "Xem thêm"}
        <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
    </div>
  )
}
