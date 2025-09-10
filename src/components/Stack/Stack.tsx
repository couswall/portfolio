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
    {
      id: 1,
      name: "HTML5",
      icon: <FaHtml5 className="dark:text-white text-4xl" />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3 className="dark:text-white text-4xl" />,
    },
    {
      id: 3,
      name: "Tailwind",
      icon: <RiTailwindCssFill className="dark:text-white text-4xl" />,
    },
    {
      id: 4,
      name: "Javascript",
      icon: <IoLogoJavascript className="dark:text-white text-4xl" />,
    },
    {
      id: 5,
      name: "Typescript",
      icon: <SiTypescript className="dark:text-white text-4xl" />,
    },
    {
      id: 6,
      name: "React.js",
      icon: <FaReact className="dark:text-white text-4xl" />,
    },
    {
      id: 7,
      name: "Redux",
      icon: <SiRedux className="dark:text-white text-4xl" />,
    },
    {
      id: 8,
      name: "Next.js",
      icon: <RiNextjsFill className="dark:text-white text-4xl" />,
    },
    {
      id: 9,
      name: "Node.js",
      icon: <FaNodeJs className="dark:text-white text-4xl" />,
    },
    {
      id: 10,
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="dark:text-white text-4xl" />,
    },
    {
      id: 11,
      name: "Prisma",
      icon: <SiPrisma className="dark:text-white text-4xl" />,
    },
    {
      id: 12,
      name: "MongoDB",
      icon: <DiMongodb className="dark:text-white text-4xl" />,
    },
    {
      id: 13,
      name: "Git",
      icon: <FaGitAlt className="dark:text-white text-4xl" />,
    },
    {
      id: 14,
      name: "Github",
      icon: <FaGithub className="dark:text-white text-4xl" />,
    },
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
          <div className="group relative inline-block">
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
