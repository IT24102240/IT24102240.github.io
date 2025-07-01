"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, isActive = false, onClick }) => {
  const handleScroll = (e) => {
    // Prevent default anchor link behavior
    e.preventDefault();

    // Remove the # from the href
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Scroll to section smoothly
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without page reload
      window.history.pushState({}, "", href);
    }

    // Call the onClick handler if provided (to close mobile menu)
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} onClick={handleScroll} className="relative group">
      <motion.span
        className={`block py-2 pl-3 pr-4 ${
          isActive ? "text-white font-medium" : "text-[#ADB7BE]"
        } sm:text-xl rounded md:p-0 hover:text-white transition-colors duration-300`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.span>

      {/* Animated underline effect */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
};

export default NavLink;
