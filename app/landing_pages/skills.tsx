"use client";
import { useState } from "react";
import Image from "next/image";

import ContentLayout from "@/components/layout/content-layout";
import TitleSection from "@/components/title-section";

import { MagicBorder } from "@/components/ui/magic-border";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import { 
  IconDeviceDesktopCode, 
  IconServer2, 
  IconSettings,
  IconChevronCompactDown
} from "@tabler/icons-react";

import htmlLogo from "../../public/skills/html-logo.svg";
import cssLogo from "../../public/skills/css-logo.svg";
import jsLogo from "../../public/skills/javascript-logo.svg";
import reactLogo from "../../public/skills/react-logo.svg";
import nextjsLogo from "../../public/skills/nextjs-logo.svg";
import zustandLogo from "../../public/skills/zustand-logo.svg";
import tailwindLogo from "../../public/skills/tailwind-logo.svg";
import bootstrapLogo from "../../public/skills/bootstrap-logo.svg";
import flutterLogo from "../../public/skills/flutter-logo.svg";
import androidLogo from "../../public/skills/android-logo.svg";
import phpLogo from "../../public/skills/php-logo.svg";
import javaLogo from "../../public/skills/java-logo.svg";
import cLogo from "../../public/skills/c-logo.svg";
import cppLogo from "../../public/skills/cpp-logo.svg";
import dartLogo from "../../public/skills/dart-logo.svg";
import laravelLogo from "../../public/skills/laravel-logo.svg";
import mysqlLogo from "../../public/skills/mysql-logo.svg";
import sqliteLogo from "../../public/skills/sqlite-logo.svg";
import firebaseLogo from "../../public/skills/firebase-logo.svg";
import kubernetsLogo from "../../public/skills/kubernets-logo.svg";
import dockerLogo from "../../public/skills/docker-logo.svg";
import gitLogo from "../../public/skills/git-logo.svg";
import githubLogo from "../../public/skills/github-logo.svg";
import gitlabLogo from "../../public/skills/gitlab-logo.svg";
import postmanLogo from "../../public/skills/postman-logo.svg";
import figmaLogo from "../../public/skills/figma-logo.svg";

const skillCards = [
  {
    title: "Front-end",
    subSections: [
      {
        subTitle: "Languages",
        skills: [
          { name: "HTML", icon: htmlLogo, level: "Advanced" },
          { name: "CSS", icon: cssLogo, level: "Advanced" },
          { name: "JavaScript", icon: jsLogo, level: "Intermediate" },
        ],
      },
      {
        subTitle: "Frameworks & Libraries",
        skills: [
          { name: "React.js", icon: reactLogo, level: "Intermediate" },
          { name: "Next.js", icon: nextjsLogo, level: "Beginner" },
          { name: "Zustand", icon: zustandLogo, level: "Beginner" },
          { name: "Tailwind CSS", icon: tailwindLogo, level: "Advanced" },
          { name: "Bootstrap", icon: bootstrapLogo, level: "Advanced" },
        ],
      },
      {
        subTitle: "Mobile Development",
        skills: [
          { name: "Flutter", icon: flutterLogo, level: "Dormant" },
          { name: "Android", icon: androidLogo, level: "Dormant" },
        ],
      },
    ],
  },
  {
    title: "Back-end",
    subSections: [
      {
        subTitle: "Languages",
        skills: [
          { name: "PHP", icon: phpLogo, level: "Advanced" },
          { name: "Java", icon: javaLogo, level: "Dormant" },
          { name: "C", icon: cLogo, level: "Dormant" },
          { name: "C++", icon: cppLogo, level: "Dormant" },
          { name: "Dart", icon: dartLogo, level: "Dormant" },
        ],
      },
      {
        subTitle: "Frameworks",
        skills: [{ name: "Laravel", icon: laravelLogo, level: "Advanced" }],
      },
      {
        subTitle: "Databases",
        skills: [
          { name: "MySQL", icon: mysqlLogo, level: "Advanced" },
          { name: "SQLite", icon: sqliteLogo, level: "Advanced" },
          { name: "Firebase", icon: firebaseLogo, level: "Dormant" },
        ],
      },
    ],
  },
  {
    title: "Tools & Platforms",
    subSections: [
      {
        subTitle: "Cloud & Containers",
        skills: [
          { name: "Kubernetes", icon: kubernetsLogo, level: "Intermediate" },
          { name: "Docker", icon: dockerLogo, level: "Intermediate" },
        ],
      },
      {
        subTitle: "Version Control & Collaboration",
        skills: [
          { name: "Git", icon: gitLogo, level: "Advanced" },
          { name: "GitHub", icon: githubLogo, level: "Advanced" },
          { name: "GitLab", icon: gitlabLogo, level: "Intermediate" },
        ],
      },
      {
        subTitle: "API & Testing Tools",
        skills: [{ name: "Postman", icon: postmanLogo, level: "Intermediate" }],
      },
      {
        subTitle: "Design/UI",
        skills: [{ name: "Figma", icon: figmaLogo, level: "Intermediate" }],
      },
    ],
  },
];

