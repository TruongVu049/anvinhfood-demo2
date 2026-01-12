"use client"

import { useState, useEffect } from "react"
import { products } from "@/lib/data"
import { ProductCard } from "./product-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 30,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const flashProducts = products.slice(0, 5)

  return (
    <section className="py-4">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-4 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold flex items-center gap-2">⚡ Flash Sale Vật Liệu XD</h2>
            <div className="flex items-center gap-1">
              <span className="bg-white text-red-500 px-2 py-1 rounded font-bold text-lg">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-xl font-bold">:</span>
              <span className="bg-white text-red-500 px-2 py-1 rounded font-bold text-lg">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-xl font-bold">:</span>
              <span className="bg-white text-red-500 px-2 py-1 rounded font-bold text-lg">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {flashProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
