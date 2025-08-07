"use client";

import { useState, useEffect } from "react";
import { IconBaselineDensityMedium, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Logo from "../public/logo.svg";

export function Navbar() {
  // Mobile & scroll state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar item
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  // Navbar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-10 sm:px-30 flex items-center justify-between py-4">
        <a href="#hero" className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="Azlin Liana Logo"
            width={40}
            height={40}
            className="transition-transform duration-300 hover:drop-shadow-[0_0_10px_#d8b4fe]"
          />        
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-white text-md font-medium">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="text-[#f1f9ff] font-normal hover:text-purple-300 transition duration-200"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile navbar hamburger & x */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 transition-transform duration-300 ease-in-out transform hover:rotate-90"
          >
            {mobileMenuOpen ? (
              <IconX className="h-6 w-6 text-white" />
            ) : (
              <IconBaselineDensityMedium className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-6 pt-2 flex flex-col items-center space-y-4 font-medium text-sm backdrop-blur-lg bg-gradient-to-r from-blue-300/20 to-violet-300/10 border-t border-white/10">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-[#f1f9ff] font-normal hover:text-purple-300 transition duration-200"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
