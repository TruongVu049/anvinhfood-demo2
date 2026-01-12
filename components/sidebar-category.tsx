"use client";

import Link from "next/link";
import {
  Factory,
  Package,
  Paintbrush,
  Box,
  Droplet,
  Lightbulb,
  Hammer,
  DoorOpen,
  Home,
  Beaker,
  ShowerHead,
  Mountain,
  ChevronRight,
} from "lucide-react";

interface SidebarCategoryProps {
  activeCategory?: string;
}

const iconMap: { [key: string]: any } = {
  Factory,
  Package,
  Paintbrush,
  Box,
  Droplet,
  Lightbulb,
  Hammer,
  DoorOpen,
  Home,
  Beaker,
  ShowerHead,
  Mountain,
};

const categories = [
  {
    icon: "Factory",
    label: "Xi Măng & Vữa",
    count: "250+",
    href: "/category/xi-mang-vua",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: "Package",
    label: "Gạch Xây & Ốp Lát",
    count: "180+",
    href: "/category/gach-xay",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: "Paintbrush",
    label: "Sơn & Chống Thấm",
    count: "120+",
    href: "/category/son",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: "Box",
    label: "Thép Xây Dựng",
    count: "95+",
    href: "/category/thep",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-700",
  },
  {
    icon: "Droplet",
    label: "Ống Nước & Phụ Kiện",
    count: "150+",
    href: "/category/ong-nuoc",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: "Lightbulb",
    label: "Điện & Đèn",
    count: "200+",
    href: "/category/dien",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: "Hammer",
    label: "Công Cụ Xây Dựng",
    count: "300+",
    href: "/category/cong-cu",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-700",
  },
  {
    icon: "DoorOpen",
    label: "Cửa & Cửa Sổ",
    count: "85+",
    href: "/category/cua",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-700",
  },
  {
    icon: "Home",
    label: "Ngói & Lợp Mái",
    count: "70+",
    href: "/category/ngoi",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: "Beaker",
    label: "Keo & Hóa Chất",
    count: "90+",
    href: "/category/keo",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: "ShowerHead",
    label: "Thiết Bị Vệ Sinh",
    count: "110+",
    href: "/category/ve-sinh",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: "Mountain",
    label: "Cát, Đá, Sỏi",
    count: "50+",
    href: "/category/cat-da",
    bgColor: "bg-stone-100",
    iconColor: "text-stone-700",
  },
];

export function SidebarCategory({ activeCategory }: SidebarCategoryProps) {
  return (
    <aside className="w-[200px] lg:w-[240px] bg-white rounded-lg shadow-sm h-fit sticky top-4 lg:top-8 flex-shrink-0 border border-gray-200">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 lg:px-5 py-4">
        <h3 className="font-bold text-white text-sm lg:text-base flex items-center gap-2">
          <Package className="w-5 h-5" />
          Danh Mục Sản Phẩm
        </h3>
      </div>

      {/* Categories List */}
      <nav className="py-2">
        {categories.map((category, idx) => {
          const IconComponent = iconMap[category.icon];
          const isActive = activeCategory === category.href.split("/").pop();
          
          return (
            <Link
              key={idx}
              href={category.href}
              className={`flex items-center gap-3 px-3 lg:px-4 py-2.5 lg:py-3 transition-colors ${
                isActive
                  ? "bg-blue-50 border-r-3 border-blue-600"
                  : "hover:bg-gray-50"
              }`}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute left-0 w-1 h-10 bg-blue-600"></div>
              )}

              {/* Icon Container */}
              <div
                className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center flex-shrink-0`}
              >
                {IconComponent && (
                  <IconComponent 
                    className={`w-5 h-5 ${category.iconColor}`} 
                    strokeWidth={2}
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 min-w-0">
                <div
                  className={`font-semibold text-xs lg:text-sm leading-tight truncate ${
                    isActive
                      ? "text-blue-700"
                      : "text-gray-800"
                  }`}
                >
                  {category.label}
                </div>
                <div className={`text-[10px] lg:text-xs mt-0.5 ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}>
                  {category.count} sản phẩm
                </div>
              </div>

              {/* Arrow Indicator */}
              {isActive && (
                <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
        <p className="text-xs text-gray-600 text-center">
          <span className="font-semibold">1,200+</span> sản phẩm
        </p>
      </div>
    </aside>
  );
}