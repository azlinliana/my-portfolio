"use client";

import { TypewriterEffect } from "./ui/typewriter-effect";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconFileSymlink,
} from "@tabler/icons-react";

import Image from "next/image";
import astronaut from "../public/hero/astronaut.svg";
import heroBackground from "../public/hero/hero-bg.png";

export function Hero() {
  const words = [
    { text: "Hi," },
    { text: "I'm" },
    {
      text: "Azlin",
      className: "text-violet-300 dark:text-violet-300",
    },
    {
      text: "Liana!",
      className: "text-violet-300 dark:text-violet-300",
    },
  ];

  const links = [
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://mail.google.com/mail/?view=cm&to=azlinliana.adlan@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "http://linkedin.com/in/nur-azlin-liana-binti-mohd-adlan/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "http://github.com/azlinliana",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden min-h-[100vh] pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src={heroBackground}
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-30 dark:opacity-30" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Astronaut image: top on mobile, right on desktop */}
        <div className="w-full lg:w-1/2 flex justify-center mt-6 lg:mt-0 order-1 lg:order-2">
          <Image
            src={astronaut}
            alt="Astronaut Illustration"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
            style={{ animation: "float 4s ease-in-out infinite" }}
          />
        </div>

        {/* Text & typewriter */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-center lg:items-start text-left px-2 sm:px-4">
          <TypewriterEffect words={words} />

          <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-200 max-w-md sm:max-w-lg text-justify leading-relaxed">
            Crafting scalable, adaptable systems – from robust back-end logic to intuitive, impactful front-end. 
            Clean code advocate. Purposeful designer. Relentless problem solver.
          </p>

          <div className="mt-10 w-fit mx-auto lg:mx-0 flex items-center gap-4">
            {/* Floating dock */}
            <FloatingDock items={links} />

            {/* Download resume button */}
            <button
              className="p-[3px] relative"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "https://drive.google.com/file/d/1evnL9-sSo2s2UyaUiwNx_6anLrUPWGmv/view?usp=sharing";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-blue-300 rounded-lg" />

              <div className="px-8 py-3 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center gap-2 text-lg lg:text-xl font-semibold">
                <IconFileSymlink className="w-8 h-8" />

                <span>Resume</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
