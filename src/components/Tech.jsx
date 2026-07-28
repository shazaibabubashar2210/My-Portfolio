import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import useIsMobile from "../hooks/useIsMobile";

const TechIcon = ({ technology, isMobile }) => {
  if (isMobile) {
    return (
      <div className='w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#fff8eb] flex items-center justify-center shadow-card'>
        <img
          src={technology.icon}
          alt={technology.name}
          className='w-10 h-10 sm:w-14 sm:h-14 object-contain'
        />
      </div>
    );
  }

  return (
    <div className='w-28 h-28'>
      <BallCanvas icon={technology.icon} />
    </div>
  );
};

const Tech = () => {
  const isMobile = useIsMobile();

  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
      {technologies.map((technology) => (
        <TechIcon
          key={technology.name}
          technology={technology}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
