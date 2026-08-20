import { ArrowUpRight } from "lucide-react";
import "./Navbar.css";
import { siteConfig } from "../data/site";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a
          href="#system"
          className="navbar__brand"
          aria-label="Ruan Nunes Gaspar - início"
        >
          {siteConfig.shortName}
        </a>

        <div className="navbar__status">
          <span className="navbar__status-indicator" />
          <span>SYSTEM ONLINE</span>
        </div>

        <nav className="navbar__navigation" aria-label="Navegação principal">
          <a href="#projects">PROJECTS</a>

          <a href="#architecture">ARCHITECTURE</a>

          <a href="#lab">LAB</a>

          <a
            href="{siteConfig.github}"
            target="_blank"
            rel="noreferrer"
            className="navbar__github"
          >
            GITHUB
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </nav>
      </div>
    </header>
  );
}