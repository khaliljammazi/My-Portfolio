"use client";

import { profile } from "@/data/profile";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

const actions = [
  { label: "Email me", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Download CV", href: "/resume.pdf", icon: Download, download: true },
] as const;

export function AvailabilitySection() {
  return (
    <section id="availability" className="portfolio-band">
      <div className="portfolio-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="availability-card"
        >
          <div>
            <span className="availability-badge">{profile.availability}</span>
            <h2>Open to freelance projects and full-time roles</h2>
            <p>
              Product thinking, polished frontend, and practical full-stack delivery — in one developer. Let&apos;s talk.
            </p>
            <div className="availability-meta">
              <span>{profile.location}</span>
              <span>{profile.responseTime}</span>
            </div>
          </div>

          <div className="availability-actions">
            {actions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  download={"download" in action ? action.download : undefined}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noreferrer" : undefined}
                  className="availability-action"
                >
                  <Icon aria-hidden="true" />
                  <span>{action.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
