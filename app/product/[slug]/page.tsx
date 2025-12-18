import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { BuyBox } from "@/components/buy-box"
import { ProductDescription } from "@/components/product-description"
import { SimilarProducts } from "@/components/similar-products"
import { CustomerReviews } from "@/components/customer-reviews"
import { WarrantyInfo } from "@/components/warranty-info"
import { products, categories } from "@/lib/data"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  // Find product by slug
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const category = categories.find((c) => c.slug === product.category)

  return (
    <div className="min-h-screen bg-[#f5f5fa]">
      <Header />

      <main className="max-w-[1240px] mx-auto px-4 py-4">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: category?.name || "Danh mục", href: `/category/${product.category}` },
            { label: product.name, href: `/product/${slug}` },
          ]}
        />

        {/* Main product section - Updated layout */}
        <div className="grid grid-cols-12 gap-4 mt-4">
          {/* Gallery */}
          <div className="col-span-4">
            <div className="bg-white rounded-lg p-4 sticky top-36">
              <ProductGallery images={product.images} productName={product.name} brand={product.brand} />

              {/* Features below gallery */}
              <div className="mt-4 border-t pt-4">
                <h3 className="font-semibold text-[#27272a] mb-3">Đặc điểm nổi bật</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#00ab56]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-1 text-[#0b74e5] text-sm mt-3 hover:underline">
                  <span>🔍</span> Xem thêm Ưu điểm & lưu ý của sản phẩm
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="col-span-5">
            <ProductInfo product={product} />
          </div>

          {/* Buy box */}
          <div className="col-span-3">
            <BuyBox product={product} />
          </div>
        </div>

        {/* Product description */}
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <ProductDescription description={product.description} specifications={product.specifications} />
          </div>
        </div>

        {/* Similar products */}
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <SimilarProducts currentProductId={product.id} />
          </div>
        </div>

        {/* Warranty info */}
        <div className="mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <WarrantyInfo warranty="24 Tháng" />
          </div>
        </div>

        {/* Customer reviews */}
        <div className="mt-4">
          <CustomerReviews productRating={product.rating} reviewCount={product.reviewCount} />
        </div>
      </main>

      <Footer />

      {/* Floating buttons - Updated styling */}
      <div className="fixed bottom-20 right-4 flex flex-col gap-3 z-50">
        <button className="w-14 h-14 bg-[#0b74e5] text-white rounded-full shadow-lg flex flex-col items-center justify-center hover:bg-[#0a68ce] transition-colors">
          <span className="text-lg">💬</span>
          <span className="text-[9px]">Trợ lý</span>
        </button>
        <button className="w-14 h-14 bg-[#0b74e5] text-white rounded-full shadow-lg flex flex-col items-center justify-center hover:bg-[#0a68ce] transition-colors">
          <span className="text-lg">📱</span>
          <span className="text-[9px]">Tin mới</span>
        </button>
      </div>
    </div>
  )
}
