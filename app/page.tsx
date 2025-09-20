import { Navbar } from "@/components/navbar";

import Hero from "./landing_pages/hero";
import Experience from "./landing_pages/experience";
import Skills from "./landing_pages/skills";

export default function Page() {
  return (
    <>
      <Navbar />
      
      <Hero />

      <Experience />

      <Skills />
    </>
  );
}
