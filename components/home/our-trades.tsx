import { EstimateCard } from "@/components/common/estimate-card"

const trades = [
  {
    title: "Structural\nEstimating",
    description:
      "Reliable structural estimates that support competitive bids and efficient project execution.",
    arrowColor: "#EA7E37",
    iconColors: {
      top: "#E27B36",
      layers: "#8D5530",
    },
    href: "/trades/structural",
  },
  {
    title: "MEP\nEstimating",
    description:
      "Accurate MEP estimates covering mechanical, electrical, and plumbing systems for every project.",
    arrowColor: "#5BB8B0",
    iconColors: {
      top: "#5BB8B0",
      layers: "#307870",
    },
    href: "/trades/mep",
  },
  {
    title: "Interior\nEstimating",
    description:
      "Reliable interior estimates that support competitive bids and efficient project execution.",
    arrowColor: "#D45070",
    iconColors: {
      top: "#D45070",
      layers: "#8D3048",
    },
    href: "/trades/interior",
  },
  {
    title: "Exterior\nEstimating",
    description:
      "Comprehensive exterior estimates for facades, roofing, and site work with precision detail.",
    arrowColor: "#8A6AB8",
    iconColors: {
      top: "#8A6AB8",
      layers: "#5A4080",
    },
    href: "/trades/exterior",
  },
]

export function OurTrades() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Our Trades
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Our estimators provide accurate quantity takeoffs and cost estimates
          across all CSI Division trades, supporting commercial, residential,
          and industrial projects. All estimates are prepared in strict
          compliance with U.S. construction codes, industry standards, and
          current pricing databases, ensuring your bids remain competitive,
          accurate, and aligned with market conditions.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {trades.map((trade) => (
            <EstimateCard
              key={trade.title}
              title={trade.title}
              description={trade.description}
              href={trade.href}
              arrowColor={trade.arrowColor}
              topColor={trade.iconColors.top}
              layerColor={trade.iconColors.layers}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
