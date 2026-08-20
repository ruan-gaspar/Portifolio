import "./Architecture.css";

interface ArchitectureNode {
  index: string;
  title: string;
  description: string;
}

const architectureNodes: ArchitectureNode[] = [
  {
    index: "01",
    title: "SENSORS",
    description: "Environmental and agricultural data",
  },
  {
    index: "02",
    title: "NODE-RED",
    description: "Data flow and integration",
  },
  {
    index: "03",
    title: ".NET API",
    description: "Data ingestion and business logic",
  },
  {
    index: "04",
    title: "ORACLE",
    description: "Persistence and data management",
  },
  {
    index: "05",
    title: "ANALYTICS",
    description: "Insights and visualization",
  },
];

const technologies = [
  ".NET 8",
  "ASP.NET CORE",
  "EF CORE",
  "ORACLE",
  "NODE-RED",
  "DOCKER",
  "OPENTELEMETRY",
];

export function Architecture() {
  return (
    <section
      id="architecture"
      className="architecture"
    >
      <div className="container">
        <header className="architecture__header">
          <div className="architecture__label">
            <span className="architecture__label-line" />
            <span>ARCHITECTURE / 001</span>
          </div>

          <h2 className="architecture__title">
            HOW SYSTEMS
            <br />
            CONNECT
          </h2>

          <p className="architecture__description">
            A visual representation of the AgroTech data
            pipeline, from sensor collection to storage
            and analytics.
          </p>
        </header>

        <div className="architecture__system">
          <div className="architecture__system-header">
            <span className="architecture__system-name">
              AGROTECH / IOT DATA PIPELINE
            </span>

            <span className="architecture__system-status">
              <span className="architecture__status-indicator" />
              ACTIVE
            </span>
          </div>

          <div className="architecture__pipeline">
            {architectureNodes.map((node, index) => (
            <div
              key={node.index}
              className="architecture__flow-item"
            >
              <div className="architecture__node">
                <span className="architecture__node-index">
                  NODE / {node.index}
                </span>

                <strong className="architecture__node-title">
                  {node.title}
                </strong>

                <p className="architecture__node-description">
                  {node.description}
                </p>
              </div>

              {index < architectureNodes.length - 1 && (
                <div className="architecture__connection">
                </div>
              )}
            </div>
          ))}
          </div>

          <div className="architecture__stack">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="architecture__stack-item"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}