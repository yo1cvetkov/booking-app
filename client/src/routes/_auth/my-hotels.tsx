import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/my-hotels")({
  component: () => <div>Hello /_auth/my-hotels!</div>,
});
