import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

const slidesData = [
  {
    imageSrc: "https://fnst.axflare.com/community/JPEG/MzKFqSaBqO.jpeg",
    title: "Welcome to Aldar Website",
    subTitle: "Check out our amazing deals!",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem exercitationem quas consequuntur recusandae sed cumque assumenda quos incidunt numquam?",
    location: "Dubai, United Arab Emirates",
  },
  {
    imageSrc:
      "https://media.licdn.com/dms/image/D4D12AQGPy6n4XA3eiQ/article-cover_image-shrink_720_1280/0/1687039862345?e=2147483647&v=beta&t=reyO4Xm8PwuFc3KlLdSGCxgassaMBixCPJhtcWASBaM",
    title: "Welcome to Aldar Website",
    subTitle: "Beautiful Properties For Sale!",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem exercitationem quas consequuntur recusandae sed cumque assumenda quos incidunt numquam?",
    location: "Abu Dhabi, United Arab Emirates",
  },
  {
    imageSrc:
      "https://prohomez.com/wp-content/uploads/2022/09/garden-villa-private-pool.jpg",
    title: "Welcome to Aldar Website",
    subTitle: "Number 1 Real state company",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem exercitationem quas consequuntur recusandae sed cumque assumenda quos incidunt numquam?",
    location: "Dubai, United Arab Emirates",
  },
];

const Home = () => {
  return (
    <Swiper
      className="relative group h-[37rem] swiper-hero"
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      autoplay={{ delay: 5000 }}
      loop
      effect="fade"
      fadeEffect={{ crossFade: true }}
      shortSwipes
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full text-white">
            <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-10" />
            <img
              src={slide.imageSrc}
              alt={`pic${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-[30%] md:left-[11%] left-0 space-y-3 z-10 flex flex-col md:items-start items-center">
              <h3 className="text-[16px] md:text-left text-center">
                {slide.title}
              </h3>
              <h3 className="md:text-[50px] text-[35px] md:w-[50%] w-[70%] font-RobotoBold md:text-white md:text-left text-center">
                {slide.subTitle}
              </h3>
              <p className="text-[14px] lg:w-[30%] md:w-[50%] w-[80%] md:text-left text-center">
                {slide.description}
              </p>
              <p>{slide.location}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="top-[50%] absolute z-50 button-next-slide right-0 duration-500 cursor-pointer">
        <IoIosArrowForward className="text-white md:w-[60px] md:h-[60px] w-[40px] h-[40px]" />
      </div>
      <div className="top-[50%] absolute z-50 button-prev-slide left-0 duration-500 cursor-pointer">
        <IoIosArrowBack className="text-white md:w-[60px] md:h-[60px] w-[40px] h-[40px]" />
      </div>
    </Swiper>
  );
};
export default Home;
