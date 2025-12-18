"use client";

import Link from "next/link";

interface SidebarCategoryProps {
  activeCategory?: string;
}

const categories = [
  {
    icon: "🦐",
    label: "Tôm các loại",
    count: "56 sản phẩm",
    href: "/category/tom",
    bgColor: "bg-red-50",
  },
  {
    icon: "🦐",
    label: "Tôm hùm cao cấp",
    count: "24 sản phẩm",
    href: "/category/tom-hum",
    bgColor: "bg-red-50",
  },
  {
    icon: "🐟",
    label: "Cá hồi - Cá ngừ",
    count: "45 sản phẩm",
    href: "/category/ca",
    bgColor: "bg-blue-100",
  },
  {
    icon: "🐟",
    label: "Cá hồi - Cá ngừ",
    count: "45 sản phẩm",
    href: "/category/ca",
    bgColor: "bg-blue-100",
  },
  {
    icon: "🦑",
    label: "Mực - Bạch tuộc",
    count: "32 sản phẩm",
    href: "/category/muc",
    bgColor: "bg-purple-100",
  },
  {
    icon: "🦀",
    label: "Cua - Ghẹ",
    count: "28 sản phẩm",
    href: "/category/cua",
    bgColor: "bg-orange-50",
  },
  {
    icon: "🦪",
    label: "Nghêu - Sò",
    count: "25 sản phẩm",
    href: "/category/ngheu-so",
    bgColor: "bg-cyan-100",
  },
  {
    icon: "🦀",
    label: "Cua - Ghẹ",
    count: "28 sản phẩm",
    href: "/category/cua",
    bgColor: "bg-orange-50",
  },
  {
    icon: "🍤",
    label: "Tôm sú - Tôm thẻ",
    count: "38 sản phẩm",
    href: "/category/tom-su",
    bgColor: "bg-amber-50",
  },
  {
    icon: "🐙",
    label: "Hải sản cao cấp",
    count: "52 sản phẩm",
    href: "/category/hai-san",
    bgColor: "bg-indigo-50",
  },
  {
    icon: "🧊",
    label: "Combo tiết kiệm",
    count: "34 sản phẩm",
    href: "/category/combo",
    bgColor: "bg-sky-50",
  },
  {
    icon: "🐙",
    label: "Hải sản cao cấp",
    count: "52 sản phẩm",
    href: "/category/hai-san",
    bgColor: "bg-indigo-50",
  },
];

export function SidebarCategory({ activeCategory }: SidebarCategoryProps) {
  return (
    <aside className="w-[180px] lg:w-[200px] bg-white rounded-lg h-fit sticky top-4 lg:top-8 flex-shrink-0">
      <h3 className="font-semibold text-gray-900 px-3 lg:px-4 py-2 lg:py-3 border-b text-sm">
        Danh mục
      </h3>
      <nav className="py-2">
        {categories.map((category, idx) => (
          <Link
            key={idx}
            href={category.href}
            className={`flex items-center gap-2 px-3 lg:px-4 py-2 text-xs lg:text-sm transition-colors hover:bg-blue-50 hover:text-[#0b74e5] ${
              activeCategory === category.href.split("/").pop()
                ? "bg-blue-50 text-[#0b74e5]"
                : "text-gray-700"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg ${category.bgColor} flex items-center justify-center text-xl flex-shrink-0`}
            >
              {category.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium leading-tight truncate">
                {category.label}
              </div>
              <div className="text-[10px] text-gray-500">{category.count}</div>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
