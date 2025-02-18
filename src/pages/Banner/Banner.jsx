

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import slider1 from "../../assets/slider1.jpeg"
// import slider2 from "../../assets/slider2.jpeg"
// import slider3 from "../../assets/slider3.jpeg"



// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// const Banner = () => {
//   return (
//     <div className="mt-10">
//         <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <img src={slider1} className="w-full md:h-[400px]" alt="" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={slider2} className="w-full md:h-[400px]" alt="" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={slider3} className="w-full h-[194px] md:h-[400px]" alt="" />
//       </SwiperSlide>
      
//     </Swiper>
//     </div>
//   );
// };

// export default Banner;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import slider1 from "../../assets/slider1.jpeg";
// import slider2 from "../../assets/slider2.jpeg";
// import slider3 from "../../assets/slider3.jpeg";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// const Banner = () => {
//   return (
//     <div className="mt-10 relative">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="relative">
//             <img src={slider1} className="w-full md:h-[400px]" alt="Matrimony Banner" />
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//               <h2 className="text-white text-xl md:text-4xl font-bold text-center">
//                 "Where Hearts Meet, <br /> Love Begins."
//               </h2>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="relative">
//             <img src={slider2} className="w-full md:h-[400px]" alt="Matrimony Banner" />
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//               <h2 className="text-white text-xl md:text-4xl font-bold text-center">
//               "Find Your Perfect Match <br /> for a Lifetime of Love."
//               </h2>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="relative">
//             <img src={slider3} className="w-full h-[194px] md:h-[400px]" alt="Matrimony Banner" />
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//               <h2 className="text-white text-xl md:text-4xl font-bold text-center leading-snug">
//               "Serious Matches for <br /> Meaningful Relationships."
//               </h2>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from "../../assets/slider1.jpeg";
import slider2 from "../../assets/slider2.jpeg";
import slider3 from "../../assets/slider3.jpeg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-10 relative">
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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img src={slider1} className="w-full md:h-[400px]" alt="Matrimony Banner" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-2xl md:text-5xl font-bold leading-tight">
                "Where Hearts Meet, <br /> Love Begins."
              </h2>
              <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                Join Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img src={slider2} className="w-full md:h-[400px]" alt="Matrimony Banner" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-2xl md:text-5xl font-bold leading-tight">
                "Find Your Perfect Match <br /> for a Lifetime of Love."
              </h2>
              <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img src={slider3} className="w-full md:h-[400px]" alt="Matrimony Banner" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-2xl md:text-5xl font-bold leading-tight">
                "Serious Matches for <br /> Meaningful Relationships."
              </h2>
              <button className="mt-4 bg-pink-600s hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
                Find Your Match
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

