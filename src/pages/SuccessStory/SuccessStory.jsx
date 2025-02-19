import SectionTitle from "../../components/SectionTitle";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SuccessStoryCard from "./SuccessStoryCard";
import { useQuery } from "@tanstack/react-query";
import LoadingSppiner from "../../components/LoadingSppiner";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();
  const { data: storys = [], isLoading } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const { data } = await axiosPublic("/success-story");
      return data;
    },
  });
  if (isLoading) return <LoadingSppiner></LoadingSppiner>;

  return (
    <section className="bg-gray-100  ">
      <SectionTitle heading="Success Stories"></SectionTitle>
      <div className="w-11/12 mx-auto">
        {/* swiper card */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="pb-10"
        >
          {storys.map((story, idx) => (
            <SwiperSlide key={idx}>
              <SuccessStoryCard
                key={story._id}
                story={story}
              ></SuccessStoryCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStory;
