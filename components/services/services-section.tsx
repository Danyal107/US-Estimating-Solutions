"use client"

import Link from "next/link"
import {
  Armchair,
  Box,
  Building,
  Building2,
  Calculator,
  CircleDollarSign,
  Clock,
  Factory,
  FileSpreadsheet,
  HardHat,
} from "lucide-react"
import { CTASection } from "@/components/home/cta-section"

const services = [
  { title: "Cost\nEstimation", icon: CircleDollarSign, href: "/cost-estimation" },
  { title: "Construction\nEstimation", icon: Calculator, href: "/construction-estimation" },
  { title: "Construction\nTakeoff", icon: HardHat, href: "/construction-takeoff" },
  { title: "Residential\nEstimating", icon: Building2, href: "/residential-estimation" },
  { title: "Commercial\nEstimating", icon: Building, href: "/commercial-estimating" },
  { title: "Industrial\nEstimating", icon: Factory, href: "/industrial-estimating" },
  { title: "Preliminary\nEstimating", icon: FileSpreadsheet, href: "/preliminary-estimating" },
  { title: "CPM Scheduling", icon: Clock, href: "/cpm-scheduling" },
  { title: "3D Visualization", icon: Box, href: "/3d-visualization" },
  { title: "Interior Design", icon: Armchair, href: "/interior-design-services" },
]

export function ServicesSection() {
  return (
    <section className="bg-black text-white">
      <div className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <h3 className="mb-6 text-lg text-gray-300 md:text-xl">
              Construction Estimating Services Built for Accurate Bids
            </h3>
            <p className="mx-auto max-w-4xl text-sm leading-relaxed text-gray-400">
              We provide professional construction estimating and quantity takeoff services
              designed to help you bid confidently, reduce overhead costs, and plan projects
              more efficiently. Using advanced estimating software, real-time pricing databases,
              and industry expertise, our estimators deliver accurate, reliable takeoffs
              tailored to your project&apos;s scope, timeline, and budget.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {services.slice(0, 4).map((service) => (
              service.href ? (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex aspect-square flex-col justify-between rounded-[22px] border-[3px] border-white/60 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.08] md:p-8"
                >
                  <service.icon className="h-20 w-20 stroke-[1.5] text-white md:h-28 md:w-28" />
                  <h4 className="whitespace-pre-line text-xl font-extrabold leading-tight md:text-2xl">
                    {service.title}
                  </h4>
                </Link>
              ) : (
                <div
                  key={service.title}
                  className="flex aspect-square flex-col justify-between rounded-[22px] border-[3px] border-white/60 bg-white/[0.03] p-6 md:p-8"
                >
                  <service.icon className="h-20 w-20 stroke-[1.5] text-white md:h-28 md:w-28" />
                  <h4 className="whitespace-pre-line text-xl font-extrabold leading-tight md:text-2xl">
                    {service.title}
                  </h4>
                </div>
              )
            ))}
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {services.slice(4, 8).map((service) => (
              service.href ? (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex aspect-square flex-col justify-between rounded-[22px] border-[3px] border-white/60 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.08] md:p-8"
                >
                  <service.icon className="h-20 w-20 stroke-[1.5] text-white md:h-28 md:w-28" />
                  <h4 className="whitespace-pre-line text-xl font-extrabold leading-tight md:text-2xl">
                    {service.title}
                  </h4>
                </Link>
              ) : (
                <div
                  key={service.title}
                  className="flex aspect-square flex-col justify-between rounded-[22px] border-[3px] border-white/60 bg-white/[0.03] p-6 md:p-8"
                >
                  <service.icon className="h-20 w-20 stroke-[1.5] text-white md:h-28 md:w-28" />
                  <h4 className="whitespace-pre-line text-xl font-extrabold leading-tight md:text-2xl">
                    {service.title}
                  </h4>
                </div>
              )
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid w-full grid-cols-2 gap-4 md:w-1/2 md:gap-6">
              {services.slice(8, 10).map((service) => (
                service.href ? (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex aspect-square flex-col justify-between rounded-[22px] border-[3px] border-white/60 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.08] md:p-8"
                  >
                    <service.icon className="h-20 w-20 stroke-[1.5] text-white md:h-28 md:w-28" />
                    <h4 className="whitespace-pre-line text-xl font-extrabold leading-tight md:text-2xl">
                      {service.title}
                    </h4>
                  </Link>
                ) : (
                  <div
                    key={service.title}
                    className="flex aspect-square flex-col justify-between rounded-[22px] border-[3px] border-white/60 bg-white/[0.03] p-6 md:p-8"
                  >
                    <service.icon className="h-20 w-20 stroke-[1.5] text-white md:h-28 md:w-28" />
                    <h4 className="whitespace-pre-line text-xl font-extrabold leading-tight md:text-2xl">
                      {service.title}
                    </h4>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection variant="dark" />
    </section>
  )
}
