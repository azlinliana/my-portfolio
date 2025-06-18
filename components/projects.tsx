import { TextHoverEffect } from "./ui/text-hover-effect";
import { PinContainer } from "./ui/3d-pin";

import Image from "next/image";
import portfolioCover from "../public/projects/my-portfolio/my-portfolio-cover.png";
import sdmsCover from "../public/projects/sdms/sdms-cover.png";
import mintyCover from "../public/projects/minty/minty-cover.png";
import medretCover from "../public/projects/medret/medret-cover.png";

export function Projects() {
  return (
    <>
      <div className="h-[10rem] flex items-center justify-center">
        <TextHoverEffect text="P R O J E C T S" />
      </div>

      {/* Cards Grid */}
      <div className="w-full flex flex-wrap gap-8 justify-center sm:justify-start">
        {/* Card */}
        <PinContainer title="github/my-portfolio" href="https://github.com/azlinliana/my-portfolio.git">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">My Portfolio</h3>

            <p className="text-base text-slate-500 mb-4">
              My web developer resume.
            </p>

            <div className="flex-1 w-full rounded-lg relative overflow-hidden">
              <Image
                src={portfolioCover}
                alt="Portfolio Cover"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </PinContainer>

        <PinContainer title="/github/sdms" href="https://github.com/nabbysidek/sdms.git">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Student Disciplinary Management System</h3>

            <p className="text-base text-slate-500 mb-4">
              Manage student discipline records.
            </p>

            <div className="flex-1 w-full rounded-lg relative overflow-hidden">
              <Image
                src={sdmsCover}
                alt="Portfolio Cover"
                fill
                priority
                className="object-cover"
              />
            </div>          
          </div>
        </PinContainer>

        <PinContainer title="/github/minty" href="https://github.com/azlinliana/minty-frontend.git">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Minty</h3>

            <p className="text-base text-slate-500 mb-4">Manage personal finance.</p>

            <div className="flex-1 w-full rounded-lg relative overflow-hidden">
              <Image
                src={mintyCover}
                alt="Minty Cover"
                fill
                priority
                className="object-cover"
              />
            </div>  
          </div>
        </PinContainer>

        <PinContainer title="/github/medret" href="https://github.com/azlinliana/medret.git">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Medication Reminder & Tracker Application</h3>

            <p className="text-base text-slate-500 mb-4">Medication reminder application.</p>

            <div className="flex-1 w-full rounded-lg relative overflow-hidden">
              <Image
                src={medretCover}
                alt="Minty Cover"
                fill
                priority
                className="object-cover"
              />
            </div>  
          </div>
        </PinContainer>
      </div>
    </>
  );
}
