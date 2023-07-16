import styled from "styled-components";
import logo from "../assets/logo.svg";
import InfoList from "./InfoList";

const Container = styled.footer`
  background-color: #009521;
  color: white;
  padding: 16px;
`;

const FirstColumn = styled.section`
  width: 100%;
  height: 100%;
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

function Footer() {
  return (
    <Container>
      <FirstColumn>
        <Image src={logo} alt="সুধীজন পাঠাগার লোগো" />
        <Name>সুধীজন পাঠাগার</Name>
        <InfoList />
      </FirstColumn>
    </Container>
  );
}

export default Footer;
