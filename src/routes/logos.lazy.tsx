import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { IoCaretBackSharp } from "react-icons/io5";
import "../logos.css";
import data from "../data.json";

export const Route = createLazyFileRoute("/logos")({
  component: Logos,
});

function Logos() {
  return (
    <main className="logos">
        <Link to="/" className="nav">
          <img src="assets/logo.svg" alt="logo" className="nav__logo"/>
          <IoCaretBackSharp color="white" size="30px" className="nav__back" />
        </Link>
      <h1 className="h1">Logos</h1>
      <div className="logos__content">
        {data.logos.map((logo, index) => (
          <div key={index} className={`logos__col ${index % 2 != 0 && "flex-reverse"}`}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="logos__img"
            />
            <div className="logos__text">
              {logo.text.map((text, index) => (
                <p key={index} className="logos__p">
                  {text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
