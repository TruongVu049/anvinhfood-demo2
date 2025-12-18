"use client"

import Link from "next/link"
import Image from "next/image"
import { categories } from "@/lib/data"

interface SidebarCategoryProps {
  activeCategory?: string
}

export function SidebarCategory({ activeCategory }: SidebarCategoryProps) {
  return (
    <aside className="w-[200px] bg-white rounded-lg h-fit sticky top-36 flex-shrink-0">
      <h3 className="font-semibold text-gray-900 px-4 py-3 border-b">Danh mục</h3>
      <nav className="py-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-blue-50 hover:text-[#0b74e5] ${
              activeCategory === category.slug ? "bg-blue-50 text-[#0b74e5]" : "text-gray-700"
            }`}
          >
            <Image
              src={category.icon || "/placeholder.svg"}
              alt={category.name}
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="flex-1 leading-tight">{category.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
