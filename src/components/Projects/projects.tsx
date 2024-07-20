import React from "react";
import { Project } from "../../interfaces/db";

interface CardProps {
  project: Project;
}

const Projects: React.FC<CardProps> = ({ project }) => {
  return (
    <table className=" col-12 m-2 h-25">
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
          <td className="col-3 align-content-center text-center">
            {project.title}
          </td>
          <td className="col-3 fw-bold align-content-center text-center">
            {project.technologies.join(", ")}
          </td>
          <td className="col-3 align-content-center text-center">
            {project.description}
          </td>
          <td className=" col-3 align-content-center text-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link fw-bold text-bg-secondary m-1"
            >
              GitHub
            </a>
            <a
              href={project.hostedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link fw-bold text-bg-primary m-1"
            >
              Hosted
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default Projects;
