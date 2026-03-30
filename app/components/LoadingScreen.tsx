"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            {/* Logo ring */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-transparent"
                style={{
                  background:
                    "linear-gradient(hsl(var(--background)), hsl(var(--background))) padding-box, linear-gradient(to right, var(--secondary), hsl(var(--primary))) border-box",
                }}
              />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[var(--secondary)] blur-xl opacity-30" />
              {/* Avatar/initials */}
              <div className="relative w-20 h-20 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] flex items-center justify-center shadow-2xl">
                <span className="text-2xl font-black bg-gradient-to-br from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent select-none">
                  KJ
                </span>
              </div>
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

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-40 h-0.5 bg-[hsl(var(--border))] rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
