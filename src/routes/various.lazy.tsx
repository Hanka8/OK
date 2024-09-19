import { createLazyFileRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";
import "../styles/_common.css";
import "../styles/logos.css";
import "../styles/various.css";

export const Route = createLazyFileRoute("/various")({
  component: Various,
});

function Various() {
  return (
    <main className="page">
      <Nav />
      <h1 className="h1">Various</h1>

      <div className="logos__content">
        <div className="logos__col">
          <img src="/assets/various-1.svg" className="logos__img" />
          <div className="logos__text">
            <p className="logos__p">
              This illustration was created as part of practice projects.
            </p>
            <p className="logos__p">
              <span className="bold">Software used:</span> Procreate and
              Illustrator
            </p>
            <p className="logos__p">
              Lyre and spear, a book cover idea for The Song of Achilles,
              symbolizing a conflict of love and war. Initially sketched in
              Procreate, the illustration was later refined in Illustrator using
              the <span className="bold">Image Trace </span>tool to vectorize
              the design.
            </p>
          </div>
        </div>

        <div className="logos__col flex-reverse">
          <img src="/assets/various-2.svg" className="logos__img" />
          <div className="logos__text">
            <p className="logos__p">
              For a personal project, I created an illustration of a pigeon
              designed to be featured on a mug and a notebook.
            </p>
            <p className="logos__p">
              <span className="bold">Software used:</span> Illustrator and
              Photoshop
            </p>
            <p className="logos__p">
              The process began with my own sketch, which I then refined in
              Illustrator. I used the <span className="bold">pen tool</span> and
              various <span className="bold">shape tools</span> to create a
              clean and precise vector illustration.
            </p>
          </div>
        </div>
      </div>

      <div className="logos__col">
        <img src="/assets/various-3.png" className="logos__img" />
        <div className="logos__text">
          <p className="logos__p">
            Creating a brochure was a project assigned during my Adobe course.
          </p>
          <p className="logos__p">
            <span className="bold">Deadline to finish:</span> 2 hours
          </p>
          <p className="logos__p">
            <span className="bold">Software used:</span> InDesign
          </p>
          <p className="logos__p">
            The aim of the project was to focus on learnig to use{" "}
            <span className="bold"> page templates</span> with consistent page
            numbers and recurring attributes throughout the document. Also, to
            learn to <span className="bold">prepare the files for print</span>,
            ensuring they met all necessary prepress standards.
          </p>
        </div>
      </div>
    </main>
  );
}
