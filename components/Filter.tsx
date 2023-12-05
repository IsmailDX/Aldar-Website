import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Filter = () => {
  const [openDest, setOpenDest] = useState(false);
  const [openPro, setOpenPro] = useState(false);

  return (
    <div className="flex justify-center py-14">
      <div className="max-w-[1100px] w-[100%] h-20 shadow-lg shadow-black/5 flex items-center relative px-10 py-14 justify-between">
        <div className="flex">
          <div
            className="bg-white border-[1px] border-gray-400/20 py-5 px-5 flex justify-center items-center space-x-3 cursor-pointer relative"
            onClick={() => {
              setOpenDest(!openDest);
              setOpenPro(false);
            }}
          >
            <p className="font-semibold text-gray-500 text-[18px] select-none">
              Destination
            </p>
            <IoIosArrowDown className="text-gray-500" />
            {openDest && (
              <ul className="absolute top-[68px] -left-3 w-[300px] shadow-lg shadow-black/5 overflow-y-auto h-fit max-h-32">
                <li className="pl-5 py-3 bg-white hover:bg-gray-100 ">
                  Destination
                </li>
              </ul>
            )}
          </div>

          <div
            className={`
         bg-white py-5 px-5 flex justify-center items-center border-[1px] border-gray-400/20
         space-x-3 cursor-pointer relative
       `}
            onClick={() => {
              setOpenPro(!openPro);
              setOpenDest(false);
            }}
          >
            <p className="font-semibold text-gray-500 text-[18px] select-none">
              Project
            </p>
            <IoIosArrowDown className="text-gray-500" />
            {openPro && (
              <ul className="absolute top-[68px] -left-3 w-[300px] shadow-lg shadow-black/5 overflow-y-auto h-fit max-h-32">
                <li className="pl-5 py-3 bg-white hover:bg-gray-100">
                  Project
                </li>
              </ul>
            )}
          </div>

          <div
            className={`
         bg-white py-5 px-5 flex justify-center items-center  
         space-x-3 cursor-pointer  
       `}
            onClick={() => {
              setOpenPro(!openPro);
              setOpenDest(false);
            }}
          >
            <p className="font-RobotoBold text-black text-[15px] select-none">
              More Filters
            </p>
            <IoIosArrowDown className="text-red-500" />
          </div>
        </div>
        <div className="flex items-center">
          <div
            className={`
         bg-white py-5 px-5 flex justify-center items-center  
         space-x-3 cursor-pointer  
       `}
            onClick={() => {
              setOpenPro(!openPro);
              setOpenDest(false);
            }}
          >
            <p className="font-semibold text-black text-[15px] select-none">
              Clear Filters
            </p>
          </div>
          <div className="w-fit bg-gray-900 flex justify-center items-center">
            <p className="p-5 font-RobotoBold text-white ">Show (0) Results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
