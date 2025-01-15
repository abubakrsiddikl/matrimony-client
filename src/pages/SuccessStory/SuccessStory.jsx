import SectionTitle from "../../components/SectionTitle";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SuccessStoryCard from "./SuccessStoryCard";

const SuccessStory = () => {
  return (
    <section className="bg-gray-50 py-10">
      <SectionTitle heading="Success Stories"></SectionTitle>
      {/* swiper card */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SuccessStoryCard></SuccessStoryCard>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SuccessStory;
