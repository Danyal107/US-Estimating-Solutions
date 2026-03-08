"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const services = [
  {
    title: "Cost\nEstimation",
    description:
      "Accurate cost estimates to help you budget confidently and submit competitive bids.",
    icon: CostEstimationIcon,
  },
  {
    title: "Construction\nEstimation",
    description:
      "Detailed construction estimates covering labor, materials, equipment, and overhead.",
    icon: ConstructionEstimationIcon,
  },
  {
    title: "Construction\nTakeoff",
    description:
      "Precise quantity takeoffs that eliminate guesswork and improve bid accuracy.",
    icon: ConstructionTakeoffIcon,
  },
  {
    title: "Residential\nEstimating",
    description:
      "Reliable estimating solutions for residential projects of all sizes.",
    icon: ResidentialEstimatingIcon,
  },
  {
    title: "Commercial\nEstimating",
    description:
      "Comprehensive commercial estimates designed for complex, large-scale projects.",
    icon: CommercialEstimatingIcon,
  },
  {
    title: "CPM\nScheduling",
    description:
      "Professional CPM schedules that optimize timelines and project coordination.",
    icon: CPMSchedulingIcon,
  },
  {
    title: "Industrial\nEstimating",
    description:
      "Accurate industrial estimates aligned with strict standards and project demands.",
    icon: IndustrialEstimatingIcon,
  },
  {
    title: "Preliminary\nEstimating",
    description:
      "Early-stage cost insights to support planning and feasibility decisions.",
    icon: PreliminaryEstimatingIcon,
  },
  {
    title: "3D\nVisualization",
    description:
      "Bring designs to life with detailed 3D models that clearly communicate form, layout, and intent.",
    icon: ThreeDVisualizationIcon,
  },
  {
    title: "Interior\nDesign",
    description:
      "Create functional, well-planned interior spaces that support workflow, comfort, and efficiency.",
    icon: InteriorDesignIcon,
  },
]

const CARDS_PER_VIEW = 5

export function ServicesSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(services.length / CARDS_PER_VIEW)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToPage = useCallback(
    (page: number) => {
      setCurrentPage(page)
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.scrollWidth / services.length
        scrollRef.current.scrollTo({
          left: page * CARDS_PER_VIEW * cardWidth,
          behavior: "smooth",
        })
      }
    },
    []
  )

  const nextPage = useCallback(() => {
    const next = (currentPage + 1) % totalPages
    scrollToPage(next)
  }, [currentPage, totalPages, scrollToPage])

  useEffect(() => {
    const ref = scrollRef.current
    if (!ref) return
    const handleScroll = () => {
      const cardWidth = ref.scrollWidth / services.length
      const page = Math.round(ref.scrollLeft / (CARDS_PER_VIEW * cardWidth))
      setCurrentPage(Math.min(page, totalPages - 1))
    }
    ref.addEventListener("scroll", handleScroll, { passive: true })
    return () => ref.removeEventListener("scroll", handleScroll)
  }, [totalPages])

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-center font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Services
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          We provide professional construction estimating and quantity takeoff
          services designed to help you bid confidently, reduce overhead costs,
          and plan projects more efficiently. Using advanced estimating software,
          real-time pricing databases, and industry expertise, our estimators
          deliver accurate, reliable takeoffs tailored to your project{"'"}s scope,
          timeline, and budget.
        </p>

        {/* Service Cards - horizontal scroll */}
        <div
          ref={scrollRef}
          className="mb-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border-[3px] border-white/60 bg-white/[0.03] p-6 transition-all hover:border-white/80 md:w-[300px]"
              style={{ height: "420px" }}
            >
              {/* Subtle ellipse glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2"
                style={{
                  width: "300px",
                  height: "160px",
                  background:
                    "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)",
                }}
              />
              {/* Icon */}
              <div className="relative z-10 mb-auto h-40 w-40">
                <service.icon />
              </div>
              {/* Title */}
              <h3 className="relative z-10 whitespace-pre-line font-serif text-[28px] font-extrabold leading-[38px] text-foreground md:text-[32px] md:leading-[44px]">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Pagination + Arrow */}
        <div className="mb-8 flex items-center justify-center gap-8 md:justify-between">
          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === currentPage
                    ? "bg-foreground"
                    : "border border-white/40 bg-transparent"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextPage}
            className="hidden h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-muted-foreground md:flex"
            aria-label="Next page"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="rounded-full border border-foreground/30 px-8 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Icon Components ─── */

