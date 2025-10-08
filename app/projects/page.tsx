"use client";

import ContentLayout from "@/components/layout/content-layout";
import TitleSection from "@/components/title-section";

const projectCards = [
  {
    name: "My Portfolio",
    description:
      "Personal portfolio designed to showcase projects in an organized and professional way.",
    projectLink: "https://github.com/azlinliana/my-portfolio.git",
    techs: ["Next.js", "Tailwind"],
  },
  {
    name: "Student Disciplinary Management System",
    description:
      "A system to manage student disciplinary records efficiently and streamline administrative reporting.",
    projectLink: "https://github.com/nabbysidek/sdms.git",
    techs: ["React", "Laravel", "MySQL"],
  },
  {
    name: "Minty",
    description:
      "A simple finance app to track income, expenses, and provide clear insights into cash flow.",
    projectLink: "https://github.com/azlinliana/minty-frontend.git",
    techs: ["React", "Laravel", "MySQL"],
  },
  {
    name: "Medication Reminder & Tracker",
    description:
      "An app for medication reminders and tracking daily intake to support consistent treatment habits.",
    projectLink: "https://github.com/azlinliana/medret.git",
    techs: ["Flutter", "Firebase"],
  },
];

export default function Projects() {
  return (
    <ContentLayout>
      <TitleSection text="Projects" />

      <div className="flex flex-col space-y-12 w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 w-full">
          {projectCards.map((project) => (
            <a
              key={project.name}
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl overflow-hidden relative hover:scale-[1.02] transition-transform duration-300"
            >
              <div
                className="
                  flex flex-col justify-start
                  rounded-xl border border-gray-300
                  bg-slate-50 shadow-md
                "
              >
                {/* Gradient Background instead of Image */}
                <div
                  className="
                    relative w-full h-48
                    bg-gradient-to-r from-[#ddd6fe] via-[#c7b8ff] to-[#a5b4fc]
                  "
                />

                {/* Content */}
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-lg font-semibold mb-1">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm mb-3 text-justify">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs border border-gray-300 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}
