"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/couswall",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andre-ignorosa/",
    icon: FaLinkedin,
  },
];

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl px-6 md:px-12 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={(e) => handleSmoothScroll(e, "#")}
              className="text-2xl font-bold text-white hover:text-violet-400 transition-colors w-fit"
            >
              AI
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating beautiful and
              functional web experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-800 hover:bg-violet-600 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.name}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-gray-400 hover:text-violet-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a
                href="mailto:andreignorosa@gmail.com"
                className="hover:text-violet-400 transition-colors"
              >
                andreignorosa@gmail.com
              </a>
              <p>Available Worldwide</p>
            </div>
            {/* Back to top button */}
            <button
              onClick={handleScrollToTop}
              className="mt-4 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-violet-600 text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit text-sm font-medium"
            >
              Back to top
              <FiArrowUp className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl px-6 md:px-12 mx-auto py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {currentYear} Andre Ignorosa. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              Made with <FaHeart className="text-violet-500 animate-pulse" />{" "}
              using Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
