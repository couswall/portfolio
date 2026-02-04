import { IExperience } from "./Experience.constants";
import { FiMapPin, FiExternalLink } from "react-icons/fi";
import { HiOutlineBriefcase } from "react-icons/hi2";

const ExperienceCard: React.FC<{ experience: IExperience; index: number }> = ({
  experience,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-center md:justify-between group">
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-violet-600 dark:bg-violet-500 ring-4 ring-violet-100 dark:ring-violet-900/50 group-hover:scale-125 transition-transform" />
      </div>

      {/* Card - alternating sides on desktop */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 ${
          isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="relative p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1">
          {/* Connector line to dot - desktop only */}
          <div
            className={`hidden md:block absolute top-8 w-8 h-0.5 bg-gradient-to-r ${
              isEven
                ? "right-0 translate-x-full from-violet-500/50 to-transparent"
                : "left-0 -translate-x-full from-transparent to-violet-500/50"
            }`}
          />

          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 dark:text-violet-400 font-medium hover:underline flex items-center gap-1"
                  >
                    {experience.company}
                    <FiExternalLink className="text-sm" />
                  </a>
                ) : (
                  <span className="text-violet-600 dark:text-violet-400 font-medium">
                    {experience.company}
                  </span>
                )}
              </div>
            </div>

            {/* Employment type badge */}
            <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-medium">
              {experience.type}
            </span>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center gap-1.5">
              <HiOutlineBriefcase className="text-violet-500" />
              {experience.startDate} - {experience.endDate}
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin className="text-violet-500" />
              {experience.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-2 mb-5">
            {experience.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
            {experience.technologies.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
              >
                <tech.icon style={{ color: tech.color }} className="text-sm" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
