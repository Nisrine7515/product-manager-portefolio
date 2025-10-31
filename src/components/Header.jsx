import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="hdr">
      <div className="hdr__inner container">
        <Link to="/" className="hdr__brand" aria-label="Accueil">
          <span className="hdr__title">
            My Product Manager Portefolio - Nisrine SNACEL
          </span>
        </Link>

        <nav className="hdr__nav" aria-label="Navigation principale">
          <Link
            to="/"
            className={`hdr__link ${pathname === "/" ? "is-active" : ""}`}
          >
            Home
          </Link>
          <a href="#projects" className="hdr__link">
            Projects
          </a>
          <a href="#skills" className="hdr__link">
            Skills
          </a>
        </nav>

        <div className="hdr__ctas">
          <a
            className="btn btn--ghost"
            href="https://www.linkedin.com/in/nisrine-snacel-b0a648157/"
            target="_blank"
            rel="noreferrer"
            aria-label="See my LinkedIn"
          >
            LinkedIn
          </a>
          <a
            className="btn"
            href="https://github.com/Nisrine7515"
            target="_blank"
            rel="noreferrer"
            aria-label="See my GitHub"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
