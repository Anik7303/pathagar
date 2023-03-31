import React from "react";
import { Link } from "react-router-dom";

import "./NavLink.css";

function NavLink({ children, currentPath, path }) {
  let className = path === currentPath ? "nav__link active" : "nav__link";
  return (
    <Link className={className} to={path}>
      {children}
    </Link>
  );
}

export default NavLink;
