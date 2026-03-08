import Link from "next/link"

const trades = [
  { label: "Structural Estimating", href: "/trades/structural" },
  { label: "MEP Estimation", href: "/trades/mep" },
  { label: "Interior Estimating", href: "/trades/interior" },
  { label: "Exterior Estimating", href: "/trades/exterior" },
]

const tradeGlowColors = [
  "rgba(45, 212, 191, 0.6)",
  "rgba(139, 92, 246, 0.6)",
  "rgba(239, 68, 68, 0.5)",
  "rgba(249, 115, 22, 0.6)",
]

export function ServiceTradesSection() {
  return (
    <div className="py-20">
      <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Our Trades</h2>

      <p className="mx-auto mb-16 max-w-4xl text-center leading-relaxed text-[#d9d9d9]/70">
        Our estimators provide accurate quantity takeoffs and cost estimates across all CSI
        Division trades, supporting commercial, residential, and industrial projects. All
        estimates are prepared in strict compliance with U.S. construction codes, industry
        standards, and current pricing databases, ensuring your bids remain competitive,
        accurate, and aligned with market conditions.
      </p>

      <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trades.map((trade, index) => (
          <Link
            key={trade.label}
            href={trade.href}
            className="relative block h-80 overflow-hidden rounded-2xl border border-[#d9d9d9]/20 bg-[#0a0a0a] transition-colors hover:border-[#d9d9d9]/40"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at bottom left, ${tradeGlowColors[index]} 0%, transparent 70%)`,
              }}
            />
            <div className="relative z-10 p-6">
              <h3 className="text-xl font-bold text-white">{trade.label}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/contact"
          className="rounded-full border border-[#d9d9d9]/40 px-8 py-3 text-white transition-colors hover:bg-white/5"
        >
          Submit a plan
        </Link>
      </div>
    </div>
  )
}
