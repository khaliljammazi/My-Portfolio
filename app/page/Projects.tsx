"use client";

import { BlossomCarousel, BlossomDots, BlossomNext, BlossomPrev } from "@blossom-carousel/react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { useMemo, useState } from "react";

const carouselId = "projects-cover-flow";
const filters = ["All", "Frontend", "Full Stack", "Mobile", "Data"] as const;

function projectCategory(tags: string[]) {
  const stack = tags.join(" ").toLowerCase();
  if (stack.includes("react native") || stack.includes("expo")) return "Mobile";
  if (stack.includes("qlik") || stack.includes("d3")) return "Data";
  if (stack.includes("node") || stack.includes("java") || stack.includes("mongo") || stack.includes("postgres")) return "Full Stack";
  return "Frontend";
}

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === "All" || projectCategory(project.tags) === filter),
    [filter]
  );

  const trackActiveProject = (event: React.UIEvent<HTMLElement>) => {
    const carousel = event.currentTarget;
    const center = carousel.getBoundingClientRect().left + carousel.clientWidth / 2;
    const slides = Array.from(carousel.querySelectorAll<HTMLElement>("[data-blossom-slide]"));
    const closest = slides.reduce((best, slide, index) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });
    setActiveIndex(closest.index);
  };

  const selectFilter = (nextFilter: (typeof filters)[number]) => {
    setFilter(nextFilter);
    setActiveIndex(0);
  };

  return (
    <section id="projects" aria-labelledby="projects-title" className="projects-section">
      <div className="projects-glow projects-glow-left" aria-hidden="true" />
      <div className="projects-glow projects-glow-right" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="projects-heading"
      >
        <span className="projects-kicker">Selected work</span>
        <h2 id="projects-title">My Projects</h2>
        <p>Drag, swipe, or use the controls to explore each case study.</p>
      </motion.div>

      <div className="project-filters" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => selectFilter(item)}
            aria-pressed={filter === item}
            className={filter === item ? "is-active" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      <BlossomCarousel key={filter} id={carouselId} as="ul" className="projects-cover-flow" aria-label={`${filter} projects`} onScroll={trackActiveProject}>
        {visibleProjects.map((project) => (
          <li key={project.slug} data-blossom-slide className="project-cover-item">
            <div className="project-cover-slide">
              <article className="project-cover-card">
                <Link href={`/projects/${project.slug}`} className="project-cover-image" tabIndex={-1} aria-hidden="true">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 60vw, 520px"
                    className="object-cover"
                  />
                  <div className="project-cover-shade" />
                  <span className="project-year">{project.year}</span>
                </Link>

                <div className="project-cover-content">
                  <div>
                    <p className="project-role">{project.role ?? "Featured project"}</p>
                    <h3>
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>
                  </div>
                  <p className="project-description">{project.shortDescription || project.description}</p>
                  <div className="project-tags" aria-label="Technologies used">
                    {project.tags.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-actions">
                    <Link href={`/projects/${project.slug}`} className="project-primary-action">
                      View case study <ExternalLink size={16} aria-hidden="true" />
                    </Link>
                    {project.githubUrl && (
                      <Link href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} className="project-icon-action">
                        <Github size={18} aria-hidden="true" />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`} className="project-icon-action">
                        <ExternalLink size={18} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </div>
          </li>
        ))}
      </BlossomCarousel>

      <div className="project-carousel-controls">
        <BlossomPrev for={carouselId} className="project-arrow" aria-label="Previous project">
          <ChevronLeft aria-hidden="true" />
        </BlossomPrev>
        <div className="project-dots" aria-label="Choose a project">
          <BlossomDots for={carouselId} />
        </div>
        <BlossomNext for={carouselId} className="project-arrow" aria-label="Next project">
          <ChevronRight aria-hidden="true" />
        </BlossomNext>
      </div>
      <div className="project-progress" aria-live="polite">
        <span>{String(activeIndex + 1).padStart(2, "0")}</span>
        <div aria-hidden="true"><i style={{ width: `${((activeIndex + 1) / visibleProjects.length) * 100}%` }} /></div>
        <span>{String(visibleProjects.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
