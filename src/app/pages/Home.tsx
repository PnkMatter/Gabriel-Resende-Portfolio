import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Stacks } from "../components/Stacks";
import { Projects } from "../components/Projects";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      <Header />
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
