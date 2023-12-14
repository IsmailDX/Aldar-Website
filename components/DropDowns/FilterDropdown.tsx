import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FilterDropdownInterface {
  label: string;
  isOpen: boolean;
  toggleDropdown?: () => void;
  onChange?: (selectedOption: string | number, isBedroom?: boolean) => void;
  options?: (string | number)[];
  filterOn?: boolean;
  icon?: React.ReactNode;
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
  const [selectedBedroomLabel, setSelectedBedroomLabel] =
    useState<string>(label);
  const [selectedProjectLabel, setSelectedProjectLabel] =
    useState<string>(label);

  const handleOptionSelect = (option: string | number, isBedroom?: boolean) => {
    toggleDropdown && toggleDropdown();
    onChange && onChange(option, isBedroom);

    // Update the selected labels based on the current label
    if (label === "Bedrooms") {
      setSelectedBedroomLabel(
        option && option.toString().length > 12
          ? truncateOption(option.toString())
          : option.toString()
      );
    } else {
      setSelectedProjectLabel(
        option && option.toString().length > 12
          ? truncateOption(option.toString())
          : option.toString()
      );
    }
  };

  const truncateOption = (option: string) => {
    return option.length > 7 ? `${option.slice(0, 10)}..` : option;
  };

  useEffect(() => {
    if (filterOn) {
      // Update the selected labels based on the current label
      if (label === "Bedrooms") {
        setSelectedBedroomLabel(label);
        setSelectedProjectLabel(selectedProjectLabel);
      } else {
        setSelectedProjectLabel(label);
        setSelectedBedroomLabel(selectedBedroomLabel);
      }
    }
  }, [filterOn, label]);

  return (
    <div
      className="bg-white border-[1px] border-gray-400/20 py-5 flex lg:justify-center justify-between lg:px-0 md:px-10 px-5 items-center space-x-3 
      cursor-pointer relative lg:w-[160px] w-full select-none"
      onClick={toggleDropdown}
    >
      <p className="font-RobotoBold text-gray-500 text-[18px] select-none">
        {filterOn
          ? label
          : label === "Bedrooms"
          ? selectedBedroomLabel && selectedBedroomLabel.length > 12
            ? truncateOption(selectedBedroomLabel)
            : selectedBedroomLabel || label
          : selectedProjectLabel && selectedProjectLabel.length > 12
          ? truncateOption(selectedProjectLabel)
          : selectedProjectLabel || label}
      </p>

      {icon}
      {isOpen && (
        <ul className="absolute top-[68px] -left-3 w-[300px] shadow-lg shadow-black/5 overflow-y-auto h-fit max-h-32 z-20">
          {options.map((option) => (
            <li
              key={option}
              className={`pl-5 py-3 bg-white hover:bg-gray-100`}
              onClick={() => handleOptionSelect(option, label === "Bedrooms")}
            >
              {label === "Bedrooms" ? `${option}-Bedroom` : option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
