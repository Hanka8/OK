import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../index.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <section id="header" className="header">
        <nav className="header__nav">
          <picture className="header__picture">
            <img className="header__img" src="assets/logo.svg" alt="logo" />
          </picture>
          <a className="header__a" href="#projects">
            projects
          </a>
          <a className="header__a" href="#about">
            about
          </a>
        </nav>
        <h1 className="header__h1">Olga Kšírová</h1>
      </section>
      <section id="projects" className="projects">
        <h1>Sekce 2</h1>
        <Link to="/project" className="text-blue-500">
          Go to Project
        </Link>
        <Link to="/logos" className="text-blue-500 ml-2">
          Go to Logos
        </Link>
      </section>
      <section id="about" className="about">
        <h1>Sekce 3</h1>
      </section>
    </main>
  );
}