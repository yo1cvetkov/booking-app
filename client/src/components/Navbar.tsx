import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useAuth } from "@/hooks/use-auth";
import { LogOut } from "lucide-react";

const navbarRoutes = [
  ["/", "Home"],
  ["/about", "About"],
];

export const Navbar = () => {
  const { isLoadingUser, user } = useAuth();

  return (
    <header className="container flex items-center justify-between px-4 py-4">
      <Link className="flex items-center gap-x-4" to="/">
        <Logo alt="logo" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {navbarRoutes.map(([to, label]) => (
            <NavigationMenuItem key={to}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link to={to} activeProps={{ className: "font-bold text-primary" }}>
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {isLoadingUser ? (
        <div>Loading...</div>
      ) : user ? (
        <div className="flex items-center gap-x-2">
          <Link to="/my-bookings" activeProps={{ className: "text-primary" }} className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
            My Bookings
          </Link>
          <Link to="/my-hotels" activeProps={{ className: "text-primary" }} className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
            My Hotels
          </Link>
          <Button variant={"ghost"} size={"icon"}>
            <LogOut className="w-4 h-4 text-neutral-400" />
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-x-4">
          <Link to="/login" className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
            Login
          </Link>
          <Link to="/register" className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
            Get started
          </Link>
        </div>
      )}
    </header>
  );
};
