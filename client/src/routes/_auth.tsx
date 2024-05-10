import { userQueryOptions } from "@/services/auth/apiAuth";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ context, location }) => {
    const currUser = await context.queryClient.fetchQuery(userQueryOptions);

    if (!currUser) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});
