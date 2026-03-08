import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { CTASection } from "@/components/home/cta-section"
import { ConstructionTakeoffContent } from "@/components/services/construction-takeoff-content"

export default function ConstructionTakeoffPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ConstructionTakeoffContent />
        <CTASection variant="dark" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
