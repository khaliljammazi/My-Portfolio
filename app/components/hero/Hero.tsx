"use client";

import { Button } from "../ui/Button";
import BlurText from "./BlurText";
import LiquidEther from "./LiquidEther";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" }
  ];

  return (
    <section 
      className="w-full h-screen relative flex items-center justify-center bg-[hsl(var(--background))] overflow-hidden"
      aria-label="Hero section - Introduction"
    >
        <LiquidEther />
        
        {/* Main Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 md:gap-6 max-w-4xl px-4 md:px-6 w-full">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-[hsl(var(--card))]/80 backdrop-blur-sm border border-[hsl(var(--border))] shadow-lg"
            role="status"
            aria-label="Currently available for freelance work"
          >
            <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-[var(--secondary)]" aria-hidden="true" />
            <span className="text-xs md:text-sm font-medium text-[hsl(var(--foreground))]">Available for freelance work</span>
          </motion.div>

          <h1 className="sr-only">Jammazi Khalil - Full-Stack Developer Portfolio</h1>
          
          <BlurText
            text="Welcome to My Portfolio"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-[hsl(var(--foreground))] text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center w-full px-2"
          />
          
          <BlurText
            text="My name is Jammazi Khalil, a software developer specializing in web development and design."
            delay={200}
            animateBy="words"
            className="text-[hsl(var(--muted-foreground))] text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-center leading-relaxed px-2"
          />

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6 w-full sm:w-auto px-4 sm:px-0"
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
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-6 sm:gap-8 mt-8 md:mt-12 flex-wrap justify-center"
            role="region"
            aria-label="Professional statistics"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          role="button"
          aria-label="Scroll down to view more content"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
        >
          <span className="text-xs md:text-sm text-[hsl(var(--muted-foreground))]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-4 md:w-5 h-4 md:h-5 text-[hsl(var(--muted-foreground))]" aria-hidden="true" />
          </motion.div>
        </motion.div>

        {/* Floating Icons - Hidden on mobile */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="hidden md:block absolute top-1/4 left-[10%] opacity-20"
          aria-hidden="true"
        >
          <Code2 className="w-12 lg:w-16 h-12 lg:h-16 text-[var(--secondary)]" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="hidden md:block absolute bottom-1/4 right-[10%] opacity-20"
          aria-hidden="true"
        >
          <Code2 className="w-16 lg:w-20 h-16 lg:h-20 text-[hsl(var(--primary))]" />
        </motion.div>
    </section>
  );
}