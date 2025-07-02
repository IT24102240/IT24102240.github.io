// "use client";

// import { useState, useCallback, useMemo, memo } from "react";
// import dynamic from "next/dynamic";
// import { motion, AnimatePresence } from "framer-motion";

// // Lazy load project content components
// const ProjectContent = dynamic(() => import("./ProjectContent"), {
//   loading: () => <ProjectSkeleton />,
//   ssr: false,
// });

// const ProjectSkeleton = memo(() => (
//   <div className="animate-pulse">
//     <div className="h-8 bg-gray-200 rounded mb-4"></div>
//     <div className="h-4 bg-gray-200 rounded mb-2"></div>
//     <div className="h-4 bg-gray-200 rounded mb-2"></div>
//     <div className="h-32 bg-gray-200 rounded"></div>
//   </div>
// ));

// const ProjectTab = memo(({ project, isActive, onClick, index }) => (
//   <motion.button
//     onClick={onClick}
//     className={`px-4 py-2 rounded-lg transition-all duration-200 ${
//       isActive
//         ? "bg-blue-500 text-white shadow-lg"
//         : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//     }`}
//     whileHover={{ scale: 1.02 }}
//     whileTap={{ scale: 0.98 }}
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: index * 0.05 }}
//   >
//     {project.name}
//   </motion.button>
// ));

// const ProjectTabs = ({ projects }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [loadedTabs, setLoadedTabs] = useState(new Set([0]));

//   const handleTabChange = useCallback((index) => {
//     // Preload content before switching
//     setLoadedTabs((prev) => new Set([...prev, index]));

//     // Use requestAnimationFrame for smoother transitions
//     requestAnimationFrame(() => {
//       setActiveTab(index);
//     });
//   }, []);

//   const activeProject = useMemo(
//     () => projects[activeTab],
//     [projects, activeTab]
//   );

//   return (
//     <div className="project-tabs">
//       {/* Optimized tab navigation */}
//       <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
//         {projects.map((project, index) => (
//           <ProjectTab
//             key={project.id}
//             project={project}
//             isActive={index === activeTab}
//             onClick={() => handleTabChange(index)}
//             index={index}
//           />
//         ))}
//       </div>

//       {/* Optimized content area with proper AnimatePresence */}
//       <div className="relative min-h-[400px]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.2, ease: "easeInOut" }}
//             className="absolute inset-0"
//           >
//             {loadedTabs.has(activeTab) ? (
//               <ProjectContent project={activeProject} />
//             ) : (
//               <ProjectSkeleton />
//             )}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default memo(ProjectTabs);
