import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavLink from "./NavLink";
import PrimaryNavLink from "./PrimaryNavLink";

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
  gap: 16px;
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
          <Dropdown text="প্রতিষ্ঠাকাল">
            <DropdownItem>
              <NavLink to="/history">প্রতিষ্ঠার ইতিহাস</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/founders">প্রতিষ্ঠাতাদের নাম</NavLink>
            </DropdownItem>
          </Dropdown>
          <NavLink to="/purpose">উদ্দেশ্য</NavLink>
          <Dropdown text="পরিচালনা">
            <DropdownItem>
              <NavLink to="/board-of-directors">পরিচালনা পরিষদ</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/executive-council">কার্যকরী পরিষদ</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/student-members">ছাত্র সদস্য</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/general-members">সাধারন সদস্য</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/lifetime-members">জীবন সদস্য</NavLink>
            </DropdownItem>
          </Dropdown>
          <NavLink to="/publications">প্রকাশনা</NavLink>
          <NavLink to="/prizes">পুরুষ্কার</NavLink>
          <NavLink to="/scholarships">বৃত্তি</NavLink>
          <Dropdown text="গ্যালারী">
            <DropdownItem>
              <NavLink to="/gallery/images">ছবি</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/gallery/videos">ভিডিও</NavLink>
            </DropdownItem>
          </Dropdown>
          <PrimaryNavLink to="/books">বই অনুসন্ধান</PrimaryNavLink>
        </NavLinks>
      </Nav>
    </Container>
  );
}

export default Header;
