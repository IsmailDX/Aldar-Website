import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";

type Property = {
  property: any;
  state: boolean;
  close: () => void;
};

const SwiperComponent2 = ({ property, state, close }: Property) => {
  return (
    <div
      className={`left-0 right-0 w-full h-[100dvh] bg-black z-50 py-10 overflow-hidden flex-col justify-center ${
        state ? "absolute" : "hidden"
      }`}
    >
      <div className="w-fit h-fit cursor-pointer pl-5" onClick={close}>
        <Link href={`/property/${property.id}`} passHref>
          <div className="flex items-center">
            <IoIosClose size={35} className="text-white" />
            <h1 className="font-RobotoBold text-white">Close</h1>
          </div>
        </Link>
      </div>

      <div className="w-full h-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          loop
          pagination={{
            type: "fraction",
          }}
          modules={[Navigation, EffectCoverflow, Pagination]}
          className="mySwiper2"
          breakpoints={{
            // when window width is >= 640px
            1000: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide className="swiper-slide2">
            <img
              src={property.propertyPhoto1}
              alt="img1"
              className="w-full h-full object-cover col-span-2"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img
              src={property.propertyPhoto2}
              alt="img1"
              className="w-full h-full object-cover col-span-2"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img
              src={property.propertyPhoto3}
              alt="img1"
              className="w-full h-full object-cover col-span-2"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide2">
            <img
              src={property.propertyPhoto4}
              alt="img1"
              className="w-full h-full object-cover col-span-2"
            />
          </SwiperSlide>
          <div className="top-[50%] absolute z-50 button-next-slide right-0 duration-500 cursor-pointer">
            <IoIosArrowForward className="text-white md:w-[60px] md:h-[60px] w-[40px] h-[40px]" />
          </div>
          <div className="top-[50%] absolute z-50 button-prev-slide left-0 duration-500 cursor-pointer">
            <IoIosArrowBack className="text-white md:w-[60px] md:h-[60px] w-[40px] h-[40px]" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent2;
