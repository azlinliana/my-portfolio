"use client";

import { useState, useEffect } from "react";
import { IconBaselineDensityMedium, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Logo from "../public/logo.svg";
import Logo2 from "../public/logo-2.svg";

import Link from "next/link";

export function Navbar() {
  // Mobile & scroll state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect current route for navbar styling
  const pathname = usePathname(); 

  // Navbar item
  const navItems = [
    { name: "Home", href: "/" },
    // { name: "Works", href: "#works" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "https://medium.com/@azlinliana", external: true},
  ];

  // Navbar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home page navbar styling
  const isHome = pathname === "/";

  // Not home page navbar styling
  const showSolidBackground = !isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        showSolidBackground
          ? "bg-white/40 backdrop-blur-lg border-b border-white/20 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="w-full px-10 sm:px-30 flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src={showSolidBackground ? Logo2 : Logo}
            alt="Azlin Liana Logo"
            width={40}
            height={40}
            className={cn(
              "transition duration-300",
              showSolidBackground
                ? "drop-shadow-[0_0_15px_#a78bfa]"
                : "hover:drop-shadow-[0_0_20px_#a78bfa]"
            )}
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-8 text-md font-medium">
          {navItems.map(({ name, href, external }) => (
            <li key={name}>
              <Link
                href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                  "font-normal transition duration-200",
                  showSolidBackground
                    ? "text-gray-600 hover:text-violet-300"
                    : "text-[#f1f9ff] hover:text-violet-300"
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 transition-transform duration-300 ease-in-out transform hover:rotate-90"
          >
            {mobileMenuOpen ? (
              <IconX
                className={cn(
                  "h-6 w-6 transition-colors duration-200",
                  showSolidBackground
                    ? "text-gray-700 hover:text-violet-300"
                    : "text-[#f1f9ff] hover:text-violet-300"
                )}
              />
            ) : (
              <IconBaselineDensityMedium
                className={cn(
                  "h-6 w-6 transition-colors duration-200",
                  showSolidBackground
                    ? "text-gray-700 hover:text-violet-300"
                    : "text-[#f1f9ff] hover:text-violet-300"
                )}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-6 pt-2 flex flex-col items-center space-y-4 font-medium text-sm backdrop-blur-lg bg-white/40 border-t border-white/10">
          {navItems.map(({ name, href, external }) => (
            <Link
              key={name}
              href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-center font-normal transition duration-200",
                showSolidBackground
                  ? "text-gray-700 hover:text-violet-300"
                  : "text-[#f1f9ff] hover:text-violet-300"
              )}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
