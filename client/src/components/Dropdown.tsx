import { PropsWithChildren } from "react";
import { MdExpandMore } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: block;
  white-space: nowrap;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Content = styled.ul`
  list-style: none;
  position: absolute;
  border: 2px solid #eee;
  box-shadow: 0 0 8px #ccc;
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 200ms ease-in;

  ${Container}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

type Props = {
  text: string;
};

function Dropdown({ children, text }: PropsWithChildren<Props>) {
  return (
    <Container>
      <Text>
        {text}
        <MdExpandMore />
      </Text>
      <Content>{children}</Content>
    </Container>
  );
}

export default Dropdown;
