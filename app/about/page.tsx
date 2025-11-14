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
                    {/* Avatar*/}
                    <div className="relative w-40 h-40 sm:w-45 sm:h-45">
                        <Image
                            src={Logo}
                            alt="Avatar"
                            fill
                            className="rounded-full border-4 border-white shadow-md object-cover bg-slate-50"
                        />
                    </div>

                    {/* Name */}
                    <h1 className="text-xl sm:text-3xl lg:text-3xl font-semibold tracking-tight">
                        Nur Azlin Liana binti Mohd Adlan
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 leading-relaxed text-gray-700 space-y-2">
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
                    <h2 className="text-2xl font-semibold flex items-center gap-2">Who I am?</h2>

                    <p className="leading-relaxed text-gray-700 space-y-2">
                        I’m a <span className="font-medium">backend-focused software developer</span> at 
                        <span className="font-medium"> Amanah Ikhtiar Malaysia</span>. 
                        I primarily work with <span className="font-medium">Laravel</span> and <span className="font-medium">React </span> 
                        to build internal systems that support daily operations. My work ranges from designing backend APIs 
                        and managing data flow to ensuring smooth integration between backend and frontend systems. 
                        I enjoy understanding complex systems and finding ways to make them simpler, faster, and more reliable.
                    </p>

                    <h2 className="text-2xl font-semibold flex items-center gap-2">How I work?</h2>

                    <p className="leading-relaxed text-gray-700 space-y-2">
                        I focus on <span className="font-medium">clarity</span> and <span className="font-medium">purpose</span> in every project. 
                        I prefer practical solutions over unnecessary complexity and aim to write code that is maintainable and scalable. 
                        Collaboration is important to me — I work closely with teammates, ask questions, and make sure real user needs are addressed. 
                        I also value continuous learning, whether it’s exploring new tools, improving coding habits, or learning from past experiences.
                    </p>

                    <h2 className="text-2xl font-semibold flex items-center gap-2">What I value?</h2>

                    <p className="leading-relaxed text-gray-700 space-y-2">
                        I value building systems that are dependable, practical, and designed to grow with the needs of users. 
                        Thoughtful problem-solving, effective teamwork, and intentional design are at the core of how I approach development. 
                        Writing clean code, designing clear architectures, and creating solutions that make a real impact are priorities in my work. 
                        Beyond technical skills, I also value curiosity, empathy, and understanding the bigger picture in every project.
                    </p>

                    <h2 className="text-2xl font-semibold flex items-center gap-2">Where I'm headed?</h2>

                    <p className="leading-relaxed text-gray-700 space-y-2">
                        I aim to grow as a developer who can take on larger, more complex challenges, improve system architecture, 
                        and contribute meaningfully to teams that value learning and practical problem-solving. 
                        I want to build systems that are not only reliable and efficient but also genuinely helpful to real users. 
                        Ultimately, my goal is to continue evolving my skills while creating solutions that have a tangible impact 
                        on the teams and users I serve.
                    </p>
                </div>
            </div>
        </ContentLayout>
    );
}