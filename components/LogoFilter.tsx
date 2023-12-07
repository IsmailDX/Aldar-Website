import React, { useState } from "react";

const LogoFilter = () => {
  const [redLines, setRedLines] = useState([false, false, false, false]);

  const handleRedLineClick = (index: number) => {
    const newRedLines = Array(redLines.length).fill(false);
    newRedLines[index] = true;
    setRedLines(newRedLines);
  };

  return (
    <div className="flex w-full border-b-[1px] border-gray-600/10 lg:overflow-auto overflow-x-scroll">
      <div
        className="filterlogos relative"
        onClick={() => handleRedLineClick(0)}
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
            redLines[0] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>
      <div
        className="filterlogos relative"
        onClick={() => handleRedLineClick(1)}
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
            redLines[1] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>

      <div
        className="filterlogos relative"
        onClick={() => handleRedLineClick(2)}
      >
        <img
          src="https://cdn.aldar.com/-/media/project/aldar-tenant/aldar2/images/final-designed-icons/residential/tab-bar/residential---tab-bar---townhouse.svg?iar=0&rev=44f228e4d5684990beaf134f3380a861"
          alt="Townhouses"
        />
        <p className="font-RobotoBold text-gray-500 text-[14px] select-none uppercase">
          Penthouses
        </p>
        <div
          className={`${
            redLines[2] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>
      <div
        className="filterlogos relative"
        onClick={() => handleRedLineClick(3)}
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
            redLines[3] ? "w-full" : "hidden"
          } h-1 bg-red-500 absolute left-0 bottom-0`}
        />
      </div>
    </div>
  );
};

export default LogoFilter;
