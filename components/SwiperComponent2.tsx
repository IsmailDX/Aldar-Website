import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

type Property = {
  property: any;
};

const SwiperComponent2 = ({ property }: Property) => {
  return (
    <div className="w-full h-[100dvh]">
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={property.propertyPhoto}
              alt="img1"
              width={500}
              height={500}
              className="w-full h-full object-cover col-span-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={property.propertyPhoto}
              alt="img1"
              width={500}
              height={500}
              className="w-full h-full object-cover col-span-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={property.propertyPhoto}
              alt="img1"
              width={500}
              height={500}
              className="w-full h-full object-cover col-span-2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={property.propertyPhoto}
              alt="img1"
              width={500}
              height={500}
              className="w-full h-full object-cover col-span-2"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent2;
