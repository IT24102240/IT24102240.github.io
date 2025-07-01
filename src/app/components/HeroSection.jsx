"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // The path to your CV file in the public folder
    const cvUrl = "Kavindu_Alwis_CV.pdf"; // Update this with your actual CV filename

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Kavindu_Alwis_CV.pdf"; // Name that will appear when downloading
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  // Function to smoothly scroll to contact section
  const handleHireClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without page reload
      window.history.pushState({}, "", "#contact");
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          className="col-span-7 place-self-center text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#42A5F5] to-[#03DAC5]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hello, I'm
            </motion.span>
          </h1>
          <div className="h-[48px] mb-2 flex items-center justify-center sm:justify-start">
            <motion.span
              className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  "Alwis",
                  1000,
                  "Mobile App Developer",
                  1000,
                  "Java Developer",
                  1000,
                  "DevOps Enthusiast",
                  1000,
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
              />
            </motion.span>
          </div>
          <motion.p
            className="text-[#A3BFFA] text-base sm:text-lg mb-6 lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            I turn visions into amazing realities! 💻
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
            <motion.button
              onClick={handleHireClick}
              className="px-6 py-3 rounded-full bg-gradient-to-br from-[#0553B1] via-[#42A5F5] to-[#03DAC5] text-white cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(3, 218, 197, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
            <motion.button
              onClick={handleDownloadCV}
              className="px-1 py-1 rounded-full bg-gradient-to-br from-[#0553B1] via-[#42A5F5] to-[#03DAC5] hover:bg-slate-800 text-white cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(3, 218, 197, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="block bg-[#112240] hover:bg-[#1A365D] rounded-full px-5 py-2 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </span>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          className="col-span-5 place-self-center mt-4 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="rounded-full bg-[#1A365D] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-full h-full rounded-full overflow-hidden"
            >
              <Image
                src="images/DP.jpeg"
                alt="Hero Image"
                className="rounded-full object-cover"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(3, 218, 197, 0.2)",
                  "0 0 0 15px rgba(3, 218, 197, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
