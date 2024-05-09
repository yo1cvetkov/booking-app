import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

const navbarRoutes = [
  ["/", "Home"],
  ["/about", "About"],
];

export const Navbar = () => {
  return (
    <nav className="py-4 mx-auto navbar bg-base-100 max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Logo alt="navigation logo" />
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          {navbarRoutes.map(([to, label]) => (
            <li key={to}>
              <Link preload="intent" to={to} activeProps={{ className: "font-bold" }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="font-semibold btn btn-primary">Login</a>
      </div>
    </nav>
  );
};
