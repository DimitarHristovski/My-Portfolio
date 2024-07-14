import React from "react";
import { Project } from "../../interfaces/db";

interface CardProps {
  project: Project;
}

const Projects: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>Technologies: {project.technologies.join(", ")}</p>
      <div className="d-flex justify-content-between flex-column">
        {" "}
        <p>{project.description}</p>
        <div className="d-flex justify-content-between">
          {" "}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.hostedUrl} target="_blank" rel="noopener noreferrer">
            Hosted Page
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
