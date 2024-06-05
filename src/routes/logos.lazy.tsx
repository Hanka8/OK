import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/logos")({
  component: Logos,
});

function Logos() {
  return (
    <main className="p-2">
      <Link to="/" className="text-blue-500">
        Go Home
      </Link>
      <h1>Hello from Logos!</h1>
      <p>Logos content goes here...</p>
    </main>
  );
}
