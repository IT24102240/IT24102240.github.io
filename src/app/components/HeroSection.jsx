"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="py-16 px-4 md:py-24 lg:py-32 md:px-6 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center lg:items-stretch lg:grid lg:grid-cols-12 lg:gap-16 w-full max-w-7xl mx-auto">
        {/* Content column */}
        <motion.div
          className="w-full lg:col-span-7 lg:order-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-cyan-500 dark:text-cyan-400 font-semibold text-sm md:text-base mb-3 md:mb-6 text-center lg:text-left tracking-widest"
          >
            👋 Welcome to my creative space
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black mb-4 md:mb-6 text-center lg:text-left leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
              Kavindu Alwis
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center lg:text-left text-slate-700 dark:text-slate-300"
          >
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Mobile Developer",
                1500,
                "Web System Developer",
                1500,
                "Software Engineer",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-8 md:mb-12 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left leading-relaxed"
          >
            Crafting elegant digital solutions that seamlessly blend stunning design with powerful functionality. Specialized in building cross-platform mobile apps and scalable web systems.
          </motion.p>

          {/* Mobile Image */}
          <motion.div
            className="flex justify-center mb-10 md:mb-12 lg:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-1 ring-indigo-500/40"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src="Alwis.JPG"
                alt="Kavindu Alwis"
                fill
                priority
                className="object-cover"
              />
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white font-semibold text-center hover:shadow-2xl hover:shadow-indigo-500/50 transition-shadow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            <motion.a
              href="#projects"
              className="px-8 py-4 rounded-full border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold text-center hover:bg-indigo-600/10 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-10 md:mt-12 flex items-center gap-4 justify-center lg:justify-start flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              {
                href: "https://github.com/kavindualwis",
                icon: "github",
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/kavindualwis/",
                icon: "linkedin",
                label: "LinkedIn",
              },
              {
                href: "mailto:kavindualwis.work@gmail.com",
                icon: "email",
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target={social.icon !== "email" ? "_blank" : undefined}
                rel={social.icon !== "email" ? "noopener noreferrer" : undefined}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600/20 dark:hover:bg-indigo-400/10 transition-all"
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon === "github" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {social.icon === "linkedin" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                )}
                {social.icon === "email" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                  </svg>
                )}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Desktop Image */}
        <motion.div
          className="hidden lg:flex lg:col-span-5 lg:order-2 lg:justify-center lg:items-center"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div 
            className="relative w-96 h-96 rounded-full overflow-hidden ring-1 ring-indigo-500/40"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="Alwis.JPG"
              alt="Kavindu Alwis"
              fill
              priority
              className="object-cover"
            />
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
