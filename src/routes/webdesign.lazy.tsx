import { createLazyFileRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";
import "../webdesign.css";

export const Route = createLazyFileRoute("/webdesign")({
  component: Webdesign,
});

function Webdesign() {
  return (
    <main className="project">
      <Nav />
      <h1 className="h1">Web Design</h1>
    </main>
  );
}