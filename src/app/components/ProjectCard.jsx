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

  useEffect(() => {
    setIsBrowser(true);
  }, []);

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

  const ImageModal = () => {
    if (!showModal) return null;

    return (
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md"
        onClick={() => setShowModal(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0" />
        <motion.button
          className="absolute top-6 right-8 text-white text-5xl font-bold z-[10000] hover:scale-110 transition-transform"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &times;
        </motion.button>

        <h3 className="absolute top-6 left-8 text-white text-2xl font-bold z-[10000]">
          {title}
        </h3>

        <motion.div
          className="w-[90%] max-w-5xl max-h-[80vh] relative"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Image
            src={imgUrl}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-2xl shadow-2xl"
            loading="eager"
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="group relative overflow-hidden flex flex-col h-full transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.08,
        y: -12,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Glowing Border Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-cyan-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
      
      {/* Glass Container */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/40 group-hover:border-indigo-500/60 shadow-xl group-hover:shadow-2xl group-hover:shadow-indigo-500/20 dark:group-hover:shadow-indigo-400/20 flex flex-col h-full transition-all duration-300">
        {/* Image Container */}
        <div className="aspect-[3/2] relative overflow-hidden bg-gradient-to-br from-indigo-500/20 to-cyan-500/20">
          <Image
            src={imgUrl}
            alt={title}
            fill={true}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExMTI3Ii8+PC9zdmc+"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Desktop Action Buttons */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0.5, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
          >
          <motion.button
            className="w-14 h-14 rounded-full glass backdrop-blur-md flex items-center justify-center text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500/20 dark:hover:bg-indigo-400/10 border border-indigo-500/30 dark:border-indigo-400/30"
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Preview project"
          >
            <EyeIcon className="h-6 w-6" />
          </motion.button>
          <motion.a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full glass backdrop-blur-md flex items-center justify-center text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500/20 dark:hover:bg-indigo-400/10 border border-indigo-500/30 dark:border-indigo-400/30"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="View code on GitHub"
          >
            <CodeBracketIcon className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile Action Buttons */}
      <div className="flex sm:hidden gap-3 px-5 py-3 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 backdrop-blur-sm border-t border-indigo-500/20 dark:border-indigo-400/20">
        <motion.button
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold py-2 rounded-full text-sm"
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <EyeIcon className="h-4 w-4" />
          Preview
        </motion.button>
        <motion.a
          href={gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 border border-indigo-500/50 dark:border-indigo-400/50 text-indigo-600 dark:text-indigo-400 font-semibold py-2 rounded-full text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <CodeBracketIcon className="h-4 w-4" />
          Code
        </motion.a>
      </div>

      {/* Content Section */}
      <div className="px-6 py-5 flex-1 flex flex-col relative z-10 bg-gradient-to-b from-transparent to-slate-900/40">
        <h5 className="text-lg font-bold mb-2 bg-gradient-to-r from-slate-200 to-slate-100 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:to-cyan-300 dark:group-hover:from-indigo-200 dark:group-hover:to-cyan-200 transition-all line-clamp-2">
          {title}
        </h5>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2 flex-grow group-hover:text-slate-300 dark:group-hover:text-slate-300 transition-colors">
          {description}
        </p>

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-slate-700/40 group-hover:border-indigo-500/30 transition-colors">
            {techStack.map((tech, idx) => (
              <motion.span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 dark:from-indigo-500/20 dark:to-cyan-500/20 text-indigo-300 dark:text-cyan-200 border border-indigo-500/40 dark:border-cyan-500/30 group-hover:from-indigo-600/50 group-hover:to-cyan-600/50 group-hover:border-indigo-400/60 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        )}
      </div>
      </div>

      {/* Portal Modal */}
      {isBrowser && showModal && createPortal(<ImageModal />, document.body)}
    </motion.div>
  );
};

export default ProjectCard;
