import React from "react";
import Image from "next/image";
import AnimatedContainer from "./shared/AnimatedContainer";

type UnitDetailsTemplateProps = {
  icon: string;
  title: string;
  description: string | number;
};

const unitDetailsTemplate = ({
  icon,
  title,
  description,
}: UnitDetailsTemplateProps) => {
  return (
    <AnimatedContainer
      initialClassName="opacity-0"
      transitionClassName="transition-all duration-700"
      whileInViewClassName="opacity-100"
      className=""
      once
    >
      <div className="flex items-center md:gap-6 gap-2">
        <Image src={icon} alt="bed" width={48} height={48} />
        <div className="flex flex-col">
          <h4 className="font-RobotoBold md:text-[12px] text-[10px] text-red-500">
            {title}
          </h4>
          <h4 className="font-semibold text-gray-700">{description}</h4>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default unitDetailsTemplate;
