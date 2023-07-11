import { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 0;
`;

const Content = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  grid-area: footer;
  padding: 8px;
  font-size: 0.8rem;
`;

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer>সুধীজন পাঠাগার &copy; ২০২৩</Footer>
    </Container>
  );
}

export default Layout;
