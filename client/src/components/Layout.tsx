import { PropsWithChildren } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

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

function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
}

export default Layout;
