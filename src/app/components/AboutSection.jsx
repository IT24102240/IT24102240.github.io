"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
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
      className="text-white w-full bg-gradient-to-br from-[#112240] via-[#1A365D] to-[#0553B1] rounded-3xl shadow-xl my-12"
    >
      <div className="md:grid md:grid-cols-2 gap-8 lg:gap-8 xl:gap-8 items-center py-4 px-4 sm:py-16 xl:px-16">
        <AnimationWrapper animation="slide-right">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="images/about-image.png"
              width={400}
              height={400}
              alt="About section image"
              className="rounded-2xl shadow-2xl transition-transform duration-300 hover:shadow-[#03DAC5]/40"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </motion.div>
        </AnimationWrapper>

        <div className="mt-4 md:mt-0 text-left flex-col h-full">
          <AnimationWrapper animation="slide-left">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              Hi, I'm <strong>Kavindu Alwis</strong>, a self-taught{" "}
              <strong>Flutter developer</strong> and{" "}
              <strong>Software Engineering undergraduate at SLIIT</strong>. I
              have 2+ years of experience building mobile apps using{" "}
              <strong>Flutter, Dart, and Firebase</strong>. I'm also diving into{" "}
              <strong>Node.js</strong>, <strong>MongoDB</strong>, and{" "}
              <strong>AI/ML with Python</strong>. I enjoy solving real-world
              problems, exploring IoT, and constantly pushing my limits to
              become a top-tier developer. Let's build something great together!
            </p>
          </AnimationWrapper>

          <AnimationWrapper animation="fade" delay={0.2}>
            <div className="flex flex-row justify-center mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                {" "}
                Experience{" "}
              </TabButton>
            </div>
            <motion.div
              className="mt-8"
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {TAB_DATA.find((t) => t.id == tab).content}
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
