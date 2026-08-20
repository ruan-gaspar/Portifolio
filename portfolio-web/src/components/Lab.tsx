import { labItems } from "../data/lab";
import "./Lab.css";

export function Lab() {
  return (
    <section
      id="lab"
      className="lab"
    >
      <div className="container">
        <header className="lab__header">
          <div>
            <div className="lab__label">
              <span className="lab__label-line" />
              <span>LAB / 006</span>
            </div>

            <h2 className="lab__title">
              EXPERIMENTS
              <br />
              BEYOND THE STACK
            </h2>
          </div>

          <p className="lab__description">
            Technical experiments, infrastructure
            studies and hardware projects used to
            explore technologies beyond the main
            application stack.
          </p>
        </header>

        <div className="lab__grid">
          {labItems.map((item) => (
            <article
              key={item.id}
              className="lab__item"
            >
              <header className="lab__item-header">
                <span className="lab__number">
                  LAB / {item.number}
                </span>

                <span className="lab__status">
                  {item.status}
                </span>
              </header>

              <div className="lab__item-content">
                <span className="lab__category">
                  {item.category}
                </span>

                <h3 className="lab__item-title">
                  {item.title}
                </h3>

                <p className="lab__item-description">
                  {item.description}
                </p>

                <div className="lab__technologies">
                  {item.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="lab__technology"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>
          <footer className="lab__item-footer">
            {item.github ? (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="lab__item-link"
              >
                VIEW ON GITHUB
              </a>
            ) : (
              <span>TECHNICAL EXPERIMENT</span>
            )}

            <span className="lab__item-footer-marker" />
          </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}