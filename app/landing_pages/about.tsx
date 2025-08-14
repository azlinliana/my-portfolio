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
            <TitleSection text="A B O U T" />

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
                        <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" />
                    </div>

                    {/* Name */}
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        NUR AZLIN LIANA BINTI MOHD ADLAN
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                        {/* Email */}
                        <div className="flex items-center gap-1">
                            <IconMail className="w-5 h-5" />

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=azlinliana.adlan@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline text-sm sm:text-base text-white"
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
                                className="flex items-center gap-1 hover:underline text-sm sm:text-base text-white"
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
                                className="flex items-center gap-1 hover:underline text-sm sm:text-base text-white"
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
                                className="flex items-center gap-1 hover:underline text-sm sm:text-base text-white"
                            >                                
                                <span>CV / Resume</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* About description */}
                <div className="text-justify space-y-6">
                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                        A developer on a journey to understand how things work and how to make them work better.
                        Passionate about crafting systems that are scalable, adaptable, and thoughtfully structured —
                        from back-end logic to front-end experience.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                        Driven by curiosity and intention. I learn through building, write cleaner code with every project, 
                        and focus on solving problems that matter. Good software should be quiet, helpful, and built with care. 
                        That’s the kind of work I aim to contribute to.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                        I embrace challenges as chances to grow, experiment, and iterate. I value clarity, simplicity, 
                        and thoughtful architecture, believing that well-crafted code tells a story. Collaboration and 
                        learning from others guide me, because the best solutions rarely come alone.
                    </p>

                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                        Not here to do everything — just the right things, done well. Step by step, layer by layer, 
                        carefully building each piece with intention and care. Like any mission worth launching, I 
                        focus on thoughtful planning, precise execution, and continuous improvement — making sure 
                        every part fits, every decision matters, and the end result is something resilient, 
                        purposeful, and meaningful.
                    </p>

                    <div className="mt-8 flex flex-col items-center space-y-3">
                        {/* Top stardust line */}
                        <div className="text-center text-2xl text-purple-400 dark:text-purple-300 animate-pulse">
                            ˗ˏˋ ★ ˎˊ˗
                        </div>

                        {/* Quote */}
                        <blockquote className="text-center text-lg sm:text-xl italic text-purple-300 dark:text-purple-300 max-w-2xl px-4">
                            "Every line of code is a star in the universe I’m creating — small, intentional, and capable of lighting the way."
                        </blockquote>
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
}