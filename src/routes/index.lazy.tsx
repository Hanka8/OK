import { createLazyFileRoute, Link } from "@tanstack/react-router";
import "../index.css";
import data from "../data.json";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="main">
      <section id="header" className="header">
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
      <section id="projects" className="projects">
        <Link to="/webdesign" className="projects__col col-1">
          <img
            className="projects__img img-1"
            src="assets/webdesign-illustration.svg"
            alt="web design"
          />
          <h2 className="projects__h2">web design</h2>
        </Link>
        <Link to="/logos" className="projects__col col-2">
          <img
            className="projects__img img-2"
            src="assets/logos-illustration.svg"
            alt="logos"
          />
          <h2 className="projects__h2">logo design</h2>
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
          <img
            className="about__img"
            src="assets/olga.jpg"
            alt="Olga Kšírová"
          />
        </picture>
      </section>
      <footer className="footer">
        <p className="footer__p">© 2024 Olga Kšírová</p>
        <a className="link" href="https://www.freepik.com">
          Laptop and pen designed by rawpixel.com / Freepik
        </a>
      </footer>
    </main>
  );
}