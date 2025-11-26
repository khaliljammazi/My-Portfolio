import { Hero } from "./components/hero/Hero";
import Projects from "./page/Projects";
import { AboutSection } from "./components/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Jammazi Khalil - Full-Stack Developer specializing in React, Next.js, Vue.js. View my portfolio, projects, and get in touch for freelance work.",
  openGraph: {
    title: "Jammazi Khalil | Full-Stack Developer Portfolio",
    description: "Explore my portfolio showcasing modern web applications built with React, Next.js, Vue.js, and TypeScript.",
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
    </main>

  );
}
