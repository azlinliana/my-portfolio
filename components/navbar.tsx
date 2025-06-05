"use client";

import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { IconBaselineDensityMedium, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-6 py-4 backdrop-blur-lg bg-gradient-to-r from-blue-300/20 to-violet-300/10 border-b border-white/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Brand */}
        <div className="text-white text-lg font-extrabold">
          AZLIN LIANA
        </div>

        {/* Right - Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home" />
            <MenuItem setActive={setActive} active={active} item="About" />
            <MenuItem setActive={setActive} active={active} item="Skills" />
            <MenuItem setActive={setActive} active={active} item="Projects" />
          </Menu>
        </div>

        {/* Right - Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-all duration-300 ease-in-out"
          >
            <span
              className={cn(
                "inline-block transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "rotate-90 opacity-0 scale-75 absolute" : "rotate-0 opacity-100 scale-100"
              )}
            >
              <IconBaselineDensityMedium className="h-6 w-6 text-white" />
            </span>
            <span
              className={cn(
                "inline-block transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75 absolute"
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
          <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left">
            Home
          </button>
          <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left">
            About
          </button>
          <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left">
            Skills
          </button>
          <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left">
            Experiences
          </button>
          <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left">
            Projects
          </button>
          <button onClick={() => setMobileMenuOpen(false)} className="block w-full text-left">
            Certificates
          </button>
        </div>
      )}
    </header>
  );
}
