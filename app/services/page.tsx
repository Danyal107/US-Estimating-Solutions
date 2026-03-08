import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { ServicesSection } from "@/components/services/services-section"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ServicesSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
