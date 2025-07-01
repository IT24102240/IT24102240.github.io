"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the progress bar only after scrolling down a bit
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed progress bar at the top of the screen */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0553B1] via-[#42A5F5] to-[#03DAC5] z-50 origin-left ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        style={{ scaleX: scrollYProgress }}
      />

      {/* Circular scroll indicator at the bottom right */}
      <motion.button
        className={`fixed bottom-28 right-6 w-12 h-12 rounded-full bg-[#1A365D] border-2 border-[#03DAC5] flex items-center justify-center z-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
        <svg className="absolute" width="44" height="44" viewBox="0 0 44 44">
          <circle
            className="stroke-[#42A5F5] opacity-25"
            cx="22"
            cy="22"
            r="20"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            className="stroke-[#03DAC5]"
            cx="22"
            cy="22"
            r="20"
            strokeWidth="2"
            fill="none"
            style={{
              pathLength: scrollYProgress,
              rotate: -90,
            }}
          />
        </svg>
      </motion.button>
    </>
  );
};

export default ScrollProgressBar;
