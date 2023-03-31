import React from "react";
import { Link } from "react-router-dom";

import "./BrandLogo.css";
import logo from "../sudhijan.png";

function BrandLogo() {
  return (
    <Link className="header__brand" to="/">
      <img className="header__logo" src={logo} alt="Sudhijan Pathagar" />
      <span className="header__title">Sudhijan Pathagar</span>
    </Link>
  );
}

export default BrandLogo;
