import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import styled, { css } from "styled-components";

interface ButtonProps {
  $direction: "left" | "right";
}
const Button = styled.button<ButtonProps>`
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  outline-color: transparent;
  position: absolute;
  top: 50%;
  ${(props) =>
    props.$direction === "left"
      ? css`
          left: 10px;
        `
      : css`
          right: 10px;
        `};
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  ${(props) => css`
    color: transparent;
    color: ${props.theme.color.white};
    background-color: ${props.theme.color.primary};
    border: 2px solid ${props.theme.color.primary};
  `}
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in;

  &:hover {
    opacity: 1;
    outline-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.white};
  }
`;

const LeftArrow = styled(HiArrowLeft)`
  width: 20px;
  height: 20px;
`;

const RightArrow = styled(HiArrowRight)`
  width: 20px;
  height: 20px;
`;

interface Props {
  direction: "left" | "right";
  onClick: () => void;
}

function SliderButton({ direction, onClick }: Props) {
  return (
    <Button $direction={direction} onClick={onClick}>
      {direction === "left" ? <LeftArrow /> : <RightArrow />}
    </Button>
  );
}

export default SliderButton;
