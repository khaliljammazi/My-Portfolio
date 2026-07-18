"use client";

import { experience } from "@/data/profile";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-band">
      <div className="portfolio-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="portfolio-section-heading"
        >
          <span>Experience timeline</span>
          <h2>Selected experience and product impact</h2>
          <p>Enterprise delivery, product execution, and performance-minded frontend engineering across client and freelance work.</p>
        </motion.div>

        <div className="timeline-list">
          {experience.map((job, index) => (
            <motion.article
              key={job.role + job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="timeline-card"
            >
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-period">
                <strong>{job.period}</strong>
                <span>{job.location}</span>
              </div>
              <div className="timeline-content">
                <p className="timeline-company">{job.company}</p>
                <h3>{job.role}</h3>
                <p>{job.summary}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
