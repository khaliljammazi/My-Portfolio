import { Hero } from "./components/hero/Hero";
import Projects from "./page/Projects";
import { AboutSection } from "./components/AboutSection";
import { BrandsSection } from "./components/BrandsSection";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
export const metadata: Metadata = {
  title: "Home",
  description: "Mohamed Khalil Jammazi is a front-end and full-stack developer building high-traffic telecom portals, banking integrations, micro-frontends, and enterprise applications.",
  openGraph: {
    title: "Mohamed Khalil Jammazi | Enterprise Front-End & Full-Stack Developer",
    description: "Case studies across telecom, banking, retail, embedded analytics, and scalable web platforms.",
  },
};

export default function Home() {
  return (
    <main> 
      <Hero />
      <AboutSection />
      <section className="min-h-screen flex items-center justify-center">
        <Projects />
      </section>
      <BrandsSection />
      <Analytics />
    </main>

  );
}
