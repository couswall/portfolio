"use client";
import React, { useState } from "react";

export interface IStackIconProps {
  skill: ISkill;
}

export interface ISkill {
  id: number;
  name: string;
  icon: React.ReactNode;
}

const StackIcon: React.FC<IStackIconProps> = ({ skill }) => {
  const [showNameTag, setShowNameTag] = useState<boolean>(false);
  return (
    <div className="group relative inline-block" key={skill.id}>
      {showNameTag && (
        <div
          className="absolute -top-10 left-1/2 z-3 -translate-x-1/2 rounded bg-black px-3 py-1 text-sm text-white shadow-xl"
          style={{
            whiteSpace: "nowrap",
            transform: "translateX(-50%) rotate(-5deg)",
          }}
        >
          {skill.name}
        </div>
      )}
      <div
        className="p-4 border-2 rounded-full transition-all duration-500 transform dark:border-white hover:scale-125 hover:-translate-y-1 hover:rotate-45"
        onMouseEnter={() => setShowNameTag(true)}
        onMouseLeave={() => setShowNameTag(false)}
      >
        {skill.icon}
      </div>
    </div>
  );
};

export default StackIcon;
