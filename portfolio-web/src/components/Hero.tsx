import { ArrowDown, ArrowRight } from "lucide-react";
import "./Hero.css";

const technologies = [
  "SOFTWARE",
  "CLOUD",
  "LINUX",
  "SECURITY",
  "IoT",
  "TECH RISK",
];

export function Hero() {
  return (
    <section id="system" className="hero">
      <div className="container hero__content">
        <div>
          <div className="hero__label">
            <span className="hero__label-line" />
            <span>SYSTEM / 001</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">
              RUAN
            </span>

            <span className="hero__title-line hero__title-line--accent">
              GASPAR
            </span>
          </h1>

          <p className="hero__description">
            Technology professional building systems across
            software, infrastructure, cloud, security and
            connected devices.
          </p>

          <div className="hero__stack">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="hero__stack-item"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a
              href="#projects"
              className="hero__button"
            >
              EXPLORE PROJECTS
              <ArrowRight size={15} />
            </a>

            <div className="hero__status">
              <span className="hero__status-indicator" />
              <span>SYSTEM ONLINE</span>
            </div>
          </div>
        </div>

        <div className="hero__metadata">
          <div className="hero__metadata-item">
            <span className="hero__metadata-label">
              LOCATION
            </span>

            <span className="hero__metadata-value">
              SAO PAULO / BR
            </span>
          </div>

          <div className="hero__metadata-item">
            <span className="hero__metadata-label">
              BUILD
            </span>

            <span className="hero__metadata-value">
              2026.08
            </span>
          </div>

          <div className="hero__metadata-item">
            <span className="hero__metadata-label">
              STATUS
            </span>

            <span className="hero__metadata-value">
              ACTIVE
            </span>
          </div>
        </div>
      </div>

      <a
        href="#projects"
        className="hero__scroll"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  );
}