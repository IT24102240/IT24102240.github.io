"use client";
import React, { useState, useEffect } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Image from "next/image";

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
  const [imageLoaded, setImageLoaded] = useState(false);

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
          <Image
            src={imgUrl}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-lg shadow-2xl"
            loading="eager"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="rounded-2xl shadow-lg bg-[#1A365D] overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="h-52 md:h-72 relative group flex items-center justify-center overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-t-2xl"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMUEzNjVEIi8+PC9zdmc+"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Desktop overlay with icons - simplified animations */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#112240] opacity-0 sm:group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center hidden sm:flex"
          style={{ willChange: "opacity" }}
        >
          <div className="flex space-x-4">
            <button
              type="button"
              className="h-14 w-14 border-2 rounded-full border-[#A3BFFA] hover:border-[#03DAC5] flex items-center justify-center bg-[#1A365D] transition-colors duration-200"
              onClick={() => setShowModal(true)}
              aria-label="Preview project"
            >
              <EyeIcon className="h-10 w-10 text-[#A3BFFA] cursor-pointer hover:text-[#03DAC5] transition-colors duration-200" />
            </button>
            <a
              href={gitUrl}
              className="h-14 w-14 border-2 rounded-full border-[#A3BFFA] hover:border-[#03DAC5] flex items-center justify-center bg-[#1A365D] transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View code on GitHub"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#A3BFFA] cursor-pointer hover:text-[#03DAC5] transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile action buttons - simplified */}
      <div className="flex sm:hidden gap-4 px-6 pt-4">
        <button
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#0553B1] to-[#42A5F5] text-white font-semibold py-2 rounded-full shadow-md"
          onClick={() => setShowModal(true)}
        >
          <EyeIcon className="h-5 w-5" />
          Preview
        </button>
        <a
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#112240] text-[#03DAC5] border border-[#03DAC5] font-semibold py-2 rounded-full shadow-md"
        >
          <CodeBracketIcon className="h-5 w-5" />
          Code
        </a>
      </div>

      <div className="text-white rounded-b-2xl bg-[#1A365D] py-6 px-6 flex-1 flex flex-col">
        <h5 className="text-2xl font-bold mb-2 line-clamp-1">{title}</h5>
        <p className="text-[#A3BFFA] text-base mb-4 line-clamp-3 h-[4.5rem]">
          {description}
        </p>
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[#112240] text-xs text-[#03DAC5] px-3 py-1 rounded-full font-semibold border border-[#03DAC5]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Use portal for modal to avoid z-index issues */}
      {isBrowser && showModal && createPortal(<ImageModal />, document.body)}
    </motion.div>
  );
};

export default ProjectCard;
