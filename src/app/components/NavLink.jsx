"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({
  href,
  title,
  isActive = false,
  onClick,
  isResumeLink = false,
}) => {
  const handleScroll = (e) => {
    // If this is a resume download link, don't prevent default behavior
    if (isResumeLink) return;

    // Prevent default anchor link behavior
    e.preventDefault();

    // Handle Home link (scroll to top)
    if (href === "#" || href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Update URL without page reload
      window.history.pushState({}, "", href);

      // Call the onClick handler if provided (to close mobile menu)
      if (onClick) {
        onClick();
      }

      return;
    }

    // For other links, remove the # from the href
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

  // Enhanced force download function that works better on mobile
  const handleResumeDownload = (e) => {
    e.preventDefault();

    try {
      // Mobile-friendly approach using fetch and blob
      fetch(href)
        .then((response) => response.blob())
        .then((blob) => {
          // Create blob link
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "Kavindu_Alwis_CV.pdf");

          // Append to html
          document.body.appendChild(link);

          // Force download
          link.click();

          // Clean up
          link.parentNode.removeChild(link);
          window.URL.revokeObjectURL(url);
        });
    } catch (error) {
      console.error("Download failed, trying alternative method", error);

      // Fallback method
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", "Kavindu_Alwis_CV.pdf");
      link.setAttribute("target", "_blank"); // Helps on some mobile browsers
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Call the onClick handler if provided (to close mobile menu)
    if (onClick) {
      onClick();
    }
  };

  // For resume link, use a button-styled component
  if (isResumeLink) {
    return (
      <motion.a
        href={href}
        className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 px-6 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/30 transition-all"
        download="Kavindu_Alwis_CV.pdf"
        onClick={handleResumeDownload}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {title}
      </motion.a>
    );
  }

  return (
    <Link href={href} onClick={handleScroll} className="relative group">
      <motion.span
        className="block py-2 px-0 text-slate-700 dark:text-slate-300 sm:text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.span>

      {/* Animated gradient underline */}
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

export default NavLink;

export const resumeLink = {
  title: "Resume",
  path: "Kavindu_Alwis_CV.pdf",
  isResumeLink: true,
};
