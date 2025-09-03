"use client";
import Image from "next/image";
import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import React, { useContext, useState } from "react";
import { ThemeContext } from "@/src/context/ThemeProvider";
import { navbarHeaders } from "@components/Navbar/Navbar.constants";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header>
      <nav className="w-full  px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 false">
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
          <div onClick={toggleTheme}>
            {isDarkMode ? (
              <LuSun className="cursor-pointer text-black dark:text-white text-2xl" />
            ) : (
              <FiMoon className="cursor-pointer text-black dark:text-white text-2xl" />
            )}
          </div>

          <button
            className="md:hidden cursor-pointer text-2xl text-black dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FiMenu />
          </button>
        </div>
        <div
          className={`md:hidden fixed top-0 bottom-0 w-64 h-screen bg-pink-200 dark:bg-gray-800 dark:text-white shadow-lg transition-transform duration-500
          ${menuOpen ? "translate-x-0 right-0" : "translate-x-full right-0"}`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer absolute top-6 right-6 text-2xl"
          >
            <FiX />
          </button>
          <ul className="flex flex-col gap-4 px-10 py-20">
            {navbarHeaders.map((header) => (
              <li key={header.id}>
                <a href={header.href} onClick={() => setMenuOpen(false)}>
                  {header.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
