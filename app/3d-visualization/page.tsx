import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { CTASection } from "@/components/home/cta-section"
import { ThreeDVisualizationContent } from "@/components/services/three-d-visualization-content"

export default function ThreeDVisualizationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ThreeDVisualizationContent />
        <CTASection variant="dark" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
