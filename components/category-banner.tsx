interface CategoryBannerProps {
  title: string
  subtitle: string
}

export function CategoryBanner({ title, subtitle }: CategoryBannerProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 mb-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-white/90">{subtitle}</p>
          <div className="flex gap-3 mt-4">
            <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">Giảm đến 50%</span>
            <span className="bg-white/20 px-4 py-2 rounded-lg text-sm">Giao nhanh 2H</span>
          </div>
        </div>
        <div className="text-8xl opacity-80">🦐</div>
      </div>
    </div>
  )
}
