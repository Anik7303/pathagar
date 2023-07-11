import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "header" "content" "footer";
  gap: 0;
`;

function Layout() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default Layout;
