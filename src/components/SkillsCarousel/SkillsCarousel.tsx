import React from "react";

const skills = [
  "Team Work",
  "Problem Solving",
  "Attention to Detail",
  "Creativity",
  "Communication",
  "Adaptability",
  "Critical Thinking",
  "Time Management",
  "Collaboration",
  "Leadership",
];

const SkillsCarousel = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-violet-50/80 dark:bg-violet-950/30 border-y border-violet-100 dark:border-violet-900/30 backdrop-blur-sm">
      <div className="flex animate-scroll">
        {/* First set of skills */}
        {skills.map((skill, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 px-8 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 px-8 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-lg font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;
