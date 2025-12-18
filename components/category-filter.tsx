"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { subCategories } from "@/lib/data";

interface CategoryFilterProps {
  categorySlug: string;
}

const brands = [
  "SeaFood Premium",
  "Premium Meat",
  "Nordic Seafood",
  "Ocean Fresh",
  "Aussie Meat",
  "FreshMart",
];

const priceRanges = [
  { label: "Dưới 200.000đ", min: 0, max: 200000 },
  { label: "200.000đ - 500.000đ", min: 200000, max: 500000 },
  { label: "500.000đ - 1.000.000đ", min: 500000, max: 1000000 },
  { label: "Trên 1.000.000đ", min: 1000000, max: null },
];

export function CategoryFilter({ categorySlug }: CategoryFilterProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "subcategory",
    "brand",
    "price",
  ]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null
  );

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const currentSubCategories = subCategories[categorySlug] || [];

  return (
    <aside className="w-[200px] lg:w-[220px] bg-white rounded-lg p-3 lg:p-4 h-fit sticky top-24 lg:top-36 space-y-3 lg:space-y-4">
      <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
        Khám phá theo danh mục
      </h3>

      {/* Subcategories */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("subcategory")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-2"
        >
          <span>Danh mục con</span>
          {expandedSections.includes("subcategory") ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes("subcategory") && (
          <ul className="space-y-2">
            {currentSubCategories.map((sub) => (
              <li key={sub.id}>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-blue-600">
                  <input type="checkbox" className="rounded text-blue-600" />
                  {sub.name}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price range */}
      <div className="border-b pb-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-2"
        >
          <span>Khoảng giá</span>
          {expandedSections.includes("price") ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes("price") && (
          <ul className="space-y-2">
            {priceRanges.map((range) => (
              <li key={range.label}>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-blue-600">
                  <input
                    type="radio"
                    name="priceRange"
                    className="text-blue-600"
                    checked={selectedPriceRange === range.label}
                    onChange={() => setSelectedPriceRange(range.label)}
                  />
                  {range.label}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Rating filter */}
      <div>
        <button
          onClick={() => toggleSection("rating")}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-2"
        >
          <span>Đánh giá</span>
          {expandedSections.includes("rating") ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        {expandedSections.includes("rating") && (
          <ul className="space-y-2">
            {[5, 4, 3].map((stars) => (
              <li key={stars}>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-blue-600">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="flex items-center gap-0.5">
                    {[...Array(stars)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                    {[...Array(5 - stars)].map((_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    ))}
                  </span>
                  <span>từ {stars} sao</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
