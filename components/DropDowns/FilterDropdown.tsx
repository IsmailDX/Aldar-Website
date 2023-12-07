import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FilterDropdownInterface {
  label: string;
  isOpen: boolean;
  toggleDropdown?: () => void;
  icon?: React.ReactNode;
}

const FilterDropdown = ({
  label,
  isOpen,
  toggleDropdown,
  icon = <IoIosArrowDown className="text-gray-500" />,
}: FilterDropdownInterface) => {
  return (
    <div
      className="bg-white border-[1px] border-gray-400/20 py-5 flex lg:justify-center justify-between lg:px-0 md:px-10 px-5 items-center space-x-3 
      cursor-pointer relative lg:w-[140px] w-full select-none"
      onClick={toggleDropdown}
    >
      <p className="font-RobotoBold text-gray-500 text-[18px] select-none">
        {label}
      </p>
      {icon}
      {isOpen && (
        <ul className="absolute top-[68px] -left-3 w-[300px] shadow-lg shadow-black/5 overflow-y-auto h-fit max-h-32 z-20">
          <li className="pl-5 py-3 bg-white hover:bg-gray-100 ">{label}</li>
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
