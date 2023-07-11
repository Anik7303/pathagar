import { Link, NavLink as _NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Container = styled.header`
  padding: 8px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: inherit;
  color: inherit;
`;

const Logo = styled.img`
  height: 40px;
`;

const BrandName = styled.div`
  margin-left: 8px;
  font-size: inherit;
  font-family: inherit;
  font-weight: bold;
  white-space: nowrap;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

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

function Header() {
  return (
    <Container>
      <Nav>
        <BrandLink to="/">
          <Logo src={logo} alt="সুধীজন পাঠাগার লোগো" />
          <BrandName>সুধীজন পাঠাগার</BrandName>
        </BrandLink>
        <NavLinks>
          <NavLink to="/">প্রতিষ্ঠান</NavLink>
          <NavLink to="/">প্রতিষ্ঠাকাল</NavLink>
          <NavLink to="/purpose">উদ্দেশ্য</NavLink>
          <NavLink to="/">পরিচালনা</NavLink>
          <NavLink to="/publications">প্রকাশনা</NavLink>
          <NavLink to="/prizes">পুরুষ্কার</NavLink>
          <NavLink to="/">বৃত্তি</NavLink>
          <NavLink to="/">গ্যালারী</NavLink>
          <NavLink to="/">বই অনুসন্ধান</NavLink>
        </NavLinks>
      </Nav>
    </Container>
  );
}

export default Header;
