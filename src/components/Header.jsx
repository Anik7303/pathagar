import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
// import logo from "../logo-flat.png";
// import logo from "../sudhijan.png";
import BrandLogo from "./BrandLogo";
import NavLink from "./NavLink";

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      {/* <div className="header__brand">
        <img className="header__logo" src={logo} alt="Sudhijan Pathagar" />
        <span className="header__title">Sudhijan Pathagar</span>
      </div> */}
      <BrandLogo />
      <nav className="nav">
        <NavLink path="/" currentPath={pathname}>
          Home
        </NavLink>
        <NavLink path="/about" currentPath={pathname}>
          About
        </NavLink>
        <NavLink path="/history" currentPath={pathname}>
          History
        </NavLink>
        <NavLink path="/gallery" currentPath={pathname}>
          Gallery
        </NavLink>
        <NavLink path="/contact" currentPath={pathname}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
