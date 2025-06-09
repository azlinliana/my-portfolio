"use client";
import { TextHoverEffect } from "./ui/text-hover-effect";

import Image from "next/image";

import { Tabs } from "./ui/tabs";
import { ProfessionalExperiences } from "./about-tab/professional-experiences";
import { Education } from "./about-tab/education";
import { TechnicalSkills } from "./about-tab/technical-skills";
import { Certification } from "./about-tab/certification";

import astronautAvatar from "../public/about/astronaut-avatar.svg";

export function About() {
  const tabs = [
    {
      title: "Experiences",
      value: "experiences",
      content: (
        <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Professional Experiences Tab</p>

          <ProfessionalExperiences />
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Education Tab</p>

          <Education />
        </div>
      ),
    },
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Technical Skills Tab</p>

          <TechnicalSkills />
        </div>
      ),
    },
    {
      title: "Certification",
      value: "certification",
      content: (
        <div className="w-full relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Certification Tab</p>

          <Certification />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="h-[10rem] flex items-center justify-center">
        <TextHoverEffect text="A B O U T" />
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-4">
      <div className="relative w-50 h-50">
        <Image
          src={astronautAvatar}
          alt="Avatar"
          fill
          className="rounded-full border-4 border-white shadow-lg object-cover"
        />
        
        {/* Online Indicator */}
        <span className="absolute bottom-5 right-3 w-6 h-6 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>

        {/* Name */}
        <h1 className="text-xl font-bold">NUR AZLIN LIANA BINTI MOHD ADLAN</h1>

        {/* Other information */}
        <p className="text-gray-500 text-sm">azlinliana.adlan@gmail.com | Sg. Buloh, Selangor, Malaysia</p>

        {/* About Me */}
        <div className="max-w-3xl px-4 text-justify text-base leading-relaxed text-gray-700">
          <p>
            I’m a software engineering grad who loves building backend systems that actually solve problems — mostly with Laravel, REST APIs, and SQL databases.
          </p>
          <br />
          <p>
            One of the coolest projects I worked on was leading the backend for an internal system at my company’s Audit Unit. I helped create APIs that made tracking staff disciplinary records way easier and more efficient.
          </p>
          <br />
          <p>
            I enjoy working with teams where I can learn and contribute to meaningful projects. Backend is my main jam, but I’m happy to dive into full-stack stuff and collaborate with frontend folks to make sure everything runs smoothly.
          </p>
          <br />
          <p>
            Outside of work, I’m all about consistency, teamwork, and doing things right — even if it takes a bit longer. If you’re building something cool or want to team up, just reach out!
          </p>
        </div>
      </div>

      {/* Tab section */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-start justify-start my-40 px-2 sm:px-4 py-5 [perspective:1000px] rounded-xl">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}
