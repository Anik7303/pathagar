import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
// import logo from "../logo-flat.png";
import logo from "../sudhijan.png";

function Header() {
  return (
    <header class="header">
      <div className="header__brand">
        <img className="header__logo" src={logo} alt="Sudhijan Pathagar" />
        <span className="header__title">Sudhijan Pathagar</span>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
