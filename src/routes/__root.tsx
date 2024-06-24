import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ScrollRestoration } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  ),
});
