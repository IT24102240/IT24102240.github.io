"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import TabButton from "./TabButton";
import { motion, useInView, AnimatePresence } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";

const projectData = [
  {
    id: 1,
    title: "Mobile Chat Application",
    description:
      "A Flutter chat app with real-time messaging and Firebase auth.",
    imgUrl: "images/projects/ChatLink.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kavindualwis/ChatLink---Chat_app",
    previewUrl: "/",
    techStack: ["Flutter", "Firebase"],
  },
  {
    id: 2,
    title: "Odysia Travel Journal App",
    description: "Travel journaling app with secure auth and local storage.",
    imgUrl: "images/projects/odysia_2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kavindualwis",
    previewUrl: "/",
    techStack: ["Flutter", "Hive"],
  },
  {
    id: 3,
    title: "Food Delivery App",
    description: "Order food, manage cart, and track delivery in real time.",
    imgUrl: "images/projects/Food_Delivery_App.png",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://github.com/kavindualwis/Food-Delivery-App-with-Backend-Firebase-",
    previewUrl: "/",
    techStack: ["Flutter", "Firebase"],
  },
  {
    id: 4,
    title: "WizyWall Wallpaper App",
    description: "Browse, search, and download high-quality wallpapers.",
    imgUrl: "images/projects/Wizwall.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kavindualwis",
    previewUrl: "/",
    techStack: ["Flutter"],
  },
  {
    id: 5,
    title: "Event Ticketing Platform",
    description: "Book and manage event tickets with secure payments.",
    imgUrl: "images/projects/EventPulse.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kavindualwis",
    previewUrl: "/",
    techStack: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 6,
    title: "Tourism Package Platform",
    description: "Explore and book travel packages with a user-friendly UI.",
    imgUrl: "images/projects/TourEase.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kavindualwis/TourEase",
    previewUrl: "/",
    techStack: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 7,
    title: "Online Examination System",
    description: "Manage online exams and users with a secure dashboard.",
    imgUrl: "images/projects/ExamSystem.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kavindualwis",
    previewUrl: "/",
    techStack: ["Java", "Spring Boot", "MySQL"],
  },
  {
    id: 8,
    title: "Review Management System",
    description: "Collect and moderate user reviews for medicines.",
    imgUrl: "images/projects/ReviewManagementSystem.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kavindualwis",
    previewUrl: "/",
    techStack: ["Java", "Spring Boot", "MySQL"],
  },
];

// Carousel Component
const ProjectCarousel = ({ projects }) => {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef(null);

  // Ensure component only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-play effect - runs on client only
  useEffect(() => {
    if (!mounted || !isAutoPlay || !projects || projects.length === 0) {
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) =>
        prev + 1 >= projects.length ? 0 : prev + 1
      );
    }, 4000); // Auto-play every 4 seconds

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay, projects?.length, mounted]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? (projects?.length || 1) - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setDirection(1);
    setCurrentIndex((prev) =>
      prev + 1 >= (projects?.length || 1) ? 0 : prev + 1
    );
  };

  const handleDotClick = (index) => {
    setIsAutoPlay(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Safety check for projects array
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 dark:text-slate-400">
          No projects available.
        </p>
      </div>
    );
  }

  const currentProject = projects[currentIndex] || projects[0];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) =>
      (prev + newDirection + projects.length) % projects.length
    );
  };

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto"
      onTouchStart={(e) => {
        const touch = e.touches[0];
        setIsAutoPlay(false);
        e.currentTarget.touchStartX = touch.clientX;
      }}
      onTouchEnd={(e) => {
        if (!e.currentTarget.touchStartX) return;
        
        const touch = e.changedTouches[0];
        const distance = touch.clientX - e.currentTarget.touchStartX;
        const threshold = 50;
        
        if (Math.abs(distance) > threshold) {
          if (distance < 0) {
            // Swiped left, go to next
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % projects.length);
          } else {
            // Swiped right, go to previous
            setDirection(-1);
            setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
          }
        }
        
        setIsAutoPlay(true);
        delete e.currentTarget.touchStartX;
      }}
    >
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-2xl touch-none">
        <motion.div
          className="flex w-full"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="w-full flex-shrink-0"
            >
              <div className="px-4 md:px-6">
                {currentProject && (
                  <ProjectCard
                    title={currentProject.title}
                    description={currentProject.description}
                    imgUrl={currentProject.imgUrl}
                    gitUrl={currentProject.gitUrl}
                    previewUrl={currentProject.previewUrl}
                    techStack={currentProject.techStack}
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
      </motion.div>
    </div>

    {/* Navigation Arrows - Hidden on mobile, visible on medium+ screens */}
    <motion.button
      onClick={handlePrev}
      className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-16 z-10 p-3 rounded-full glass hover:bg-indigo-600/20 dark:hover:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 transition-all items-center justify-center"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Previous project"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </motion.button>

      <motion.button
        onClick={handleNext}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-16 z-10 p-3 rounded-full glass hover:bg-indigo-600/20 dark:hover:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 transition-all items-center justify-center"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next project"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Progress Indicators / Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 w-8"
                : "bg-slate-300 dark:bg-slate-700 w-2 hover:bg-slate-400 dark:hover:bg-slate-600"
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="text-center mt-6 text-slate-600 dark:text-slate-400 text-sm">
        {currentIndex + 1} / {projects.length}
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTabClick = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  // Filter projects based on active tab
  const filteredProjects = projectData.filter((project) =>
    activeTab === "All" ? true : project.tag.includes(activeTab)
  );

  return (
    <section id="projects" ref={ref} className="my-16 md:my-24">
      <AnimationWrapper animation="slide-up">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          Swipe or click arrows to explore my work
        </p>
      </AnimationWrapper>

      {/* Tab navigation */}
      <div className="flex justify-center mb-12 overflow-x-auto pb-2">
        <div className="flex space-x-8 border-b border-slate-200 dark:border-slate-800 px-4">
          <TabButton
            active={activeTab === "All"}
            selectTab={() => handleTabClick("All")}
          >
            All Projects
          </TabButton>
          <TabButton
            active={activeTab === "Mobile"}
            selectTab={() => handleTabClick("Mobile")}
          >
            Mobile
          </TabButton>
          <TabButton
            active={activeTab === "Web"}
            selectTab={() => handleTabClick("Web")}
          >
            Web
          </TabButton>
        </div>
      </div>

      {/* Carousel for Mobile/Web tabs, Grid for All */}
      <div className="px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.length > 0 ? (
            activeTab === "All" ? (
              // Grid View for All Projects
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imgUrl={project.imgUrl}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                      techStack={project.techStack}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              // Carousel View for Mobile/Web
              <ProjectCarousel projects={filteredProjects} />
            )
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
