"use client";

import { credibilityHighlights, profile, skillGroups, workingStyle } from "@/data/profile";
import { motion } from "motion/react";

export function HowIWorkSection() {
  return (
    <section id="process" className="portfolio-band">
      <div className="portfolio-shell">
        <div className="portfolio-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="portfolio-stack"
          >
            <div className="portfolio-section-heading left">
              <span>How I work</span>
              <h2>Intentional systems, clear collaboration, solid delivery</h2>
              <p>Speed, structure, and craft — with UI quality aligned to business outcomes from day one.</p>
            </div>

            <div className="work-style-list">
              {workingStyle.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="portfolio-panel"
                >
                  <h3>{item.title}</h3>
                  <p className="mt-2 text-sm">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            viewport={{ once: true }}
            className="portfolio-proof"
          >
            <div className="portfolio-panel">
              <p className="proof-kicker">Currently building</p>
              <ul className="proof-list text-sm">
                {profile.currentFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="portfolio-panel">
              <p className="proof-kicker">Why teams trust me</p>
              <ul className="proof-list text-sm">
                {credibilityHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="portfolio-section-heading"
        >
          <span>Core stack</span>
          <h2>Strengths grouped by how I ship</h2>
          <p>How I think about the stack when building and maintaining products.</p>
        </motion.div>

        <div className="skill-group-grid">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="skill-group-card"
            >
              <h3>{group.title}</h3>
              <div className="skill-chip-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
