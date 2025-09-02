"use client";
import Image from "next/image";
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import React, { useContext, useState } from "react";
import { ThemeContext } from "@/src/context/ThemeProvider";

export const navbarHeaders = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "Skills", href: "#skills" },
  { id: 4, name: "Projects", href: "#projects" },
];

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header>
      <nav className="w-full px-4 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between">
        <div className="w-12 h-12 rounded-full cursor-pointer overflow-hidden">
          <Image src="/avatar.jpg" alt="avatar" width={100} height={100} />
        </div>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-4 bg-white shadow-sm bg-opacity-20 dark:bg-transparent dark:border-2 dark:border-white/20 dark:text-white">
          {navbarHeaders.map((header) => (
            <li key={header.id}>
              <a href={header.href}>{header.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <div onClick={toggleTheme}>
            {isDarkMode ? (
              <LuSun className="cursor-pointer text-black dark:text-white text-2xl" />
            ) : (
              <FiMoon className="cursor-pointer text-black dark:text-white text-2xl" />
            )}
          </div>

          <button
            className="md:hidden text-2xl text-black dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-6 bg-white dark:bg-gray-900 dark:text-white shadow-lg">
          {navbarHeaders.map((header) => (
            <li key={header.id}>
              <a href={header.href} onClick={() => setMenuOpen(false)}>
                {header.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
