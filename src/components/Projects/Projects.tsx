"use client";
import React from "react";
import { ProjectCard } from "@components/Projects/ProjectCard";
import { myProjects } from "@components/Projects/Projects.constants";
import ScrollReveal from "@components/ScrollReveal/ScrollReveal";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full scroll-mt-20 py-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
    >
      <div className="max-w-7xl px-6 md:px-12 mx-auto">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-4">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A selection of projects I&apos;ve worked on, showcasing my skills in full-stack development
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                variant="fade-up"
                delay={index * 100}
              >
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
