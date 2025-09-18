"use client";
import { IconType } from "react-icons";
import React, { useState } from "react";

export interface IStackIconProps {
  skill: ISkill;
}

export interface ISkill {
  id: number;
  name: string;
  icon: IconType;
  hoverColor: string;
}

const StackIcon: React.FC<IStackIconProps> = ({ skill }) => {
  const [showNameTag, setShowNameTag] = useState<boolean>(false);
  return (
    <div className="group relative inline-block" key={skill.id}>
      {showNameTag && (
        <div className="animate-bounce-smooth absolute -top-10 left-5 rotate-6 whitespace-nowrap z-3 rounded bg-black px-3 py-1 text-sm text-white shadow-xl">
          {skill.name}
        </div>
      )}
      <div
        className={
          "p-4 border-2 rounded-full transition-all duration-500 transform dark:border-white hover:scale-125 hover:-translate-y-1 hover:rotate-45"
        }
        onMouseEnter={() => setShowNameTag(true)}
        onMouseLeave={() => setShowNameTag(false)}
        style={{
          borderColor: showNameTag ? skill.hoverColor : undefined,
          backgroundColor: showNameTag
            ? `${skill.hoverColor}20`
            : "transparent",
        }}
      >
        <skill.icon
          className={`
            text-4xl dark:text-white transition-colors duration-500`}
          style={{ color: showNameTag ? skill.hoverColor : undefined }}
        />
      </div>
    </div>
  );
};

export default StackIcon;
