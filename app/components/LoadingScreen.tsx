"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[hsl(var(--background))]"
        >
          {/* Ambient glow blobs */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-[hsl(var(--primary))]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6">
            {/* Cartoon loader */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Outer glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-[var(--secondary)]/30 to-[hsl(var(--primary))]/30 blur-2xl animate-pulse" />

              {/* Orbiting dots */}
              <div className="absolute -inset-12 animate-spin-slow">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[var(--secondary)] shadow-[0_0_12px_rgba(144,25,215,0.8)]" />
                <span className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/80" />
              </div>

              {/* Gradient ring */}
              <div className="relative w-32 h-32 rounded-full p-[3px] bg-gradient-to-r from-[var(--secondary)] via-[hsl(var(--primary))] to-[var(--secondary)] shadow-2xl">
                <div className="relative w-full h-full rounded-full bg-[hsl(var(--background))] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/img/loder-avatar-img.svg"
                    alt="Khalil Jammazi cartoon avatar"
                    width={128}
                    height={128}
                    className="w-24 h-24 animate-floaty"
                    priority
                  />
                </div>
              </div>

              {/* Subtle inner ring */}
              <div className="absolute -inset-1 rounded-full border border-white/10" />
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="text-lg font-bold tracking-wide text-[hsl(var(--foreground))]"
            >
              Khalil Jammazi
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="text-xs text-[hsl(var(--muted-foreground))] tracking-widest uppercase"
            >
              Full-Stack Developer
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
