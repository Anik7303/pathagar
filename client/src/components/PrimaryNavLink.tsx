import styled from "styled-components";
import NavLink from "./NavLink";

const PrimaryNavLink = styled(NavLink)`
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  padding: 8px 16px;
  border-radius: 10px;
  transition: transform 200ms ease-in;

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
    box-shadow: 2px 2px 10px 4px ${(props) => props.theme.shadow.primary};
  }
`;

export default PrimaryNavLink;
