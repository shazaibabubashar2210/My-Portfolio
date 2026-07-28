import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typewriter from "./Typewriter";

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <section className='relative w-full sm:h-screen mx-auto overflow-hidden flex flex-col'>
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} pt-28 pb-6 sm:pt-[120px] sm:pb-0 sm:absolute sm:inset-x-0 sm:top-[120px] sm:bottom-0 flex flex-row items-start gap-3 sm:gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-1 sm:mt-5 shrink-0'>
          <div className='w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-16 xs:h-24 sm:h-80 violet-gradient' />
        </div>

        <div className='flex-1 min-w-0'>
          <h1 className={`${styles.heroHeadText} text-white break-words`}>
            <Typewriter
              speed={70}
              onComplete={() => setShowSubtitle(true)}
              segments={[
                { text: "Hi, I'm ", className: "text-white" },
                {
                  text: "Shazaib AbuBashar",
                  className: "text-[#915EFF]",
                },
              ]}
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {showSubtitle && (
              <Typewriter
                speed={35}
                showCursor={false}
                segments={[
                  {
                    text: "I develop web applications, user interfaces and enterprise solutions",
                    className: "text-white-100",
                  },
                ]}
              />
            )}
          </p>
        </div>
      </div>

      <div className='absolute inset-0 top-[120px] hidden sm:block w-full h-[calc(100vh-120px)] pointer-events-none'>
        <ComputersCanvas />
      </div>

      <div className='relative sm:absolute bottom-0 sm:bottom-10 z-10 w-full flex justify-center items-center py-6 sm:py-0 mt-auto'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
