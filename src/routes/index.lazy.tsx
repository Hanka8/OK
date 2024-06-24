import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../index.css";
import { useEffect, useState } from "react";
import data from "../data.json";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [mobileScreen, setMobileScreen] = useState(
    window.screen.width / window.screen.height < 2 / 3
  );

  const [resetProjectsbackground, setResetProjectsbackground] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // different background on different screen ratio
      setMobileScreen(
        window.screen.width / window.screen.height < 2 / 3 &&
          window.screen.orientation.angle === 0
      );
      setResetProjectsbackground(
        window.screen.width / window.screen.height < 4 / 3
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className={`main ${mobileScreen ? "mobile-screen" : ""}`}>
      <section
        id="header"
        className={`header ${mobileScreen ? "mobile-screen" : ""}`}
      >
        <nav className="header__nav">
          <picture className="header__picture">
            <img className="header__img" src="assets/logo.svg" alt="logo" />
          </picture>
          <a className="header__a link" href="#projects">
            projects
          </a>
          <a className="header__a link" href="#about">
            about
          </a>
        </nav>
        <h1 className="header__h1">Olga Kšírová</h1>
      </section>
      <section
        id="projects"
        className={`projects ${resetProjectsbackground && "reset-background"}`}
      >
        <Link to="/webdesign" className="projects__col">
          <h2 className="projects__h2">web design</h2>
        </Link>
        <Link to="/logos" className="projects__col">
          <h2 className="projects__h2">logos</h2>
        </Link>
      </section>
      <section id="about" className="about">
        <div className="about__col col-1">
          <h2 className="about__h2">About me</h2>
          {data.about.map((p, i) => (
            <p key={i} className="about__p">
              {p.text}
            </p>  
          ))}
        </div>
        <picture className="about__col col-2">
          <img className="about__img" src="assets/olga.jpg" alt="Olga Kšírová" />
        </picture>
      </section>
    </main>
  );
}
