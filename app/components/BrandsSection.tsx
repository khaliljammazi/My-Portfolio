"use client";

import { motion } from "motion/react";
import { brands } from "@/data/brands";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function BrandsSection() {
  const [paused, setPaused] = useState(false);
  // Duplicate for seamless loop
  const loopedBrands = [...brands, ...brands, ...brands];


  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
            Brands I Worked With
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Trusted by leading companies across telecom, finance, and technology sectors
          </p>
        </motion.div>
      </div>

      {/* Scrolling strip */}
      <div className="relative w-full">
        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10 bg-gradient-to-r from-[hsl(var(--background))] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10 bg-gradient-to-l from-[hsl(var(--background))] to-transparent" />

{/* Track wrapper — hover here pauses the CSS animation */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
className="flex gap-5 w-max"
            style={{
              animation: `marquee 45s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {loopedBrands.map((brand, index) => (
              <Link
                key={`${brand.name}-${index}`}
                href={brand.url || "#"}
                target={brand.url && brand.url !== "#" ? "_blank" : undefined}
                rel={brand.url && brand.url !== "#" ? "noopener noreferrer" : undefined}
                className="group flex-shrink-0 flex flex-col items-center justify-center gap-3
                           w-48 h-48 rounded-2xl
                           bg-[hsl(var(--card))] border border-[hsl(var(--border))]
                           hover:border-[var(--secondary)]
                           hover:shadow-[0_8px_32px_rgba(239,68,68,0.22)]
                           hover:-translate-y-1.5
                           transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center bg-white/5 p-2">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={72}
                    height={72}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-sm font-semibold text-center text-[hsl(var(--foreground))] leading-tight px-3 line-clamp-2">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
