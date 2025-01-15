

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../../assets/slider1.jpeg"
import slider2 from "../../assets/slider2.jpeg"
import slider3 from "../../assets/slider3.jpeg"



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="mt-10">
        <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slider1} className="w-full md:h-[400px]" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} className="w-full md:h-[400px]" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} className="w-full h-[194px] md:h-[400px]" alt="" />
      </SwiperSlide>
      
    </Swiper>
    </div>
  );
};

export default Banner;
