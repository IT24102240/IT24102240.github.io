"use client";
import React, { useState, useEffect } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  techStack,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  // Handle mounting for client-side rendering
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  // Create a modal component that is conditionally rendered
  const ImageModal = () => {
    if (!showModal) return null;

    return (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={() => setShowModal(false)}
      >
        <div className="absolute inset-0" />
        <button
          className="absolute top-6 right-8 text-white text-5xl font-bold z-[10000]"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }}
        >
          &times;
        </button>

        <h3 className="absolute top-6 left-8 text-white text-2xl font-bold z-[10000]">
          {title}
        </h3>

        <div
          className="w-[90%] max-w-5xl max-h-[80vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-auto object-contain rounded-lg shadow-2xl"
          />
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="rounded-2xl shadow-lg bg-[#1A365D] overflow-hidden flex flex-col h-full"
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 20px 25px -5px rgba(3, 218, 197, 0.1), 0 10px 10px -5px rgba(3, 218, 197, 0.04)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-52 md:h-72 relative group flex items-center justify-center overflow-hidden">
        <motion.img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Desktop overlay with icons */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#112240] opacity-0 sm:group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center hidden sm:flex"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.8 }}
        >
          <div className="flex space-x-4">
            <motion.button
              type="button"
              className="h-14 w-14 border-2 rounded-full border-[#A3BFFA] hover:border-[#03DAC5] flex items-center justify-center bg-[#1A365D] transition-all duration-300"
              onClick={() => setShowModal(true)}
              whileHover={{ scale: 1.1, borderColor: "#03DAC5" }}
              whileTap={{ scale: 0.9 }}
            >
              <EyeIcon className="h-10 w-10 text-[#A3BFFA] cursor-pointer hover:text-[#03DAC5] transition-colors duration-300" />
            </motion.button>
            <motion.a
              href={gitUrl}
              className="h-14 w-14 border-2 rounded-full border-[#A3BFFA] hover:border-[#03DAC5] flex items-center justify-center bg-[#1A365D] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, borderColor: "#03DAC5" }}
              whileTap={{ scale: 0.9 }}
            >
              <CodeBracketIcon className="h-10 w-10 text-[#A3BFFA] cursor-pointer hover:text-[#03DAC5] transition-colors duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Mobile action buttons */}
      <div className="flex sm:hidden gap-4 px-6 pt-4">
        <motion.button
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0553B1] to-[#42A5F5] text-white font-semibold py-2 rounded-full shadow-md transition-all"
          onClick={() => setShowModal(true)}
          whileTap={{ scale: 0.95 }}
        >
          <EyeIcon className="h-5 w-5" />
          Preview
        </motion.button>
        <motion.a
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#112240] text-[#03DAC5] border border-[#03DAC5] font-semibold py-2 rounded-full shadow-md transition-all"
          whileTap={{ scale: 0.95 }}
        >
          <CodeBracketIcon className="h-5 w-5" />
          Code
        </motion.a>
      </div>

      <motion.div
        className="text-white rounded-b-2xl bg-[#1A365D] py-6 px-6 flex-1 flex flex-col"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h5 className="text-2xl font-bold mb-2 line-clamp-1">{title}</h5>
        <p className="text-[#A3BFFA] text-base mb-4 line-clamp-3 h-[4.5rem]">
          {description}
        </p>
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                className="bg-[#112240] text-xs text-[#03DAC5] px-3 py-1 rounded-full font-semibold border border-[#03DAC5]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                whileHover={{ scale: 1.1, backgroundColor: "#0553B1" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>

      {/* Render the modal directly for testing */}
      {showModal && <ImageModal />}

      {/* Use portal once we're in the browser */}
      {isBrowser && showModal && createPortal(<ImageModal />, document.body)}
    </motion.div>
  );
};

export default ProjectCard;
