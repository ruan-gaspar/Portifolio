import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../data/site";

import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <a
              href="#system"
              className="footer__brand"
            >
              {siteConfig.shortName}
            </a>

            <p className="footer__description">
              {siteConfig.role}
            </p>
          </div>

          <nav
            className="footer__links"
            aria-label="Links externos"
          >
            <a
              href="{siteConfig.github}"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              GITHUB
              <ArrowUpRight size={12} />
            </a>

            <a
              href="{siteConfig.linkedin}"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              LINKEDIN
              <ArrowUpRight size={12} />
            </a>

            <a
              href="href={siteConfig.email}"
              className="footer__link"
            >
              EMAIL
            </a>
          </nav>
        </div>

        <div className="footer__system">
          <span>SYSTEM STATUS</span>

          <span className="footer__system-status">
            <span className="footer__status-indicator" />
            ONLINE
          </span>
        </div>

        <div className="footer__bottom">
          <span>
            © {siteConfig.year} {siteConfig.shortName}
          </span>

          <span className="footer__bottom-right">
            BUILT WITH REACT / TYPESCRIPT
          </span>
        </div>
      </div>
    </footer>
  );
}