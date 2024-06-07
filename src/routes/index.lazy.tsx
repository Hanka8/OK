import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../index.css";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [screenRatio, setScreenRatio] = useState(
    window.screen.width / window.screen.height
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenRatio(window.screen.width / window.screen.height);
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={`main ${screenRatio < 2 / 3 ? "mobile-screen" : ""}`}>
      <section
        id="header"
        className={`header ${screenRatio < 2 / 3 ? "mobile-screen" : ""}`}
      >
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
