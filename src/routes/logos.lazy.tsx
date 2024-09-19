import { createLazyFileRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";
import "../styles/logos.css";
import "../styles/_common.css";
import data from "../data.json";

export const Route = createLazyFileRoute("/logos")({
  component: Logos,
});

function Logos() {
  return (
    <main className="page">
      <Nav />
      <h1 className="h1">Logo design</h1>
      <div className="logos__content">
        {/* {data.logos.map((logo, index) => (
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
        ))} */}

        <div className="logos__col flex-reverse">
          <img src="/assets/logo-1.svg" className="logos__img" />
          <div className="logos__text">
            <p className="logos__p">
              This logo was created as a submission for a design contest. It was
              a <span className="bold">carpenter</span> company, hence the “J”
              shaped as a <span className="bold">shaving</span>.
            </p>
            <p className="logos__p">
              <span className="bold">Company requirements:</span> Blue logo with
              purple/orange in it, minimal and modern.
            </p>
            <p className="logos__p">
              The logo was not selected and is not currently in use by the
              company. This work is included in my portfolio to showcase design
              skills.
            </p>
            <p className="logos__p">
              <span className="bold">Software used:</span> Adobe Illustrator and
              Procreate
            </p>
          </div>
        </div>

        <div className="logos__col">
          <img src="/assets/logo-2.svg" className="logos__img" />
          <div className="logos__text">
            <p className="logos__p">
              Logo for a meditation website, there is a kneeling man in a circle
              who <span className="bold">symbolizes meditation</span>. The
              circle is a symbol of a sun and of a shape frequently used as a
              meditation, yoga and psychology symbol.
            </p>
            <p className="logos__p">
              The logo on the website is{" "}
              <span className="bold">interactive with hover effect</span> that
              causes the logo to change colour to match colours of the website
              and fuctions as a home-page link.
            </p>
            <p className="logos__p">
              <span className="bold">Software used:</span> Adobe Illustrator and
              Procreate
            </p>
          </div>
        </div>

        <div className="logos__col flex-reverse">
          <img src="/assets/logo-3.svg" className="logos__img" />
          <div className="logos__text">
            <p className="logos__p">
              I designed a condensed logo using my initials for my website
              portfolio.
            </p>
            <p className="logos__p">
              The logo features round shapes for a{" "}
              <span className="bold">soft look</span> and I added part of the
              letter K as a <span className="bold">sharp-edged shape</span> to
              contrast the letter O. My idea was for the letter K to partially
              come out of the letter O.
            </p>
            <p className="logos__p">
              <span className="bold">Software used: </span>
              Adobe Illustrator and Procreate
            </p>
          </div>
        </div>

        <div className="logos__col">
          <img src="/assets/logo-4.svg" className="logos__img" />
          <div className="logos__text">
            <p className="logos__p">
              This logo was created as a submission for a design contest. It was
              for business company that opened a private school.
            </p>
            <p className="logos__p">
              <span className="bold">Company requirements:</span> The logo
              should convey a sense of tradition, prestige, and academic rigor.
              The design should integrate traditional elements that might be
              found in old-school private academy crests or emblems, yet with a
              modern twist that appeals to today’s youth.
            </p>
            <p className="logos__p">
              The logo was not selected and is not currently in use by the
              company. This work is included in my portfolio to showcase design
              skills.
            </p>
            <p className="logos__p">
              <span className="bold">Software used:</span> Adobe Illustrator and
              Procreate
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
