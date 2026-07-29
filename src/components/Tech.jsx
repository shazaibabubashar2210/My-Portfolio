import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import useIsMobile from "../hooks/useIsMobile";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  const isMobile = useIsMobile();

  return (
    <div className='flex flex-row flex-wrap justify-center gap-5 sm:gap-8 md:gap-10'>
      {technologies.map((technology, index) =>
        isMobile ? (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.08, 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.96 }}
            className='w-[72px] h-[72px] xs:w-20 xs:h-20 rounded-full bg-[#fff8eb] flex items-center justify-center shadow-card'
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-9 h-9 xs:w-10 xs:h-10 object-contain'
              loading='lazy'
            />
          </motion.div>
        ) : (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.08, 0.55)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.2 }}
            className='w-28 h-28'
            title={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        )
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
