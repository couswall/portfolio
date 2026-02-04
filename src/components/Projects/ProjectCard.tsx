"use client";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export interface IProjectCardProps {
  id: number;
  name: string;
  description: string;
  stack: string[];
  demo?: string;
  repository?: string;
  imgSrc: string;
  category?: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({
  description,
  imgSrc,
  name,
  stack,
  demo,
  repository,
  category = "Project",
}) => {
  return (
    <div className="group relative h-[400px] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-colors">
      {/* Front Side - Image with overlay */}
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
        {/* Project Image */}
        <Image
          src={imgSrc}
          fill
          className="object-cover"
          alt={name}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-violet-600/90 text-white text-xs font-medium backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Project name at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          <div className="flex gap-2">
            {stack.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
            {stack.length > 3 && (
              <span className="text-xs text-gray-400">+{stack.length - 3}</span>
            )}
          </div>
        </div>
      </div>

      {/* Back Side - Details (shown on hover) */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900 p-6 flex flex-col opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium">
            {category}
          </span>
          <div className="flex gap-2">
            {repository && (
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label="View repository"
              >
                <FiGithub className="text-lg" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
                aria-label="View demo"
              >
                <FiExternalLink className="text-lg" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {stack.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full border border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-300 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
