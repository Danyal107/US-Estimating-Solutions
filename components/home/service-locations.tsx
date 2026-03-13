'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ServiceLocations() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl text-balance">
          Service Locations
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          We work in the USA, UK, Canada, Australia, and all over the world
        </p>

        {/* Map Container: Increased max-w-4xl to max-w-6xl */}
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="relative mx-auto aspect-[1400/788] max-w-6xl cursor-pointer"
        >
          {/* 1. Base Map */}
          <div className="relative h-full w-full">
            <Image
              src="/images/us-map.svg"
              alt="Base Map"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* 2. Hover Map */}
          <motion.div
            variants={{
              rest: {
                opacity: 0,
                // Softened the blur slightly for a cleaner transition on a larger image
                filter: 'blur(4px) brightness(0.8)',
              },
              hover: {
                opacity: 1,
                filter: 'blur(0px) brightness(1)',
              },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 pointer-events-none"
          >
            <Image
              src="/images/us-map-hover.svg"
              alt="Active Map"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(197,161,110,0.3)]"
            />
          </motion.div>

          {/* 3. Background Atmospheric Glow */}
          <motion.div
            variants={{
              rest: { opacity: 0, scale: 0.8 },
              hover: { opacity: 0.15, scale: 1.1 },
            }}
            className="absolute inset-0 -z-10 bg-[#C5A16E] blur-[120px] rounded-full"
            transition={{ duration: 1.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
