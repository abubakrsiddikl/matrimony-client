import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/LoadingSppiner";
import { Star } from "lucide-react";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const { data } = await axiosPublic("/testimonials");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">User Testimonials</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="bg-white p-6 rounded-2xl shadow-md text-center">
                <img
                  src={testimonial.photoURL}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full border-2 border-indigo-500"
                />
                <h3 className="text-lg font-semibold mt-3">{testimonial.name}</h3>
                <div className="flex justify-center text-yellow-400 my-2">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
