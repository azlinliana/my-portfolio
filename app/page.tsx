import { SectionWrapper } from "@/components/ui/section-wrapper";

import { Navbar } from "@/components/navbar";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />

        <SectionWrapper id="hero">
          <Hero />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
      </div>
    </main>
  );
}
