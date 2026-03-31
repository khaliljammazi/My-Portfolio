import type { Metadata } from "next";
import { Download, Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: "Khalil Jammazi — Full-Stack Developer resume. React, Next.js, Vue.js, TypeScript, Node.js, Three.js.",
};

const experience = [
  {
    role: "Lead Frontend Developer",
    company: "Maroc Telecom (IAM)",
    period: "2024 – 2025",
    location: "tunis, Tunisia (Remote)",
    bullets: [
      "Rebuilt iam.ma using Liferay DXP + React, achieving +340% performance improvement",
      "Designed and developed 50+ responsive page templates serving 30M+ monthly visitors",
      "Coordinated brand identity rollout across all digital touchpoints",
      "Integrated internal Maroc Telecom APIs and CMS workflows for content teams",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 – Present",
    location: "Remote",
    bullets: [
      "Delivered end-to-end web applications for international clients in e-commerce, fintech, and media",
      "Built a React Native social platform scaling to 500K+ active users with Firebase & GraphQL",
      "Developed an e-commerce platform that improved client conversion rate by 250%",
      "Created immersive 3D web experiences using Three.js and WebGL",
    ],
  },
];

const skills = {
  Frontend: ["React", "Next.js", "Vue.js", "Nuxt.js", "Angular", "TypeScript", "Tailwind CSS", "Three.js", "WebGL"],
  Backend: ["Node.js", "Express", "Java", "Python", "REST APIs", "GraphQL"],
  Database: ["MongoDB", "PostgreSQL", "Firebase"],
  DevOps: ["Docker", "Git", "Vercel", "CI/CD"],
  Design: ["Figma", "Responsive Design", "UI/UX"],
};

const projects = [
  { name: "Maroc Telecom Rebranding", url: "https://www.iam.ma", tags: ["Liferay", "React", "Java"] },
  { name: "Three.js 3D Landing Page", url: "https://landing-page-mt.vercel.app", tags: ["Three.js", "WebGL"] },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Download + print bar */}
        <div className="flex justify-end gap-3 mb-8 print:hidden">
          <PrintButton />
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] text-white text-sm font-semibold hover:scale-105 active:scale-95 transition-transform shadow-lg"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* Resume card */}
        <div className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl overflow-hidden print:border-none print:rounded-none print:shadow-none">

          {/* Header */}
          <div className="bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-1">Khalil Jammazi</h1>
            <p className="text-white/80 text-lg font-medium mb-6">Full-Stack Developer</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <a href="mailto:khalil.jammazi366@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" />
                khalil.jammazi366@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Tunisia (Remote)
              </span>
              <a href="https://github.com/khaliljammazi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Github className="w-3.5 h-3.5" />
                khaliljammazi
              </a>
              <a href="https://www.linkedin.com/in/jammazi-mohamed-khalil-440a83119/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a href="https://khalil-jammazi.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                Portfolio
              </a>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">

            {/* Summary */}
            <section>
              <h2 className="text-xs font-bold text-[var(--secondary)] uppercase tracking-widest mb-4">Summary</h2>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Passionate full-stack developer with 3+ years of experience building modern, high-performance web applications.
                Specializes in React, Next.js, and Node.js ecosystems, with a strong eye for UI/UX and a track record of
                delivering scalable products — from enterprise portals serving millions of users to immersive 3D web experiences.
                Available for freelance projects and full-time roles.
              </p>
            </section>

            <hr className="border-[hsl(var(--border))]" />

            {/* Experience */}
            <section>
              <h2 className="text-xs font-bold text-[var(--secondary)] uppercase tracking-widest mb-6">Experience</h2>
              <div className="space-y-8">
                {experience.map((job) => (
                  <div key={job.role + job.company}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="font-bold text-[hsl(var(--foreground))] text-lg">{job.role}</h3>
                        <p className="text-[var(--secondary)] font-medium text-sm">{job.company}</p>
                      </div>
                      <div className="text-right text-sm text-[hsl(var(--muted-foreground))]">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                          <span className="text-[var(--secondary)] mt-1.5 text-xs">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-[hsl(var(--border))]" />

            {/* Skills */}
            <section>
              <h2 className="text-xs font-bold text-[var(--secondary)] uppercase tracking-widest mb-6">Skills</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-xs font-semibold text-[hsl(var(--foreground))] mb-2">{category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs rounded-lg bg-[var(--secondary)]/10 text-[var(--secondary)] border border-[var(--secondary)]/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-[hsl(var(--border))]" />

            {/* Selected projects */}
            <section>
              <h2 className="text-xs font-bold text-[var(--secondary)] uppercase tracking-widest mb-6">Selected Projects</h2>
              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-[hsl(var(--foreground))]">{p.name}</span>
                      <div className="flex gap-1">
                        {p.tags.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-xs rounded-md bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]">{t}</span>
                        ))}
                      </div>
                    </div>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[var(--secondary)] hover:underline text-sm flex items-center gap-1">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/#projects" className="text-sm text-[var(--secondary)] hover:underline">
                  View all projects on portfolio →
                </Link>
              </div>
            </section>

          </div>
        </div>

        {/* Note about PDF */}
        <p className="text-center text-xs text-[hsl(var(--muted-foreground))] mt-6 print:hidden">
          To download as PDF, place your <code className="font-mono">resume.pdf</code> in the{" "}
          <code className="font-mono">/public</code> folder, or use the &ldquo;Print / Save PDF&rdquo; button above.
        </p>
      </div>
    </main>
  );
}
