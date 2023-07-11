import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.li`
  padding: 8px 16px;
`;

const DropdownItem = ({ children }: PropsWithChildren) => (
  <Container>{children}</Container>
);

export default DropdownItem;
