import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../index.css";
import { useEffect, useState } from "react";

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
          <p className="about__p">
            As an aspiring graphic designer, I am driven by a deep passion for
            creating visually compelling content.
          </p>
          <p className="about__p">
            Graphic design has been a natural extension of my passion for
            drawing and abstract painting. Though my experience with grahphic
            design spans just several months, I have dedicated countless hours
            to improving my skills in design tools in Adobe Creative Suite and
            Figma, and leveraging AI to enhance my visuals and drawing an
            inspiration from it. The illustration of colorful waves emanating
            from a head on my website portfolio is a piece I crafted myself.
          </p>
          <p className="about__p">
            At the moment, I’m designing a meditation website, I’m taking part
            in a logo design contest as well as reading design literature to
            improve my designing skills.
          </p>
          <p className="about__p">
            Through design, I also embark on a journey of self-discovery,
            gaining insights into my own artistic voice and identity.
          </p>
          <p className="about__p">
            My dedication to learning and hands-on projects demonstrates my
            commitment to excellence in the field of graphic design. I am
            excited to continue growing and exploring new avenues within this
            dynamic and fulfilling field.
          </p>
        </div>
        <picture className="about__col col-2">
          <img className="about__img" src="assets/olga.jpg" alt="Olga Kšírová" />
        </picture>
      </section>
    </main>
  );
}
