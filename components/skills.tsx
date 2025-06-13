"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { TextHoverEffect } from "./ui/text-hover-effect";
import { BackgroundGradient } from "./ui/background-gradient";
import { AnimatedTooltip } from "./ui/animated-tooltip";

// Skill icons
import htmlLogo from "../public/skills/html-logo.svg";
import cssLogo from "../public/skills/css-logo.svg";
import jsLogo from "../public/skills/javascript-logo.svg";

import reactLogo from "../public/skills/react-logo.svg";
import nextjsLogo from "../public/skills/nextjs-logo.svg";
import zustandLogo from "../public/skills/zustand-logo.svg";
import tailwindLogo from "../public/skills/tailwind-logo.svg";
import bootstrapLogo from "../public/skills/bootstrap-logo.svg";

import flutterLogo from "../public/skills/flutter-logo.svg";
import androidLogo from "../public/skills/android-logo.svg";

import phpLogo from "../public/skills/php-logo.svg";
import javaLogo from "../public/skills/java-logo.svg";
import cLogo from "../public/skills/c-logo.svg";
import cppLogo from "../public/skills/cpp-logo.svg";
import dartLogo from "../public/skills/dart-logo.svg";


import laravelLogo from "../public/skills/laravel-logo.svg";

import mysqlLogo from "../public/skills/mysql-logo.svg";
import sqliteLogo from "../public/skills/sqlite-logo.svg";
import firebaseLogo from "../public/skills/firebase-logo.svg";

import kubernetsLogo from "../public/skills/kubernets-logo.svg";
import dockerLogo from "../public/skills/docker-logo.svg";

import gitLogo from "../public/skills/git-logo.svg";
import githubLogo from "../public/skills/github-logo.svg";
import gitlabLogo from "../public/skills/gitlab-logo.svg";

import postmanLogo from "../public/skills/postman-logo.svg";

import figmaLogo from "../public/skills/figma-logo.svg";

const skillSections = [
  {
    title: "FRONT-END",
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
    title: "BACK-END",
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
        skills: [
          { name: "Laravel", icon: laravelLogo, level: "Advanced" },
        ],
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
    title: "TOOLS & PLATFORMS",
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
        skills: [
          { name: "Postman", icon: postmanLogo, level: "Intermediate" },
        ],
      },
      {
        subTitle: "Design/UI",
        skills: [
          { name: "Figma", icon: figmaLogo, level: "Intermediate" },
        ],
      },
    ],
  },
];

export function Skills() {
  return (
    <>
      <div className="h-[10rem] flex items-center justify-center">
        <TextHoverEffect text="S K I L L S" />
      </div>

      <div className="py-16 px-4 max-w-7xl mx-auto text-center">
        <div className="space-y-20">
          {skillSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-3xl font-bold text-neutral-700 dark:text-white mb-10">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
                <AnimatedTooltip
                  items={section.subSections.flatMap((sub) => sub.skills.map((skill, item) => ({
                    id: item,
                    name: skill.name,
                    level: skill.level as "Beginner" | "Intermediate" | "Advanced" | "Dormant",
                  })))}
                >
                  {section.subSections.flatMap((sub) =>
                    sub.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-full flex justify-center m-2"
                      >
                        <BackgroundGradient className="relative w-[190px] h-[190px] rounded-2xl p-3 flex flex-col items-center justify-center bg-white dark:bg-zinc-900 shadow-xl hover:shadow-2xl transition-shadow group">
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={100}
                            height={100}
                            className="object-contain mb-3"
                          />
                        </BackgroundGradient>
                      </motion.div>
                    ))
                  )}
                </AnimatedTooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
