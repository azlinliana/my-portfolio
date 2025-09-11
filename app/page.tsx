import { Navbar } from "@/components/navbar";
import Hero from "./landing_pages/hero";
import About from "./landing_pages/about";
import Skills from "./landing_pages/skills";
import Projects from "./landing_pages/projects"

export default function Page() {
  return (
    <>
      <Navbar />
      
      <Hero />

      <About />

      <Skills />

      <Projects />
    </>
  );
}
