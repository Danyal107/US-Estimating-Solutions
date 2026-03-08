export function PartnersBar() {
  return (
    <section className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-10 text-center text-lg font-medium text-foreground md:text-xl text-balance">
          Detailed takeoffs and bid-ready estimates; powered by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          <PartnerLogo name="BLUEBEAM" />
          <PartnerLogo name="RSMeans" />
          <PartnerLogo name="PlanSwift" />
          <PartnerLogo name="XACTIMATE" />
        </div>
      </div>
    </section>
  )
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground/70">
      {name === "BLUEBEAM" && (
        <span className="flex items-center gap-1.5 text-lg font-bold tracking-wider">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" opacity="0.7">
            <rect x="2" y="2" width="7" height="7" rx="1" />
            <rect x="11" y="2" width="7" height="7" rx="1" />
            <rect x="2" y="11" width="7" height="7" rx="1" />
            <rect x="11" y="11" width="7" height="7" rx="1" />
          </svg>
          BLUEBEAM
        </span>
      )}
      {name === "RSMeans" && (
        <span className="text-lg font-bold tracking-wide">
          <span className="text-[#cc2229]">RS</span>
          <span>Means</span>
        </span>
      )}
      {name === "PlanSwift" && (
        <span className="flex items-center gap-1.5 text-lg font-bold tracking-wide">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 10 L10 6 L14 10 L10 14Z" fill="currentColor" opacity="0.5" />
          </svg>
          plan<span className="text-[#4a90d9]">swift</span>
        </span>
      )}
      {name === "XACTIMATE" && (
        <span className="text-lg font-bold tracking-widest">XACTIMATE.</span>
      )}
    </div>
  )
}
