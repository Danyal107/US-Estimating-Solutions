const steps = [
  { label: "Share Plans" },
  { label: "Receive a Quote" },
  { label: "Process Payment" },
  { label: "Get Estimates" },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-3xl font-bold text-foreground md:text-4xl text-balance">
          How Can You Receive Construction Estimates
        </h2>

        {/* Steps */}
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
          {steps.map((step, index) => (
            <div key={step.label} className="flex items-center">
              <span className="whitespace-nowrap text-sm text-muted-foreground md:text-base">
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <div className="mx-4 hidden h-px w-24 bg-muted-foreground/30 md:block lg:w-40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
