"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const capabilities = [
  "FULL-STACK",
  "LIFERAY DXP",
  "REACT",
  "JAVA",
  "MICRO-FRONTENDS",
  "AI / RAG",
];

function MarqueeLine({ reverse = false }: { reverse?: boolean }) {
  const line = Array.from({ length: 3 }, () => capabilities).flat();

  return (
    <div className={reverse ? "kinetic-line kinetic-line-outline" : "kinetic-line"}>
      {line.map((label, index) => (
        <span key={`${label}-${index}`}>
          {label}
          <i aria-hidden="true">✦</i>
        </span>
      ))}
    </div>
  );
}

export function KineticStrip() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const firstX = useTransform(scrollYProgress, [0, 1], ["-18%", "0%"]);
  const secondX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section ref={ref} className="kinetic-strip" aria-label="Core capabilities">
      <motion.div style={reduceMotion ? undefined : { x: firstX }}>
        <MarqueeLine />
      </motion.div>
      <motion.div style={reduceMotion ? undefined : { x: secondX }}>
        <MarqueeLine reverse />
      </motion.div>
    </section>
  );
}
