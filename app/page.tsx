import { Navbar } from "@/components/navbar";
import Hero from "./landing_pages/hero";
import About from "./landing_pages/about";

export default function Page() {
  return (
    <>
      <Navbar />
      
      <Hero />

      <About />
    </>
  );
}
