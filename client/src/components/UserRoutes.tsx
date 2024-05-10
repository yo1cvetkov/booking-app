import { cn } from "@/lib/utils";
import { Link, useNavigate } from "@tanstack/react-router";
import { Button, buttonVariants } from "./ui/button";
import { Loader2, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const userRoutes = [
  ["/my-bookings", "My Bookings"],
  ["/my-hotels", "My Hotels"],
];

export const UserRoutes = () => {
  const navigate = useNavigate();

  const { logout, isLoggingOut } = useAuth();

  return (
    <div className="flex items-center gap-x-2">
      {userRoutes.map(([to, label]) => (
        <Link key={to} to={to} activeProps={{ className: "text-primary" }} className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
          {label}
        </Link>
      ))}
      <Button
        disabled={isLoggingOut}
        variant={"ghost"}
        size={"icon"}
        role="signOut"
        onClick={() => {
          logout(undefined, {
            onSuccess: () => {
              navigate({ to: "/" });
            },
          });
        }}
      >
        {isLoggingOut ? <Loader2 className="self-center w-4 h-4 animate-spin" /> : <LogOut className="w-4 h-4 text-neutral-400" />}
      </Button>
    </div>
  );
};
