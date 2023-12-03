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

const Home = () => {
  return (
    <div className="max-h-screen">
      <Swiper
        className="relative group h-screen swiper-hero"
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
        <SwiperSlide>
          <div className="relative w-full h-screen text-white">
            <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-10" />
            <Image
              src="https://fnst.axflare.com/community/JPEG/MzKFqSaBqO.jpeg"
              alt="pic1"
              className="object-cover"
              fill
            />
            <div className="absolute top-[30%] left-[6rem] space-y-3 z-10">
              <h3 className="text-[16px]">Welcome to Aldar Website</h3>
              <h3 className="text-[50px] w-[50%] font-RobotoBold">
                Check out our amazing deals!
              </h3>
              <p className="text-[14px] w-[30%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit autem exercitationem quas consequuntur recusandae sed
                cumque assumenda quos incidunt numquam?
              </p>
              <p>Dubai, United Arab Emirates</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen text-white">
            <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-10" />
            <img
              src="https://media.licdn.com/dms/image/D4D12AQGPy6n4XA3eiQ/article-cover_image-shrink_720_1280/0/1687039862345?e=2147483647&v=beta&t=reyO4Xm8PwuFc3KlLdSGCxgassaMBixCPJhtcWASBaM"
              alt="pic2"
              className="object-cover w-full"
            />
            <div className="absolute top-[30%] left-[6rem] space-y-3 z-10">
              <h3 className="text-[16px]">Welcome to Aldar Website</h3>
              <h3 className="text-[50px] w-[50%] font-RobotoBold">
                Check out our amazing deals!
              </h3>
              <p className="text-[14px] w-[30%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit autem exercitationem quas consequuntur recusandae sed
                cumque assumenda quos incidunt numquam?
              </p>
              <p>Dubai, United Arab Emirates</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-screen text-white">
            <div className="absolute w-full h-full top-0 left-0 bg-black/60 z-10" />
            <img
              src="https://prohomez.com/wp-content/uploads/2022/09/garden-villa-private-pool.jpg"
              alt="pic3"
              className="object-cover w-full"
            />
            <div className="absolute top-[30%] left-[6rem] space-y-3 z-10">
              <h3 className="text-[16px]">Welcome to Aldar Website</h3>
              <h3 className="text-[50px] w-[50%] font-RobotoBold">
                Check out our amazing deals!
              </h3>
              <p className="text-[14px] w-[30%]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit autem exercitationem quas consequuntur recusandae sed
                cumque assumenda quos incidunt numquam?
              </p>
              <p>Dubai, United Arab Emirates</p>
            </div>
          </div>
        </SwiperSlide>

        <div className="top-[50%] absolute z-50 button-next-slide right-0 duration-500 cursor-pointer">
          <IoIosArrowForward size={60} color="white" />
        </div>
        <div className="top-[50%] absolute z-50 button-prev-slide left-0 duration-500 cursor-pointer">
          <IoIosArrowBack size={60} color="white" />
        </div>
      </Swiper>
    </div>
  );
};
export default Home;
