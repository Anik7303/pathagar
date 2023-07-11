import styled from "styled-components";
import logo from "../assets/logo.svg";

const Wrapper = styled.header`
  grid-area: header;
`;

const Nav = styled.nav`
  display: flex;
`;

const Brand = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin: 8px;
`;

const BrandName = styled.div`
  font-size: inherit;
  font-family: inherit;
  font-weight: bold;
  white-space: nowrap;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;

  & > a {
    display: block;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Nav>
        <Brand>
          <Logo src={logo} alt="সুধীজন পাঠাগার লোগো" />
          <BrandName>সুধীজন পাঠাগার</BrandName>
        </Brand>
        <LinkContainer>
          <a href="#">প্রতিষ্ঠান</a>
          <a href="#">প্রতিষ্ঠাকাল</a>
          <a href="#">উদ্দেশ্য</a>
          <a href="#">পরিচালনা</a>
          <a href="#">প্রকাশনা</a>
          <a href="#">পুরুষ্কার</a>
          <a href="#">বৃত্তি</a>
          <a href="#">গ্যালারী</a>
        </LinkContainer>
      </Nav>
    </Wrapper>
  );
}

export default Header;
