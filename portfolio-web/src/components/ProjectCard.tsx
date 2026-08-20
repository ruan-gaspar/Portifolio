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
    <article className="project-card">
      <header className="project-card__header">
        <span className="project-card__number">
          PROJECT / {project.number}
        </span>

        <span className="project-card__status">
          <span className="project-card__status-indicator" />
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
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="project-card__technology"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <footer className="project-card__footer">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
        >
          VIEW ON GITHUB
          <ArrowUpRight size={14} />
        </a>
      </footer>
    </article>
  );
}