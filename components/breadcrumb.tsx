import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-sm text-gray-500 py-2 flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-3 w-3 text-gray-400" />}
          {index === items.length - 1 ? (
            <span className="text-gray-700 line-clamp-1">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-[#0b74e5] hover:underline">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
