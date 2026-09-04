"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const proofPoints = [
  {
    number: "01",
    title: "Enterprise scale",
    text: "High-traffic portals and customer platforms designed to stay fast, clear and maintainable.",
  },
  {
    number: "02",
    title: "Connected systems",
    text: "Frontends, Liferay, Java services, REST APIs and data platforms working as one experience.",
  },
  {
    number: "03",
    title: "Full delivery",
    text: "From architecture and implementation to performance, accessibility and production support.",
  },
];

export function EditorialIntro() {
  return (
    <section id="editorial-intro" className="editorial-intro" aria-labelledby="editorial-title">
      <div className="editorial-intro-heading">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="editorial-kicker"
        >
          How I create value
        </motion.p>
        <motion.h2
          id="editorial-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          Complex technology.
          <span>Clear digital experiences.</span>
        </motion.h2>
      </div>

      <div className="editorial-proof-grid">
        {proofPoints.map((point, index) => (
          <motion.article
            key={point.number}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: index * 0.1, duration: 0.65 }}
          >
            <span>{point.number}</span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="editorial-intro-footer">
        <p>Telecom · Banking · Retail · Analytics · AI</p>
        <Link href="#projects">
          Explore the work <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
