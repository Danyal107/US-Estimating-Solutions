import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { CTASection } from "@/components/home/cta-section"
import { InteriorDesignServicesContent } from "@/components/services/interior-design-services-content"

export default function InteriorDesignServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <InteriorDesignServicesContent />
        <CTASection variant="dark" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
