import { BsEnvelopeFill, BsPinMapFill, BsTelephoneFill } from "react-icons/bs";
import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  gap: 4px;
`;

const Info = styled.span`
  text-align: justify;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
`;

const Link = styled.a`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-align: justify;
  text-decoration: none;
  white-space: normal;
`;

const InfoList = () => (
  <Container>
    <Item>
      <BsTelephoneFill />
      <Info>
        <Link href="tel:027632221">৭৬৩২২২১</Link>
      </Info>
    </Item>
    <Item>
      <BsEnvelopeFill />
      <Info>
        <Link href="mailto:sudhigan@gmail.com">sudhigan@gmail.com</Link>
      </Info>
    </Item>
    <Item>
      <BsPinMapFill />
      <Info>২৩১ বঙ্গবন্ধু সড়ক, নারায়ণগঞ্জ</Info>
    </Item>
  </Container>
);

export default InfoList;
