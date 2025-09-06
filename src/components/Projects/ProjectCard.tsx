import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export interface IProjectCardProps {
  id: number;
  name: string;
  description: string;
  stack: string[];
  demo?: string;
  repository?: string;
  imgSrc: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  description,
  imgSrc,
  name,
  stack,
  demo,
  repository,
}) => {
  return (
    <div className="flex flex-col justify-between bg-slate-300 p-4 border-2 border-gray-400 rounded-2xl h-[420px] hover:border-black/50 hover:scale-105 hover:shadow-5x1 dark:bg-slate-900 dark:border-gray-500 hover:dark:border-gray-800">
      <div className="flex flex-col">
        <div className="relative w-full h-48 mb-3 border-2 border-gray-100 rounded-xl overflow-hidden dark:border-gray-500">
          <Image src={imgSrc} fill className="object-cover" alt="image" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-between">
            <h3 className="text-xl font-semibold dark:text-white">{name}</h3>
            <div className="flex flex-row gap-2 md:gap-4 mb-2">
              {demo && (
                <a
                  href={demo}
                  className="p-2 border-2 border-black rounded-full hover:scale-125 hover:-translate-y-1 hover:rotate-45 hover:border-gray-900 transition duration-500 dark:border-gray-200 hover:dark:border-white"
                >
                  <FaPlay className="dark:text-white text-lg" />
                </a>
              )}
              {repository && (
                <a
                  href={repository}
                  className="p-2 border-2 border-black rounded-full hover:scale-125 hover:-translate-y-1 hover:rotate-45 hover:border-gray-900 transition duration-500 dark:border-gray-200 hover:dark:border-white"
                >
                  <FiGithub className="dark:text-white text-lg" />
                </a>
              )}
            </div>
          </div>
          <p className="mb-2 leading-5 line-clamp-3 text-sm dark:text-white">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((item, index) => (
          <span
            key={index}
            className="bg-slate-400 text-gray-800 px-2 py-1 rounded-full text-sm dark:bg-gray-700 dark:text-gray-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
