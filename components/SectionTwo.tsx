import React from "react";
import AnimatedContainer from "./shared/AnimatedContainer";

const SectionTwo = () => {
  return (
    <div
      className="2xl:max-w-[60%] lgplus:max-w-[78%] lg:max-w-[88%] md:max-w-[70%] flex lg:flex-row flex-col mx-auto justify-center py-16 lg:space-x-16 md:space-x-16 space-x-0 
    md:px-0 px-10 md:space-y-0 space-y-20 select-none overflow-hidden"
    >
      <div className="md:max-w-[46%] w-full relative">
        <AnimatedContainer
          initialClassName="translate-x-[-500px]"
          transitionClassName="transition-all duration-500"
          whileInViewClassName="translate-x-0"
          className="absolute -z-10"
          once
        >
          <div className="md:w-56 md:h-56 w-36 h-36 bg-gray-300/30" />
        </AnimatedContainer>

        <AnimatedContainer
          initialClassName="translate-y-[-800px] opacity-0"
          transitionClassName="transition-all delay-150  duration-700"
          whileInViewClassName="translate-x-0 opacity-100"
          className=""
          once
        >
          <h1 className="font-RobotoBold md:text-[50px] text-[35px] pt-7 md:pl-16 pl-6 md:leading-[60px] leading-[40px] max-w-xs">
            Residentials for Sale
          </h1>
        </AnimatedContainer>
      </div>

      <AnimatedContainer
        initialClassName="translate-x-[500px] opacity-0"
        transitionClassName="transition-all delay-150  duration-700"
        whileInViewClassName="translate-x-0 opacity-100"
        className=""
        once
      >
        <p className="lg:w-[600px] md:w-[80%] text-[20px] font-semibold text-gray-500 lg:pt-11 pl-0">
          Your future starts here! Browse to find the perfect residential
          property to buy in Abu Dhabi, whether it's an apartment or a
          townhouse; there's something for everyone! Below are some of the best
          properties for sale in Abu Dhabi developed by Aldar. Scroll down to
          find Aldar's collection of villa plots, penthouses, townhouses, and
          apartments for sale in Abu Dhabi, including studio apartments and 1,
          2, and 3-bedroom apartments for sale.
        </p>
      </AnimatedContainer>
    </div>
  );
};

export default SectionTwo;
