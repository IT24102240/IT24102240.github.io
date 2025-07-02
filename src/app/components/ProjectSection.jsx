"use client";
import React, { useState, useRef, useCallback } from "react";
import ProjectCard from "./ProjectCard";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";
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

  // Separate projects by category only when not in "All" tab
  const mobileProjects =
    activeTab !== "All"
      ? projectData.filter(
          (project) =>
            project.tag.includes("Mobile") && project.tag.includes(activeTab)
        )
      : [];

  const webProjects =
    activeTab !== "All"
      ? projectData.filter(
          (project) =>
            project.tag.includes("Web") && project.tag.includes(activeTab)
        )
      : [];

  // Function to render project cards with animations
  const renderProjects = (projects) => {
    return projects.map((project, index) => (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.3, delay: Math.min(index * 0.1, 0.3) }}
        className="w-full"
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
    ));
  };

  return (
    <section id="projects" ref={ref} className="my-8">
      <AnimationWrapper animation="slide-up">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          My Projects
        </h2>
      </AnimationWrapper>

      {/* Tab navigation */}
      <div className="flex justify-center mb-10">
        <div className="flex space-x-6 border-b border-slate-700 px-4 py-2">
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

      <div className="space-y-16">
        {/* All Projects in a single grid when "All" is selected */}
        {activeTab === "All" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderProjects(filteredProjects)}
            </div>
          </motion.div>
        )}

        {/* Mobile Projects Section - only shown when Mobile tab is active */}
        {activeTab === "Mobile" && mobileProjects.length > 0 && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-[#03DAC5]">
              Mobile Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderProjects(mobileProjects)}
            </div>
          </motion.div>
        )}

        {/* Web Projects Section - only shown when Web tab is active */}
        {activeTab === "Web" && webProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-[#03DAC5]">
              Web Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderProjects(webProjects)}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
