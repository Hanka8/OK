import { createLazyFileRoute } from "@tanstack/react-router";
import Nav from "../components/Nav";

export const Route = createLazyFileRoute("/more")({
  component: More,
});

function More() {
  return (
    <main className="page">
      <Nav />
      <h1 className="h1">More projects</h1>
    </main>
  );
}
