"use client";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./Experience.constants";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full scroll-mt-20 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/90"
    >
      <div className="max-w-7xl px-6 md:px-12 mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
                Career Path
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Work Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A journey through my professional career in software development
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-violet-400 to-violet-300 dark:from-violet-600 dark:via-violet-500 dark:to-violet-400" />

            {/* Experience cards */}
            <div className="flex flex-col gap-12">
              {experiences.map((experience, index) => (
                <ScrollReveal
                  key={experience.id}
                  variant={index % 2 === 0 ? "fade-right" : "fade-left"}
                  delay={index * 150}
                >
                  <ExperienceCard experience={experience} index={index} />
                </ScrollReveal>
              ))}
            </div>

            {/* Timeline end dot */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -bottom-4">
              <div className="w-3 h-3 rounded-full bg-violet-300 dark:bg-violet-700 ring-4 ring-violet-100 dark:ring-violet-900/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
