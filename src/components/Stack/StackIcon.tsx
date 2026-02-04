"use client";
import { IconType } from "react-icons";
import React, { useState } from "react";

export interface ISkill {
  id: number;
  name: string;
  icon: IconType;
  color: string;
}

export interface IStackIconProps {
  skill: ISkill;
}

const StackIcon: React.FC<IStackIconProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="group relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={`absolute -top-10 px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium whitespace-nowrap shadow-lg transition-all duration-300 ${
          isHovered ? "opacity-100 -translate-y-1" : "opacity-0 translate-y-1 pointer-events-none"
        }`}
      >
        {skill.name}
        {/* Tooltip arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
      </div>

      {/* Icon Container */}
      <div
        className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
        style={{
          backgroundColor: isHovered ? `${skill.color}15` : undefined,
          borderColor: isHovered ? `${skill.color}50` : undefined,
        }}
      >
        <skill.icon
          className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 transition-colors duration-300"
          style={{ color: isHovered ? skill.color : undefined }}
        />
      </div>

      {/* Skill name below icon (visible on mobile) */}
      <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 font-medium md:hidden">
        {skill.name}
      </span>
    </div>
  );
};

export default StackIcon;
