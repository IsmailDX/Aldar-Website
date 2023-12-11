import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import FilterDropdown from "./DropDowns/FilterDropdown";
import { FaArrowsUpDown } from "react-icons/fa6";
import LogoFilter from "./LogoFilter";
import { IoClose } from "react-icons/io5";
import Properties from "./Property";
import axios from "axios";

type Property = {
  id: number;
  propertyName: string;
  price: number;
  location: string;
  locationDetails: string;
  unitType: string;
  bedrooms: number;
  carParking: number;
  unitSize: number;
  propertyPhoto: string;
};

interface ApiResponse {
  properties: Property[];
}

const Filter = () => {
  const [openDest, setOpenDest] = useState(false);
  const [openPro, setOpenPro] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [openFilterPage, setOpenFilterPage] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);

  const toggleDestDropdown = () => {
    setOpenDest(!openDest);
    setOpenPro(false);
  };

  const toggleProDropdown = () => {
    setOpenPro(!openPro);
    setOpenDest(false);
  };

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
    <div className={`${openFilterPage ? "h-[100dvh] relative" : "h-full"}`}>
      <div className="flex justify-center">
        <div className="max-w-[1100px] w-[100%] lg:shadow-lg shadow-black/5 flex flex-col relative lg:pl-10 px-0 py-7 space-y-9">
          <LogoFilter />
          <div className="lg:flex hidden items-center relative justify-between">
            <div className="flex">
              <FilterDropdown
                label="Destination"
                isOpen={openDest}
                toggleDropdown={toggleDestDropdown}
              />

              <FilterDropdown
                label="Project"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />

              <div
                className={`bg-white py-5 px-5 flex justify-center items-center space-x-3 cursor-pointer`}
                onClick={() => {
                  setOpenFilter(!openFilter);
                  setOpenPro(false);
                  setOpenDest(false);
                }}
              >
                {!openFilter ? (
                  <>
                    <p className="font-RobotoBold text-black text-[15px] select-none">
                      More Filters
                    </p>

                    <IoIosArrowDown className="text-red-500" />
                  </>
                ) : null}
              </div>
            </div>

            {openFilter ? (
              <div className="pr-10">
                <div
                  className={`bg-gray-300/25 py-3 px-5 flex justify-center items-center space-x-3 cursor-pointer`}
                  onClick={() => {
                    setOpenFilter(!openFilter);
                    setOpenPro(false);
                    setOpenDest(false);
                  }}
                >
                  <p className="font-RobotoBold text-black text-[15px] select-none">
                    Less Filters
                  </p>
                  <IoIosArrowUp className="text-red-500" />
                </div>
              </div>
            ) : (
              <div className="flex items-center pr-10">
                <div
                  className={`
         bg-white py-5 px-5 flex justify-center items-center space-x-3 cursor-pointer`}
                  onClick={() => {}}
                >
                  <p className="font-semibold text-black text-[15px] select-none">
                    Clear Filters
                  </p>
                </div>
                <div className="w-fit bg-gray-900 flex justify-center items-center">
                  <p className="p-5 font-RobotoBold text-white ">
                    Show (0) Results
                  </p>
                </div>
              </div>
            )}
          </div>

          {openFilter && (
            <div className="lg:flex hidden items-center">
              <FilterDropdown
                label="Bedrooms"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />

              <FilterDropdown
                label="Bathrooms"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />

              <FilterDropdown
                label="Status"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />

              <FilterDropdown
                label="Budget"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />

              <FilterDropdown
                label="Size"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />

              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 ml-7"
              />
              <label
                htmlFor="default-checkbox"
                className="pl-2 text-md font-medium text-gray-900 font-RobotoBold"
              >
                Offers
              </label>
            </div>
          )}

          {openFilter && (
            <div className="lg:flex hidden items-center">
              <div
                className={`
       bg-white py-5 flex justify-center items-center cursor-pointer`}
                onClick={() => {}}
              >
                <p className="font-semibold text-black text-[15px] select-none pr-5">
                  Clear Filters
                </p>
              </div>

              <div className="w-fit bg-gray-900 flex justify-center items-center">
                <p className="p-5 font-RobotoBold text-white ">
                  Show (0) Results
                </p>
              </div>
            </div>
          )}

          {/* Mobile */}
          <div className="flex lg:hidden w-full">
            <div
              className="w-full"
              onClick={() => setOpenFilterPage(!openFilterPage)}
            >
              <FilterDropdown
                label="Filters"
                isOpen={openDest}
                icon={<LuSettings2 className="text-gray-500" size={25} />}
              />
            </div>

            <FilterDropdown
              label="Title (A-Z)"
              isOpen={openDest}
              toggleDropdown={toggleDestDropdown}
              icon={<FaArrowsUpDown className="text-gray-500" size={25} />}
            />
          </div>
        </div>
      </div>
      {openFilterPage && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-auto flex flex-col">
          <button
            className="fixed left-[20px] top-[54px] flex items-center font-RobotoBold text-gray-700"
            onClick={() => setOpenFilterPage(!openFilterPage)}
          >
            <IoClose size={25} /> Close
          </button>
          <div className="flex flex-col w-full overflow-y-scroll -z-10">
            <div
              className="flex w-full justify-center fixed top-0 pt-14 pb-4 border-b-[1px] border-gray-200
             bg-white z-10"
            >
              <p className="font-RobotoBold">Filters</p>
            </div>

            <div className="space-y-7 pt-[125px]">
              <FilterDropdown
                label="Destination"
                isOpen={openDest}
                toggleDropdown={toggleDestDropdown}
              />

              <FilterDropdown
                label="Project"
                isOpen={openPro}
                toggleDropdown={toggleProDropdown}
              />
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex flex-col justify-center py-28 2xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px] mx-auto space-y-10 overflow-hidden">
        <h1 className="text-[35px] font-RobotoBold pb-10 md:pl-0 pl-5">
          Apartments
        </h1>
        {properties.map((property) => (
          <Properties key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
