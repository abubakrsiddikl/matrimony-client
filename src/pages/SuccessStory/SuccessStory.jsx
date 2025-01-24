import SectionTitle from "../../components/SectionTitle";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SuccessStoryCard from "./SuccessStoryCard";
import { useAxiosSecure } from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../components/LoadingSppiner";

const SuccessStory = () => {
  const axiosSecure = useAxiosSecure();
  const { data: storys = [], isLoading } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const { data } = await axiosSecure("/success-story");
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;

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
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          640: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {storys.map((story, idx) => (
          <SwiperSlide key={idx}>
            <SuccessStoryCard key={story._id} story={story}></SuccessStoryCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SuccessStory;
