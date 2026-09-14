import { ArrowUpRight } from "lucide-react";

import type { Project } from "../data/projects";

import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className={`project-card ${
        project.featured
          ? "project-card--featured"
          : ""
      }`}
    >
      <header className="project-card__header">
        <span className="project-card__number">
          {project.number}
        </span>

        <span className="project-card__status">
          {project.status}
        </span>
      </header>

      <div className="project-card__content">
        <span className="project-card__category">
          {project.category}
        </span>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__technologies">
          {project.technologies.map(
            (technology) => (
              <span
                key={technology}
                className="project-card__technology"
              >
                {technology}
              </span>
            )
          )}
        </div>
      </div>

      <footer className="project-card__footer">
        <div className="project-card__meta">
          {project.collaboration && (
            <span className="project-card__collaboration">
              {project.collaboration}
            </span>
          )}

          {project.role && (
            <span className="project-card__role">
              {project.role}
            </span>
          )}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
        >
          <span>
            {project.featured
              ? "EXPLORE PROJECT"
              : "VIEW ON GITHUB"}
          </span>

          <ArrowUpRight size={14} />
        </a>
      </footer>
    </article>
  );
}