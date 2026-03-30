"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = { project: Project; nextProject: Project };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

export default function ProjectDetailClient({ project, nextProject }: Props) {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] md:h-[70vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-24 left-4 md:left-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-black/60 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </motion.div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--secondary)]/30 text-white border border-[var(--secondary)]/40 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              {project.featured && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/30 text-yellow-200 border border-yellow-400/40 backdrop-blur-sm">
                  ★ Featured
                </span>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">

          {/* Left column — main content */}
          <div className="md:col-span-2 space-y-12">

            {/* Overview */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
            >
              <h2 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-4">
                Overview
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-base md:text-lg">
                {project.overview ?? project.description}
              </p>
            </motion.div>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={0.05}
              >
                <h2 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
                  Key Highlights
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[var(--secondary)] flex-shrink-0 mt-0.5" />
                      <span className="text-[hsl(var(--muted-foreground))] leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Tech Stack */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.1}
            >
              <h2 className="text-xl md:text-2xl font-bold text-[hsl(var(--foreground))] mb-6">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] text-sm font-medium hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0.15}
              className="flex flex-wrap gap-4 pt-2"
            >
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white font-semibold hover:scale-105 active:scale-95 transition-transform shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(var(--card))] border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-semibold hover:border-[var(--secondary)] hover:text-[var(--secondary)] active:scale-95 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </Link>
              )}
            </motion.div>
          </div>

          {/* Right column — meta info */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="space-y-4"
          >
            <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-6 space-y-5 sticky top-28">
              <h3 className="text-sm font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wider">
                Project Info
              </h3>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-[var(--secondary)]" />
                </div>
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Year</p>
                  <p className="font-semibold text-[hsl(var(--foreground))]">{project.year}</p>
                </div>
              </div>

              {project.role && (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">Role</p>
                    <p className="font-semibold text-[hsl(var(--foreground))]">{project.role}</p>
                  </div>
                </div>
              )}

              {project.duration && (
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">Duration</p>
                    <p className="font-semibold text-[hsl(var(--foreground))]">{project.duration}</p>
                  </div>
                </div>
              )}

              <div className="pt-2 border-t border-[hsl(var(--border))]">
                <p className="text-xs text-[hsl(var(--muted-foreground))] mb-3">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-lg bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Next Project */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          className="mt-20 md:mt-28 pt-8 border-t border-[hsl(var(--border))]"
        >
          <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 uppercase tracking-wider font-medium">
            Next Project
          </p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[var(--secondary)] rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg hover:shadow-[var(--secondary)]/10"
          >
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <p className="font-bold text-lg md:text-xl text-[hsl(var(--foreground))] group-hover:text-[var(--secondary)] transition-colors">
                  {nextProject.title}
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{nextProject.year}</p>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 text-[hsl(var(--muted-foreground))] group-hover:text-[var(--secondary)] group-hover:translate-x-1 transition-all flex-shrink-0" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
