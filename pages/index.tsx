import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Navigation } from "swiper";

const Home = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <Swiper
        className="relative group"
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination
        scrollbar
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="relative bg-black">
            <img
              src="https://fnst.axflare.com/community/JPEG/MzKFqSaBqO.jpeg"
              alt="pic1"
              className="object-cover w-full"
            />

            <div className="absolute top-[25%] left-[6rem] space-y-3">
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
          <div className="relative">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQGPy6n4XA3eiQ/article-cover_image-shrink_720_1280/0/1687039862345?e=2147483647&v=beta&t=reyO4Xm8PwuFc3KlLdSGCxgassaMBixCPJhtcWASBaM"
              alt="pic2"
              className="object-cover w-full"
            />
            <div className="absolute top-[25%] left-[6rem] space-y-3">
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
          <div className="relative">
            <img
              src="https://prohomez.com/wp-content/uploads/2022/09/garden-villa-private-pool.jpg"
              alt="pic3"
              className="object-cover w-full"
            />
            <div className="absolute top-[25%] left-[6rem] space-y-3">
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

        <div className="top-[40%] absolute z-30 button-next-slide right-0 duration-500  ">
          <IoIosArrowForward size={60} color="white" />
        </div>
        <div className="top-[40%] absolute z-30 button-prev-slide left-0 duration-500 ">
          <IoIosArrowBack size={60} color="white" />
        </div>
      </Swiper>
    </div>
  );
};
export default Home;
