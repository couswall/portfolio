"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="w-full max-w-7xl px-6 md:px-12 pt-8 md:pt-16 mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center md:items-start gap-5 text-center md:text-left">
          {/* Greeting Badge */}
          <ScrollReveal variant="fade-down" delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for work
            </span>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal variant="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I&apos;m Andre
              <br />
              <span className="text-violet-600 dark:text-violet-400">
                Full Stack Developer
              </span>
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md">
              I build interactive websites and software that deliver seamless experiences across all devices.
            </p>
          </ScrollReveal>

          {/* IMAGE - visible only on mobile */}
          <ScrollReveal variant="zoom-in" delay={300} className="md:hidden">
            <div className="relative w-72 h-72 flex-shrink-0 my-4">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-violet-500/50 dark:bg-violet-400/40 rounded-full blur-3xl animate-pulse z-0" />
              <Image
                src="/programmer-avatar.png"
                alt="Developer avatar"
                fill
                className="object-contain z-10"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Buttons */}
          <ScrollReveal variant="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
              <button className="px-6 py-3 rounded-xl flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5">
                Contact Me
                <MdOutlineMailOutline className="text-xl" />
              </button>
              <button className="px-6 py-3 rounded-xl flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium hover:border-violet-500 dark:hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all hover:-translate-y-0.5">
                Resume
                <GrDownload className="text-lg" />
              </button>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal variant="fade-up" delay={500}>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://github.com/couswall"
                target="_blank"
                className="p-2 rounded-full text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/andre-ignorosa/"
                target="_blank"
                className="p-2 rounded-full text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* RIGHT COLUMN - visible only on desktop */}
        <ScrollReveal variant="fade-left" delay={300} className="hidden md:block">
          <div className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] flex-shrink-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-violet-500/50 dark:bg-violet-400/40 rounded-full blur-3xl animate-pulse z-0" />
            <Image
              src="/programmer-avatar.png"
              alt="Developer avatar"
              fill
              className="object-contain z-10"
              priority
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Introduction;
