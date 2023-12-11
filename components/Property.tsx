import React, { useEffect, useState } from "react";
import Image from "next/image";
import propertyImg from "../public/images/al-ghadeer-project-gallery---condo.webp";
import { CiLocationOn } from "react-icons/ci";
import { RxDividerVertical } from "react-icons/rx";
import { IoBedOutline } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

type Property = {
  id: number;
  propertyName: string;
  price: number;
  location: string;
  unitType: string;
  bedrooms: number;
  carParking: number;
  unitSize: number;
  propertyPhoto: string;
};

interface ApiResponse {
  properties: Property[];
}

const Property = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    axios
      .get<ApiResponse>("http://127.0.0.1:8000/allProperties/")
      .then((response) => {
        setProperties(response.data.properties);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center py-28 2xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px] mx-auto space-y-10 overflow-hidden">
      <h1 className="text-[35px] font-RobotoBold pb-10 md:pl-0 pl-5">
        Apartments
      </h1>
      {properties.map((property) => (
        <div
          key={property.id}
          className="2xl:w-[70%] w-[90%] lg:pl-16 lg:pr-0 pl-4 pr-4 pt-64 flex border border-gray-200 relative"
        >
          <div className="flex flex-col w-full">
            <div
              className="bg-gray-100 w-fit text-gray-400 font-RobotoBold lg:text-[12px] text-[10px] py-2 px-1 
          border border-gray-200 uppercase tracking-widest"
            >
              <span className="text-gray-600 pr-1"> Reserve online</span> pay
              25,000 AED
            </div>
            <div className="flex flex-col justify-start pt-5">
              <h1 className="lg:text-[28px] text-[24px] font-RobotoBold leading-tight pb-2">
                {property.propertyName}
              </h1>
              <h3 className="font-RobotoBold text-gray-700 pb-5 lg:text-[17px] text-[14px]">
                In Alghadder
              </h3>

              <div className="flex items-center space-x-3 pb-4">
                <div className="flex justify-center bg-gray-200 w-[22px] h-[22px] relative">
                  <CiLocationOn size={22} className="absolute -top-2" />
                </div>
                <h4 className="font-RobotoBold lg:text-[12px] text-[10px] tracking-wide text-gray-700">
                  {property.location}
                </h4>
              </div>

              <div className="flex flex-col pb-6">
                <h4 className="lg:text-[13px] text-[10px] font-RobotoBold text-red-500 tracking-wide">
                  BUY FROM
                </h4>
                <p className="lg:text-[14px] text-gray-600">
                  AED{" "}
                  <span className="text-[18px] font-semibold text-black">
                    {property.price}
                  </span>
                  <span className="text-[20px] font-bold text-gray-600">
                    {" "}
                    -{" "}
                  </span>
                  <span className="text-[18px] font-semibold text-black">
                    {" "}
                    {property.price}
                  </span>
                </p>
              </div>

              <div className="flex pb-7 space-x-3">
                <div className="flex items-center">
                  <div className="flex justify-center bg-gray-200 w-[22px] h-[22px] relative">
                    <IoBedOutline
                      size={22}
                      className="absolute -right-2 text-gray-500"
                    />
                  </div>
                  <p className="pl-5 text-[15px]"> {property.bedrooms}</p>
                </div>
                <RxDividerVertical size={25} className="text-gray-300" />
                <div className="flex items-center">
                  <div className="flex justify-center bg-gray-200 w-[22px] h-[22px] relative">
                    <TbRulerMeasure
                      size={20}
                      className="absolute -right-2 text-gray-500"
                    />
                  </div>
                  <p className="pl-5 text-[15px]"> {property.unitSize} sqm</p>
                </div>
              </div>

              <div className="flex lg:flex-row flex-col justify-start lg:items-center items-start lg:space-x-2 lg:space-y-0 space-y-1 lg:pb-8 pb-4">
                <button className="border-[1px] border-black h-[50px] px-5 font-RobotoBold text-gray-500 flex items-center space-x-4 lg:w-fit w-full">
                  <p>Reserve now</p>{" "}
                  <FaArrowRightLong className="text-red-500" />
                </button>
                <button className="border-[1px] border-black h-[50px] px-5 font-RobotoBold text-gray-500 flex items-center space-x-4 lg:w-fit w-full">
                  <p>Request a Callback</p>
                  <FaArrowRightLong className="text-red-500" />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full absolute 2xl:-right-[80%] lg:-right-[60%] -right-[10%] lg:bottom-0 top-5">
            <div className="w-[100%] h-[220px] relative">
              <Image
                src={property.propertyPhoto}
                alt="property"
                fill
                className="object-cover"
              />

              <button
                className="absolute bottom-5 left-5 border-[1px] border-white py-2 px-4 text-white 
                flex items-center space-x-4 text-[13px] bg-opacity-50 backdrop-blur-[2px]"
              >
                <p>4 Photos</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Property;
