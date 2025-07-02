"use client";

import { motion } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, resumeLink, setNavbarOpen }) => {
  // Direct download function for mobile devices
  const handleResumeDownload = (e) => {
    e.preventDefault();

    // Force download using this approach which works better on mobile
    const link = document.createElement("a");
    link.href = resumeLink.path;
    link.setAttribute("download", "Kavindu_Alwis_CV.pdf");
    link.setAttribute("target", "_blank"); // This helps on some mobile browsers
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Close the menu after attempting download
    setNavbarOpen(false);
  };

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <motion.div
      className="fixed left-0 top-[72px] w-full bg-[#0a192f] backdrop-blur-lg bg-opacity-95 h-screen flex flex-col items-center z-30"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <div className="flex flex-col items-center justify-center space-y-6 py-8">
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onClick={handleLinkClick}
          >
            <NavLink href={link.path} title={link.title} className="text-2xl" />
          </motion.div>
        ))}
        <motion.div variants={itemVariants}>
          <button
            onClick={handleResumeDownload}
            className="mt-4 px-7 py-3 rounded-full bg-gradient-to-r from-[#03DAC5] to-[#42A5F5] hover:shadow-lg hover:shadow-[#03DAC5]/30 text-white font-medium"
          >
            {resumeLink.title}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
