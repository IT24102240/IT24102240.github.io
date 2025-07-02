"use client";

import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#0a192f] to-[#112240]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="flex items-center justify-center mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="h-24 w-24 rounded-full border-t-4 border-b-4 border-[#03DAC5]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute top-0 left-0 h-24 w-24 rounded-full border-r-4 border-l-4 border-[#42A5F5]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.1,
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <svg
                className="w-10 h-10 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#03DAC5"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.p className="text-white text-2xl font-bold tracking-wider">
            ALWIS<span className="text-[#03DAC5]">DEV</span>
          </motion.p>

          <motion.div
            className="w-48 h-1.5 bg-gray-700 rounded-full overflow-hidden mt-1"
            initial={{ width: 0 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#03DAC5] to-[#42A5F5]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p
            className="text-gray-400 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Building your experience...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
