import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimatedContainer from "@/components/shared/AnimatedContainer";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

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
  propertyPhoto: string;
  bathrooms: number;
};

interface ApiResponse {
  properties: Property[];
}

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [properties, setProperties] = useState<Property[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get<ApiResponse>(
            `http://127.0.0.1:8000/allProperties/${id}/`
          );
          setProperties(response.data.properties);
          setError(false);
        } else {
          console.error("Invalid or missing ID");
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData();
  }, [id]);

  if (properties.length === 0) {
    // Handle the case where the house with the specified 'id' is not found
    return (
      <AnimatedContainer
        initialClassName="opacity-0"
        transitionClassName="transition-all duration-1000"
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

  return (
    <>
      {properties.map((property) => (
        <main className="mdplus:pt-36 pt-28" key={property.id}>
          <Head>
            <title>{property.propertyName}</title>
          </Head>
          <Link href="/">
            <div
              className="flex items-center space-x-2 bg-gray-300/30 w-fit p-4 hover:bg-gray-300/10 
          transition-all duration-300"
            >
              <FaArrowLeftLong className="text-red-500" />
              <h1 className="font-RobotoBold">Back to Buying</h1>
            </div>
          </Link>

          <div className="mb-14 mdplus:pt-10 pt-20 w-full relative overflow-hidden">
            <div className="absolute right-0 mdplus:top-[7%] md:top-[4%] top-[15%] bg-black w-[90%] h-[85%] -z-10" />
            <div className="mdplus:grid grid-cols-4 gap-2 mt-10 2xl:h-[540px] h-[440px] hidden">
              <Image
                src={property.propertyPhoto}
                alt="img1"
                width={500}
                height={500}
                className="w-full h-full object-cover col-span-2"
              />

              <Image
                src={property.propertyPhoto}
                alt="img2"
                width={500}
                height={500}
                className="w-full h-full object-cover col-span-1"
              />

              <div className="col-span-1 flex flex-col gap-2">
                <Image
                  src={property.propertyPhoto}
                  alt="img3"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />

                <div className="w-full h-full relative flex justify-center">
                  <Image
                    src={property.propertyPhoto}
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
            <div className="w-full h-full relative flex justify-center mdplus:hidden">
              <Image
                src={property.propertyPhoto}
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
            <div className="w-full 2xl:max-w-6xl max-w-5xl">
              <div
                className="bg-gray-100 w-fit text-gray-400 font-RobotoBold lg:text-[12px] text-[10px] py-2 px-1 
          border border-gray-200 uppercase tracking-widest"
              >
                <span className="text-gray-600 pr-1"> Reserve online</span> pay
                25,000 AED
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-2">
                  <h1 className="lg:text-[35px] text-[24px] font-RobotoBold leading-tight pb-2">
                    {property.propertyName}
                  </h1>
                  <h3 className="font-RobotoBold text-gray-700 pb-5 lg:text-[17px] text-[14px]">
                    In {property.project}
                  </h3>
                  <div className="flex items-center space-x-3 pb-4">
                    <div className="flex justify-center bg-gray-200 w-[22px] h-[22px] relative">
                      <CiLocationOn size={22} className="absolute -top-2" />
                    </div>
                    <h4 className="font-RobotoBold lg:text-[12px] text-[10px] tracking-wide text-gray-700">
                      {property.location}
                    </h4>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center border-[1px] border-black p-11">
                  <h1>{property.propertyName}</h1>
                  <h1>{property.propertyName}</h1>
                  <h1>{property.propertyName}</h1>
                  <h1>{property.propertyName}</h1>
                  <h1> {property.propertyName}</h1>
                </div>
              </div>
            </div>
          </div>
        </main>
      ))}
    </>
  );
}
