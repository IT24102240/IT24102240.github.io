"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#112240]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="h-20 w-20 rounded-full border-t-4 border-b-4 border-[#03DAC5]"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-0 left-0 h-20 w-20 rounded-full border-r-4 border-l-4 border-[#42A5F5]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.1,
              }}
            />
          </div>
        </motion.div>
        <motion.p
          className="text-white text-xl font-bold tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ALWIS
          <span className="text-[#03DAC5]">DEV</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
