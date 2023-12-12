import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FilterDropdownInterface {
  label: string;
  isOpen: boolean;
  toggleDropdown?: () => void;
  icon?: React.ReactNode;
  onChange?: (selectedOptions: number) => void;
  options?: number[];
  filterOn?: boolean;
}

const FilterDropdown = ({
  label,
  isOpen,
  toggleDropdown,
  onChange,
  options = [],
  filterOn,
  icon = <IoIosArrowDown className="text-gray-500" />,
}: FilterDropdownInterface) => {
  const [selectedLabel, setSelectedLabel] = useState<string>(label);

  const handleOptionSelect = (option: number) => {
    setSelectedLabel(`${option}-Bedroom`);
    toggleDropdown && toggleDropdown();
  };

  return (
    <div
      className="bg-white border-[1px] border-gray-400/20 py-5 flex lg:justify-center justify-between lg:px-0 md:px-10 px-5 items-center space-x-3 
      cursor-pointer relative lg:w-[140px] w-full select-none z-10"
      onClick={toggleDropdown}
    >
      <p className="font-RobotoBold text-gray-500 text-[18px] select-none">
        {filterOn ? label : selectedLabel}
      </p>
      {icon}
      {isOpen && (
        <ul className="absolute top-[68px] -left-3 w-[300px] shadow-lg shadow-black/5 overflow-y-auto h-fit max-h-32 z-20">
          {options.map((option) => (
            <li
              key={option}
              className={`pl-5 py-3 bg-white hover:bg-gray-100`}
              onClick={() => {
                onChange && onChange(option);
                handleOptionSelect(option);
              }}
            >
              {option}-Bedroom
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
