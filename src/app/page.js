"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load components that are below the fold
const LazyAboutSection = AboutSection;
const LazyProjectSection = ProjectSection;
const LazyEmailSection = EmailSection;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Shorter loading screen time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Add scroll listener to detect when user has scrolled
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#112240]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <>
            <Navbar />
            <ScrollProgressBar />
            <motion.div
              className="container mt-24 mx-auto px-12 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection />

              <div className="content-visibility-auto">
                <LazyAboutSection />
              </div>

              <div className="content-visibility-auto">
                <LazyProjectSection />
              </div>

              <div className="content-visibility-auto">
                <LazyEmailSection />
              </div>

              <Footer />
            </motion.div>
            {/* Floating WhatsApp Button - simpler animation */}
            <motion.a
              href="https://wa.me/94776892127"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed z-50 bottom-6 right-6 bg-[#03DAC5] hover:bg-[#42A5F5] rounded-full shadow-lg p-4 flex items-center justify-center transition-colors animate-gpu"
              aria-label="Chat on WhatsApp"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.3,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* WhatsApp SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.151-.174.2-.298.3-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.455 4.436-9.89 9.893-9.89 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.896 6.994c-.003 5.456-4.438 9.891-9.893 9.891zm8.413-18.306A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.681a11.86 11.86 0 005.735 1.459h.005c6.554 0 11.889-5.335 11.892-11.893a11.82 11.82 0 00-3.471-8.382z" />
              </svg>
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
