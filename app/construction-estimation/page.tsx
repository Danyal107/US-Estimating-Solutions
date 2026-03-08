import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { CTASection } from "@/components/home/cta-section"
import { ConstructionEstimationContent } from "@/components/services/construction-estimation-content"

export default function ConstructionEstimationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ConstructionEstimationContent />
        <CTASection variant="dark" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
