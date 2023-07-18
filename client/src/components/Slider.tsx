import { useState } from "react";
import styled from "styled-components";
import slides from "../data/slides";
import Image from "./Image";
import Slide from "./Slide";
import SlideDot from "./SlideDot";
import SlideDotContainer from "./SlideDotContainer";
import SliderButton from "./SliderButton";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 200px);
  overflow: hidden;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    if (slideIndex > 0) setSlideIndex((s) => s - 1);
    else setSlideIndex(slides.length - 1);
  };

  const nextSlide = () => {
    if (slideIndex < slides.length - 1) setSlideIndex((s) => s + 1);
    else setSlideIndex(0);
  };

  const setSlide = (index: number) => {
    if (index < slides.length) {
      setSlideIndex(index);
    }
  };

  return (
    <Wrapper>
      {slides.map((item, index) => (
        <Slide key={item.id} $active={slideIndex === index}>
          <Image src={item.image} alt={item.description} />
        </Slide>
      ))}
      <SlideDotContainer>
        {slides.map((item, index) => (
          <SlideDot
            key={item.id}
            $active={slideIndex === index}
            onClick={() => setSlide(index)}
          />
        ))}
      </SlideDotContainer>
      <SliderButton direction="left" onClick={prevSlide} />
      <SliderButton direction="right" onClick={nextSlide} />
    </Wrapper>
  );
}

export default Slider;
