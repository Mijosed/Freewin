"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Qui sommes nous", href: "/about" },
    { label: "Nous Contacter", href: "/contact" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={onClose}>
      <div 
        className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-[#f8f4eb] shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#454699]"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="mt-12 flex flex-col space-y-6">
          {navItems.map((item) => (
            <NavLink 
              key={item.href} 
              href={item.href}
              active={pathname === item.href}
              className="text-lg"
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu; 