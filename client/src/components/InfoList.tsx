import {
  BsEnvelopeFill,
  BsFacebook,
  BsPinMapFill,
  BsTelephoneFill,
} from "react-icons/bs";
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

const FacebookLink = styled.a.attrs(() => ({
  target: "_blank",
  rel: "noopener noreferrer",
}))`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-decoration: none;
  white-space: nowrap;
`;

const InfoList = () => (
  <Container>
    <Item>
      <BsTelephoneFill title="টেলিফোন নম্বর" />
      <Info>
        <Link href="tel:027632221">৭৬৩২২২১</Link>
      </Info>
    </Item>
    <Item>
      <BsEnvelopeFill title="ই-মেইল" />
      <Info>
        <Link href="mailto:sudhigan@gmail.com">sudhigan@gmail.com</Link>
      </Info>
    </Item>
    <Item>
      <BsFacebook title="Facebook" />
      <Info>
        <FacebookLink href="https://www.facebook.com/people/Sudhijan-Pathagar-%E0%A6%B8%E0%A7%81%E0%A6%A7%E0%A7%80%E0%A6%9C%E0%A6%A8-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%B0/100064217640858/">
          সুধীজন পাঠাগার
        </FacebookLink>
      </Info>
    </Item>
    <Item>
      <BsPinMapFill title="ঠিকানা" />
      <Info>২৩১ বঙ্গবন্ধু সড়ক, নারায়ণগঞ্জ</Info>
    </Item>
  </Container>
);

export default InfoList;
