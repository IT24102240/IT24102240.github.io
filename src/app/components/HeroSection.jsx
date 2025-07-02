"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="py-12 px-4 md:py-20 lg:py-28 md:px-6">
      {/* Mobile layout (flex column) on small screens, grid on larger screens */}
      <div className="flex flex-col items-center lg:items-stretch lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Content column - full width on mobile, 7/12 on larger screens */}
        <motion.div
          className="w-full max-w-4xl lg:col-span-7 lg:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#03DAC5] font-medium mb-2 md:mb-4 text-center lg:text-left"
          >
            Hi there, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 md:mb-4 text-center lg:text-left"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A3BFFA]">
              Kavindu Alwis
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-[#A3BFFA] mb-4 md:mb-6 text-center lg:text-left"
          >
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Mobile Developer",
                1000,
                "Web System Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#42A5F5]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[#A3BFFA] text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            Passionate about creating elegant solutions that combine beautiful
            design with efficient functionality. Specializing in developing
            cross-platform mobile applications and responsive web systems.
          </motion.p>

          {/* Image shown only on mobile between description and buttons */}
          <motion.div
            className="flex justify-center mb-8 md:mb-10 lg:hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px]">
              {/* Improved background glow effect - reduced for mobile */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#03DAC5] opacity-30 sm:opacity-40 blur-2xl sm:blur-3xl"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Secondary glow for better color distribution */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#42A5F5] opacity-20 sm:opacity-30 blur-xl sm:blur-2xl"
                animate={{
                  scale: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border-2 sm:border-4 border-[#03DAC5]/50">
                  <Image
                    src="Alwis.JPG"
                    alt="Kavindu Alwis"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-row gap-3 md:gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              className="flex-1 max-w-[160px] sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#03DAC5] to-[#42A5F5] text-white font-medium text-center text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(3, 218, 197, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              className="flex-1 max-w-[160px] sm:flex-none px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-[#03DAC5] text-[#03DAC5] font-medium text-center text-sm sm:text-base hover:bg-[#03DAC5]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a
              href="https://github.com/kavindualwis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-[#A3BFFA] text-[#A3BFFA]"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#A3BFFA",
                  color: "#0a192f",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.div>
            </a>

            <a
              href="https://www.linkedin.com/in/kavindualwis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-[#A3BFFA] text-[#A3BFFA]"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#A3BFFA",
                  color: "#0a192f",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.div>
            </a>

            <a href="mailto:kavindualwis.work@gmail.com">
              <motion.div
                className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-[#A3BFFA] text-[#A3BFFA]"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#A3BFFA",
                  color: "#0a192f",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>

        {/* Image column - hidden on mobile, shown on lg screens */}
        <motion.div
          className="hidden lg:flex lg:col-span-5 lg:order-2 lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-[400px] h-[400px]">
            {/* Improved background glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#03DAC5] opacity-40 blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Secondary glow for better color distribution */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#42A5F5] opacity-30 blur-2xl"
              animate={{
                scale: [0.9, 1, 0.9],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden border-4 border-[#03DAC5]/50">
                <Image
                  src="Alwis.JPG"
                  alt="Kavindu Alwis"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
