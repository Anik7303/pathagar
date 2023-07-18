import styled from "styled-components";

interface SlideDotProps {
  $active: boolean;
}

const SlideDot = styled.span<SlideDotProps>`
  cursor: pointer;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.white};

  &::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    inset: 0;
    margin: auto;
    background-color: ${(props) =>
      props.$active ? props.theme.color.primary : "transparent"};
    transition: background 200ms ease-in;
    pointer-events: none;
    user-select: none;
  }
`;

export default SlideDot;
