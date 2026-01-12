import Link from "next/link"

const promoBanners = [
  {
    id: 1,
    title: "Xi măng chính hãng",
    subtitle: "Giảm đến 15%",
    bg: "from-cyan-500 to-blue-500",
    icon: "🏭",
  },
  {
    id: 2,
    title: "Gạch ốp lát cao cấp",
    subtitle: "Mới về 2024",
    bg: "from-orange-500 to-red-500",
    icon: "🧱",
  },
  {
    id: 3,
    title: "Sơn nước ngoài",
    subtitle: "Giao nhanh trong ngày",
    bg: "from-teal-500 to-green-500",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Combo xây dựng",
    subtitle: "Tiết kiệm 30%",
    bg: "from-purple-500 to-pink-500",
    icon: "🛠️",
  },
  {
    id: 5,
    title: "Thiết bị điện",
    subtitle: "Chính hãng 100%",
    bg: "from-indigo-500 to-blue-600",
    icon: "💡",
  },
  {
    id: 6,
    title: "Công cụ xd",
    subtitle: "Bảo hành 12 tháng",
    bg: "from-green-500 to-emerald-500",
    icon: "🔨",
  },
]

export function PromoBanners() {
  return (
    <section className="py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {promoBanners.map((banner) => (
          <Link
            key={banner.id}
            href="#"
            className={`bg-gradient-to-r ${banner.bg} rounded-xl p-4 text-white hover:shadow-lg transition-all hover:-translate-y-1`}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{banner.icon}</span>
              <div>
                <h3 className="font-bold text-sm">{banner.title}</h3>
                <p className="text-white/80 text-xs">{banner.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
