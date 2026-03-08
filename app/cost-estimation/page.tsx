import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { CTASection } from "@/components/home/cta-section"
import { CostEstimationContent } from "@/components/services/cost-estimation-content"

export default function CostEstimationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <CostEstimationContent />
        <CTASection variant="dark" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
