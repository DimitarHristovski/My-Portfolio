import React from "react";
import ProjectCard from "./projects";
import { projectData } from "../../data/data";

const ProjectsContainer = () => {
  return (
    <>
      <div className="container-fluid py-3 col-12 d-none d-sm-block">
        <h1 className="text-center py-2">Projects Created 2021-2024</h1>
        <div className="row ">
          {projectData.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-sm-none d-block text-center display-1">
        Coming Soon... Check higher resolution
      </div>
    </>
  );
};

export default ProjectsContainer;
