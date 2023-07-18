import styled from "styled-components";

const SlideDotContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export default SlideDotContainer;
