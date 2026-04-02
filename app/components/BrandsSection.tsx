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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                href={brand.url || "#"}
                target={brand.url && brand.url !== "#" ? "_blank" : undefined}
                rel={brand.url && brand.url !== "#" ? "noopener noreferrer" : undefined}
                className="group relative flex items-center justify-between gap-4 px-5 py-4 rounded-[100px_20px_20px_100px] bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[var(--secondary)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(144,25,215,0.18)]"
              >
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[hsl(var(--card))] p-1 shadow-md border border-[hsl(var(--border))]">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={56}
                    height={56}
                    className="w-full h-full rounded-full object-contain"
                    unoptimized
                  />
                </div>
                <div className="pl-12">
                  <span className="block text-sm md:text-base font-semibold text-[hsl(var(--foreground))]">
                    {brand.name}
                  </span>
              
                </div>
                <span className="ml-auto text-xs md:text-sm font-medium px-3 py-1.5 rounded-full text-white bg-gradient-to-b from-[#bea2e7] to-[#86b7e7] transition-transform group-hover:scale-95">
                  Visit
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
