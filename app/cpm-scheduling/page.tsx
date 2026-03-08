import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrollToTop } from "@/components/layout/scroll-to-top"
import { CTASection } from "@/components/home/cta-section"
import { CPMSchedulingContent } from "@/components/services/cpm-scheduling-content"

export default function CPMSchedulingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <CPMSchedulingContent />
        <CTASection variant="dark" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
