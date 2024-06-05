import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Link to="/project" className="text-blue-500">
        Go to Project
      </Link>
      <Link to="/logos" className="text-blue-500 ml-2">
        Go to Logos
      </Link>
    </div>
  );
}
