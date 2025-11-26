"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decoration with parallax */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[var(--secondary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
            See my work
          </h2>
        </motion.div>

        {/* Project Display */}
        <div className="relative px-0 sm:px-12 md:px-16 lg:px-24">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
            >
              {/* Left: Project Image */}
              <motion.div 
                className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden border border-[hsl(var(--border))] md:border-2 shadow-xl md:shadow-2xl group"
                style={{ scale: imageScale }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Right: Project Info */}
              <motion.div className="space-y-4 md:space-y-6" style={{ y: textY }}>
                <div>
                  <motion.h3 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-[hsl(var(--foreground))]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentProject.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sm sm:text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 md:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentProject.description}
                  </motion.p>
                </div>

                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-xs md:text-sm font-semibold text-[hsl(var(--foreground))] mb-2 md:mb-3">
                    Made with
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {currentProject.tags.map((tag, index) => (
                      <span
                        key={tag}
                        className="px-2.5 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium rounded-lg bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {currentProject.githubUrl && (
                    <Link
                      href={currentProject.githubUrl}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/10 transition-all hover:scale-105 text-sm md:text-base"
                    >
                      <Github className="w-4 md:w-5 h-4 md:h-5" />
                      <span className="font-medium">Github</span>
                    </Link>
                  )}
                  {currentProject.liveUrl && (
                    <Link
                      href={currentProject.liveUrl}
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white hover:scale-105 transition-all shadow-lg text-sm md:text-base"
                    >
                      <ExternalLink className="w-4 md:w-5 h-4 md:h-5" />
                      <span className="font-medium">Live Demo</span>
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-[hsl(var(--card))]/90 backdrop-blur-sm border border-[hsl(var(--border))] md:border-2 flex items-center justify-center hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition-all hover:scale-110 group shadow-xl z-20"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 group-hover:text-white transition-colors" />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-[hsl(var(--card))]/90 backdrop-blur-sm border border-[hsl(var(--border))] md:border-2 flex items-center justify-center hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition-all hover:scale-110 group shadow-xl z-20"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Project Counter & Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 md:mt-16 flex flex-col items-center gap-4 md:gap-6"
        >
          {/* Dots */}
          <div className="flex gap-2 md:gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 md:w-12 h-2 md:h-3 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))]"
                    : "w-2 md:w-3 h-2 md:h-3 rounded-full bg-[hsl(var(--muted-foreground))]/20 hover:bg-[hsl(var(--muted-foreground))]/40"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-[hsl(var(--muted-foreground))] font-medium">
            <span className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))]">{currentIndex + 1}</span>
            <span className="mx-1 md:mx-2">/</span>
            <span className="text-lg md:text-xl">{projects.length}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}