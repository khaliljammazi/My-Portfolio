"use client";

import type { Project } from "@/data/projects";
import { motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  Github,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = { project: Project; nextProject: Project };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function ProjectDetailClient({ project, nextProject }: Props) {
  const insightBlocks = [
    project.challenge ? { title: "Challenge", content: project.challenge } : null,
    project.solution ? { title: "Approach", content: project.solution } : null,
    project.impact ? { title: "Impact", content: project.impact } : null,
  ].filter(Boolean) as { title: string; content: string }[];

  return (
    <main className="min-h-screen">
      <section className="relative h-[55vh] overflow-hidden md:h-[70vh]">
        <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute top-24 left-4 md:left-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/60"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </motion.div>

        <div className="absolute right-0 bottom-0 left-0 p-6 md:p-12">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex flex-wrap gap-2"
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--secondary)]/40 bg-[var(--secondary)]/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              {project.featured && (
                <span className="rounded-full border border-yellow-400/40 bg-yellow-500/30 px-3 py-1 text-xs font-semibold text-yellow-100 backdrop-blur-sm">
                  Featured
                </span>
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-20">
        {project.metrics && project.metrics.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="project-detail-metrics"
          >
            {project.metrics.map((metric) => (
              <div key={metric} className="project-detail-metric-card">
                <span>{metric}</span>
              </div>
            ))}
          </motion.div>
        )}

        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div className="space-y-12 md:col-span-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h2 className="mb-4 text-xl font-bold text-[hsl(var(--foreground))] md:text-2xl">Overview</h2>
              <p className="text-base leading-relaxed text-[hsl(var(--muted-foreground))] md:text-lg">
                {project.overview ?? project.description}
              </p>
            </motion.div>

            {insightBlocks.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.04 }}
                className="project-insight-grid"
              >
                {insightBlocks.map((block) => (
                  <article key={block.title} className="project-insight-card">
                    <p className="project-insight-title">{block.title}</p>
                    <p>{block.content}</p>
                  </article>
                ))}
              </motion.div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
                <h2 className="mb-6 text-xl font-bold text-[hsl(var(--foreground))] md:text-2xl">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.07 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--secondary)]" />
                      <span className="leading-relaxed text-[hsl(var(--muted-foreground))]">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="mb-6 text-xl font-bold text-[hsl(var(--foreground))] md:text-2xl">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] transition-colors hover:border-[var(--secondary)] hover:text-[var(--secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
              )}
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-6 py-3 font-semibold text-[hsl(var(--foreground))] transition-all hover:border-[var(--secondary)] hover:text-[var(--secondary)] active:scale-95"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </Link>
              )}
            </motion.div>
          </div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="sticky top-28 space-y-5 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                Project Info
              </h3>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--secondary)]/10">
                  <Calendar className="h-4 w-4 text-[var(--secondary)]" />
                </div>
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))]">Year</p>
                  <p className="font-semibold text-[hsl(var(--foreground))]">{project.year}</p>
                </div>
              </div>

              {project.role && (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--secondary)]/10">
                    <User className="h-4 w-4 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">Role</p>
                    <p className="font-semibold text-[hsl(var(--foreground))]">{project.role}</p>
                  </div>
                </div>
              )}

              {project.duration && (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--secondary)]/10">
                    <Clock className="h-4 w-4 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">Duration</p>
                    <p className="font-semibold text-[hsl(var(--foreground))]">{project.duration}</p>
                  </div>
                </div>
              )}

              <div className="border-t border-[hsl(var(--border))] pt-2">
                <p className="mb-3 text-xs text-[hsl(var(--muted-foreground))]">Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 px-2.5 py-1 text-xs text-[var(--secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="mt-20 border-t border-[hsl(var(--border))] pt-8 md:mt-28"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
            Next Project
          </p>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 transition-all hover:border-[var(--secondary)] hover:shadow-lg hover:shadow-[var(--secondary)]/10 md:p-8"
          >
            <div className="flex items-center gap-5">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl md:h-20 md:w-20">
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  sizes="(min-width: 768px) 80px, 64px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-[hsl(var(--foreground))] transition-colors group-hover:text-[var(--secondary)] md:text-xl">
                  {nextProject.title}
                </p>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{nextProject.year}</p>
              </div>
            </div>
            <ChevronRight className="h-6 w-6 flex-shrink-0 text-[hsl(var(--muted-foreground))] transition-all group-hover:translate-x-1 group-hover:text-[var(--secondary)]" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
