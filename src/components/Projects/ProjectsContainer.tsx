import React from "react";
import ProjectCard from "./projects";
import { projectData } from "../../data/data";

const ProjectsContainer = () => {
  return (
    <div className="projects-container py-3 col-12">
      <h1 className="text-center py-2">Projects Created</h1>
      <div className="row ">
        {projectData.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
