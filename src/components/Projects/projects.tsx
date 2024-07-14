import React from "react";
import { Project } from "../../interfaces/db";

interface CardProps {
  project: Project;
}

const Projects: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="project-card m-1">
      <table className="table">
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Technologies</th>
            <th>Description</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{project.title}</td>
            <td>{project.technologies.join(", ")}</td>
            <td>{project.description}</td>
            <td className="text-center">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link"
              >
                GitHub
              </a>
              <a
                href={project.hostedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link"
              >
                Hosted Page
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Projects;
