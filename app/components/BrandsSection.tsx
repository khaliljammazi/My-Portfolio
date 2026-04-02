"use client";

import { motion } from "motion/react";
import { brands } from "@/data/brands";
import Image from "next/image";
import Link from "next/link";

export function BrandsSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
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

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={brand.url || "#"}
                target={brand.url && brand.url !== "#" ? "_blank" : undefined}
                rel={brand.url && brand.url !== "#" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[var(--secondary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--secondary)]/10 hover:-translate-y-1 aspect-square"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span className="text-sm md:text-base font-medium text-[hsl(var(--muted-foreground))] group-hover:text-[var(--secondary)] transition-colors text-center">
                  {brand.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Animated marquee for extra flair */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-[hsl(var(--border))]"
        >
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 mx-8 md:mx-12"
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