function CostEstimationIcon() {
  return (
    <svg viewBox="0 0 182 188" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Calculator body */}
      <rect x="0" y="1" width="144.45" height="167.56" rx="5" stroke="white" strokeWidth="3" fill="none" />
      {/* Screen */}
      <rect x="11.56" y="12.55" width="118.45" height="34.67" rx="2" stroke="white" strokeWidth="3" fill="none" />
      {/* Button grid - row 1 */}
      <rect x="14.45" y="64.56" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="46.22" y="64.56" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="78" y="64.56" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="109.78" y="64.56" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      {/* Button grid - row 2 */}
      <rect x="14.45" y="99.22" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="46.22" y="99.22" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="78" y="99.22" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      {/* Button grid - row 3 */}
      <rect x="14.45" y="133.89" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="46.22" y="133.89" width="17.33" height="14.44" rx="1" stroke="white" strokeWidth="3" fill="none" />
      {/* Dollar coin - overlapping bottom-right */}
      <circle cx="133.89" cy="139.67" r="48" fill="#525252" stroke="white" strokeWidth="3" />
      <circle cx="133.89" cy="139.67" r="40" stroke="white" strokeWidth="3" fill="rgba(255,255,255,0.03)" />
      <text x="121" y="155" fill="white" fontSize="40" fontWeight="600" fontFamily="sans-serif">$</text>
    </svg>
  )
}

function ConstructionEstimationIcon() {
  return (
    <svg viewBox="0 0 196 226" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Calculator body */}
      <rect x="0" y="5.48" width="151.25" height="188.52" rx="27" stroke="white" strokeWidth="3" fill="none" />
      {/* Screen */}
      <rect x="12.78" y="18.74" width="124.38" height="68.15" rx="14" stroke="white" strokeWidth="3" fill="none" />
      {/* $ text */}
      <text x="22" y="60" fill="white" fontSize="42" fontWeight="600" fontFamily="sans-serif">$</text>
      {/* Button grid - row 1 (checkmarks and values) */}
      <rect x="15" y="100" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="40" y="100" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="65" y="100" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Row 2 */}
      <rect x="15" y="126" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="40" y="126" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="65" y="126" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Row 3 */}
      <rect x="15" y="152" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="40" y="152" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="65" y="152" width="15" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Hard hat badge - top right */}
      <rect x="126.27" y="0" width="69.86" height="74.12" rx="14" fill="#525252" stroke="white" strokeWidth="3" />
      {/* Hard hat shape */}
      <path d="M140 58 L140 48 Q160 30 180 48 L180 58" stroke="white" strokeWidth="3" fill="none" />
      <line x1="136" y1="58" x2="184" y2="58" stroke="white" strokeWidth="3" />
      <line x1="160" y1="30" x2="160" y2="44" stroke="white" strokeWidth="2.5" />
    </svg>
  )
}

function ConstructionTakeoffIcon() {
  return (
    <svg viewBox="0 0 179 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Large gear outer shape */}
      <path
        d="M89 0 L100 18 L120 14 L122 36 L142 42 L132 60 L148 76 L132 88 L138 108 L118 110 L114 130 L96 124 L89 142 L82 124 L64 130 L60 110 L40 108 L46 88 L30 76 L46 60 L36 42 L56 36 L58 14 L78 18 Z"
        stroke="white"
        strokeWidth="3"
        fill="none"
      />
      {/* Inner circle */}
      <circle cx="89" cy="72" r="32" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Person head */}
      <circle cx="89" cy="58" r="10" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Hard hat */}
      <path d="M78 56 Q89 44 100 56" stroke="white" strokeWidth="2.5" fill="none" />
      <line x1="89" y1="46" x2="89" y2="52" stroke="white" strokeWidth="2" />
      {/* Body */}
      <path d="M74 92 L80 76 Q89 70 98 76 L104 92" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Horizontal lines for belt */}
      <line x1="70" y1="100" x2="108" y2="100" stroke="white" strokeWidth="2" />
    </svg>
  )
}

function ResidentialEstimatingIcon() {
  return (
    <svg viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Main building outline */}
      <path d="M8 36 L88 0 L168 36 L168 194 L8 194 Z" stroke="white" strokeWidth="3" fill="none" />
      {/* Ridge line */}
      <line x1="88" y1="0" x2="88" y2="36" stroke="white" strokeWidth="2" />
      {/* Windows - row 1 */}
      <rect x="28" y="52" width="28" height="22" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="76" y="52" width="28" height="22" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="124" y="52" width="28" height="22" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Windows - row 2 */}
      <rect x="28" y="92" width="28" height="22" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="76" y="92" width="28" height="22" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="124" y="92" width="28" height="22" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Door */}
      <rect x="68" y="140" width="40" height="54" rx="3" stroke="white" strokeWidth="2.5" fill="none" />
      <circle cx="100" cy="168" r="2.5" fill="white" />
      {/* Chimney */}
      <rect x="130" y="-8" width="18" height="30" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  )
}

