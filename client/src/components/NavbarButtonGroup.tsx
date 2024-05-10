import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { buttonVariants } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export const NavbarButtonGroup = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Link to="/login" search={{ redirect: "/" }} className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
        Login
      </Link>
      <Link to="/register" search={{ redirect: "/" }} className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
        Get started
      </Link>
    </div>
  );
};

NavbarButtonGroup.Skeleton = function NavbarButtonGroupSkeleton() {
  return (
    <div className="flex items-center gap-x-4">
      <Skeleton className="w-24 h-10" />
      <Skeleton className="w-24 h-10" />
    </div>
  );
};
