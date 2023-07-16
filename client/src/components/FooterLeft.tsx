import styled from "styled-components";
import logo from "../assets/logo.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Image = styled.img`
  display: block;
  width: auto;
  height: 60px;
`;

const Name = styled.span`
  display: inline-block;
  font-family: inherit;
  font-size: 1.1rem;
  color: inherit;
`;

const FooterLeft = () => (
  <Container>
    <Image src={logo} alt="সুধীজন পাঠাগার লোগো" />
    <Name>সুধীজন পাঠাগার</Name>
  </Container>
);

export default FooterLeft;
