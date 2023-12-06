import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface BuyDropdownInterface {
  isVisible: boolean;
}

const BuyDropdown = ({ isVisible }: BuyDropdownInterface) => {
  return (
    <div
      className={`w-[310px] absolute left-0 top-full bg-black pb-2 px-6 pt-7 border-white border-[1px] ${
        isVisible ? "block" : "hidden"
      } hover:block`}
    >
      <h1 className="pb-3"> What are you looking to Buy?</h1>

      <ul
        className={`text-white list-none text-[17px] ${
          isVisible && "hover:block"
        }`}
      >
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
          className="text-gray-300 font-semibold font-RobotoLight tracking-widest hover:text-white hover:underline "
        >
          <li className="flex items-center justify-between py-2">
            Building Plots
            <FaArrowRightLong />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default BuyDropdown;
