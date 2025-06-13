import { TextHoverEffect } from "./ui/text-hover-effect";
import { PinContainer } from "./ui/3d-pin";

export function Projects() {
  return (
    <>
      <div className="h-[10rem] flex items-center justify-center">
        <TextHoverEffect text="P R O J E C T S" />
      </div>

      {/* Cards Grid */}
      <div className="w-full flex flex-wrap gap-8 justify-center sm:justify-start">
        {/* Card */}
        <PinContainer title="/azlinliana.com" href="/azlinliana.com">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">My Portfolio</h3>
            <p className="text-base text-slate-500 mb-4">My web developer resume.</p>
            <div className="flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>

        <PinContainer title="/sdms.project" href="/sdms.project">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Student Disciplinary Management System</h3>
            <p className="text-base text-slate-500 mb-4">Lorem ipsum.</p>
            <div className="flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>

        <PinContainer title="/minty.project" href="/minty.project">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Minty</h3>
            <p className="text-base text-slate-500 mb-4">Lorem ipsum.</p>
            <div className="flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>

        <PinContainer title="/other.project" href="/other.project">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
            <h3 className="font-bold text-base text-slate-100 mb-2">Other</h3>
            <p className="text-base text-slate-500 mb-4">Lorem ipsum.</p>
            <div className="flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </>
  );
}
