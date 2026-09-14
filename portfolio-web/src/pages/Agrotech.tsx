import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { agrotechCase } from "../data/agrotech";

import "./Agrotech.css";

interface AgroTechProps {
  onBack: () => void;
}

export function AgroTech({
  onBack,
}: AgroTechProps) {
  return (
    <main className="agrotech">
      <nav className="agrotech__nav">
        <button
          type="button"
          onClick={onBack}
          className="agrotech__back"
        >
          <ArrowLeft size={15} />

          <span>BACK TO PROJECTS</span>
        </button>
      </nav>

      <section className="agrotech__hero">
        <div className="agrotech__hero-meta">
          <span>001</span>
          <span>{agrotechCase.collaboration}</span>
        </div>

        <p className="agrotech__eyebrow">
          FIAP / ORACLE CHALLENGE
        </p>

        <h1>{agrotechCase.title}</h1>

        <p className="agrotech__subtitle">
          {agrotechCase.subtitle}
        </p>

        <p className="agrotech__description">
          {agrotechCase.description}
        </p>
      </section>

      <section className="agrotech__section">
        <div className="agrotech__section-label">
          01 / OVERVIEW
        </div>

        <div className="agrotech__section-content">
          <p>
            The AgroTech platform connects field data,
            backend services, databases, mobile
            applications and analytics into an integrated
            agricultural management solution.
          </p>

          <p>
            The system combines IoT sensors, environmental
            data, automation and intelligent analysis to
            support real-time decision making.
          </p>
        </div>
      </section>

      <section className="agrotech__section">
        <div className="agrotech__section-label">
          02 / ARCHITECTURE
        </div>

        <div className="agrotech__architecture">
          {agrotechCase.architecture.map(
            (layer, index) => (
              <div
                key={layer.layer}
                className="agrotech__layer"
              >
                <div className="agrotech__layer-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{layer.layer}</h3>

                  <div className="agrotech__layer-tech">
                    {layer.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className="agrotech__section">
        <div className="agrotech__section-label">
          03 / MY CONTRIBUTION
        </div>

        <div className="agrotech__contribution">
          {agrotechCase.contribution.map(
            (item, index) => (
              <div
                key={item}
                className="agrotech__contribution-item"
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{item}</strong>
              </div>
            )
          )}
        </div>
      </section>

      <section className="agrotech__section">
        <div className="agrotech__section-label">
          04 / TECHNOLOGY
        </div>

        <div className="agrotech__tags">
          {agrotechCase.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>
      </section>

      <section className="agrotech__section">
        <div className="agrotech__section-label">
          05 / QUALITY ASSURANCE
        </div>

        <div className="agrotech__tags">
          {agrotechCase.testing.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
        </div>
      </section>

      <section className="agrotech__section">
        <div className="agrotech__section-label">
          06 / MY REPOSITORIES
        </div>

        <div className="agrotech__repositories">
          {agrotechCase.repositories.map(
            (repository) => (
              <a
                key={repository.name}
                href={repository.url}
                target="_blank"
                rel="noreferrer"
                className="agrotech__repository"
              >
                <div>
                  <span>
                    {repository.category}
                  </span>

                  <h3>{repository.name}</h3>
                </div>

                <ArrowUpRight size={18} />
              </a>
            )
          )}
        </div>
      </section>

      <section className="agrotech__cta">
        <p>EXPLORE THE COMPLETE PROJECT</p>

        <a
          href={agrotechCase.github}
          target="_blank"
          rel="noreferrer"
        >
          <span>GITHUB ORGANIZATION</span>

          <ArrowUpRight size={17} />
        </a>
      </section>
    </main>
  );
}