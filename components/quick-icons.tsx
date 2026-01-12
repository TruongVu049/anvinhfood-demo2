import { quickIcons } from "@/lib/data";
import Link from "next/link";

export function QuickIcons() {
  return (
    <div className="bg-white rounded-lg mt-3 md:mt-4 px-3 md:px-4 py-4 md:py-5 shadow-sm border border-gray-200">
      {/* Header - Optional */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h2 className="text-sm md:text-base font-bold text-gray-900">Danh Mục Nổi Bật</h2>
        <Link 
          href="/categories" 
          className="text-xs text-blue-600 hover:text-blue-700 font-medium hidden md:block"
        >
          Xem tất cả
        </Link>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2 md:gap-3">
        {quickIcons.map((item) => (
          <Link
            key={item.id}
            href={`/category/${item.slug}`}
            className="flex flex-col items-center gap-2 p-2 md:p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            {/* Icon Container with Badge */}
            <div className="relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:shadow-md transition-shadow border border-gray-200">
                <span className="text-2xl md:text-3xl">{item.icon}</span>
              </div>
              
              {/* Badge */}
              {item.subtitle && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                  {item.subtitle}
                </div>
              )}
            </div>
            
            {/* Label */}
            <span className="text-[10px] md:text-xs text-gray-800 font-medium text-center leading-tight w-full line-clamp-2">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}