import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CategoryFilter } from "@/components/category-filter";
import { QuickFilters } from "@/components/quick-filters";
import { Breadcrumb } from "@/components/breadcrumb";
import { CategoryBanner } from "@/components/category-banner";
import { ProductCard } from "@/components/product-card";
import { products, categories } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  const categoryName = category?.name || "Danh mục";

  // Filter products by category (in real app, this would be from API)
  const categoryProducts = products.filter((p) => p.category === slug || !slug);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-[1240px] mx-auto px-2 md:px-4 py-2 md:py-4">
        <Breadcrumb
          items={[{ label: categoryName, href: `/category/${slug}` }]}
        />

        <div className="flex flex-col lg:flex-row gap-2 md:flex-col lg:flex-row gap-2 md:gap-4">
          {/* Filter sidebar - hidden on mobile */}
          <div className="hidden lg:block">
            <CategoryFilter categorySlug={slug} />
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Quick filters */}
            <QuickFilters />

            {/* Results count */}
            <div className="mb-2 md:mb-4 text-xs md:text-sm text-gray-600 px-2 md:px-0">
              Hiển thị{" "}
              <span className="font-semibold">{categoryProducts.length}</span>{" "}
              sản phẩm
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 md:gap-2 lg:gap-4">
              {categoryProducts.length > 0
                ? categoryProducts.map((product, idx) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      showAd={idx < 2}
                    />
                  ))
                : // Show all products if no category match
                  products.map((product, idx) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      showAd={idx < 2}
                    />
                  ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-4 md:mt-8">
              <button className="px-6 md:px-8 py-2 md:py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors font-medium text-sm md:text-base">
                Xem thêm 11 sản phẩm
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating buttons */}
      <div className="fixed bottom-20 md:bottom-20 right-2 md:right-4 flex flex-col gap-2 md:gap-3 z-50">
        <button className="w-12 h-12 md:w-14 md:h-14 bg-[#0b74e5] text-white rounded-full shadow-lg flex flex-col items-center justify-center hover:bg-[#0a68ce] transition-colors">
          <span className="text-base md:text-lg">💬</span>
          <span className="text-[8px] md:text-[10px]">Trợ lý</span>
        </button>
        <button className="w-12 h-12 md:w-14 md:h-14 bg-[#00ab56] text-white rounded-full shadow-lg flex flex-col items-center justify-center hover:bg-[#009647] transition-colors">
          <span className="text-base md:text-lg">☎️</span>
          <span className="text-[8px] md:text-[10px]">Hotline</span>
        </button>
      </div>
    </div>
  );
}
