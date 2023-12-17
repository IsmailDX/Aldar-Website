import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimatedContainer from "@/components/shared/AnimatedContainer";

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
        <main key={property.id}>
          <Head>
            <title>{property.propertyName}</title>
          </Head>
          <div className="mb-14 pt-36 w-full relative">
            <div className="absolute right-0 top-[23%] bg-black w-[90%] h-[440px] -z-10" />
            <div className="mdplus:grid grid-cols-4 gap-2 pt-10 h-[440px] hidden">
              <div className="col-span-2">
                <Image
                  src={property.propertyPhoto}
                  alt="img1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full col-span-1">
                <Image
                  src={property.propertyPhoto}
                  alt="img2"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

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
        </main>
      ))}
    </>
  );
}