function CommercialEstimatingIcon() {
  return (
    <svg viewBox="0 0 173 197" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Ground line */}
      <line x1="0" y1="194" x2="173" y2="194" stroke="white" strokeWidth="3" />
      {/* Left short building */}
      <rect x="11" y="68" width="112" height="126" stroke="white" strokeWidth="3" fill="none" />
      {/* Right tall building */}
      <rect x="102" y="26" width="65" height="168" stroke="white" strokeWidth="3" fill="none" />
      {/* Rooftop structure */}
      <rect x="42" y="18" width="60" height="50" stroke="white" strokeWidth="3" fill="none" />
      {/* Antenna */}
      <line x1="73" y1="18" x2="73" y2="0" stroke="white" strokeWidth="3" />
      <line x1="67" y1="6" x2="79" y2="6" stroke="white" strokeWidth="2.5" />
      {/* Left building windows */}
      <rect x="24" y="94" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="24" y="115" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="24" y="136" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="24" y="157" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="24" y="178" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="56" y="94" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="56" y="115" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="56" y="136" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="56" y="157" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="56" y="178" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      {/* Right building windows */}
      <rect x="116" y="38" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="140" y="38" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="116" y="58" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="140" y="58" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="116" y="78" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="140" y="78" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="116" y="98" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="140" y="98" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="116" y="118" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="140" y="118" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="116" y="138" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="140" y="138" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="116" y="158" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="140" y="158" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="116" y="178" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="140" y="178" width="14" height="8" rx="1" stroke="white" strokeWidth="2" fill="none" />
      {/* Door */}
      <rect x="30" y="172" width="18" height="22" rx="1" fill="white" />
    </svg>
  )
}

function CPMSchedulingIcon() {
  return (
    <svg viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Main document body */}
      <rect x="30" y="6" width="120" height="169" stroke="white" strokeWidth="3" fill="none" />
      {/* Chart/pie area - circle */}
      <circle cx="50" cy="120" r="48" fill="#525252" stroke="white" strokeWidth="3" />
      {/* Pie slice line */}
      <path d="M50 72 L50 120 L90 120" stroke="white" strokeWidth="3" fill="none" />
      {/* Graph line inside document */}
      <path d="M42 25 L90 25 L90 60 L130 60 L130 90" stroke="white" strokeWidth="3" fill="none" />
      {/* Horizontal lines - data bars */}
      <line x1="100" y1="55" x2="135" y2="55" stroke="white" strokeWidth="3" />
      <line x1="115" y1="65" x2="135" y2="65" stroke="white" strokeWidth="3" />
      {/* Tick marks on circle */}
      <line x1="50" y1="70" x2="50" y2="76" stroke="white" strokeWidth="2.5" />
      <line x1="50" y1="164" x2="50" y2="170" stroke="white" strokeWidth="2.5" />
      <line x1="0" y1="120" x2="6" y2="120" stroke="white" strokeWidth="2.5" />
      <line x1="94" y1="120" x2="100" y2="120" stroke="white" strokeWidth="2.5" />
      {/* Folder tab */}
      <rect x="73" y="0" width="36" height="25" rx="4" fill="#525252" stroke="white" strokeWidth="3" />
      <line x1="82" y1="10" x2="100" y2="10" stroke="white" strokeWidth="2" />
    </svg>
  )
}

function IndustrialEstimatingIcon() {
  return (
    <svg viewBox="0 0 213 156" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Factory main building */}
      <path d="M18 56 L128 13 L128 56 L128 150 L18 150 Z" stroke="white" strokeWidth="3" fill="none" />
      {/* Smokestack 1 */}
      <rect x="60" y="0" width="16" height="40" rx="2" stroke="white" strokeWidth="3" fill="none" />
      {/* Smokestack 2 */}
      <rect x="24" y="12" width="24" height="28" rx="2" stroke="white" strokeWidth="3" fill="none" />
      {/* Smoke puffs */}
      <circle cx="68" cy="-4" r="4" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="36" cy="6" r="3" stroke="white" strokeWidth="2" fill="none" />
      {/* Windows row 1 */}
      <rect x="36" y="72" width="16" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="64" y="72" width="16" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Windows row 2 */}
      <rect x="36" y="100" width="16" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      <rect x="64" y="100" width="16" height="14" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Right extension */}
      <rect x="128" y="56" width="78" height="94" stroke="white" strokeWidth="3" fill="none" />
      {/* Right building windows */}
      <rect x="142" y="72" width="14" height="10" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="170" y="72" width="14" height="10" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="142" y="96" width="14" height="10" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="170" y="96" width="14" height="10" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="142" y="120" width="14" height="10" rx="1" stroke="white" strokeWidth="2" fill="none" />
      <rect x="170" y="120" width="14" height="10" rx="1" stroke="white" strokeWidth="2" fill="none" />
      {/* Door */}
      <rect x="92" y="126" width="22" height="24" rx="1" stroke="white" strokeWidth="2.5" fill="none" />
    </svg>
  )
}

