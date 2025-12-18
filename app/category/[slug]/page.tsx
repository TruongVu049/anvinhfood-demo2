import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryFilter } from "@/components/category-filter"
import { QuickFilters } from "@/components/quick-filters"
import { Breadcrumb } from "@/components/breadcrumb"
import { CategoryBanner } from "@/components/category-banner"
import { ProductCard } from "@/components/product-card"
import { products, categories } from "@/lib/data"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = categories.find((c) => c.slug === slug)
  const categoryName = category?.name || "Danh mục"

  // Filter products by category (in real app, this would be from API)
  const categoryProducts = products.filter((p) => p.category === slug || !slug)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-[1240px] mx-auto px-4 py-4">
        <Breadcrumb items={[{ label: categoryName, href: `/category/${slug}` }]} />

        <CategoryBanner title={categoryName} subtitle="Sản phẩm chất lượng cao, tươi ngon mỗi ngày" />

        <div className="flex gap-4">
          {/* Filter sidebar */}
          <CategoryFilter categorySlug={slug} />

          {/* Main content */}
          <div className="flex-1">
            {/* Quick filters */}
            <QuickFilters />

            {/* Results count */}
            <div className="mb-4 text-sm text-gray-600">
              Hiển thị <span className="font-semibold">{categoryProducts.length}</span> sản phẩm
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoryProducts.length > 0
                ? categoryProducts.map((product, idx) => (
                    <ProductCard key={product.id} product={product} showAd={idx < 2} />
                  ))
                : // Show all products if no category match
                  products.map((product, idx) => <ProductCard key={product.id} product={product} showAd={idx < 2} />)}
            </div>

            {/* Load more */}
            <div className="text-center mt-8">
              <button className="px-8 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Xem thêm 11 sản phẩm
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating buttons */}
      <div className="fixed bottom-20 right-4 flex flex-col gap-3 z-50">
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex flex-col items-center justify-center hover:bg-blue-700 transition-colors">
          <span className="text-lg">💬</span>
          <span className="text-[10px]">Trợ lý</span>
        </button>
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex flex-col items-center justify-center hover:bg-blue-700 transition-colors">
          <span className="text-lg">📱</span>
          <span className="text-[10px]">Tin mới</span>
        </button>
      </div>
    </div>
  )
}
