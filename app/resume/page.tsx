import type { Metadata } from "next";
import { Download, ExternalLink, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { experience, profile, skillGroups } from "@/data/profile";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: "Khalil Jammazi - Full-Stack Developer resume. React, Next.js, Vue.js, TypeScript, Node.js, Three.js.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-4 py-24 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex justify-end gap-3 print:hidden">
          <PrintButton />
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] print:rounded-none print:border-none print:shadow-none">
          <div className="bg-gradient-to-r from-[var(--secondary)] to-[hsl(var(--primary))] p-8 md:p-12">
            <h1 className="mb-1 text-3xl font-black text-white md:text-4xl">{profile.name}</h1>
            <p className="mb-6 text-lg font-medium text-white/80">{profile.title}</p>
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
                <Mail className="h-3.5 w-3.5" />
                {profile.email}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-white">
                <Github className="h-3.5 w-3.5" />
                khaliljammazi
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-white">
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-white">
                <ExternalLink className="h-3.5 w-3.5" />
                Portfolio
              </a>
            </div>
          </div>

          <div className="space-y-10 p-8 md:p-12">
            <section>
              <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">Summary</h2>
              <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">
                Passionate full-stack developer with 3+ years of experience building modern, high-performance web applications.
                Specializes in React, Next.js, and Node.js ecosystems, with a strong eye for UI/UX and a track record of
                delivering scalable products from enterprise portals serving millions of users to immersive 3D web experiences.
                {` `}
                {profile.availability}.
              </p>
            </section>

            <hr className="border-[hsl(var(--border))]" />

            <section>
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">Experience</h2>
              <div className="space-y-8">
                {experience.map((job) => (
                  <div key={job.role + job.company}>
                    <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-[hsl(var(--foreground))]">{job.role}</h3>
                        <p className="text-sm font-medium text-[var(--secondary)]">{job.company}</p>
                      </div>
                      <div className="text-right text-sm text-[hsl(var(--muted-foreground))]">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <p className="mb-3 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">{job.summary}</p>
                    <ul className="space-y-1.5">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                          <span className="mt-1.5 text-xs text-[var(--secondary)]">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-[hsl(var(--border))]" />

            <section>
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">Skills</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2 text-xs font-semibold text-[hsl(var(--foreground))]">{group.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 px-2.5 py-1 text-xs text-[var(--secondary)]"
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

            <section>
              <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-[var(--secondary)]">Selected Projects</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-[hsl(var(--foreground))]">Maroc Telecom Rebranding</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Liferay, React, Java - enterprise replatforming and brand rollout</p>
                  </div>
                  <a href="https://www.iam.ma" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-[var(--secondary)] hover:underline">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-medium text-[hsl(var(--foreground))]">Three.js 3D Landing Page</p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">Three.js, WebGL - immersive product storytelling</p>
                  </div>
                  <a href="https://landing-page-mt.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-[var(--secondary)] hover:underline">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/#projects" className="text-sm text-[var(--secondary)] hover:underline">
                  View all projects on portfolio →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
