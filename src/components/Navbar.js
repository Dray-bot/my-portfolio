"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#fffceb] to-[#fff9db] shadow-md backdrop-blur-md font-inter">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-black hover:scale-105 transition-transform duration-200"
        >
          Dray
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 relative group"
            >
              {name}
              <span className="block h-[2px] w-0 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          <Link
            href="/resume"
            className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
          >
            Resume
          </Link>
        </div>

        {/* Resume for Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="/resume"
            className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-4 py-[6px] rounded-xl shadow-md transition-transform duration-200 hover:scale-105"
          >
            Resume
          </Link>

          {/* Toggle */}
          {/* <button
            onClick={toggleMenu}
            className="flex flex-col justify-between w-7 h-6 focus:outline-none z-[60]"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-[3px] w-full rounded bg-yellow-600 transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`h-[3px] w-full rounded bg-yellow-600 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[3px] w-full rounded bg-yellow-600 transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="md:hidden bg-[#fffdeb] px-6 py-6 space-y-5 text-[17px] font-medium flex flex-col items-start shadow-md transition-all duration-300 ease-in-out">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-gray-800 hover:text-yellow-600 w-full"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
