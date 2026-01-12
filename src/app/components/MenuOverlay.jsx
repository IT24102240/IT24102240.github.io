"use client";

import { motion } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, resumeLink, setNavbarOpen }) => {
  const handleResumeDownload = (e) => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = resumeLink.path;
    link.setAttribute("download", "Kavindu_Alwis_CV.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

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
      className="fixed left-0 top-[72px] w-full glass backdrop-blur-lg h-screen flex flex-col items-center z-30"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
    >
      <div className="flex flex-col items-center justify-center space-y-6 py-12">
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onClick={handleLinkClick}
          >
            <NavLink
              href={link.path}
              title={link.title}
              className="text-2xl md:text-3xl font-semibold"
            />
          </motion.div>
        ))}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleResumeDownload}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/50 text-white font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {resumeLink.title}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;