const tabs = [
  { label: "Front-end", icon: IconDeviceDesktopCode },
  { label: "Back-end", icon: IconServer2 },
  { label: "Tools & Platforms", icon: IconSettings },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <ContentLayout>
      <TitleSection text="S K I L L S" />
      
      <div className="flex flex-col items-justify space-y-12 w-full py-12">
        {/* Tab header */}
        {/* Desktop: tab buttons */}
        <div className="hidden sm:flex gap-4 justify-center">
          {tabs.map(({ label, icon: Icon }) => {
            const isActive = activeTab === label;

            return isActive ? (
              <MagicBorder key={label}>
                <Icon className="w-5 h-5 mr-2" />

                {label}
              </MagicBorder>
            ) : (
              <button
                key={label}
                className="relative inline-flex h-14 sm:h-12 items-center justify-center gap-2 px-5 py-2 sm:px-3 sm:py-1 text-base sm:text-lg text-white rounded-full bg-slate-950 hover:text-purple-300 transition duration-200"
                onClick={() => setActiveTab(label)}
              >
                <Icon className="w-5 h-5" />

                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile: full-width magic border dropdown with icons */}
        <div className="sm:hidden w-full relative">
          <MagicBorder className="w-full">
            <button
              onClick={() => setOpenDropdown((prev) => !prev)}
              className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-white bg-slate-950"
            >
              <div className="flex items-center gap-2">
                {(() => {
                  const ActiveIcon = tabs.find((t) => t.label === activeTab)?.icon;
                  return ActiveIcon ? <ActiveIcon className="w-5 h-5" /> : null;
                })()}
                {activeTab}
              </div>

              <IconChevronCompactDown
                className={`w-5 h-5 transition-transform ${openDropdown ? "rotate-180" : ""}`}
              />
            </button>
          </MagicBorder>

          {openDropdown && (
            <div className="mt-1 w-full bg-slate-900 border border-slate-700 shadow-lg rounded-4xl">
              {tabs.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="flex items-center gap-2 w-full px-4 py-3 text-white hover:bg-slate-800 hover:rounded-4xl transition"
                  onClick={() => {
                    setActiveTab(label);
                    setOpenDropdown(false);
                  }}
                >
                  <Icon className="w-5 h-5" />

                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tab content */}
        {skillCards
          .filter((section) => section.title === activeTab)
          .map((section) => (
            <div 
              key={section.title} 
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10"
            >
              <AnimatedTooltip
                items={section.subSections.flatMap((sub) =>
                  sub.skills.map((skill, idx) => ({
                    id: `${skill.name}-${idx}`,
                    name: skill.name,
                    level: skill.level as
                      | "Beginner"
                      | "Intermediate"
                      | "Advanced"
                      | "Dormant",
                  }))
                )}
              >
                {section.subSections.flatMap((sub) =>
                  sub.skills.map((skill) => (
                    <div key={skill.name}>
                      <BackgroundGradient className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow group h-[180px]">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </BackgroundGradient>
                    </div>
                  ))
                )}
              </AnimatedTooltip>
            </div>
          ))}
      </div>
    </ContentLayout>
  );
}
