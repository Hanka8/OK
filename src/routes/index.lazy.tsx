import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../index.css";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <section id="header" className="header">
        <nav className="flex-center">
          <picture className="header__picture">
            <img className="header__img" src="assets/logo.svg" alt="logo" />
          </picture>
          <ul className="header__ul flex-center">
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
          </ul>
        </nav>
        <h1 className="header__h1">Olga Kšírová</h1>
      </section>
      <section id="projects" className="projects">
        <Link to="/project" className="text-blue-500">
          Go to Project
        </Link>
        <Link to="/logos" className="text-blue-500 ml-2">
          Go to Logos
        </Link>
      </section>
      <section id="about" className="about"></section>
    </main>
  );
}
