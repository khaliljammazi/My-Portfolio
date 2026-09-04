"use client";

import { useLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import { useRef } from "react";

export function ScrollAtmosphere() {
  const beamRef = useRef<HTMLSpanElement>(null);
  const haloRef = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useLenis((lenis) => {
    if (reduceMotion) return;

    const progress = Math.min(1, Math.max(0, lenis.progress));
    const velocity = Math.min(1, Math.abs(lenis.velocity) / 35);

    if (beamRef.current) {
      beamRef.current.style.transform = `translate3d(0, ${progress * 58}vh, 0) rotate(-12deg)`;
    }

    if (haloRef.current) {
      haloRef.current.style.transform = `translate3d(0, ${progress * -28}vh, 0) scale(${1 + velocity * 0.14})`;
      haloRef.current.style.opacity = String(0.32 + velocity * 0.2);
    }
  });

  return (
    <div className="scroll-atmosphere" aria-hidden="true">
      <span ref={beamRef} className="scroll-atmosphere-beam" />
      <span ref={haloRef} className="scroll-atmosphere-halo" />
    </div>
  );
}
