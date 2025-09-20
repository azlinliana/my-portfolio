import Image from "next/image";

import AstronautSketch from "../public/hero/astronaut-sketch.svg";

import {
    IconMail,
    IconBrandLinkedin,
    IconBrandGithub,
    IconCopyright
} from "@tabler/icons-react";

export default function Footer() {
    return (
        <main className="px-10 sm:px-30 bg-gradient-to-r from-[#5850ee] via-[#6d5bff] to-[#4f46e5]">
            <div className="flex flex-col items-center justify-center text-center text-white">
                <footer className="relative py-12 w-full">
                    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 px-6 sm:px-8 lg:px-12">
                    
                    {/* Left Column: Mascot + Quote */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8">
                        <Image
                        src={AstronautSketch}
                        alt="Astronaut mascot"
                        width={150}
                        height={150}
                        className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
                        />

                        <blockquote className="italic sm:text-lg max-w-md text-center sm:text-left leading-relaxed flex items-center">
                            &quot;Every line of code is a star in the universe I’m creating — small, intentional, and capable of lighting the way.&quot;
                        </blockquote>
                    </div>

                    {/* Right Column: Contact Icons + Copyright */}
                    <div className="flex flex-col items-center sm:items-end justify-between gap-6 sm:gap-8">
                        {/* Contact */}
                        <div className="flex gap-6">
                            <a 
                                href="https://mail.google.com/mail/?view=cm&to=azlinliana.adlan@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Email"
                            >
                                <IconMail size={22} className="hover:text-violet-300 transition-colors" />
                            </a>

                            <a 
                                href="https://www.linkedin.com/in/azlinliana/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <IconBrandLinkedin size={22} className="hover:text-violet-300 transition-colors" />
                            </a>

                            <a 
                                href="https://github.com/azlinliana"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <IconBrandGithub size={22} className="hover:text-violet-300 transition-colors" />
                            </a>
                        </div>

                        {/* Copyright */}
                        <div className="flex justify-center sm:justify-end items-center gap-2 text-sm">
                            <IconCopyright size={16} stroke={1.5} />

                            <span>{new Date().getFullYear()} Azlin Liana. All rights reserved.</span>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
