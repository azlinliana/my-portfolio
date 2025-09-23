"use client";

import { useState, useEffect } from "react";
import { IconBaselineDensityMedium, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Logo from "../public/logo.svg";
import Logo2 from "../public/logo-2.svg";

export function Navbar() {
  // Mobile & scroll state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar item
  const navItems = [
    { name: "Home", href: "#hero" },
    // { name: "Works", href: "#works" },
    // { name: "Projects", href: "#projects" },
    // { name: "About", href: "#about" },
    // { name: "Blog", href: "#blog" },
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
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/40 backdrop-blur-lg border-b border-white/20 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-10 sm:px-30 flex items-center justify-between py-4">
        <a href="#hero" className="flex items-center gap-4">
          <Image
            src={scrolled ? Logo2 : Logo}
            alt="Azlin Liana Logo"
            width={40}
            height={40}
            className={cn(
              "transition duration-300",
              scrolled
                ? "drop-shadow-[0_0_15px_#a78bfa]"
                : "hover:drop-shadow-[0_0_20px_#a78bfa]"
            )}
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-md font-medium">
          {navItems.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className={cn(
                  "font-normal transition duration-200",
                  scrolled
                    ? "text-gray-500 hover:text-violet-300"
                    : "text-[#f1f9ff] hover:text-violet-300"
                )}
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
              <IconX
                className={cn(
                  "h-6 w-6 transition-colors duration-200",
                  scrolled ? "text-gray-700 hover:text-violet-300" : "text-[#f1f9ff] hover:text-violet-300"
                )}
              />
            ) : (
              <IconBaselineDensityMedium
                className={cn(
                  "h-6 w-6 transition-colors duration-200",
                  scrolled ? "text-gray-700 hover:text-violet-300" : "text-[#f1f9ff] hover:text-violet-300"
                )}
              />
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
              className="text-center text-[#f1f9ff] font-normal hover:text-violet-300 transition duration-200"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
