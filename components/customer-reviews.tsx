"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ThumbsUp, ThumbsDown, MessageCircle, Check, Share2 } from "lucide-react"
import { reviews } from "@/lib/data"

interface CustomerReviewsProps {
  productRating: number
  reviewCount: number
}

const filterTabs = [
  "Mới nhất",
  "Có hình ảnh",
  "Đã mua hàng",
  "5 sao",
  "4 sao",
  "3 sao",
  "2 sao",
  "1 sao",
  "Nhỏ gọn",
  "Chất liệu bền",
]

const ratingDistribution = [
  { stars: 5, count: 1717, percentage: 80 },
  { stars: 4, count: 291, percentage: 14 },
  { stars: 3, count: 54, percentage: 3 },
  { stars: 2, count: 24, percentage: 1 },
  { stars: 1, count: 61, percentage: 3 },
]

export function CustomerReviews({ productRating, reviewCount }: CustomerReviewsProps) {
  const [activeFilter, setActiveFilter] = useState("Mới nhất")

  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-base font-bold text-[#27272a] mb-6">Khách hàng đánh giá</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Rating overview - Updated styling */}
        <div>
          <div className="text-sm text-gray-500 mb-2">Tổng quan</div>
          <div className="flex items-center gap-4">
            <div className="text-5xl font-bold text-[#27272a]">{productRating}</div>
            <div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(productRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500 mt-1">({reviewCount.toLocaleString()} đánh giá)</div>
            </div>
          </div>

          {/* Rating bars - Updated colors */}
          <div className="mt-4 space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.stars} className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-0.5 w-16">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  {[...Array(5 - item.stars)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-gray-200 fill-gray-200" />
                  ))}
                </div>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#0b74e5] rounded-full" style={{ width: `${item.percentage}%` }} />
                </div>
                <span className="text-gray-500 w-10 text-right text-xs">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Summary - Updated styling to match Tiki */}
        <div className="bg-[#f5f5fa] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#0b74e5]">🤖</span>
            <span className="text-[#0b74e5] font-medium text-sm">Trợ lý AI</span>
            <span className="text-gray-500 text-sm">tổng hợp từ các đánh giá mới nhất</span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-gray-600 mb-2">
                Về sản phẩm: <span className="text-[#0b74e5]">(47 tích cực, 8 tiêu cực)</span>
              </div>
              <ul className="text-sm space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ab56] font-bold">+</span>
                  <span className="text-gray-700">Đun nước nhanh, thiết kế đẹp, chắc chắn.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ab56] font-bold">+</span>
                  <span className="text-gray-700">Chất liệu an toàn, dễ vệ sinh, không có mùi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ab56] font-bold">+</span>
                  <span className="text-gray-700">Sản phẩm chính hãng, có phiếu bảo hành.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff424e] font-bold">−</span>
                  <span className="text-gray-700">Nắp bình khó mở, nhựa trên nắp không bền.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm text-gray-600 mb-2">
                Về dịch vụ: <span className="text-[#0b74e5]">(22 tích cực, 5 tiêu cực)</span>
              </div>
              <ul className="text-sm space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ab56] font-bold">+</span>
                  <span className="text-gray-700">Giao hàng nhanh, đóng gói cẩn thận.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ab56] font-bold">+</span>
                  <span className="text-gray-700">Nhân viên giao hàng thân thiện, hỗ trợ tốt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ab56] font-bold">+</span>
                  <span className="text-gray-700">Giá cả hợp lý, nhiều khuyến mãi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff424e] font-bold">−</span>
                  <span className="text-gray-700">Một số trường hợp giao hàng trễ, thiếu quà tặng.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-white transition-colors">
              <ThumbsUp className="h-4 w-4 text-gray-500" />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-white transition-colors">
              <ThumbsDown className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Customer sentiment - Updated styling */}
      <div className="flex items-start gap-8 mb-6 pb-6 border-b">
        <div>
          <div className="text-sm text-gray-600 mb-3">Mọi người nghĩ gì về sản phẩm này?</div>
          <div className="flex gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-[#0b74e5] flex items-center justify-center">
                <span className="text-lg font-bold text-[#0b74e5]">99%</span>
              </div>
              <div className="text-xs text-gray-600 mt-1.5">Nhỏ gọn</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-4 border-[#00ab56] flex items-center justify-center">
                <span className="text-lg font-bold text-[#00ab56]">98%</span>
              </div>
              <div className="text-xs text-gray-600 mt-1.5">Chất liệu bền</div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="text-sm text-gray-600 mb-3">Tất cả hình ảnh (345)</div>
          <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 overflow-hidden relative">
                <Image
                  src={`/review-kettle-image-.jpg?height=64&width=64&query=review kettle image ${i + 1}`}
                  alt={`Review image ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <div className="w-16 h-16 bg-gray-800/80 rounded flex-shrink-0 flex items-center justify-center text-white text-sm font-medium">
              +337
            </div>
          </div>
        </div>
      </div>

      {/* Filter tabs - Updated styling */}
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <span className="text-sm text-gray-500 mr-2">Lọc theo</span>
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              activeFilter === tab
                ? "bg-[#0b74e5] text-white border-[#0b74e5]"
                : "bg-white text-gray-700 border-gray-300 hover:border-[#0b74e5]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Reviews list - Updated styling */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex gap-4">
              {/* User info */}
              <div className="w-36 flex-shrink-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-[#0b74e5]/10 text-[#0b74e5] rounded-full flex items-center justify-center font-bold text-sm">
                    {review.userId}
                  </div>
                  <div>
                    <div className="font-medium text-[#27272a] text-sm">{review.userName}</div>
                    <div className="text-xs text-gray-500">Đã tham gia {review.memberYears} năm</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 space-y-1.5 mt-3">
                  <div className="flex items-center gap-2">
                    <span>📝 Đã viết</span>
                    <span className="font-medium">{review.reviewCount} Đánh giá</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👍 Đã nhận</span>
                    <span className="font-medium">{review.helpfulCount} Lượt cảm ơn</span>
                  </div>
                </div>
              </div>

              {/* Review content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200 fill-gray-200"}`}
                    />
                  ))}
                  <span className="font-semibold text-[#27272a]">{review.title}</span>
                </div>

                {review.isPurchased && (
                  <div className="flex items-center gap-1 text-[#00ab56] text-sm mb-2">
                    <Check className="h-4 w-4" />
                    <span>Đã mua hàng</span>
                  </div>
                )}

                <p className="text-gray-700 text-sm mb-3 leading-relaxed">{review.content}</p>

                {review.images.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {review.images.map((img, idx) => (
                      <div key={idx} className="w-20 h-20 bg-gray-200 rounded overflow-hidden relative">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`Review image ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
                  <span>Màu: {review.variant}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Đánh giá vào {review.date} · Đã dùng {review.usageDays} ngày
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#0b74e5]">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">{review.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#0b74e5]">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{review.comments}</span>
                  </button>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-[#0b74e5] ml-auto">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm">Chia sẻ</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
