"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const sectionLabels = ["Intro", "About", "Work", "Clients"];

export function ScrollHUD() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [activeSection, setActiveSection] = useState("Intro");

  useLenis((lenis) => {
    const progress = Math.min(1, Math.max(0, lenis.progress));
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleY(${progress})`;
    }
    if (percentRef.current) {
      percentRef.current.textContent = String(Math.round(progress * 100)).padStart(2, "0");
    }
  });

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = document.querySelectorAll<HTMLElement>("[data-scroll-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const label = visible?.target.getAttribute("data-scroll-section");
        if (label) setActiveSection(label);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <aside className="scroll-hud print:hidden" aria-hidden="true">
      <span className="scroll-hud-label">{activeSection}</span>
      <div className="scroll-hud-track">
        <span ref={progressRef} className="scroll-hud-progress" />
      </div>
      <span ref={percentRef} className="scroll-hud-percent">00</span>
      <span className="scroll-hud-total">/ 100</span>
      <div className="scroll-hud-dots">
        {sectionLabels.map((label) => (
          <span key={label} className={label === activeSection ? "is-active" : ""} />
        ))}
      </div>
    </aside>
  );
}
