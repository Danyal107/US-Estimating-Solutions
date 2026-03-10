"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { USALogo } from "@/components/common/usa-logo"

const navLinks = [
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
  },
  {
    label: "Trades",
    href: "/trades",
    hasDropdown: true,
  },
  {
    label: "Our Works",
    href: "/our-works",
  },
  {
    label: "Prices",
    href: "/prices",
  },
  {
    label: "About",
    href: "/about",
  },
]

const servicesDropdownColumns = [
  [
    { label: "Cost Estimation", href: "/cost-estimation" },
    { label: "Construction Estimation", href: "/construction-estimation" },
    { label: "Construction Takeoff", href: "/construction-takeoff" },
  ],
  [
    { label: "Residential Estimating", href: "/residential-estimation" },
    { label: "Commercial Estimating", href: "/commercial-estimating" },
    { label: "Industrial Estimating", href: "/industrial-estimating" },
  ],
  [
    { label: "Preliminary Estimating", href: "/preliminary-estimating" },
    { label: "CPM Scheduling", href: "/cpm-scheduling" },
    { label: "3D Modeling & Visualization", href: "/3d-visualization" },
  ],
  [{ label: "Interior Design Services", href: "/interior-design-services" }],
]

const tradesDropdownColumns = [
  [
    { label: "Interior Estimating", href: "/trades/interior" },
    { label: "Exterior Estimating", href: "/trades/exterior" },
  ],
  [
    { label: "MEP Estimating", href: "/trades/mep" },
    { label: "Structural Estimating", href: "/trades/structural" },
  ],
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [tradesOpen, setTradesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setServicesOpen(false)
    setTradesOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff]/5 backdrop-blur-md border-b border-border/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <USALogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div key={link.label} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
                <button
                  type="button"
                  aria-label="Toggle services dropdown"
                  aria-expanded={servicesOpen}
                  onClick={() => {
                    setServicesOpen((prev) => !prev)
                    setTradesOpen(false)
                  }}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            ) : link.label === "Trades" ? (
              <div key={link.label} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
                <button
                  type="button"
                  aria-label="Toggle trades dropdown"
                  aria-expanded={tradesOpen}
                  onClick={() => {
                    setTradesOpen((prev) => !prev)
                    setServicesOpen(false)
                  }}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${tradesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
            ),
          )}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden rounded-full border border-foreground/30 px-5 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background lg:inline-flex"
        >
          Contact us
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {servicesOpen && (
        <div className="hidden border-t border-border/40 bg-background/95 lg:block">
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-10 px-6 py-8">
            {servicesDropdownColumns.map((column, columnIndex) => (
              <div key={`services-column-${columnIndex}`} className="flex flex-col gap-4">
                {column.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {tradesOpen && (
        <div className="hidden border-t border-border/40 bg-background/95 lg:block">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-8">
            {tradesDropdownColumns.map((column, columnIndex) => (
              <div key={`trades-column-${columnIndex}`} className="flex flex-col gap-4">
                {column.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit rounded-full border border-foreground/30 px-5 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
