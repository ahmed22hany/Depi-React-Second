import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="navbar background-switcher">
      <div className="container">
        <Link to={"/"} className="navbar-brand text-switcher fw-semibold">
          Where in the world?
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
