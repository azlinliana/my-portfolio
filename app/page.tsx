import { SectionWrapper } from "@/components/ui/section-wrapper";

import { Navbar } from "@/components/navbar";

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <SectionWrapper id="hero" className="py-0">
        <Hero />
      </SectionWrapper>

      {/* Main section */}
      <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
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

      {/* Footer section */}
      <footer className="w-full mt-16 flex flex-col items-center justify-center text-center relative">
        <BackgroundBeamsWithCollision>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Want to build something unforgettable?{" "}
            
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-[#e0b8f0] via-[#66a6f7] to-[#9d4edd] [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>I’m in. Let’s make magic.</span>
              </div>

              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#e0b8f0] via-[#66a6f7] to-[#9d4edd] py-4">
                <span>I’m in. Let’s make magic.</span>
              </div>
            </div>
          </h2>
        </BackgroundBeamsWithCollision>


        <p className="text-md text-muted-foreground dark:text-gray-300 mt-8 mb-4 z-20">
          &copy; 2025 Azlin Liana. All rights reserved.
        </p>
      </footer>
    </>
  );
}
