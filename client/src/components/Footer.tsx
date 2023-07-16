import styled from "styled-components";
import FooterLeft from "./FooterLeft";
import InfoList from "./InfoList";

const Wrapper = styled.footer`
  background-color: #009521;
  color: white;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

function Footer() {
  return (
    <Wrapper>
      <FooterLeft />
      <InfoList />
    </Wrapper>
  );
}

export default Footer;
