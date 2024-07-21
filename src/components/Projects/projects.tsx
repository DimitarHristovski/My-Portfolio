import React from "react";
import { Project } from "../../interfaces/db";

interface CardProps {
  project: Project;
}

const Projects: React.FC<CardProps> = ({ project }) => {
  return (
    <table className="  col-md-8 offset-md-2   text-center ">
      <thead className="col-12">
        <tr>
          <th>Project Title</th>
          <th>Technologies</th>
          <th>Description</th>
          <th>Links</th>
        </tr>
      </thead>
      <tbody className="col-12">
        <tr>
          <td className="w-25 align-content-center py-1  fs-6">
            {project.title}
          </td>
          <td className="w-25 fw-bold align-content-center fs-6 py-1">
            {project.technologies.join(", ")}
          </td>
          <td className="w-25 align-content-center fs-6 py-1">
            {project.description}
          </td>
          <td className="w-25 align-content-center fs-6 py-1">
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
