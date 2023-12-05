import React from "react";

const SectionTwo = () => {
  return (
    <div
      className="lg:max-w-[78%] md:max-w-[70%] flex lg:flex-row flex-col mx-auto justify-center py-16 lg:space-x-16 md:space-x-16 space-x-6 
    md:px-0 px-10 md:space-y-0 space-y-14"
    >
      <div className="max-w-[46%] relative">
        <div className="md:w-56 md:h-56 w-36 h-36 bg-gray-300/30 absolute -z-10"></div>
        <h1 className="font-RobotoBold md:text-[50px] text-[35px] pt-7 md:pl-16 pl-6 md:leading-[60px] leading-[40px] max-w-xs">
          Residentials for Sale
        </h1>
      </div>
      <p className="lg:w-[600px] md:w-[80%] text-[20px] font-semibold text-gray-500 lg:pt-11 pl-0">
        Your future starts here! Browse to find the perfect residential property
        to buy in Abu Dhabi, whether it's an apartment or a townhouse; there's
        something for everyone! Below are some of the best properties for sale
        in Abu Dhabi developed by Aldar. Scroll down to find Aldar's collection
        of villa plots, penthouses, townhouses, and apartments for sale in Abu
        Dhabi, including studio apartments and 1, 2, and 3-bedroom apartments
        for sale.
      </p>
    </div>
  );
};

export default SectionTwo;
