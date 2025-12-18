import { quickIcons } from "@/lib/data";
import Link from "next/link";

export function QuickIcons() {
  return (
    <div className="flex items-center gap-1 md:gap-0 md:justify-between py-2 md:py-4 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-lg mt-2 md:mt-4 px-1 md:px-2 overflow-x-auto scrollbar-hide border-2 border-orange-200">
      {quickIcons.map((item) => (
        <Link
          key={item.id}
          href="#"
          className="flex flex-col items-center gap-1 md:gap-1.5 px-1.5 md:px-2 py-1 md:py-2 rounded-lg hover:bg-white/80 transition-all group flex-shrink-0 hover:shadow-md"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform bg-white shadow-sm">
            <span className="text-3xl md:text-4xl">{getEmoji(item.name)}</span>
          </div>
          <span className="text-[10px] md:text-xs text-gray-900 font-bold text-center leading-tight whitespace-nowrap">
            {item.name}
          </span>
          {item.subtitle && (
            <span className="text-[9px] md:text-[10px] text-red-600 font-semibold text-center leading-tight whitespace-nowrap">
              {item.subtitle}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}

function getEmoji(name: string): string {
  const emojiMap: { [key: string]: string } = {
    "Deal Sốc": "🔥",
    Freeship: "🚚",
    "Hot Deal": "⭐",
    "Tươi Ngon": "🌱",
    "Combo Tiết Kiệm": "🎁",
    "Flash Sale": "⚡",
    "Hải Sản Tươi": "🦐",
    "Thịt Nhập Khẩu": "🥩",
    "Đông Lạnh": "❄️",
  };
  return emojiMap[name] || "🎉";
}
