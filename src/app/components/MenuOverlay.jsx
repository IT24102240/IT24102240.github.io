"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

function MenuOverlay({ links, activeSection, onLinkClick }) {
  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      className="flex flex-col py-4 items-center gap-3 bg-[#18181b] rounded-b-2xl shadow-lg"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {links.map((link, index) => (
        <motion.li key={index} variants={item}>
          <NavLink
            href={link.path}
            title={link.title}
            isActive={activeSection === link.path.substring(1)}
            onClick={onLinkClick}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default MenuOverlay;
