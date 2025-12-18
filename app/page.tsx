import { Header } from "@/components/header"
import { SidebarCategory } from "@/components/sidebar-category"
import { BannerCarousel } from "@/components/banner-carousel"
import { QuickIcons } from "@/components/quick-icons"
import { TopDeals } from "@/components/top-deals"
import { BrandHighlight } from "@/components/brand-highlight"
import { InternationalProducts } from "@/components/international-products"
import { ExploreSection } from "@/components/explore-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5fa]">
      <Header />

      <main className="max-w-[1240px] mx-auto px-4 py-4">
        <div className="flex gap-4">
          {/* Sidebar */}
          <SidebarCategory />

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Banner carousel */}
            <BannerCarousel />

            {/* Quick icons */}
            <QuickIcons />

            {/* Top Deals */}
            <TopDeals />

            {/* Brand Highlight */}
            <BrandHighlight />

            {/* International Products */}
            <InternationalProducts />

            {/* Explore section */}
            <ExploreSection />
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating buttons - Updated floating buttons to match Tiki */}
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
