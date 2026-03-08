import Image from "next/image"

export function ServiceLocations() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl text-balance">
          Service Locations
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          We work in the USA, UK, Canada, Australia, and all over the world
        </p>

        {/* US Map */}
        <div className="mx-auto max-w-4xl">
          <Image
            src="/images/us-map.png"
            alt="Map of the United States showing all service locations across all 50 states"
            width={1400}
            height={788}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
