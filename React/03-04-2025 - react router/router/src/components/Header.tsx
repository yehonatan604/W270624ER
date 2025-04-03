import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [pathname, setPathname] = useState<string>("/");
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <Navbar fluid rounded className="bg-gray-800 text-white">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <Link
          to="/"
          className={`${pathname === "/" ? "text-blue-500" : "text-white"}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${pathname === "/about" ? "text-blue-500" : "text-white"}`}
        >
          About
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
