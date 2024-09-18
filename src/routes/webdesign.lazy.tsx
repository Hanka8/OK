import { createLazyFileRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";
import "../styles/webdesign.css";
import "../styles/_common.css";

export const Route = createLazyFileRoute("/webdesign")({
  component: Webdesign,
});

function Webdesign() {
  return (
    <main className="page">
      <Nav />
      <h1 className="h1">Web Design</h1>
      <section className="design">
        <h2 className="design__h2">Hloub.at web design</h2>
        <p className="design__p">
          This is a meditation website design for an instructor who leads
          meditation courses. I’ve chosen a{" "}
          <span className="bold"> calm color palette</span> with a sunset
          backdrop, blue-green for a tree and grass, and light blue as a
          contrast, I was aiming to evoke{" "}
          <span className="bold"> tranquility </span>
          through simple design. Central to the theme is an image of a kneeling
          man, symbolizing meditation.
        </p>
        <p className="design__p">
          All <span className="bold">shapes</span>, except the tree, are
          <span className="bold"> custom-made</span> in Illustrator and Figma,
          ensuring a cohesive visual identity. The{" "}
          <span className="bold">interactive logo</span> changes color with
          mouse movement and serves as the homepage link. User-friendly
          navigation includes organized pages and a login system specified by
          the meditation instructor.
        </p>
        <p className="design__p">
          The website is undergoing final touches including phone and tablet
          layout and is currently being built. It should be up and running
          during summer 2024.
        </p>
        <h2 className="design__h2">Colours</h2>
        <div className="design__colors">
          <div className="design__color color-1">
            <p className="design__color-text">#bf5841</p>
          </div>
          <div className="design__color color-2">
            <p className="design__color-text">#0d4551</p>
          </div>
          <div className="design__color color-3">
            <p className="design__color-text">#6cc5d9</p>
          </div>
        </div>
        <h2 className="design__h2 oswald">Google font Oswald</h2>
        <div className="design__font-container">
          <div className="design__font-col">
            <div className="design__font-card">
              <p>Ab</p>
            </div>
            <p className="design__p oswald">
              Lorem ipsum dolor sit amet consectetur. Volutpat purus nullam sem
              adipiscing ante pretium. Facilisis sit amet ut non adipiscing ante
              egestas sapien volutpat. Purus morbi vivamus fringilla euismod
              odio orci quis ultrices. Vestibulum nunc tellus aliquam
            </p>
          </div>
          <div className="design__font-col">
            <div className="design__font-card">
              <p className="bold">Ab</p>
            </div>
            <p className="design__p bold oswald">
              Lorem ipsum dolor sit amet consectetur. Volutpat purus nullam sem
              adipiscing ante pretium. Facilisis sit amet ut non adipiscing ante
              egestas sapien volutpat. Purus morbi vivamus fringilla euismod
              odio orci quis ultrices. Vestibulum nunc tellus aliquam
            </p>
          </div>
        </div>
      </section>
      <h2 className="design__h2 secondary">Home page</h2>
      {/* <iframe className="design__iframe" 
        title="Hloub.at"
        src="https://hloub.at/"
      /> */}
      <picture>
        <img className="design__img" src="/assets/hloubat-page.webp" alt="web design" />
      </picture>
    </main>
  );
}
