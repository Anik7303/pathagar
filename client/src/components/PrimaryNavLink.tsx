import styled from "styled-components";
import NavLink from "./NavLink";

const PrimaryNavLink = styled(NavLink)`
  background: #009521;
  color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 10px;
  transition: transform 200ms ease-in;

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
    box-shadow: 2px 2px 10px 4px rgba(0, 149, 33, 0.3);
  }
`;

export default PrimaryNavLink;
