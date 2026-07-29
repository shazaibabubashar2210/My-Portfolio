import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { computerMobile } from "../assets";
import { ComputersCanvas } from "./canvas";
import Typewriter from "./Typewriter";
import useIsMobile from "../hooks/useIsMobile";
import useIsLandscape from "../hooks/useIsLandscape";

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const isMobile = useIsMobile();
  const isLandscape = useIsLandscape();
  const useStaticHero = isMobile || isLandscape;

  return (
    <section
      className={`relative w-full mx-auto overflow-hidden ${
        isLandscape
          ? "min-h-[100dvh] h-auto landscape-hero"
          : "h-[100svh] sm:h-screen"
      }`}
    >
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto ${styles.paddingX} pointer-events-none ${
          isLandscape
            ? "pt-16 pb-4 flex flex-row items-center gap-4"
            : "pt-24 pb-4 sm:absolute sm:inset-x-0 sm:top-[100px] lg:top-[120px] sm:bottom-0 flex flex-row items-start gap-3 sm:gap-5"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col justify-center items-center mt-1 sm:mt-5 shrink-0'
        >
          <div className='w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div
            className={`w-1 violet-gradient ${
              isLandscape ? "h-16" : "h-16 xs:h-24 sm:h-80"
            }`}
          />
        </motion.div>

        <div className={`flex-1 min-w-0 ${isLandscape ? "max-w-xl" : ""}`}>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${styles.heroHeadText} text-white break-words ${
              isLandscape ? "!text-[22px] !leading-[28px] !mt-0" : ""
            }`}
          >
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
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`${styles.heroSubText} mt-2 text-white-100 ${
              isLandscape ? "!text-[13px] !leading-[18px]" : ""
            }`}
          >
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
          </motion.p>
        </div>

        {isLandscape && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='pointer-events-none shrink-0 w-[38%] max-w-[280px]'
          >
            <img
              src={computerMobile}
              alt='Developer computer setup'
              className='w-full h-auto object-contain rounded-xl'
              loading='eager'
            />
          </motion.div>
        )}
      </div>

      {useStaticHero && !isLandscape ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className='relative w-full px-4 pb-20 pt-2'
        >
          <img
            src={computerMobile}
            alt='Developer computer setup'
            className='w-full max-w-md mx-auto h-auto object-contain rounded-2xl'
            loading='eager'
          />
        </motion.div>
      ) : !useStaticHero ? (
        <div className='absolute inset-0 top-[100px] lg:top-[120px] w-full h-[calc(100%-100px)] lg:h-[calc(100%-120px)]'>
          <ComputersCanvas />
        </div>
      ) : null}

      {!isLandscape && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className='absolute bottom-6 sm:bottom-10 z-10 w-full flex justify-center items-center'
        >
          <a href='#about' aria-label='Scroll to about section'>
            <div className='w-[28px] h-[52px] sm:w-[35px] sm:h-[64px] rounded-3xl border-3 sm:border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
