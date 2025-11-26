"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  linkHref?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "primary" | "outline";
};

export function Button({ 
  children, 
  className = "", 
  linkHref = "#", 
  size = "default", 
  variant = "default",
  ...props 
}: ButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    default: "bg-white text-black hover:bg-gray-100",
    primary: "bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white",
    outline: "bg-transparent border-2 border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:border-[var(--secondary)]",
  };

  return (
    <Link href={linkHref}>
      <motion.div
        className="relative inline-block group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated Star Border */}
        <div className="absolute -inset-[2px] rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.4), transparent 40%)`,
            }}
          />
          {/* Rotating border gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, var(--secondary) 60deg, transparent 120deg, transparent 240deg, var(--secondary) 300deg, transparent 360deg)`,
            }}
          />
        </div>

        {/* Button */}
        <button
          className={`relative ${sizeClasses[size]} ${variantClasses[variant]} font-semibold rounded-lg transition-all duration-300 ${className}`}
          {...props}
        >
          {/* Inner glow on hover */}
          {isHovering && variant === "primary" && (
            <motion.div
              className="absolute inset-0 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 60%)`,
              }}
            />
          )}
          <span className="relative z-10">{children}</span>
        </button>
      </motion.div>
    </Link>
  );
}
     

