"use client";

import { profileStats } from "@/data/profile";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Building2, Code2, Gauge, Layers } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 1600;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const techStack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Nuxt.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const highlights = [
  {
    icon: Code2,
    title: "What I bring",
    text: "Production-ready interfaces and systems, from clean frontends to dependable integrations.",
  },
  {
    icon: Gauge,
    title: "What I optimize for",
    text: "Performance, maintainability, and polish that stays easy to build on.",
  },
  {
    icon: Layers,
    title: "Product-minded engineering",
    text: "Interfaces that are fast to understand, fast to load, and fast to maintain.",
  },
  {
    icon: Building2,
    title: "Enterprise to startup range",
    text: "Complex delivery environments without losing UI detail or user flow.",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const avatarY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const cardsX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden px-4 py-12 md:px-6 md:py-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ y: avatarY }}
            className="mb-6 flex justify-center md:mb-8"
          >
            <div className="group relative">
              <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] blur-lg opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[hsl(var(--background))] shadow-2xl sm:h-32 sm:w-32 md:h-40 md:w-40 md:border-4">
                <Image
                  src="/img/avatar.jpg"
                  alt="Jammazi Khalil"
                  fill
                  sizes="(min-width: 768px) 160px, (min-width: 640px) 128px, 96px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <h2 className="mb-4 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl">
            About Me
          </h2>
          <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-[hsl(var(--muted-foreground))] sm:text-lg">
            I&apos;m <span className="font-semibold text-[var(--secondary)]">Khalil Jammazi</span> — full-stack developer, building fast, polished products for web, mobile, and data.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ x: cardsX }}
          className="mb-12 grid gap-4 sm:grid-cols-2 md:mb-16 md:gap-5"
        >
          {highlights.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 transition-colors hover:border-[var(--secondary)] md:rounded-2xl md:p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[color-mix(in_srgb,var(--secondary)_12%,transparent)] text-[var(--secondary)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-[hsl(var(--foreground))] md:text-lg">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{card.text}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-2 gap-4 md:mb-20 md:grid-cols-4"
        >
          {profileStats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 text-center transition-colors hover:border-[var(--secondary)] md:p-6"
            >
              <div className="mb-1 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[hsl(var(--foreground))] md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8 text-center md:mb-12"
        >
          <h3 className="mb-2 text-xl font-bold text-[hsl(var(--foreground))] sm:text-2xl md:text-3xl">Technologies</h3>
          <p className="text-sm text-[hsl(var(--muted-foreground))] md:text-base">The tools I ship with, across web, mobile, and data.</p>
        </motion.div>

        <div className="relative overflow-hidden py-8 md:py-12">
          <div className="absolute top-0 bottom-0 left-0 z-10 w-16 bg-gradient-to-r from-[hsl(var(--background))] to-transparent md:w-32" />
          <div className="absolute top-0 right-0 bottom-0 z-10 w-16 bg-gradient-to-l from-[hsl(var(--background))] to-transparent md:w-32" />

          <motion.div
            className="flex gap-8 md:gap-16"
            animate={{ x: [0, -50 * techStack.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedStack.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center gap-2 group md:h-24 md:w-24 md:gap-3"
              >
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-all group-hover:scale-110 group-hover:border-[var(--secondary)] md:h-16 md:w-16 md:rounded-2xl">
                  <img src={tech.logo} alt={tech.name} className="h-7 w-7 object-contain grayscale transition-all group-hover:grayscale-0 md:h-10 md:w-10" />
                </div>
                <span className="text-center text-xs font-medium text-[hsl(var(--muted-foreground))] transition-colors group-hover:text-[var(--secondary)]">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