function PreliminaryEstimatingIcon() {
  return (
    <svg viewBox="0 0 144 168" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Calculator body */}
      <rect x="0" y="0" width="143.65" height="166.63" rx="5" stroke="white" strokeWidth="3" fill="none" />
      {/* Screen */}
      <rect x="11.49" y="11.49" width="117.79" height="34.48" rx="2" stroke="white" strokeWidth="3" fill="none" />
      {/* Screen text */}
      <text x="21" y="34" fill="white" fontSize="14" fontWeight="600" fontFamily="monospace">10000.</text>
      {/* Button grid - row 1 */}
      <rect x="14.36" y="63.21" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="45.96" y="63.21" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="77.57" y="63.21" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="109.18" y="63.21" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      {/* Row 2 */}
      <rect x="14.36" y="97.68" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="45.96" y="97.68" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="77.57" y="97.68" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="109.18" y="97.68" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      {/* Row 3 */}
      <rect x="14.36" y="132.16" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="45.96" y="132.16" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="77.57" y="132.68" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
      <rect x="109.57" y="132.68" width="17.24" height="14.37" rx="1" stroke="white" strokeWidth="3" fill="none" />
    </svg>
  )
}

function ThreeDVisualizationIcon() {
  return (
    <svg viewBox="0 0 173 175" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Corner marks */}
      <rect x="0" y="0" width="24" height="24" rx="2" stroke="white" strokeWidth="3" fill="none" />
      <rect x="149" y="0" width="24" height="24" rx="2" stroke="white" strokeWidth="3" fill="none" />
      <rect x="0" y="151" width="24" height="24" rx="2" stroke="white" strokeWidth="3" fill="none" />
      <rect x="149" y="151" width="24" height="24" rx="2" stroke="white" strokeWidth="3" fill="none" />
      {/* Main wireframe box */}
      <path d="M14 4 L159 4 L159 171 L14 171 Z" stroke="white" strokeWidth="3" fill="none" />
      {/* Vertical center line */}
      <line x1="86" y1="90" x2="86" y2="171" stroke="white" strokeWidth="3" />
      {/* 3D perspective lines */}
      <path d="M14 90 L86 4" stroke="white" strokeWidth="3" />
      <path d="M14 90 L86 90 L159 4" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="14" y1="90" x2="159" y2="90" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  )
}

function InteriorDesignIcon() {
  return (
    <svg viewBox="0 0 183 184" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      {/* Room outline - left wall perspective */}
      <path d="M0 71 L119 0 L119 52 L0 184 Z" stroke="white" strokeWidth="3" fill="none" />
      {/* Floor */}
      <path d="M0 184 L119 52 L183 52 L183 184 Z" stroke="white" strokeWidth="3" fill="none" />
      {/* Right wall */}
      <rect x="119" y="0" width="64" height="52" stroke="white" strokeWidth="3" fill="none" />
      {/* Window on right wall */}
      <rect x="134" y="10" width="32" height="20" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Window panes */}
      <line x1="150" y1="10" x2="150" y2="30" stroke="white" strokeWidth="1.5" />
      <line x1="134" y1="20" x2="166" y2="20" stroke="white" strokeWidth="1.5" />
      {/* Furniture - table */}
      <rect x="24" y="100" width="76" height="36" rx="2" stroke="white" strokeWidth="2.5" fill="none" />
      {/* Table legs */}
      <line x1="32" y1="136" x2="32" y2="156" stroke="white" strokeWidth="2.5" />
      <line x1="92" y1="136" x2="92" y2="156" stroke="white" strokeWidth="2.5" />
      {/* Plant on left */}
      <line x1="10" y1="156" x2="10" y2="130" stroke="white" strokeWidth="2.5" />
      <circle cx="10" cy="122" r="10" stroke="white" strokeWidth="2" fill="none" />
      {/* Picture frame on left wall */}
      <rect x="22" y="50" width="44" height="30" rx="2" stroke="white" strokeWidth="2" fill="none" />
      {/* Chair */}
      <path d="M148 128 L148 156 L172 156 L172 128" stroke="white" strokeWidth="2.5" fill="none" />
      <path d="M144 128 L160 112 L176 128" stroke="white" strokeWidth="2.5" fill="none" />
    </svg>
  )
}
