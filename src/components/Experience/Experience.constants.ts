import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaWordpress } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
  SiGoogleanalytics,
} from "react-icons/si";

export interface IExperience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Freelance" | "Contract";
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: {
    name: string;
    icon: IconType;
    color: string;
  }[];
}

export const experiences: IExperience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Multiapoyo - Casa de Empeño",
    companyUrl: undefined,
    location: "Mexico City, Mexico",
    type: "Full-time",
    startDate: "Apr 2024",
    endDate: "Present",
    description:
      "Building scalable frontend solutions for a B2B SaaS platform with real-time multi-tenant dashboards.",
    achievements: [
      "Developed core frontend architecture using React and TypeScript for a new B2B SaaS product",
      "Reduced bug reports by 50% through code reviews and clean code standards",
      "Implemented real-time data syncing with Redux Toolkit for enterprise dashboards",
    ],
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Styled Components", icon: SiStyledcomponents, color: "#DB7093" },
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Grupo Chulavista",
    location: "Remote",
    type: "Full-time",
    startDate: "Aug 2022",
    endDate: "Apr 2024",
    description:
      "Developed web platforms using the MERN stack, driving business growth through performance optimization.",
    achievements: [
      "Built personalized digital wedding invitation platforms using MongoDB, Express, React, and Node.js",
      "Increased landing page conversion rates by 30% with optimized React implementations",
      "Reduced page load times by 40% across four WordPress sites through performance optimization",
      "Improved user engagement by 25% using data-driven insights from Google Analytics and heatmaps",
    ],
    technologies: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "WordPress", icon: FaWordpress, color: "#21759B" },
    ],
  },
];
