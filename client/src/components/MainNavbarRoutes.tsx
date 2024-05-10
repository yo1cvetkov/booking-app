import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import { Skeleton } from "./ui/skeleton";

const navbarRoutes = [
  ["/", "Home"],
  ["/about", "About"],
];

export const MainNavbarRoutes = () => {
  return (
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
  );
};

MainNavbarRoutes.Skeleton = function MainNavbarRoutesSkeleton() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-x-8">
        {navbarRoutes.map(([to]) => (
          <NavigationMenuItem key={to}>
            <Skeleton className="h-4 w-14" />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
