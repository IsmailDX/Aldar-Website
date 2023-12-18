import React from "react";
import Image from "next/image";

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
    <div className="flex items-center md:gap-6 gap-2">
      <Image src={icon} alt="bed" width={48} height={48} />
      <div className="flex flex-col">
        <h4 className="font-RobotoBold md:text-[12px] text-[10px] text-red-500">
          {title}
        </h4>
        <h4 className="font-semibold text-gray-700">{description}</h4>
      </div>
    </div>
  );
};

export default unitDetailsTemplate;
