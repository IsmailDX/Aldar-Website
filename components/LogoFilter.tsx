import React, { useState } from "react";
import { HiAdjustments } from "react-icons/hi";

const LogoFilter = ({ onSelect }: { onSelect: (unitType: string) => void }) => {
  const [redLines, setRedLines] = useState([false, false, false, false, false]);

  const handleRedLineClick = (index: number, unitType: string) => {
    const newRedLines = redLines.map((_, i) => i === index);
    newRedLines[index] = true;
    setRedLines(newRedLines);
    onSelect(unitType);
  };

  return (
    <div className="flex w-full border-b-[1px] border-gray-600/10 lg:overflow-auto overflow-x-scroll">
      <div
        className="filterlogos relative cursor-pointer"
        onClick={() => handleRedLineClick(0, "")}
      >
        <HiAdjustments size={30} className="text-gray-400" />
        <p className="font-RobotoBold text-gray-500 text-[14px] select-none uppercase">
          All
        </p>
        <div
          className={`${
            redLines[0] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>

      <div
        className="filterlogos relative cursor-pointer"
        onClick={() => handleRedLineClick(1, "Apartments")}
      >
        <img
          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/residential/tab-bar/residential---tab-bar---apartments.svg?iar=0&rev=16b1b34004bb46e386862a535e2d8faa"
          alt="Apartments"
        />
        <p className="font-RobotoBold text-gray-500 text-[14px] select-none uppercase">
          Apartments
        </p>
        <div
          className={`${
            redLines[1] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>
      <div
        className="filterlogos relative cursor-pointer"
        onClick={() => handleRedLineClick(2, "Townhouses")}
      >
        <img
          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/residential/tab-bar/residential---tab-bar---townhouse.svg?iar=0&rev=44f228e4d5684990beaf134f3380a861"
          alt="Townhouses"
        />
        <p className="font-RobotoBold text-gray-500 text-[14px] select-none uppercase">
          Townhouses
        </p>
        <div
          className={`${
            redLines[2] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>

      <div
        className="filterlogos relative cursor-pointer"
        onClick={() => handleRedLineClick(3, "PentHouses")}
      >
        <img
          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/residential/tab-bar/residential---tab-bar---townhouse.svg?iar=0&rev=44f228e4d5684990beaf134f3380a861"
          alt="PentHouses"
        />
        <p className="font-RobotoBold text-gray-500 text-[14px] select-none uppercase">
          Penthouses
        </p>
        <div
          className={`${
            redLines[3] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>
      <div
        className="filterlogos relative cursor-pointer"
        onClick={() => handleRedLineClick(4, "Villa Plot")}
      >
        <img
          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/residential/tab-bar/residential---tab-bar---villa-plot.svg?iar=0&rev=bbd45a14af0c4f4aabaf5b074bd91e5e"
          alt="Villa Plot"
        />
        <p className="font-RobotoBold text-gray-500 text-[14px] select-none uppercase">
          Villa Plot
        </p>
        <div
          className={`${
            redLines[4] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>
    </div>
  );
};

export default LogoFilter;
