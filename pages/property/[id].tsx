import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import UnitDetailsTemplate from "@/components/unitDetailsTemplate";
import { FaArrowRightLong, FaMapLocationDot } from "react-icons/fa6";
import { FaRegFilePdf } from "react-icons/fa6";
import SwiperComponent2 from "@/components/SwiperComponent2";

type Property = {
  id: number;
  propertyName: string;
  price: number;
  location: string;
  project: string;
  unitType: string;
  bedrooms: number;
  carParking: number;
  unitSize: number;
  propertyPhoto1: string;
  propertyPhoto2: string;
  propertyPhoto3: string;
  propertyPhoto4: string;
  bathrooms: number;
};

interface ApiResponse {
  properties: Property[];
}

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [properties, setProperties] = useState<Property[]>([]);
  const [openSwiper, setOpenSwiper] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get<ApiResponse>(
            `https://aldar-backend.onrender.com/allProperties/${id}/`
          );
          setProperties(response.data.properties);
        } else {
          console.error("Invalid or missing ID");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return (
          <AnimatedContainer
            initialClassName="opacity-0"
            transitionClassName="transition-all duration-1000 delay-500"
            whileInViewClassName="opacity-100"
            className="w-full h-[100dvh] anim"
            once
          >
            <Head>
              <title>Property Details</title>
            </Head>
            <div className="md:pt-[10%] pt-[30%] flex flex-col justify-center items-center -space-y-2 text-gray-500">
              <p className="text-center text-[30px] font-RobotoBold">Oops!</p>
              <p className="text-center text-[30px] font-RobotoBold">
                House not found :/
              </p>
              <Image
                src={"/images/housenotfound.webp"}
                alt="house not found"
                width={500}
                height={500}
              />
            </div>
          </AnimatedContainer>
        );
      }
    };

    fetchData();
  }, [id]);

  const closeFunction = () => {
    setOpenSwiper(false);
  };

  return (
    <>
      {properties.map((property) => (
        <main className="relative" key={property.id}>
          <Head>
            <title>{property.propertyName}</title>
          </Head>
          <SwiperComponent2
            property={property}
            state={openSwiper}
            close={closeFunction}
          />
          <div
            className={`mdplus:pt-36 pt-28 ${openSwiper ? "hidden" : "block"}`}
          >
            <div
              className="bg-gray-300/30 w-fit p-4 hover:bg-gray-300/10 
          transition-all duration-300"
            >
              <Link href="/" className="flex items-center space-x-2">
                <FaArrowLeftLong className="text-red-500" />
                <h1 className="font-RobotoBold">Back to Buying</h1>
              </Link>
            </div>

            <div className="mb-14 mdplus:pt-10 pt-20 w-full relative overflow-hidden">
              <div className="absolute right-0 mdplus:top-[7%] md:top-[4%] top-[15%] bg-black w-[90%] h-[85%] -z-10" />
              <div
                className="mdplus:grid grid-cols-4 gap-2 mt-10 2xl:h-[540px] h-[440px] hidden cursor-pointer"
                onClick={() => setOpenSwiper(true)}
              >
                <Image
                  src={property.propertyPhoto1}
                  alt="img1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover col-span-2"
                />

                <Image
                  src={property.propertyPhoto2}
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover col-span-1"
                />

                <div className="col-span-1 flex flex-col gap-2">
                  <Image
                    src={property.propertyPhoto3}
                    alt="img3"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />

                  <div className="w-full h-full relative flex justify-center">
                    <Image
                      src={property.propertyPhoto4}
                      alt="img4"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="w-full h-full bg-gray-400/50 absolute top-0 left-0" />
                    <button className="absolute top-[40%] border-[1px] border-white px-4 py-3 text-white text-[15px] bg-opacity-50">
                      <p>4 Photos</p>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-full relative flex justify-center mdplus:hidden"
                onClick={() => setOpenSwiper(true)}
              >
                <Image
                  src={property.propertyPhoto4}
                  alt="img5"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="w-full h-full bg-gray-400/50 absolute top-0 left-0" />
                <button className="absolute top-[40%] border-[1px] border-white px-4 py-3 text-white text-[20px] bg-opacity-50">
                  <p>+4 Photos</p>
                </button>
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <div className="w-full 2xl:max-w-6xl lg:max-w-5xl lg:px-0 px-10">
                <div
                  className="bg-gray-100 w-fit text-gray-400 font-RobotoBold lg:text-[12px] text-[10px] py-2 px-1 
          border border-gray-200 uppercase tracking-widest"
                >
                  <span className="text-gray-600 pr-1"> Reserve online</span>{" "}
                  pay 25,000 AED
                </div>
                <div className="grid lg:grid-cols-3 py-3 grid-cols-1">
                  <div className="col-span-2 lg:w-[80%] w-full">
                    <h1 className="lg:text-[37px] text-[24px] font-RobotoBold leading-tight py-3">
                      {property.propertyName}
                    </h1>

                    <div className="flex items-center space-x-3 pb-4">
                      <div className="flex justify-center bg-gray-200 w-[22px] h-[22px] relative">
                        <CiLocationOn size={22} className="absolute -top-2" />
                      </div>
                      <h4 className="font-RobotoBold lg:text-[12px] text-[10px] tracking-wide text-gray-700">
                        {property.location}
                      </h4>
                    </div>

                    <h1 className="lg:text-[30px] text-[24px] font-RobotoBold leading-tight py-3">
                      Unit Details
                    </h1>

                    <div className="flex w-full lg:justify-start md:justify-start justify-between items-center lg:gap-40 gap-10 border-gray-300 border-t-[1px] border-b-[1px] py-8">
                      <div className="flex flex-col gap-7">
                        <UnitDetailsTemplate
                          icon={"/images/secondPage/bed.svg"}
                          title={"UNIT TYPE"}
                          description={property.unitType}
                        />
                        <UnitDetailsTemplate
                          icon={"/images/secondPage/parking.svg"}
                          title={"CAR PARKING"}
                          description={property.carParking}
                        />
                        <UnitDetailsTemplate
                          icon={"/images/secondPage/terance.svg"}
                          title={"TERRACE AREA"}
                          description="0 - 9 sqm"
                        />
                      </div>
                      <div className="flex flex-col gap-7">
                        <UnitDetailsTemplate
                          icon={"/images/secondPage/bed.svg"}
                          title={"UNIT TYPE"}
                          description={property.unitType}
                        />
                        <UnitDetailsTemplate
                          icon={"/images/secondPage/parking.svg"}
                          title={"CAR PARKING"}
                          description={property.carParking}
                        />
                        <UnitDetailsTemplate
                          icon={"/images/secondPage/terance.svg"}
                          title={"TERRACE AREA"}
                          description="0 - 9 sqm"
                        />
                      </div>
                    </div>
                    <div className="py-12 w-full">
                      <h1 className="lg:text-[30px] text-[24px] font-RobotoBold leading-tight">
                        Middle of everywhere
                      </h1>
                      <p className="font-semibold text-gray-700 md:text-[18px] text-[16px] pt-2">
                        In Abu Dhabi but located close to the border of Dubai
                        and minutes from Expo 2020 Dubai, Al ghadeer is a
                        sustainable community that embraces nature and the best
                        of two cities. With 2,100 maisonettes, townhouses and
                        villas already built and occupied, another 14,000 are
                        set to be handed over in April 2021.
                      </p>
                      <div className="flex md:flex-row flex-col items-center md:gap-5 gap-2 lg:w-[90%] w-full pt-5">
                        <button className="border-[1px] border-black h-[50px] px-7 font-RobotoBold text-gray-600 flex items-center justify-center space-x-4 w-full">
                          <p className="text-gray-700">View Brochure</p>
                          <FaRegFilePdf size={20} className="text-red-500" />
                        </button>
                        <button className="border-[1px] border-black h-[50px] px-7 font-RobotoBold text-gray-600 flex items-center justify-center space-x-4 w-full">
                          <p className="text-gray-700">View Unit Plan</p>
                          <FaRegFilePdf size={20} className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 h-fit flex flex-col justify-start border-[1px] border-gray-300 pt-6">
                    <div className="leading-9 border-gray-300 border-b-[1px] w-[75%] mx-auto">
                      <h4 className="font-RobotoBold text-[12px] text-red-500">
                        BUY FROM
                      </h4>
                      <h1 className="font-RobotoBold md:text-[37px] text-[30px]">
                        {property.price.toString().split("-")[0]} AED
                      </h1>
                      <div className="flex items-center gap-2 pb-4">
                        <h2 className="font-RobotoBold text-gray-700">
                          Payment plan
                        </h2>
                        <FaArrowRightLong className="text-red-500" />
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-center py-9 gap-4 px-12">
                      <button className="border-[1px] border-black h-[50px] px-5 font-RobotoBold text-gray-600 flex items-center justify-center space-x-4 w-full">
                        <p>Book Unit Online</p>
                      </button>
                      <button className="border-[1px] border-black h-[50px] px-5 font-RobotoBold text-gray-600 flex items-center justify-center space-x-4 w-full">
                        <p>Request a Callback</p>
                      </button>
                    </div>
                    <div className="flex flex-col items-start bg-[#605c5c] h-full w-full px-12 pt-7">
                      <h4 className="font-RobotoBold text-[12px] text-white">
                        LOCATION
                      </h4>
                      <h2 className="font-semibold text-white text-[16px] pt-1">
                        {property.location}
                      </h2>
                      <div className="py-5">
                        <button className="border-[1px] border-white h-[50px] px-7 font-RobotoBold text-gray-600 flex items-center justify-center space-x-4 w-fit">
                          <FaMapLocationDot size={20} className="text-white" />
                          <p className="text-white">View on Map</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ))}
    </>
  );
}
