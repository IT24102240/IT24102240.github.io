"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold text-cyan-400">🦋 Flutter</span>
        </li>
        <li>
          <span className="font-semibold text-yellow-400">🎯 Dart</span>
        </li>
        <li>
          <span className="font-semibold text-orange-400">🔥 Firebase</span>
        </li>
        <li>
          <span className="font-semibold text-green-400">🟩 Node.js</span>
        </li>
        <li>
          <span className="font-semibold text-emerald-400">🍃 MongoDB</span>
        </li>
        <li>
          <span className="font-semibold text-blue-400">☕ Java (OOP)</span>
        </li>
        <li>
          <span className="font-semibold text-purple-400">
            🐍 Python (AI/ML)
          </span>
        </li>
        <li>
          <span className="font-semibold text-gray-300">🔗 Git & GitHub</span>
        </li>
        <li>
          <span className="font-semibold text-pink-400">🌐 HTML & CSS</span>
        </li>
        <li>
          <span className="font-semibold text-indigo-400">🔌 REST APIs</span>
        </li>
        <li>
          <span className="font-semibold text-blue-300">🗄️ MySQL</span>
        </li>
        <li>
          <span className="font-semibold text-lime-400">
            🤖 Arduino & IoT{" "}
            <span className="text-xs">(ESP32 / ESP8266 / HC-06)</span>
          </span>
        </li>
        <li>
          <span className="font-semibold text-fuchsia-400">
            🎨 Figma (UI/UX)
          </span>
        </li>
        <li>
          <span className="font-semibold text-orange-300">🧪 Postman</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-0 space-y-4">
        <li>
          <span className="font-bold text-cyan-400">
            🎓 BSc (Hons) in Software Engineering
          </span>
          <br />
          <span className="text-sm text-gray-300">
            SLIIT <span className="italic">(2024 - Present)</span>
          </span>
        </li>
        <li>
          <span className="font-bold text-yellow-400">
            📚 Advanced Level - Science Stream
          </span>
          <br />
          <span className="text-sm text-gray-300">
            Ananda College, Colombo 10{" "}
            <span className="italic">(2019 - 2021)</span>
          </span>
        </li>
        <li>
          <span className="font-bold text-green-400">🏫 Ordinary Level</span>
          <br />
          <span className="text-sm text-gray-300">
            Mahanama College, Colombo 03{" "}
            <span className="italic">(2007 - 2018)</span>
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-none pl-0 space-y-4">
        <li>
          <span className="font-bold text-cyan-400">
            💼 Freelance Mobile App Developer
          </span>
          <br />
          <span className="text-sm text-gray-300">2023 - Present</span>
        </li>
        <li>
          <span className="font-bold text-purple-400">☕ Java Developer</span>
          <br />
          <span className="text-sm text-gray-300">Jul 2024 - Present</span>
        </li>
        <li>
          <span className="font-bold text-yellow-400">🌍 PxL Tech (UK)</span>
          <br />
          <span className="text-sm text-gray-300">Jan 2025 - May 2025</span>
        </li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="about"
      className="text-white w-full bg-gradient-to-br from-[#112240] via-[#1A365D] to-[#0553B1] rounded-[30px] shadow-xl my-12 relative overflow-hidden"
    >
      {/* Smoother decorative elements - repositioned to avoid sharp corners */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#03DAC5]/10 rounded-full blur-3xl opacity-50"
        style={{ transform: "translate(20%, -20%)" }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#42A5F5]/10 rounded-full blur-3xl opacity-50"
        style={{ transform: "translate(-20%, 20%)" }}
      ></div>

      <div className="relative py-12 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto z-10">
        <AnimationWrapper animation="slide-up">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6 inline-block relative">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#03DAC5] to-transparent"></span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              Hi, I'm{" "}
              <strong className="text-[#03DAC5]">Kavindu Alwis</strong>, a
              self-taught{" "}
              <strong className="text-[#03DAC5]">Flutter developer</strong> and{" "}
              <strong className="text-[#03DAC5]">
                Software Engineering undergraduate at SLIIT
              </strong>
              . I have 2+ years of experience building mobile apps using{" "}
              <strong className="text-[#03DAC5]">
                Flutter, Dart, and Firebase
              </strong>
              . I'm also diving into{" "}
              <strong className="text-[#03DAC5]">Node.js</strong>,{" "}
              <strong className="text-[#03DAC5]">MongoDB</strong>, and{" "}
              <strong className="text-[#03DAC5]">AI/ML with Python</strong>. I
              enjoy solving real-world problems, exploring IoT, and constantly
              pushing my limits to become a top-tier developer. Let's build
              something great together!
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper animation="fade" delay={0.2}>
          {/* Tab buttons with improved styling */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 px-4">
            {TAB_DATA.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          {/* Content card with subtle animation */}
          <motion.div
            className="bg-[#112240]/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#03DAC5]/20"
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </AnimationWrapper>

        {/* Skills visualization (only shown on skills tab) */}
        {tab === "skills" && (
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {["Flutter", "Dart", "Firebase", "Node.js", "MongoDB", "Java", "Python", "Git"].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-[#1A365D] rounded-full text-sm font-medium border border-[#03DAC5]/30"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default AboutSection;
