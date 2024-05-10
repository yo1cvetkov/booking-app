import { Navbar } from "@/components/Navbar";
import { type QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

import { IAuthContext as AuthContext } from "@/context/auth";

interface RouterContext {
  queryClient: QueryClient;
  auth: AuthContext;
}

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ReactQueryDevtools />
    </>
  );
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
});
