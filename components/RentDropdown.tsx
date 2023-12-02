import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface RentDropDownInterface {
  isVisible: boolean;
}

const RentDropDown = ({ isVisible }: RentDropDownInterface) => {
  return (
    <div
      className={`w-[310px] absolute right-[67px] top-28 bg-black pb-2 px-6 pt-7 border-white border-[1px] ${
        isVisible ? "block" : "hidden"
      } hover:block`}
    >
      <h1 className="pb-3"> What are you looking to Rent?</h1>

      <ul className="text-white list-none text-[17px]">
        <a
          href="#"
          className="text-gray-300 font-semibold font-RobotoLight tracking-widest hover:text-white hover:underline"
        >
          <li className="border-b-[1px] border-stone-700 flex items-center justify-between py-2">
            Residential
            <FaArrowRightLong />
          </li>
        </a>
        <a
          href="#"
          className="text-gray-300 font-semibold font-RobotoLight tracking-widest hover:text-white hover:underline border-b-[1px]"
        >
          <li className="flex items-center justify-between py-2 border-b-[1px] border-stone-700">
            Commercial
            <FaArrowRightLong />
          </li>
        </a>
        <a
          href="#"
          className="text-gray-300 font-semibold font-RobotoLight tracking-widest hover:text-white hover:underline "
        >
          <li className="flex items-center justify-between py-2">
            Retail
            <FaArrowRightLong />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default RentDropDown;
