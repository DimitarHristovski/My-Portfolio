import React from "react";
import ProjectCard from "./projects";
import { projectData } from "../../data/data";

const ProjectsContainer = () => {
  return (
    <div className="projects-container">
      <h1 className="text-center p-2">Projects Created</h1>
      <div className="row col-lg-8 col-md-10  offset-lg-2 offset-md-1 ">
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
