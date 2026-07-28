import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import useIsMobile from "../hooks/useIsMobile";

const Tech = () => {
  const isMobile = useIsMobile();

  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
      {technologies.map((technology) =>
        isMobile ? (
          <div
            key={technology.name}
            className='w-20 h-20 rounded-full bg-[#fff8eb] flex items-center justify-center shadow-card'
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-10 h-10 object-contain'
            />
          </div>
        ) : (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
