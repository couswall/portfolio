"use client";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiRedux, SiPrisma } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import React from "react";
import StackIcon from "@components/Stack/StackIcon";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";

const Stack = () => {
  const skillsArray = [
    { id: 1, name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { id: 2, name: "CSS3", icon: FaCss3, color: "#1572B6" },
    { id: 3, name: "Tailwind", icon: RiTailwindCssFill, color: "#38BDF8" },
    { id: 4, name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
    { id: 5, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { id: 6, name: "React", icon: FaReact, color: "#61DAFB" },
    { id: 7, name: "Redux", icon: SiRedux, color: "#764ABC" },
    { id: 8, name: "Next.js", icon: RiNextjsFill, color: "#000000" },
    { id: 9, name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { id: 10, name: "PostgreSQL", icon: BiLogoPostgresql, color: "#4169E1" },
    { id: 11, name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { id: 12, name: "MongoDB", icon: DiMongodb, color: "#47A248" },
    { id: 13, name: "Git", icon: FaGitAlt, color: "#F05032" },
    { id: 14, name: "GitHub", icon: FaGithub, color: "#181717" },
  ];

  return (
    <section
      id="skills"
      className="w-full scroll-mt-20 py-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl px-6 md:px-12 mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
                Tech Stack
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Skills & Technologies
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>
          </ScrollReveal>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6">
            {skillsArray.map((skill, index) => (
              <ScrollReveal
                key={skill.id}
                variant="zoom-in"
                delay={index * 50}
                duration={400}
              >
                <StackIcon skill={skill} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
