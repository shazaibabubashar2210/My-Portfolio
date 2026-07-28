import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className='w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#fff8eb] flex items-center justify-center shadow-card'
          title={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-10 h-10 sm:w-14 sm:h-14 object-contain'
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
