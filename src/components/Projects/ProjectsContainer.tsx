import React from "react";
import ProjectCard from "./projects";
import { projectData } from "../../data/data";

const ProjectsContainer = () => {
  return (
    <div className="projects-container ">
      <h1 className="text-center">Projects Created</h1>
      <div className="row justify-content-center">
        {projectData.map((project) => (
          <div
            className="col-lg-5 col-md-6 col-sm-12 justify-content-center"
            key={project.id}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
