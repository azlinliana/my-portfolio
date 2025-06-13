"use client";
import React, { useState } from "react";

import { TextHoverEffect } from "./ui/text-hover-effect";
import { BackgroundGradient } from "./ui/background-gradient";

import Image from "next/image";

import { Experiences } from "./about-tab/experiences";
import { Educations } from "./about-tab/educations";
import { TechnicalSkills } from "./about-tab/technical-skills";
import { Certifications } from "./about-tab/certifications";

import astronautAvatar from "../public/about/astronaut-avatar.svg";

import {
  IconMail,
  IconMapPin
} from "@tabler/icons-react";

export function About() {
  const [activeTab, setActiveTab] = useState("experiences");

  const tabItems = [
    {
      id: "experiences",
      title: "EXPERIENCES",
      content: <Experiences />,
    },
    {
      id: "educations",
      title: "EDUCATIONS",
      content: <Educations />,
    },
    {
      id: "skills",
      title: "SKILLS",
      content: <TechnicalSkills />,
    },
    {
      id: "certifications",
      title: "CERTIFICATIONS",
      content: <Certifications />,
    },
  ];
  
  return (
    <>
      <div className="h-[10rem] flex items-center justify-center">
        <TextHoverEffect text="A B O U T" />
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-10 pt-5 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Avatar with indicator */}
          <div className="relative w-48 h-48">
            <Image
              src={astronautAvatar}
              alt="Avatar"
              fill
              className="rounded-full border-4 border-white shadow-lg object-cover"
            />
            <span className="absolute bottom-5 right-3 w-6 h-6 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>

          <div className="space-y-5">
            {/* Name */}
            <h1 className="text-3xl font-bold mt-15">NUR AZLIN LIANA BINTI MOHD ADLAN</h1>

            {/* Other information */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-neutral-600 dark:text-neutral-200 text-lg mt-1">
              <div className="flex items-center gap-1">
                <IconMail />

                <span>azlinliana.adlan@gmail.com</span>
              </div>

              ┃
              
              <div className="flex items-center gap-1">
                <IconMapPin />

                <span>Sg. Buloh, Selangor, Malaysia</span>
              </div>
            </div>

          </div>
        </div>

        {/* Summary */}
        <div className="w-full text-left text-base leading-relaxed text-gray-700 pb-10">
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent my-5">
            SUMMARY
          </h2>

          <p className="text-neutral-600 dark:text-neutral-200 text-justify text-lg">
            Software engineering graduate with nearly three (3) years of hands-on experience, focusing on backend development with working knowledge of full-stack technologies. 
            Passionate about building clean, maintainable systems that support real users and business processes.
            While backend development is my primary interest and strength, I work effectively alongside frontend developers to ensure smooth integration and overall system performance. 
            Known for being hardworking, reliable, and committed to continuous learning and technical growth within collaborative development environments.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="w-full py-10">
        <BackgroundGradient>
          <div className="w-full bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg">
            {/* Tab Headers */}
            <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
              <ul
                className="flex flex-wrap -mb-px text-lg font-semibold text-center"
                role="tablist"
              >
                {tabItems.map((tab) => (
                  <li className="me-2" key={tab.id} role="presentation">
                    <button
                      className={`inline-block p-4 border-b-2 transition-all duration-200 ${
                        activeTab === tab.id
                          ? "text-violet-300 dark:text-violet-300 font-bold"
                          : "text-gray-900 dark:text-gray-300 border-transparent hover:border-gray-300"
                      }`}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tab Content Panels */}
            {tabItems.map((tab) =>
              activeTab === tab.id ? (
                <div key={tab.id} role="tabpanel">
                  {tab.content}
                </div>
              ) : null
            )}
          </div>
        </BackgroundGradient>
      </div>
    </>
  );
}
