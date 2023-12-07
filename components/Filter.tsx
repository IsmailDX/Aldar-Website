import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import FilterDropdown from "./DropDowns/FilterDropdown";
import { FaArrowsUpDown } from "react-icons/fa6";

const Filter = () => {
  const [openDest, setOpenDest] = useState(false);
  const [openPro, setOpenPro] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const toggleDestDropdown = () => {
    setOpenDest(!openDest);
    setOpenPro(false);
  };

  const toggleProDropdown = () => {
    setOpenPro(!openPro);
    setOpenDest(false);
  };

  return (
    <div className="flex justify-center py-14 ">
      <div className="max-w-[1100px] w-[100%] shadow-lg shadow-black/5 lg:flex hidden flex-col relative px-10 py-7 space-y-9">
        <div className="flex items-center relative justify-between">
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
          ) : (
            <div className="flex items-center">
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
          <div className="flex items-center">
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
          <div className="flex items-center">
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
      </div>
      {/* Mobile */}
      <div className="flex lg:hidden w-full">
        <FilterDropdown
          label="Filters"
          isOpen={openDest}
          toggleDropdown={toggleDestDropdown}
          icon={<LuSettings2 className="text-gray-500" size={25} />}
        />

        <FilterDropdown
          label="Title (A-Z)"
          isOpen={openDest}
          toggleDropdown={toggleDestDropdown}
          icon={<FaArrowsUpDown className="text-gray-500" size={25} />}
        />
      </div>
    </div>
  );
};

export default Filter;
