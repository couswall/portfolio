import React from "react";
import { ProjectCard } from "@components/Projects/ProjectCard";
import {
  myProjects,
  PROJECTS_TITLE,
} from "@components/Projects/Projects.constants";

const Projects = () => {
  return (
    <section id="projects" className="w-full px-[4%] md:px-[12%] scroll-mt-44">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl text-center dark:text-white">
          {PROJECTS_TITLE}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 3x1:grid-cols-4 gap-4 my-8">
          {myProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
