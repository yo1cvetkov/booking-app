import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const navbarRoutes = [
  ["/", "Home"],
  ["/about", "About"],
];

export const Navbar = () => {
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

      <div className="flex items-center gap-x-4">
        <Link to="/login" className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
          Login
        </Link>
        <Link to="/register" className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
          Get started
        </Link>
      </div>
    </header>
  );
};
