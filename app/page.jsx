import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import AIEngineering from "@/components/AIEngineering";
import MobileDevelopment from "@/components/MobileDevelopment";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <AIEngineering />
      <MobileDevelopment />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
