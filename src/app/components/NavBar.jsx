"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from "framer-motion";

const navLinks = [
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

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Determine which section is currently in view
      const sections = navLinks.map((link) => link.path.substring(1));

      // Find the section that's most in view
      const currentSection = sections.reduce((current, section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if element is in viewport and closer to the top
          if (rect.top <= 100 && rect.bottom >= 100) {
            return section;
          }
        }
        return current;
      }, activeSection);

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, activeSection]);

  // Function to close the mobile menu
  const handleNavLinkClick = () => {
    if (isNavbarOpen) {
      setNavbarOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? "bg-[#112240]/80 backdrop-blur-md shadow-lg" : "bg-[#112240]"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={"/"} className="text-2xl md:text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42A5F5] to-[#03DAC5]">
              ALWIS
            </span>
            <span className="text-white">DEV</span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="mobile-menu block md:hidden">
          <motion.button
            onClick={() => setNavbarOpen(!isNavbarOpen)}
            className="flex items-center px-3 py-2 rounded-md bg-[#0553B1]/70 text-slate-200 hover:text-white hover:bg-[#42A5F5]"
            whileTap={{ scale: 0.9 }}
          >
            {!isNavbarOpen ? (
              <Bars3Icon className="h-5 w-5" />
            ) : (
              <XMarkIcon className="h-5 w-5" />
            )}
          </motion.button>
        </div>

        {/* Desktop menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <motion.ul
            className="flex items-center p-4 md:p-0 md:flex-row md:space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 * index }}
              >
                <NavLink
                  href={link.path}
                  title={link.title}
                  isActive={activeSection === link.path.substring(1)}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isNavbarOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MenuOverlay
            links={navLinks}
            activeSection={activeSection}
            onLinkClick={handleNavLinkClick}
          />
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
