import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
