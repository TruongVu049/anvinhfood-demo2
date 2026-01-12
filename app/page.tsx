import { Header } from "@/components/header";
import { SidebarCategory } from "@/components/sidebar-category";
import { BannerCarousel } from "@/components/banner-carousel";
import { QuickIcons } from "@/components/quick-icons";
import { TopDeals } from "@/components/top-deals";
import { BrandHighlight } from "@/components/brand-highlight";
import { InternationalProducts } from "@/components/international-products";
import { ExploreSection } from "@/components/explore-section";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5fa]">
      <Header />

      <PageTransition>
        <main className="max-w-[1240px] mx-auto px-2 md:px-4 py-2 md:py-4">
          <div className="flex flex-col lg:flex-row gap-2 md:gap-4">
            {/* Sidebar - hidden on mobile, visible on desktop */}
            <div className="hidden lg:block animate-fade-in-left">
              <SidebarCategory />
            </div>

            {/* Main content */}
            <div className="flex-1 min-w-0 space-y-3 md:space-y-4">
              {/* Banner carousel */}
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <BannerCarousel />
              </div>

              {/* Quick icons */}
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <QuickIcons />
              </div>

              {/* Top Deals */}
              <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <TopDeals />
              </div>

              {/* Brand Highlight */}
              {/* <BrandHighlight /> */}

              {/* International Products */}
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <InternationalProducts />
              </div>

              {/* Explore section */}
              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <ExploreSection />
              </div>
            </div>
          </div>
        </main>
      </PageTransition>

      <Footer />

      {/* Floating buttons - Updated floating buttons to match Tiki */}
      <div className="fixed bottom-20 md:bottom-20 right-2 md:right-4 flex flex-col gap-2 md:gap-3 z-50">
        <button className="w-12 h-12 md:w-14 md:h-14 bg-[#0b74e5] text-white rounded-full shadow-lg flex flex-col items-center justify-center hover:bg-[#0a68ce] transition-colors">
          <span className="text-base md:text-lg">💬</span>
          <span className="text-[8px] md:text-[9px]">Tư vấn</span>
        </button>
        <button className="w-12 h-12 md:w-14 md:h-14 bg-[#00ab56] text-white rounded-full shadow-lg flex flex-col items-center justify-center hover:bg-[#009647] transition-colors">
          <span className="text-base md:text-lg">☎️</span>
          <span className="text-[8px] md:text-[9px]">Hotline</span>
        </button>
      </div>
    </div>
  );
}
