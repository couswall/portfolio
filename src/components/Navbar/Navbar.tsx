"use client";
import { LuSun } from "react-icons/lu";
import { FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import React, { useContext, useState } from "react";
import { ThemeContext } from "@/src/context/ThemeProvider";
import { navbarHeaders } from "@components/Navbar/Navbar.constants";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, "#")}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            AI
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navbarHeaders.map((header) => (
              <li key={header.id}>
                <a
                  href={header.href}
                  onClick={(e) => handleSmoothScroll(e, header.href)}
                  className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors font-medium"
                >
                  {header.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <LuSun className="text-xl text-gray-600 dark:text-gray-300" />
              ) : (
                <FiMoon className="text-xl text-gray-600 dark:text-gray-300" />
              )}
            </button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu className="text-xl text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu - Full Screen Overlay (outside header) */}
      <div
        className={`md:hidden fixed inset-0 z-[100] transition-all duration-500 ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Content */}
        <div className="relative h-full w-full flex flex-col justify-between p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">Menu</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <FiX className="text-2xl text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center justify-center">
            <ul className="flex flex-col items-center gap-6">
              {navbarHeaders.map((header, index) => (
                <li
                  key={header.id}
                  className={`transform transition-all duration-500 ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: menuOpen ? `${index * 75}ms` : "0ms" }}
                >
                  <a
                    href={header.href}
                    onClick={(e) => {
                      setMenuOpen(false);
                      handleSmoothScroll(e, header.href);
                    }}
                    className="text-4xl font-bold text-white/80 hover:text-white transition-colors relative group"
                  >
                    {header.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div
            className={`flex flex-col items-center gap-6 transition-all duration-500 ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
          >
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              {isDarkMode ? (
                <>
                  <LuSun className="text-xl" />
                  <span className="font-medium">Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="text-xl" />
                  <span className="font-medium">Dark Mode</span>
                </>
              )}
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/couswall"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/andre-ignorosa/"
                target="_blank"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
