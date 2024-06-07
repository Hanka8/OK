import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/project")({
  component: Project,
});

function Project() {
  return (
    <main className="project">
      <Link to="/" className="text-blue-500">
        Go Home
      </Link>
      <h1>Hello from project</h1>
      <p>Project content goes here...</p>
    </main>
  );
}