"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const techStack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  {name : "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},
  {name : "Nuxt.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"},
  {name : "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"},
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const avatarY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const cardsX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  
  // Duplicate the array for seamless loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section ref={sectionRef} id="about" className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ y: avatarY }}
            className="flex justify-center mb-6 md:mb-8"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              
              {/* Avatar container */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 md:border-4 border-[hsl(var(--background))] overflow-hidden shadow-2xl">
                <Image
                  src="/img/avatar.jpg"
                  alt="Jammazi Khalil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
            </div>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto leading-relaxed px-4">
            I'm <span className="text-[var(--secondary)] font-semibold">Jammazi khalil</span>, 
            a passionate software developer specializing in building modern web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        {/* Bio Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ x: cardsX }}
          className="grid md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-20"
        >
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-[var(--secondary)] transition-colors">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[hsl(var(--foreground))]">🚀 What I Do</h3>
            <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
              I design and develop full-stack web applications with a focus on user experience, 
              performance, and scalability. From responsive frontends to robust backends, 
              I bring ideas to life with clean, maintainable code.
            </p>
          </div>

          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-[var(--secondary)] transition-colors">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[hsl(var(--foreground))]">💡 My Approach</h3>
            <p className="text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest technologies. 
              My workflow emphasizes collaboration, attention to detail, and creating solutions 
              that not only work but delight users.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-2">
            Technologies I Work With
          </h3>
          <p className="text-sm md:text-base text-[hsl(var(--muted-foreground))]">
            Tools and frameworks I use to build great products
          </p>
        </motion.div>

        {/* Logo Loop */}
        <div className="relative overflow-hidden py-8 md:py-12">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[hsl(var(--background))] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[hsl(var(--background))] to-transparent z-10" />

          {/* Animated Logo Strip */}
          <motion.div
            className="flex gap-8 md:gap-16"
            animate={{
              x: [0, -50 * techStack.length],
            }}
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
                className="flex-shrink-0 w-16 md:w-24 h-16 md:h-24 flex flex-col items-center justify-center gap-2 md:gap-3 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 relative flex items-center justify-center bg-[hsl(var(--card))] rounded-xl md:rounded-2xl border border-[hsl(var(--border))] group-hover:border-[var(--secondary)] transition-all group-hover:scale-110">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-7 h-7 md:w-10 md:h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="text-xs font-medium text-[hsl(var(--muted-foreground))] group-hover:text-[var(--secondary)] transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white hover:scale-105 transition-transform shadow-lg"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
