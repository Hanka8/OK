import { createLazyFileRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";
import "../styles/_common.css";
import "../styles/various.css";

export const Route = createLazyFileRoute("/various")({
  component: Various,
});

function Various() {
  return (
    <main className="page">
      <Nav />
      <h1 className="h1">Various</h1>

      <div className="various__container container-1">
        <div className="various__col">
          <h2 className="various__h2">brochure - rome</h2>
          <p className="various__p">Project assigned during Adobe course.</p>
          <p className="various__p">
            <span className="bold">Deadline to finish:</span> 2 hours
          </p>
          <p className="various__p">
            <span className="bold">Software used:</span> InDesign
          </p>
          <p className="various__p">
            The aim of the project was to focus on learnig to use{" "}
            <span className="bold"> page templates</span> with consistent page
            numbers and recurring attributes throughout the document. Also, to
            learn to <span className="bold">prepare the files for print</span>,
            ensuring they met all necessary prepress standards.
          </p>
        </div>
        <picture className="various__img img-1">
          <source
            srcSet="/assets/various-1__mobile.webp"
            media="(max-width: 370px)"
            type="image/webp"
          />
          <img src="/assets/various-1.webp" alt="brochure rome" />
        </picture>
      </div>

      <div className="various__container container-2">
        <div className="various__col">
          <h2 className="various__h2">pigeon illustration</h2>
          <p className="various__p">
            For a personal project, I created an illustration of a pigeon
            designed to be featured on a mug and a notebook.
          </p>
          <p className="various__p">
            <span className="bold">Software used:</span> Illustrator and
            Photoshop
          </p>
          <p className="various__p">
            The process began with my own sketch, which I then refined in
            Illustrator. I used the <span className="bold">pen tool</span> and
            various <span className="bold">shape tools</span> to create a clean
            and precise vector illustration.
          </p>
        </div>
        <picture className="various__img img-2">
          <source
            srcSet="/assets/various-2__mobile.webp"
            media="(max-width: 370px)"
            type="image/webp"
          />
          <img src="/assets/various-2.webp" alt="pigeon illustration" />
        </picture>
      </div>
    </main>
  );
}