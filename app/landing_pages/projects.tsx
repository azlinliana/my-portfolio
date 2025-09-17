"use client";
// import Image from "next/image";

import ContentLayout from "@/components/layout/content-layout";
import TitleSection from "@/components/title-section";

import { PinContainer } from "@/components/ui/3d-pin";
import portfolioCover from "../../public/projects/my-portfolio/my-portfolio-cover.png";
import sdmsCover from "../../public/projects/sdms/sdms-cover.png";
import mintyCover from "../../public/projects/minty/minty-cover.png";
import medretCover from "../../public/projects/medret/medret-cover.png";

const projectCards = [
  { name: "My Portfolio",
    description: "My first portfolio",
    projectLink: "https://github.com/azlinliana/my-portfolio.git",
    techs: [
      { name: "Next.js"}
    ],
    imageCover: {portfolioCover}
  },
  { name: "SDMS",
    description: "Student disciplinary.",
    projectLink: "https://github.com/nabbysidek/sdms.git",
    techs: [
      { name: "React"}
    ],
    imageCover: {sdmsCover}
  },
  { name: "MINTY",
    description: "Track cash flow.",
    projectLink: "https://github.com/azlinliana/minty-frontend.git",
    techs: [
      { name: "React"}
    ],
    imageCover: {mintyCover}
  },
  { name: "MEDRET",
    description: "Medication reminder application.",
    projectLink: "https://github.com/azlinliana/medret.git",
    techs: [
      { name: "Flutter"}
    ],
    imageCover: {medretCover}
  },
];

export default function Projects() {
  return (
    <ContentLayout>
      <TitleSection text="P R O J E C T S" />

      <div className="flex flex-col items-justify space-y-12 w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {projectCards.map((project) => (
            <div
              key={project.name}
              className="w-full h-64 rounded-xl flex items-center justify-center overflow-hidden relative"
            >
              <PinContainer
                title={project.name}
                href={project.projectLink}
                containerClassName="w-full h-full"
              >
                <div className="block w-full h-full">
                  <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full h-full">
                    <h3 className="font-bold text-base text-slate-100 mb-2">{project.name}</h3>
                    <p className="text-base font-normal text-slate-500">{project.description}</p>
                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </ContentLayout>
  );
}




