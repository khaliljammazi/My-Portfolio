// src/components/PillNav.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

const smoothScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith('/#')) {
    e.preventDefault();
    const targetId = href.substring(2);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

export function PillNav() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ThemeToggle = () => {
    if (!mounted) {
      return (
        <div className="p-2 w-9 h-9" aria-label="Loading theme toggle">
          <div className="w-5 h-5" />
        </div>
      );
    }

    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full hover:bg-accent transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>
    );
  };

  const Hamburger = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M4 7H24M4 14H24M4 21H24" />
    </svg>
  );

  const Close = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M7 7L21 21M7 21L21 7" />
    </svg>
  );

  return (
    <>
      <motion.header
        animate={{
          height: scrolled ? 68 : 100,
          width: scrolled ? "90%" : "100%",
          margin: scrolled ? "0 auto" : "0",
          borderRadius: scrolled ? 12 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center justify-center border-b",
          scrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 "
            : "bg-transparent border-transparent"
        )}
      >
        {/* Conteneur qui rétrécit en largeur + padding */}
        <motion.nav
          animate={{
            maxWidth: scrolled ? "64rem" : "84rem",  // 5xl → 7xl
            paddingLeft: scrolled ? "1rem" : "2.5rem",
            paddingRight: scrolled ? "1rem" : "2.5rem",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-between w-full"
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "font-bold tracking-tighter transition-all duration-500 z-10",
              scrolled ? "text-lg md:text-2xl" : "text-2xl md:text-4xl"
            )}
          >
            Jammazi Khalil
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 md:px-7 py-2.5 md:py-3.5 text-base md:text-lg font-medium"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={(e) => smoothScrollToSection(e, item.href)}
                >
                  {(isActive || hoveredIndex === i) && (
                    <motion.div
                      layoutId="pill"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-300",
                      isActive || hoveredIndex === i
                        ? "text-primary-foreground"
                        : "text-foreground/70"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            <div className="ml-4 md:ml-10 flex items-center gap-3 md:gap-4">
              <ThemeToggle />
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                  "h-9 md:h-10 px-4 md:px-6 py-2",
                  scrolled ? "text-xs md:text-sm h-8 md:h-9 px-3 md:px-4" : "text-sm md:text-base"
                )}
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 md:p-2 z-50"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <Close /> : <Hamburger />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-x-0 top-16 md:top-20 md:hidden bg-background/95 backdrop-blur border-b z-40 pt-8 md:pt-10 pb-16 md:pb-20"
        >
          <div className="flex flex-col items-center gap-8 md:gap-10 text-2xl md:text-3xl font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  smoothScrollToSection(e, item.href);
                  setMobileOpen(false);
                }}
                className={cn(
                  "transition-colors",
                  pathname === item.href ? "text-primary" : "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 md:h-12 px-6 md:px-8 text-base md:text-lg"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}