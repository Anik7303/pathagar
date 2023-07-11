import { NavLink as _NavLink } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(_NavLink)`
  color: inherit;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default NavLink;
