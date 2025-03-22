"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Qui sommes nous", href: "/about" },
    { label: "Nous Contacter", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#f8f4eb] border-b border-[#454699]/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="Logo Freewin" 
              width={120} 
              height={50}
              className="object-contain hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.href} 
              href={item.href}
              active={pathname === item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button 
          className="md:hidden text-[#454699]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar; 