import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import "./ProjectGrid.css";

export function ProjectGrid() {
  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="container">
        <header className="projects__header">
          <div>
            <div className="projects__label">
              <span className="projects__label-line" />
              <span>PROJECTS / 004</span>
            </div>

            <h2 className="projects__title">
              SELECTED
              <br />
              WORK
            </h2>
          </div>

          <p className="projects__description">
            Systems, experiments and engineering
            projects across software, infrastructure,
            security, IoT and technology risk.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}