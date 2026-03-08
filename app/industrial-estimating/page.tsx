import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { CTASection } from "@/components/home/cta-section"
import { IndustrialEstimatingContent } from "@/components/services/industrial-estimating-content"

export default function IndustrialEstimatingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <IndustrialEstimatingContent />
        <CTASection variant="dark" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
