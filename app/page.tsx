import { Hero } from "./components/hero/Hero";
import Projects from "./page/Projects";
import { AboutSection } from "./components/AboutSection";

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
