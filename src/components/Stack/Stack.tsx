"use client";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import React from "react";
import StackIcon from "@components/Stack/StackIcon";

const Stack = () => {
  const skillsArray = [
    { id: 1, name: "HTML5", icon: FaHtml5, hoverColor: "#E34F26" },
    { id: 2, name: "CSS3", icon: FaCss3, hoverColor: "#1572B6" },
    { id: 3, name: "Tailwind", icon: RiTailwindCssFill, hoverColor: "#38BDF8" },
    {
      id: 4,
      name: "JavaScript",
      icon: IoLogoJavascript,
      hoverColor: "#F7DF1E",
    },
    { id: 5, name: "TypeScript", icon: SiTypescript, hoverColor: "#3178C6" },
    { id: 6, name: "React.js", icon: FaReact, hoverColor: "#61DAFB" },
    { id: 7, name: "Redux", icon: SiRedux, hoverColor: "#764ABC" },
    { id: 8, name: "Next.js", icon: RiNextjsFill, hoverColor: "#000000" },
    { id: 9, name: "Node.js", icon: FaNodeJs, hoverColor: "#339933" },
    {
      id: 10,
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
      hoverColor: "#4169E1",
    },
    { id: 11, name: "Prisma", icon: SiPrisma, hoverColor: "#0C344B" },
    { id: 12, name: "MongoDB", icon: DiMongodb, hoverColor: "#47A248" },
    { id: 13, name: "Git", icon: FaGitAlt, hoverColor: "#F05032" },
    { id: 14, name: "GitHub", icon: FaGithub, hoverColor: "#181717" },
  ];

  return (
    <section
      id="skills"
      className="w-full px-[4%] md:px-[12%] scroll-mt-44 text-center mx-auto mb-28"
    >
      <div className="flex flex-col gap-10">
        <h2 className="text-4xl text-center dark:text-white">
          {"Skills & Tecnologies"}
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="relative inline-block">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {skillsArray.map((skill) => (
                <StackIcon skill={skill} key={skill.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
