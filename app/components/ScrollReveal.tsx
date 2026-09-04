"use client";

import { motion, useReducedMotion } from "motion/react";

export function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="scroll-reveal-shell"
      initial={reduceMotion ? false : { opacity: 0.28, y: 64, scale: 0.985, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="scroll-reveal-glow" aria-hidden="true" />
      {children}
    </motion.div>
  );
}
