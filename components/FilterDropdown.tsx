import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FilterDropdownInterface {
  label: string;
  isOpen: boolean;
  toggleDropdown: () => void;
}

const FilterDropdown = ({
  label,
  isOpen,
  toggleDropdown,
}: FilterDropdownInterface) => {
  return (
    <div
      className="bg-white border-[1px] border-gray-400/20 py-5 flex justify-center items-center space-x-3 
      cursor-pointer relative w-[140px] select-none"
      onClick={toggleDropdown}
    >
      <p className="font-semibold text-gray-500 text-[18px] select-none">
        {label}
      </p>
      <IoIosArrowDown className="text-gray-500" />
      {isOpen && (
        <ul className="absolute top-[68px] -left-3 w-[300px] shadow-lg shadow-black/5 overflow-y-auto h-fit max-h-32 z-20">
          <li className="pl-5 py-3 bg-white hover:bg-gray-100 ">{label}</li>
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
