// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react"; // tu peux virer si tu veux

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <SpotlightCard className="h-full overflow-hidden">
        <div className="relative h-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl overflow-hidden transition-all duration-500 group-hover:border-[var(--secondary)]/50 group-hover:shadow-xl group-hover:shadow-[var(--secondary)]/20">
          {/* Image Section */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-[hsl(var(--card))]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
            
            {/* Quick Action Buttons - Appear on hover */}
            <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 bg-[hsl(var(--card))]/90 backdrop-blur-sm border border-[var(--secondary)]/30 rounded-full flex items-center justify-center hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition-all hover:scale-110"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 bg-[hsl(var(--card))]/90 backdrop-blur-sm border border-[var(--secondary)]/30 rounded-full flex items-center justify-center hover:bg-[var(--secondary)] hover:border-[var(--secondary)] transition-all hover:scale-110"
                >
                  <Github className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 relative">
            {/* Title with gradient on hover */}
            <h3 className="text-lg font-bold tracking-tight mb-1.5 group-hover:bg-gradient-to-r group-hover:from-[var(--secondary)] group-hover:to-[hsl(var(--primary))] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {project.title}
            </h3>
            
            <p className="text-[hsl(var(--muted-foreground))] text-xs mb-3 leading-relaxed line-clamp-2 group-hover:text-[hsl(var(--foreground))] transition-colors">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-2 py-0.5 text-xs font-medium rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20 hover:bg-[var(--secondary)]/20 hover:border-[var(--secondary)]/40 transition-all hover:scale-105 cursor-default backdrop-blur-sm">
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* View Project Link */}
            <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
              <span>View Project</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}