import { quickIcons } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

export function QuickIcons() {
  return (
    <div className="flex items-center justify-between py-4 bg-white rounded-lg mt-4 px-2">
      {quickIcons.map((item) => (
        <Link
          key={item.id}
          href="#"
          className="flex flex-col items-center gap-1.5 px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
        >
          <div className="w-11 h-11 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Image
              src={item.icon || "/placeholder.svg"}
              alt={item.name}
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
          <span className="text-xs text-gray-700 font-medium text-center leading-tight">{item.name}</span>
          {item.subtitle && <span className="text-[10px] text-gray-500 leading-tight">{item.subtitle}</span>}
        </Link>
      ))}
    </div>
  )
}
