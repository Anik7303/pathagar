import styled from "styled-components";
import FooterLeft from "./FooterLeft";
import InfoList from "./InfoList";
import PageLinks from "./PageLinks";

const Wrapper = styled.footer`
  background-color: #009521;
  color: white;
  padding: 24px 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Row = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Credit = styled.span`
  color: inherit;
  font-family: inherit;
  font-size: 0.8rem;
`;

function Footer() {
  return (
    <Wrapper>
      <Row>
        <FooterLeft />
        <PageLinks />
        <InfoList />
      </Row>
      <Credit>&copy; ২০২৩ সুধীজন পাঠাগার</Credit>
    </Wrapper>
  );
}

export default Footer;
