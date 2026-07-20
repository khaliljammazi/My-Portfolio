"use client";

import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const { left, top, width, height } = divRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50",
        className
      )}
      style={{
        background: `
          radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.12), transparent 40%),
          radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(120, 119, 198, 0.1), transparent 50%),
          hsl(var(--background))
        `,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      {children}
    </div>
  );
}