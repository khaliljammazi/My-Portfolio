"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Code2 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--secondary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="hidden md:block absolute top-1/4 left-[8%] opacity-10"
        aria-hidden="true"
      >
        <Code2 className="w-20 h-20 text-[var(--secondary)]" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="hidden md:block absolute bottom-1/4 right-[8%] opacity-10"
        aria-hidden="true"
      >
        <Code2 className="w-24 h-24 text-[hsl(var(--primary))]" />
      </motion.div>

      <div className="text-center relative z-10 max-w-lg">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative inline-block mb-6"
        >
          {/* Glow layer */}
          <div className="absolute inset-0 text-[9rem] font-black leading-none text-[var(--secondary)] blur-3xl opacity-20 select-none pointer-events-none">
            404
          </div>
          <h1 className="relative text-[7rem] sm:text-[9rem] md:text-[11rem] font-black leading-none bg-gradient-to-br from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent select-none">
            404
          </h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent mb-8"
        />

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))] mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-10"
        >
          This page doesn&apos;t exist or was moved. Let&apos;s get you back somewhere useful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white font-semibold hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-[var(--secondary)]/20"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-semibold hover:border-[var(--secondary)] hover:text-[var(--secondary)] active:scale-95 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </div>
    </main>
  );
}
