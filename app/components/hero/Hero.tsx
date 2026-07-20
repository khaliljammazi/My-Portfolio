"use client";

import { profile } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Code2, Download, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/Button";
import BlurText from "./BlurText";
import LiquidEther from "./LiquidEther";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = resolvedTheme !== "light";
  const liquidColors = isDark
    ? ["#ef4444", "#f87171", "#dc2626"]
    : ["#1e3a8a", "#1d4ed8", "#3b82f6"]; 

  const stats = [
    { label: "Years building products", value: "3+" },
    { label: "Core specialities", value: "Web · Mobile · Data" },
  ];

  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[hsl(var(--background))]"
      aria-label="Hero section - Introduction"
    >
      {reduceMotion ? (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,var(--brand-soft-2),transparent_55%)]"
          aria-hidden="true"
        />
      ) : (
        <LiquidEther colors={liquidColors} />
      )}

      <div className="absolute top-1/2 left-1/2 flex w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 px-4 md:gap-6 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/80 px-3 py-1.5 shadow-lg backdrop-blur-sm md:px-4 md:py-2"
          role="status"
          aria-label="Current availability"
        >
          <Sparkles className="h-3 w-3 text-[var(--secondary)] md:h-4 md:w-4" aria-hidden="true" />
          <span className="text-xs font-medium text-[hsl(var(--foreground))] md:text-sm">{profile.availability}</span>
        </motion.div>

        <h1 className="sr-only">Jammazi Khalil - Full-Stack Developer building scalable digital products</h1>

        <BlurText
          text={profile.headline}
          delay={150}
          animateBy="words"
          direction="bottom"
          className="w-full px-2 text-center text-3xl font-bold text-[hsl(var(--foreground))] sm:text-4xl md:text-6xl lg:text-7xl"
        />

        <BlurText
          text="I'm Jammazi Khalil, a full-stack developer creating scalable web platforms, interactive experiences, and enterprise applications with a strong focus on product clarity and performance."
          delay={200}
          animateBy="words"
          className="max-w-2xl px-2 text-center text-base leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-lg md:text-xl lg:text-2xl"
        />

        <motion.div
          className="mt-4 flex w-full flex-col gap-3 px-4 sm:w-auto sm:flex-row sm:px-0 md:mt-6 md:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button variant="primary" linkHref="#projects">
            View My Work
          </Button>
          <Button variant="outline" linkHref="/contact">
            Contact Me
          </Button>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[hsl(var(--border))] px-6 py-3 font-semibold text-[hsl(var(--foreground))] transition-all duration-300 hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8 md:mt-12"
          role="region"
          aria-label="Professional statistics"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-[hsl(var(--muted-foreground))] sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 md:bottom-8"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        role="button"
        aria-label="Scroll down to view more content"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }
        }}
      >
        <span className="text-xs text-[hsl(var(--muted-foreground))] md:text-sm">Scroll to explore</span>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-4 w-4 text-[hsl(var(--muted-foreground))] md:h-5 md:w-5" aria-hidden="true" />
        </motion.div>
      </motion.div>

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }
        }
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] hidden opacity-20 md:block"
        aria-hidden="true"
      >
        <Code2 className="h-12 w-12 text-[var(--secondary)] lg:h-16 lg:w-16" />
      </motion.div>

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }
        }
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute right-[10%] bottom-1/4 hidden opacity-20 md:block"
        aria-hidden="true"
      >
        <Code2 className="h-16 w-16 text-[hsl(var(--primary))] lg:h-20 lg:w-20" />
      </motion.div>
    </section>
  );
}
