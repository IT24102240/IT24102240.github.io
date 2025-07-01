"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
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
  const [tag, setTag] = useState("All");

  const handleTagClick = (newtag) => {
    setTag(newtag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <AnimationWrapper animation="slide-up">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          My Projects
        </h2>
      </AnimationWrapper>

      <motion.div
        className="text-white flex flex-row justify-center items-center gap-2 py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectTag
          onClick={handleTagClick}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagClick}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagClick}
          name="Web"
          isSelected={tag === "Web"}
        />
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            layout
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
      </motion.div>
    </section>
  );
};

export default ProjectSection;
