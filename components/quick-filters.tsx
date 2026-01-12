"use client";

import { useState } from "react";

const quickFilters = [
  {
    id: "now",
    label: "GIAO NHANH",
    sublabel: "Trong ngày",
    color: "bg-green-100 text-green-700 border-green-300",
  },
  {
    id: "topdeal",
    label: "DEAL SỐC",
    sublabel: "Giảm sâu",
    color: "bg-orange-100 text-orange-700 border-orange-300",
  },
  {
    id: "freeship",
    label: "FREESHIP",
    sublabel: "",
    color: "bg-green-100 text-green-700 border-green-300",
  },
  {
    id: "rating",
    label: "★★★★",
    sublabel: "từ 4 sao",
    color: "bg-yellow-100 text-yellow-700 border-yellow-300",
  },
];

const sortOptions = ["Phổ biến", "Bán chạy", "Giá thấp", "Giá cao", "Mới nhất"];

export function QuickFilters() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Phổ biến");

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="bg-white rounded-lg p-2 md:p-4 mb-2 md:mb-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
        <div className="flex items-center gap-1.5 md:gap-3 flex-wrap overflow-x-auto w-full md:w-auto">
          {quickFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full border text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                activeFilters.includes(filter.id)
                  ? filter.color + " border-2"
                  : "bg-white text-gray-600 border-gray-200"
              }`}
            >
              {filter.label}{" "}
              {filter.sublabel && (
                <span className="hidden md:inline text-xs opacity-80">
                  {filter.sublabel}
                </span>
              )}
            </button>
          ))}
          <button className="px-2 md:px-3 py-1 md:py-1.5 rounded-full border border-gray-200 text-xs md:text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-1 whitespace-nowrap">
            🎛️ Tất cả
          </button>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs md:text-sm text-gray-500">Sắp xếp</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-lg px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
