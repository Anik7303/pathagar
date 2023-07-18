import styled, { css } from "styled-components";

interface SlideProps {
  $active: boolean;
}

const Slide = styled.div<SlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.$active
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
  transition: all 300ms ease-in;
`;

export default Slide;
