import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./SlideSection.css";

function SlideSection() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="slide-swiper"
      >
        <SwiperSlide>
          <img
            className="slide-swiper__img"
            src="https://placehold.co/1200x640"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-swiper__img"
            src="https://placehold.co/1200x640"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide-swiper__img"
            src="https://placehold.co/1200x640"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SlideSection;
