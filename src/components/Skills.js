"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPaw,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVite,
  SiFirebase,
  SiTailwindcss,
  SiFramer,
  SiRadixui,
} from "react-icons/si";
import { LiaFingerprintSolid } from "react-icons/lia";
import { useEffect } from "react";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={48} className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt size={48} className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare size={48} className="text-yellow-500" /> },
  { name: "React", icon: <FaReact size={48} className="text-cyan-500" /> },
  { name: "Vite React", icon: <SiVite size={48} className="text-purple-500" /> },
  { name: "Next.js", icon: <SiNextdotjs size={48} /> },
  { name: "Radix UI", icon: <SiRadixui size={48} className="text-black" /> },
  { name: "Framer Motion", icon: <SiFramer size={48} className="text-pink-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={48} className="text-blue-400" /> },
  { name: "Zustand", icon: <FaPaw size={48} className="text-orange-400" /> },
  { name: "Git", icon: <FaGitAlt size={48} className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub size={48} className="text-gray-800" /> },
  { name: "Firebase", icon: <SiFirebase size={48} className="text-yellow-400" /> },
  { name: "Clerk Auth", icon: <LiaFingerprintSolid size={48} className="text-emerald-600" /> },
];

export default function Skills() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // replay the animation on scroll
    }
  }, [controls, inView]);

  return (
    <section id="skills" className="w-full py-24 px-6 bg-grey-900 font-outfit">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[45px] font-bold text-black dark:text-white mb-8"
        >
          My <span className="text-emerald-600">Skills</span>
        </motion.h2>

        <div className="text-[15px] font-light text-gray-400 h-6">
          <Typewriter
            options={{
              strings: ["My Tech Stack...", "My Expertise..."],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 30,
            }}
          />
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-10"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
            hidden: {},
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col items-center justify-center gap-3 p-4 hover:bg-emerald-50 transition rounded-xl"
            >
              <div className="hover:scale-110 transition duration-300">
                {skill.icon}
              </div>
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
