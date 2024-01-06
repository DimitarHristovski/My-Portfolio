import React from "react";
interface Project {
  title: string;
  technologies: string[];
  githubUrl: string;
  hostedUrl: string;
}
interface CardProps {
  project: Project;
}

const ProjectCard: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>Technologies: {project.technologies.join(", ")}</p>
      <div className="d-flex justify-content-between ">
        {" "}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={project.hostedUrl} target="_blank" rel="noopener noreferrer">
          Hosted Page
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
