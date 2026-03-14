'use client';

import { CTASection } from '@/components/home/cta-section';
import { AnimatedServiceCard } from '@/components/common/animated-service-card';

const services = [
  {
    title: 'Cost\nEstimation',
    description:
      'Accurate cost estimates to help you budget confidently and submit competitive bids.',
    slug: 'cost-estimation',
    href: '/cost-estimation',
  },
  {
    title: 'Construction\nEstimation',
    description:
      'Detailed construction estimates covering labor, materials, equipment, and overhead.',
    slug: 'construction-estimation',
    href: '/construction-estimation',
  },
  {
    title: 'Construction\nTakeoff',
    description:
      'Precise quantity takeoffs that eliminate guesswork and improve bid accuracy.',
    slug: 'construction-takeoff',
    href: '/construction-takeoff',
  },
  {
    title: 'Residential\nEstimating',
    description:
      'Reliable estimating solutions for residential projects of all sizes.',
    slug: 'residential-estimating',
    href: '/residential-estimation',
  },
  {
    title: 'Commercial\nEstimating',
    description:
      'Comprehensive commercial estimates designed for complex, large-scale projects.',
    slug: 'commercial-estimating',
    href: '/commercial-estimating',
  },
  {
    title: 'CPM\nScheduling',
    description:
      'Professional CPM schedules that optimize timelines and project coordination.',
    slug: 'cpm-scheduling',
    href: '/cpm-scheduling',
  },
  {
    title: 'Industrial\nEstimating',
    description:
      'Accurate industrial estimates aligned with strict standards and project demands.',
    slug: 'industrial-estimating',
    href: '/industrial-estimating',
  },
  {
    title: 'Preliminary\nEstimating',
    description:
      'Early-stage cost insights to support planning and feasibility decisions.',
    slug: 'preliminary-estimating',
    href: '/preliminary-estimating',
  },
  {
    title: '3D\nVisualization',
    description:
      'Bring designs to life with detailed 3D models that clearly communicate form, layout, and intent.',
    slug: '3d-visualization',
    href: '/3d-visualization',
  },
  {
    title: 'Interior\nDesign',
    description:
      'Create functional, well-planned interior spaces that support workflow, comfort, and efficiency.',
    slug: 'interior-design-services',
    href: '/interior-design-services',
  },
];

const glowColors = [
  'bg-[#53C0AE]',
  'bg-[rgba(164,107,238,0.9)]',
  'bg-[rgba(237,44,76,0.85)]',
  'bg-[rgba(234,126,55,0.9)]',
];

export function ServicesSection() {
  return (
    <section className="bg-black text-white">
      <div className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Our Services
            </h2>
            <h3 className="mb-6 text-lg text-gray-300 md:text-xl">
              Construction Estimating Services Built for Accurate Bids
            </h3>
            <p className="mx-auto max-w-4xl text-sm leading-relaxed text-gray-400">
              We provide professional construction estimating and quantity
              takeoff services designed to help you bid confidently, reduce
              overhead costs, and plan projects more efficiently. Using advanced
              estimating software, real-time pricing databases, and industry
              expertise, our estimators deliver accurate, reliable takeoffs
              tailored to your project&apos;s scope, timeline, and budget.
            </p>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {services.slice(0, 4).map((service, index) => (
              <AnimatedServiceCard
                key={service.slug}
                href={service.href}
                title={service.title}
                description={service.description}
                iconSrc={`/images/services-section/${service.slug}.svg`}
                glowColorClassName={glowColors[index % 4]}
                imagePriority={index < 4}
                size="sm"
              />
            ))}
          </div>

          <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {services.slice(4, 8).map((service, index) => (
              <AnimatedServiceCard
                key={service.slug}
                href={service.href}
                title={service.title}
                description={service.description}
                iconSrc={`/images/services-section/${service.slug}.svg`}
                glowColorClassName={glowColors[index % 4]}
                size="sm"
              />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid w-full grid-cols-2 gap-4 md:w-1/2 md:gap-6">
              {services.slice(8, 10).map((service, index) => (
                <AnimatedServiceCard
                  key={service.slug}
                  href={service.href}
                  title={service.title}
                  description={service.description}
                  iconSrc={`/images/services-section/${service.slug}.svg`}
                  glowColorClassName={glowColors[index % 4]}
                  size="sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection variant="dark" />
    </section>
  );
}
