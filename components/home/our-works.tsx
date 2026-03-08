import Link from "next/link"
import Image from "next/image"

const works = [
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&q=80",
    alt: "Construction blueprints with measurement tools and calculator",
    highlight: true,
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    alt: "Computer screen showing project estimation dashboard",
    highlight: false,
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
    alt: "Architect working on construction plans at desk",
    highlight: false,
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&q=80",
    alt: "Modern glass building architecture from below",
    highlight: false,
  },
]

export function OurWorks() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl text-balance">
          Our Works
        </h2>
        <p className="mx-auto mb-14 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Our estimators provide accurate quantity takeoffs and cost estimates
          across all CSI Division trades, supporting commercial, residential,
          and industrial projects. All estimates are prepared in strict
          compliance with U.S. construction codes, industry standards, and
          current pricing databases, ensuring your bids remain competitive,
          accurate, and aligned with market conditions.
        </p>

        {/* Works Grid */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] overflow-hidden rounded-lg ${
                work.highlight ? "ring-2 ring-[#7c5cbf] ring-offset-2 ring-offset-background" : ""
              }`}
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover grayscale transition-all group-hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/our-works"
            className="rounded-full border border-foreground/30 px-8 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  )
}
