import { Logo } from "@/components/Logo";

import { useAuth } from "@/hooks/use-auth";

import { UserRoutes } from "./UserRoutes";
import { NavbarButtonGroup } from "./NavbarButtonGroup";
import { MainNavbarRoutes } from "./MainNavbarRoutes";

export const Navbar = () => {
  const { isLoadingUser, user } = useAuth();

  if (isLoadingUser)
    return (
      <header className="container flex items-center justify-between px-4 py-4">
        <Logo.Skeleton />
        <MainNavbarRoutes.Skeleton />
        <NavbarButtonGroup.Skeleton />
      </header>
    );

  return (
    <header className="container flex items-center justify-between px-4 py-4">
      <Logo alt="logo" />
      <MainNavbarRoutes />
      {user ? <UserRoutes /> : <NavbarButtonGroup />}
    </header>
  );
};
