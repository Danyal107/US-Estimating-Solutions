import Link from "next/link"

type CTASectionProps = {
  variant?: "default" | "dark"
}

export function CTASection({ variant = "default" }: CTASectionProps) {
  const isDark = variant === "dark"

  return (
    <section className={isDark ? "bg-zinc-900 px-4 py-16 md:py-20" : "bg-background py-20"}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2
          className={`mb-6 text-3xl font-bold md:text-4xl text-balance ${isDark ? "text-white" : "text-foreground"}`}
        >
          {"Got Your Plans? Let\u2019s Talk."}
        </h2>
        <p
          className={`mx-auto mb-10 max-w-2xl text-sm leading-relaxed md:text-base ${isDark ? "text-gray-400" : "text-muted-foreground"}`}
        >
          Recognized by The Blue Book Network, we are a trusted construction
          cost estimation company known for affordable pricing, precision, and
          professionalism in every project we handle.
        </p>
        <Link
          href="/contact"
          className={
            isDark
              ? "inline-flex rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              : "inline-flex rounded-full border border-foreground/30 px-8 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          }
        >
          Get a Quote
        </Link>
      </div>
    </section>
  )
}
