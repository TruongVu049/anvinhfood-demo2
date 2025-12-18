"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { banners } from "@/lib/data";

export function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainBanners = banners.filter((b) => !b.isSecondary);
  const secondaryBanner = banners.find((b) => b.isSecondary);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mainBanners.length]);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mainBanners.length) % mainBanners.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mainBanners.length);
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 mb-4">
      {/* Main carousel */}
      <div className="relative flex-1 overflow-hidden rounded-lg">
        <div className="relative h-[180px] md:h-[240px]">
          {mainBanners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.title}
                fill
                className="object-cover"
              />
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md z-10"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md z-10"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {mainBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Secondary banner - Added secondary banner like Tiki */}
      {secondaryBanner && (
        <div className="w-[394px] relative rounded-lg overflow-hidden">
          <Image
            src={secondaryBanner.image || "/placeholder.svg"}
            alt={secondaryBanner.title}
            fill
            className="object-cover"
          />
          {/* Navigation dots */}
          <div className="absolute bottom-3 right-3 flex gap-1.5">
            <span className="w-6 h-1 bg-gray-400 rounded-full"></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          </div>

          {/* Arrow */}
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md">
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      )}
    </div>
  );
}
