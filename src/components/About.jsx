import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='w-full'
  >
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='w-full green-pink-gradient p-[1px] rounded-[16px] sm:rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[16px] sm:rounded-[20px] py-4 px-3 sm:py-5 sm:px-8 lg:px-12 min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex justify-evenly items-center flex-col gap-3 sm:gap-4'>
        <img
          src={icon}
          alt={title}
          className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain'
        />

        <h3 className='text-white text-[13px] sm:text-[16px] lg:text-[20px] font-bold text-center leading-snug px-1'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a motivated Associate Software Engineer with experience building and
        maintaining applications across web and enterprise platforms. Skilled in
        ASP.NET Core, JavaScript, Angular, and SQL databases, I focus on writing
        clean, scalable code and delivering responsive, user-friendly solutions.
        I thrive in Agile teams and enjoy turning real-world problems into
        reliable software.
      </motion.p>

      <div className='mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 justify-items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
