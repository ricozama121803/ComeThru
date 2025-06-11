'use client';

import Link from "next/link";
import type { HTMLAttributes } from "react";

interface NavBarProps extends HTMLAttributes<HTMLDivElement> { }

export default function NavBar({ className, ...props }: NavBarProps) {
  return (
    <nav
      className={`w-full px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md text-white flex justify-between items-center rounded-2xl ${className ?? ""}`}
      {...props}
    >
      <ul className="flex w-full justify-around text-sm font-medium">
        <li>
          <Link href="/" className="hover:underline hover:text-blue-300 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/find-matches" className="hover:underline hover:text-blue-300 transition-colors">
            Find Matches
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline hover:text-blue-300 transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
