"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import HeroBackground from "../../../public/hero/hero-bg.svg";
import Astronaut from "../../../public/hero/astronaut.svg";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";

import { IconBrandGithub, IconFileCv } from "@tabler/icons-react";

export default function Home() {
  // Stars
  const [stars, setStars] = useState<{ 
    top: string; 
    left: string; 
    delay: string; 
    opacity: number 
  }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    
    setStars(generatedStars);
  }, []);

  // Typewritter effect
  const words = [
    { text: "Hi," },
    { text: "I'm" },
    {text: "Azlin"},
    {text: "Liana!"},
  ];

  return (
    <div className="relative w-full overflow-hidden min-h-screen px-10 sm:px-30 py-20">
      {/* Background image */}
      <Image
        src={HeroBackground}
        alt="Hero Background"
        fill
        className="object-cover z-[-10]"
        priority
      />

      {/* Stardust mist layer */}
      <div className="absolute inset-0 z-[-5] pointer-events-none mix-blend-screen">
        <div className="absolute w-[300px] h-[300px] bg-[#d4ccfc]/40 blur-3xl rounded-full top-1/4 left-1/3 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-[#9ec6fb]/35 blur-3xl rounded-full top-[60%] left-[10%] animate-pulse delay-1000" />
        <div className="absolute w-[500px] h-[500px] bg-[#797afb]/25 blur-[100px] rounded-full top-[10%] left-[70%] animate-pulse delay-2000" />
      </div>

      {/* Stars layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="w-[2px] h-[2px] bg-white rounded-full absolute animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              opacity: star.opacity,
              boxShadow: "0 0 4px white",
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between z-10 relative gap-10 lg:gap-16">
        {/* Hero description */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 px-4 sm:px-6">
          {/* Typewriter text */}
          <TypewriterEffect words={words} />

          {/* Description */}
          <p className="text-[#f1f9ff] text-base sm:text-lg md:text-xl leading-relaxed text-justify lg:text-left max-w-xl">
            On a mission to craft scalable, adaptable systems — from backend logic to frontend clarity. 
            Clean code learner. Curious mind. Problem solver at heart.
          </p>

          {/* Github & CV/Resume buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            {/* Github */}
            <a
              href="https://github.com/azlinliana"
              target="_blank"
              rel="noopener noreferrer"
            >            
              <button className="p-[2px] relative rounded-md overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 -z-10" />
                
                <div className="px-8 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md text-white font-semibold transition duration-200 flex items-center gap-2 group-hover:opacity-90 group-hover:scale-[1.02]">
                  <IconBrandGithub /> GitHub
                </div>
              </button>
            </a>


            {/* CV/Resume */}
            <a
              href="https://drive.google.com/file/d/1vdLO3oSBu14SFFhdY1UPgbG91foWHEja/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >   
              <button className="p-[2px] relative rounded-md overflow-hidden group">
                <div className="absolute inset-0 bg-white/10 -z-10" />
                <div className="px-8 py-2 rounded-md text-white font-semibold transition duration-200 flex items-center gap-2 bg-white/5 group-hover:scale-[1.02]">
                  <IconFileCv /> CV/Resume
                </div>
              </button>
            </a>
          </div>
        </div>

        {/* Astronaut image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={Astronaut}
            alt="Astronaut Illustration"
            className="w-[70%] sm:w-[60%] md:w-[80%] lg:w-[90%] max-w-[450px] h-auto"
            style={{ animation: "float 4s ease-in-out infinite" }}
            priority
          />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .animate-twinkle {
          animation: twinkle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
