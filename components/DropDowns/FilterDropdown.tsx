import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FilterDropdownInterface {
  label: string;
  isOpen: boolean;
  toggleDropdown?: () => void;
  icon?: React.ReactNode;
  onChangeBed?: (selectedOptions: number) => void;
  onChangePro?: (selectedOptions: string) => void;
  bedroomOptions?: number[];
  projectOptions?: string[];
  filterOn?: boolean;
}

const FilterDropdown = ({
  label,
  isOpen,
  toggleDropdown,
  onChangeBed,
  onChangePro,
  bedroomOptions = [],
  projectOptions = [],
  filterOn,
  icon = <IoIosArrowDown className="text-gray-500" />,
}: FilterDropdownInterface) => {
  const [selectedBedroomLabel, setSelectedBedroomLabel] =
    useState<string>(label);
  const [selectedProjectLabel, setSelectedProjectLabel] =
    useState<string>(label);

  useEffect(() => {
    if (filterOn) {
      setSelectedBedroomLabel(label);
      setSelectedProjectLabel(label);
    }
  }, [filterOn, label]);

  const handleBedroomOptionSelect = (option: number) => {
    setSelectedBedroomLabel(`${option}-Bedroom`);
    toggleDropdown && toggleDropdown();
    onChangeBed && onChangeBed(option);
  };

  const handleProjectOptionSelect = (option: string) => {
    setSelectedProjectLabel(`${option}`);
    toggleDropdown && toggleDropdown();
    onChangePro && onChangePro(option);
  };

  const truncateOption = (option: string) => {
    return option.length > 7 ? `${option.slice(0, 10)}..` : option;
  };

  return (
    <div
      className="bg-white border-[1px] border-gray-400/20 py-5 flex lg:justify-center justify-between lg:px-0 md:px-10 px-5 items-center space-x-3 
      cursor-pointer relative lg:w-[160px] w-full select-none z-10"
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
          {label === "Bedrooms"
            ? bedroomOptions.map((option) => (
                <li
                  key={option}
                  className={`pl-5 py-3 bg-white hover:bg-gray-100`}
                  onClick={() => handleBedroomOptionSelect(option)}
                >
                  {option}-Bedroom
                </li>
              ))
            : projectOptions.map((option) => (
                <li
                  key={option}
                  className={`pl-5 py-3 bg-white hover:bg-gray-100`}
                  onClick={() => handleProjectOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;
