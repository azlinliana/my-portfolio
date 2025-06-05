"use client";

import { TypewriterEffect } from "./ui/typewriter-effect";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconFileDownload,
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
      className: "text-blue-300 dark:text-blue-300",
    },
    {
      text: "Liana!",
      className: "text-blue-300 dark:text-blue-300",
    },
  ];

  const links = [
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden min-h-[40rem] px-4 lg:px-10 py-10 flex flex-col lg:flex-row items-center justify-between rounded-2xl">
      {/* Background Image */}
      <Image
        src={heroBackground}
        alt="Hero Background"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30 -z-10" />

      {/* Left */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <TypewriterEffect words={words} />
        <p className="text-neutral-600 dark:text-neutral-200 font-medium mt-4 max-w-lg text-justify">
          A software engineering graduate with nearly three (3) years of experience in web development.
          I’m especially drawn to backend development and enjoy turning ideas into practical, reliable systems through code and collaboration.
          I’m always eager to learn and grow alongside a team that values clean code and continuous improvement.
        </p>

        <div className="mt-10 w-fit mx-auto lg:mx-0 flex items-center gap-4">
          <FloatingDock items={links} />
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-300 to-blue-300 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center gap-2">
              <IconFileDownload className="w-5 h-5" /> Resume
            </div>
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <Image
          src={astronaut}
          alt="Astronaut Illustration"
          style={{ animation: "float 4s ease-in-out infinite" }}
        />
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
    </div>
  );
}
