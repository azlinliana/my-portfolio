import ContentLayout from "@/components/layout/content-layout";
import TitleSection from "@/components/title-section";

import Image
 from "next/image";
import Logo from "../../public/logo-4.svg";

import {
    IconMail,
    IconBrandLinkedin,
    IconBrandGithub,
    IconFileCv
} from "@tabler/icons-react";

export default function About() {
    return (
        <ContentLayout>
            <TitleSection text="About" />

            <div className="flex flex-col items-center justify-center text-center space-y-12 w-full py-12">
                {/* Avatar + info section */}
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Avatar with indicator */}
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40">
                        <Image
                            src={Logo}
                            alt="Avatar"
                            fill
                            className="rounded-full border-4 border-white shadow-xl object-cover"
                        />

                        {/* Online indicator */}
                        <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-400 border-2 border-white border-gray-800 rounded-full" />
                    </div>

                    {/* Name */}
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold">
                        NUR AZLIN LIANA BINTI MOHD ADLAN
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                        {/* Email */}
                        <div className="flex items-center gap-1">
                            <IconMail className="w-5 h-5" />

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=azlinliana.adlan@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                <span>Email</span>
                            </a>
                        </div>

                        <span className="hidden md:inline">┃</span>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-1">
                            <IconBrandLinkedin className="w-5 h-5" />

                            <a
                                href="https://www.linkedin.com/in/azlinliana/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:underline"
                            >                                
                                <span>LinkedIn</span>
                            </a>
                        </div>

                        <span className="hidden md:inline">┃</span>

                        {/* GitHub */}
                        <div className="flex items-center gap-1">
                            <IconBrandGithub className="w-5 h-5" />
                            
                            <a
                                href="https://github.com/azlinliana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:underline"
                            >                                
                                <span>GitHub</span>
                            </a>
                        </div>

                        <span className="hidden md:inline">┃</span>

                        {/* CV/Resume */}
                        <div className="flex items-center gap-1">
                            <IconFileCv className="w-5 h-5" />

                            <a
                                href="https://drive.google.com/file/d/1vdLO3oSBu14SFFhdY1UPgbG91foWHEja/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:underline"
                            >                                
                                <span>CV / Resume</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* About description */}
                <div className="text-justify space-y-6">
                <p className="leading-relaxed text-justify">
                    I’m currently working at <span className="font-medium">Amanah Ikhtiar Malaysia</span>. 
                    My work centers on designing and building reliable, scalable, and well-structured backend systems 
                    that integrate smoothly with frontend applications to deliver meaningful user experiences.
                </p>

                <p className="leading-relaxed text-justify">
                    I’m passionate about understanding how systems work — and how to make them work better. 
                    Each project I build sharpens my ability to write cleaner, more intentional code and to design 
                    architectures that balance performance, maintainability, and clarity.
                </p>

                <p className="leading-relaxed text-justify">
                    I value collaboration, thoughtful problem-solving, and continuous improvement. 
                    For me, software development isn’t just about writing code — it’s about building 
                    systems that are purposeful, dependable, and built to grow. 
                    My goal is to keep evolving as a developer who crafts solutions that make a real impact.
                </p>
                </div>
            </div>
        </ContentLayout>
    );
}