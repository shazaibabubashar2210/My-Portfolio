import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import useIsMobile from "../hooks/useIsMobile";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  disableTilt,
}) => {
  const card = (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.7)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.15 }}
      whileHover={disableTilt ? { y: -6 } : undefined}
      className='bg-tertiary p-4 sm:p-5 rounded-2xl w-full h-full'
    >
      <div className='relative w-full h-[180px] xs:h-[200px] sm:h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
          loading='lazy'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </motion.div>
        </div>
      </div>

      <div className='mt-4 sm:mt-5'>
        <h3 className='text-white font-bold text-[18px] sm:text-[22px] lg:text-[24px]'>
          {name}
        </h3>
        <p className='mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed'>
          {description}
        </p>
      </div>

      <div className='mt-3 sm:mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[12px] sm:text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );

  if (disableTilt) return card;

  return (
    <Tilt options={{ max: 35, scale: 1, speed: 450 }} className='w-full h-full'>
      {card}
    </Tilt>
  );
};

const Works = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]'
        >
          Following projects showcase my skills through real-world examples,
          including enterprise portals, full-stack applications, and responsive
          web solutions built with ASP.NET, JavaScript, and SQL databases.
        </motion.p>
      </div>

      <div className='mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 landscape:grid-cols-3 gap-6 sm:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            disableTilt={isMobile}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
