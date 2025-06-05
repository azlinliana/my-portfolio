"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { TextHoverEffect } from "./ui/text-hover-effect";
import { BackgroundGradient } from "./ui/background-gradient";

// Skill icons
import htmlLogo from "../public/skills/html-logo.svg";
import cssLogo from "../public/skills/css-logo.svg";
import jsLogo from "../public/skills/javascript-logo.svg";
import phpLogo from "../public/skills/php-logo.svg";
import flutterLogo from "../public/skills/flutter-logo.svg";
import bootstrapLogo from "../public/skills/bootstrap-logo.svg";
import tailwindLogo from "../public/skills/tailwind-logo.svg";
import reactLogo from "../public/skills/react-logo.svg";
import laravelLogo from "../public/skills/laravel-logo.svg";
import mysqlLogo from "../public/skills/mysql-logo.svg";
import firebaseLogo from "../public/skills/firebase-logo.svg";
import postmanLogo from "../public/skills/postman-logo.svg";
import nextjsLogo from "../public/skills/nextjs-logo.svg";

// Skill sections
const skillSections = [
  {
    title: "FRONT-END",
    skills: [
      { name: "BOOTSTRAP", icon: bootstrapLogo },
      { name: "TAILWIND CSS", icon: tailwindLogo },
      { name: "HTML", icon: htmlLogo },
      { name: "CSS", icon: cssLogo },
      { name: "JAVASCRIPT", icon: jsLogo },
      { name: "FLUTTER", icon: flutterLogo },
    ],
  },
  {
    title: "BACK-END",
    skills: [
      { name: "PHP", icon: phpLogo },
      { name: "MYSQL", icon: mysqlLogo },
      { name: "FIREBASE", icon: firebaseLogo },
      { name: "POSTMAN", icon: postmanLogo },
    ],
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
    skills: [
      { name: "REACT", icon: reactLogo },
      { name: "NEXT.JS", icon: nextjsLogo },
      { name: "LARAVEL", icon: laravelLogo },
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

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-20 justify-items-center">
                {section.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-full flex justify-center m-2"
                  >
                    <BackgroundGradient className="w-[200px] h-[200px] rounded-2xl p-3 flex flex-col items-center justify-center bg-white dark:bg-zinc-900 shadow-xl hover:shadow-2xl transition-shadow">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </BackgroundGradient>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
