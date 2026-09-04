"use client";

import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Button } from "../ui/Button";
import BlurText from "./BlurText";
import "./hero.css";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const sculptureY = useTransform(scrollYProgress, [0, 0.28], ["0%", "22%"]);
  const sculptureRotate = useTransform(scrollYProgress, [0, 0.28], [0, 7]);

  return (
    <section className="hero-editorial" aria-labelledby="hero-title">
      <div className="hero-stars" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

      <div className="hero-editorial-shell">
        <div className="hero-editorial-copy">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-availability"
          >
            <Sparkles aria-hidden="true" />
            <span>Available for selected projects</span>
          </motion.div>

          <p className="hero-eyebrow">Frontend / Full-Stack · Tunis, Tunisia</p>
          <h1 id="hero-title" className="sr-only">
            Mohamed Khalil Jammazi — I build digital products that perform.
          </h1>

          <div className="hero-display" aria-hidden="true">
            <BlurText
              text="I build digital products"
              delay={110}
              animateBy="words"
              direction="bottom"
              className="hero-display-line"
            />
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hero-display-accent"
            >
              that perform.
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.65 }}
            className="hero-editorial-description"
          >
            Enterprise portals, micro-frontends, API integrations and interactive experiences—built from interface to infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.65 }}
            className="hero-editorial-actions"
          >
            <Button variant="primary" linkHref="#projects" className="!bg-none !bg-[#ff6b72] !text-black">
              View selected work
            </Button>
            <Button variant="outline" linkHref="/contact" className="!border-white/30 !text-white hover:!border-[#ff6b72]">
              Start a conversation
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.86, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={reduceMotion ? undefined : { y: sculptureY, rotate: sculptureRotate }}
          className="hero-sculpture"
          aria-hidden="true"
        >
          <div className="hero-sculpture-glow" />
          <Image
            src="/img/hero-code-sculpture.png"
            alt=""
            fill
            sizes="(max-width: 768px) 88vw, 48vw"
            className="object-contain mix-blend-screen"
            priority
          />
          <span className="hero-sculpture-label hero-sculpture-label-top">Digital systems</span>
          <span className="hero-sculpture-label hero-sculpture-label-bottom">Built end to end</span>
        </motion.div>
      </div>

      <div className="hero-proof" aria-label="Professional highlights">
        <div><strong>4+</strong><span>Years delivering</span></div>
        <div><strong>30M+</strong><span>Monthly visitors</span></div>
        <div><strong>50+</strong><span>APIs integrated</span></div>
        <div><strong>03</strong><span>Working languages</span></div>
      </div>

      <a href="#editorial-intro" className="hero-scroll-cue" aria-label="Scroll to explore">
        <span>Scroll to explore</span>
        <ArrowDown aria-hidden="true" />
      </a>
    </section>
  );
}
