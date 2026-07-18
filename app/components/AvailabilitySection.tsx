"use client";

import { profile } from "@/data/profile";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

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
            <h2>Ready for product-focused freelance work and full-time roles</h2>
            <p>
              If you need a developer who can move between product thinking, polished frontend work, and practical full-stack delivery, let&apos;s talk.
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
                  download={action.download}
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
