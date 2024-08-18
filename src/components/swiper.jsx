import React, { useRef, useState } from "react";
import Baner1 from "../assets/images/banner1.png";
import Baner2 from "../assets/images/banner2.jpg";
import Baner3 from "../assets/images/banner3.png";
import Baner4 from "../assets/images/banner4.jpg";
import Baner5 from "../assets/images/banner5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Navigation styleni import qilish

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

export default function SwiperContainer() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="Slide1">
          <img src={Baner1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Slide2">
          <img src={Baner2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Slide3">
          <img src={Baner3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Slide4">
          <img src={Baner4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="Slide5">
          <img src={Baner5} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
