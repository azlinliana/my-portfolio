"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { IconBaselineDensityMedium, IconX } from "@tabler/icons-react";
import Image from "next/image";
import logo from "../public/logo.png";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-black/10 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-10 flex items-center justify-between py-4">
        {/* Left - Brand */}
        <a href="#hero">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="Azlin Liana Logo"
              width={48}
              height={48}
              className="object-contain"
            />

            <span
              style={{
                fontFamily: "var(--font-brand)",
                WebkitTextStroke: "0.2px white",
                letterSpacing: "0.1em",
              }}
              className="text-white text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight"
            >
              AZLIN LIANA
            </span>
          </div>
        </a>

        {/* Right - Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <Menu setActive={setActive}>
            {navItems.map(({ name, href }) => (
              <a key={name} href={href}>
                <MenuItem setActive={setActive} active={active} item={name} />
              </a>
            ))}
          </Menu>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-all duration-300 ease-in-out"
          >
            <span
              className={cn(
                "inline-block transition-all duration-300 ease-in-out",
                mobileMenuOpen
                  ? "rotate-90 opacity-0 scale-75 absolute"
                  : "rotate-0 opacity-100 scale-100"
              )}
            >
              <IconBaselineDensityMedium className="h-6 w-6 text-white" />
            </span>
            <span
              className={cn(
                "inline-block transition-all duration-300 ease-in-out",
                mobileMenuOpen
                  ? "rotate-0 opacity-100 scale-100"
                  : "-rotate-90 opacity-0 scale-75 absolute"
              )}
            >
              <IconX className="h-6 w-6 text-white" />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4 font-medium text-white text-sm backdrop-blur-lg bg-gradient-to-r from-blue-300/20 to-violet-300/10 border border-white/10 px-4 py-6 rounded-xl transition-all duration-300">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left hover:underline"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
