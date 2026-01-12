interface CategoryBannerProps {
  title: string
  subtitle: string
}

export function CategoryBanner({ title, subtitle }: CategoryBannerProps) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 mb-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1.5">{title}</h1>
          <p className="text-sm md:text-base text-gray-600 mb-3">{subtitle}</p>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            <span className="bg-red-50 text-red-600 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold border border-red-100">
              🔥 Giảm đến 30%
            </span>
            <span className="bg-blue-50 text-blue-600 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold border border-blue-100">
              🚚 Giao nhanh
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex-shrink-0">
          <span className="text-5xl md:text-6xl">🏭</span>
        </div>
      </div>
    </div>
  )
}
