import Link from "next/link"

type EstimateCardProps = {
  title: string
  description: string
  href: string
  arrowColor: string
  topColor: string
  layerColor: string
  minHeight?: string
}

export function EstimateCard({
  title,
  description,
  href,
  arrowColor,
  topColor,
  layerColor,
  minHeight = "320px",
}: EstimateCardProps) {
  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-[21px] border border-white/[0.29] bg-white/[0.03] p-6 backdrop-blur-[15px] transition-all hover:border-white/[0.4] md:p-8"
      style={{ minHeight }}
    >
      <div className="mb-8">
        <HexIcon id={href} topColor={topColor} layerColor={layerColor} />
      </div>

      <div className="flex items-end justify-between gap-4">
        <h3 className="whitespace-pre-line font-serif text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-[48px] lg:leading-[66px]">
          {title}
        </h3>
        <div className="flex shrink-0 flex-col items-end gap-3">
          <p className="hidden max-w-[240px] text-right text-xs leading-relaxed text-muted-foreground md:block">
            {description}
          </p>
          <Link
            href={href}
            className="flex items-center gap-3 text-sm font-normal text-foreground transition-colors md:text-base"
          >
            <span className="font-serif">Learn More</span>
            <svg
              width="40"
              height="2"
              viewBox="0 0 40 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0"
                y1="1"
                x2="36"
                y2="1"
                stroke={arrowColor}
                strokeWidth="2"
              />
              <path d="M34 0L38 1L34 2" fill={arrowColor} />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

function HexIcon({
  topColor,
  layerColor,
  id,
}: {
  topColor: string
  layerColor: string
  id: string
}) {
  const clipId = `clip-hex-${id.replace(/[^a-zA-Z0-9-_]/g, "-")}`

  return (
    <svg
      width="100"
      height="130"
      viewBox="0 0 123 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M123.002 116.111C98.3321 130.739 73.6626 145.366 48.9993 159.994C32.6688 150.335 16.3383 140.677 0.0078125 131.019V114.525C16.3383 124.184 32.6688 133.842 48.9993 143.5C73.6626 128.904 98.3259 114.308 122.989 99.7114C122.989 105.178 123.002 110.645 123.002 116.105V116.111Z"
          fill={layerColor}
          fillOpacity="0.75"
        />
        <path
          d="M123.002 91.7139C98.3321 106.341 73.6626 120.969 48.9993 135.596C32.6688 125.938 16.3383 116.279 0.0078125 106.621V90.128C16.3383 99.7863 32.6688 109.445 48.9993 119.103C73.6626 104.507 98.3259 89.9103 122.989 75.314C122.989 80.7806 123.002 86.2472 123.002 91.7076V91.7139Z"
          fill={layerColor}
          fillOpacity="0.75"
        />
        <path
          d="M123.002 67.7827C98.3321 82.4101 73.6626 97.0376 48.9993 111.665C32.6688 102.007 16.3383 92.3483 0.0078125 82.69V66.1968C16.3383 75.8552 32.6688 85.5135 48.9993 95.1718C73.6626 80.5755 98.3259 65.9792 122.989 51.3828C122.989 56.8494 123.002 62.3161 123.002 67.7765V67.7827Z"
          fill={layerColor}
          fillOpacity="0.75"
        />
        <path
          d="M0 43.8823C24.6695 29.2549 49.339 14.6274 74.0023 0C90.3328 9.65834 106.663 19.3167 122.994 28.975V45.4682C106.663 35.8099 90.3328 26.1515 74.0023 16.4932C49.339 31.0895 24.6757 45.6859 0.0124092 60.2822L0 43.8885V43.8823Z"
          fill={topColor}
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="123" height="160" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
