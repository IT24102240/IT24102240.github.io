"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      title: "Home",
      path: "#",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  const resumeLink = {
    title: "Resume",
    path: "/Kavindu_Alwis_CV.pdf",
    isResumeLink: true,
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-40 ${
        scrolling
          ? "bg-[#0a192f]/90 backdrop-blur-md border-b border-[#112240]/50 shadow-lg"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href={"/"}>
            <motion.div
              className="text-white font-bold text-xl md:text-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ALWIS<span className="text-[#03DAC5]">DEV</span>
            </motion.div>
          </Link>
          <div className="hidden md:flex md:items-center md:gap-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                <NavLink href={link.path} title={link.title} />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.2 }}
            >
              <NavLink
                href={resumeLink.path}
                title={resumeLink.title}
                isResumeLink={resumeLink.isResumeLink}
              />
            </motion.div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center px-3 py-2 text-[#03DAC5] hover:text-[#42A5F5] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {navbarOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="8" x2="20" y2="8" />
                    <line x1="4" y1="16" x2="20" y2="16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay
            links={navLinks}
            resumeLink={resumeLink}
            setNavbarOpen={setNavbarOpen}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
