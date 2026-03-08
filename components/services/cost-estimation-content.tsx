import Link from "next/link"
import { EstimateCard } from "@/components/common/estimate-card"
import { ServiceTradesSection } from "@/components/services/service-trades-section"

const costServices = [
  {
    title: "Building Cost\nEstimating",
    description:
      "Detailed building cost estimates built for budget control and confident bidding.",
    arrowColor: "#E85A71",
    iconColors: { top: "#E85A71", layers: "#8D3048" },
    href: "/cost-estimation",
  },
  {
    title: "BIM\nEstimating",
    description:
      "BIM-based quantification and pricing support for design coordination and accuracy.",
    arrowColor: "#9B8AC4",
    iconColors: { top: "#9B8AC4", layers: "#5A4080" },
    href: "/cost-estimation",
  },
  {
    title: "Budget\nEstimating",
    description:
      "Reliable budget estimates for early planning, forecasting, and cost decisions.",
    arrowColor: "#5BBFBA",
    iconColors: { top: "#5BBFBA", layers: "#307870" },
    href: "/cost-estimation",
  },
  {
    title: "Preliminary\nEstimating",
    description:
      "Concept-stage estimate guidance to evaluate feasibility and project scope.",
    arrowColor: "#C4956A",
    iconColors: { top: "#C4956A", layers: "#8D5530" },
    href: "/cost-estimation",
  },
  {
    title: "Design Phase\nEstimating",
    description:
      "Design development estimates to keep decisions aligned with target budgets.",
    arrowColor: "#5B8BD4",
    iconColors: { top: "#5B8BD4", layers: "#345C9A" },
    href: "/cost-estimation",
  },
  {
    title: "Bid\nEstimating",
    description:
      "Bid-ready estimates that improve competitiveness while protecting margins.",
    arrowColor: "#D4D95B",
    iconColors: { top: "#D4D95B", layers: "#899030" },
    href: "/cost-estimation",
  },
]

const processSteps = [
  "Share Plans",
  "Receive a Quote",
  "Process Payment",
  "Get Your Estimate",
]

export function CostEstimationContent() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-sm text-muted-foreground">
          <Link href="/services" className="hover:text-foreground">
            Services
          </Link>{" "}
          {">"} <span className="text-foreground">Cost Estimation</span>
        </div>

        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-6 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Accurate Estimates for Smarter Budgeting and Cost Control
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Accurate cost estimates are the difference between winning a bid and
              losing profit. Every estimate is developed through a detailed
              analysis of drawings, methods, materials, site conditions, and
              logistics. We combine trade-specific quantity takeoffs, senior
              estimator review, and real-time pricing data so you can bid
              competitively, reduce risk, and protect margins.
            </p>
          </div>
          <div className="rounded-[21px] border border-white/[0.29] bg-white/[0.03] p-8 backdrop-blur-[15px]">
            <p className="mb-4 text-sm text-muted-foreground">
              Included in this service
            </p>
            <div className="grid gap-3 text-foreground sm:grid-cols-2">
              {[
                "Preliminary Estimating",
                "Building Cost Estimating",
                "BIM Estimating",
                "Budget Estimating",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/20 bg-white/[0.02] px-4 py-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            Cost Estimation Services
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {costServices.map((service) => (
              <EstimateCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                arrowColor={service.arrowColor}
                topColor={service.iconColors.top}
                layerColor={service.iconColors.layers}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
            How Our Estimating Process Works
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground md:text-base">
            {processSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span>{step}</span>
                {index < processSteps.length - 1 ? (
                  <span className="text-foreground/40">-</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <ServiceTradesSection />
      </div>
    </section>
  )
}
