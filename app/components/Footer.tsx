"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

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

  const socialLinks = [
    { icon: Github, href: "https://github.com/khaliljammazi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/jammazi-mohamed-khalil-440a83119/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:khalil.jammazi366@gmail.com", label: "Email" },
  ];

  const footerLinks = [
    { label: "Work", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
    { label: "Resume", href: "/resume.pdf" },
  ];

  return (
    <footer className="relative border-t border-[hsl(var(--border))] bg-[hsl(var(--background))] mt-12 md:mt-20">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-6 md:mb-8">
          {/* Brand/Info */}
          <div className="space-y-3 md:space-y-4 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] bg-clip-text text-transparent">
              Jammazi khalil
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] text-xs md:text-sm max-w-xs mx-auto md:mx-0">
              Software developer specializing in web development and design. 
              Building beautiful, functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-[hsl(var(--foreground))] text-center md:text-left">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => smoothScrollToSection(e, link.href)}
                  className="group relative px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-[hsl(var(--card))]/50 border border-[hsl(var(--border))] hover:border-[var(--secondary)]/50 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[var(--secondary)]/10 overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative text-xs md:text-sm font-medium text-[hsl(var(--muted-foreground))] group-hover:text-[var(--secondary)] transition-colors">
                    {link.label}
                  </span>
                  
                  {/* Arrow indicator */}
                  <svg 
                    className="absolute top-1.5 md:top-2 right-1.5 md:right-2 w-2.5 md:w-3 h-2.5 md:h-3 text-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-[hsl(var(--foreground))] text-center md:text-left">Connect</h4>
            <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-[var(--secondary)]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[var(--secondary)]/20 overflow-hidden"
                    aria-label={social.label}
                  >
                    {/* Glass shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-[var(--secondary)]/0 group-hover:bg-[var(--secondary)]/10 blur-xl transition-all duration-300" />
                    
                    <Icon className="w-4 md:w-5 h-4 md:h-5 relative z-10 text-[hsl(var(--foreground))] group-hover:text-[var(--secondary)] transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-[hsl(var(--border))] flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-[hsl(var(--muted-foreground))] text-xs md:text-sm text-center md:text-left">
            © {currentYear} Jammazi khalil. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-[hsl(var(--muted-foreground))]">
            <Link href="/privacy" className="hover:text-[var(--secondary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--secondary)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent opacity-50" />
    </footer>
  );
}
