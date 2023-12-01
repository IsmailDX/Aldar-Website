// Dropdown component
import React from "react";

interface DropdownProps {
  options: { optionText: string; optionLink: string }[];
  isVisible: boolean;
  onDropdownLeave: () => void;
}

const Dropdown = ({ options, isVisible, onDropdownLeave }: DropdownProps) => {
  return (
    <div
      className={`w-screen bg-black pb-10 pl-44 pt-11 ${
        isVisible ? "block" : "hidden"
      }`}
      onMouseLeave={onDropdownLeave}
    >
      <ul className="w-fit pr-14  text-[17px] font-semibold font-RobotoLight text-gray-300 border-r-[1px] border-stone-700 space-y-2">
        {options.map((option) => (
          <li
            key={option.optionText}
            className="hover:text-white hover:underline"
          >
            <a href="/">{option.optionText}</a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
