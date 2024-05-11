import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/my-hotels")({
  component: () => (
    <div className="flex items-center gap-x-2">
      Hello /_auth/my-hotels!
      <Link to="/my-hotels/add" className={cn(buttonVariants({ variant: "default" }))}>
        Add a hotel
      </Link>
      <Outlet />
    </div>
  ),
});
