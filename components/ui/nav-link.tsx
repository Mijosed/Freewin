"use client";

import Link from "next/link";
import { HTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  active?: boolean;
}

const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  className,
  active,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-[#454699] font-medium hover:text-[#454699]/80 transition-colors",
        active && "font-bold",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink; 