"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? 0 : 180,
          scale: isDarkMode ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? (
          <svg
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
            <path
              fillRule="evenodd"
              d="M12 1a1 1 0 011 1v2a1 1 0 11-2 0V2a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zm9-9a1 1 0 100-2h-2a1 1 0 100 2h2zm-16 0a1 1 0 100-2H2a1 1 0 100 2h2z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.64 13a1 1 0 0 0-1.05-.14 8 8 0 1 1 .12-11.85 1 1 0 0 0 1.07-1.63 10 10 0 1 0-12.22 15.43 1 1 0 0 0 1.08-1.63A8 8 0 0 1 20.59 14a1 1 0 0 0 1.05-.14z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
