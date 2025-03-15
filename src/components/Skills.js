import { motion } from "framer-motion";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaBolt, FaDatabase, FaServer, FaPalette } from "react-icons/fa";

const skills = [
  { name: "React", icon: <RiReactjsLine />, color: "bg-blue-600", shadow: "shadow-blue-400" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, color: "bg-teal-600", shadow: "shadow-teal-400" },
  { name: "Framer Motion", icon: <FaBolt />, color: "bg-purple-600", shadow: "shadow-purple-400" },
  { name: "Zustand", icon: <FaDatabase />, color: "bg-yellow-600", shadow: "shadow-yellow-400" },
  { name: "Firebase", icon: <FaServer />, color: "bg-red-600", shadow: "shadow-red-400" },
  { name: "Radix UI", icon: <FaPalette />, color: "bg-green-600", shadow: "shadow-green-400" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 text-gray-900 py-20 px-6 md:px-16 lg:px-32">
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skillset ⚡
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ${skill.color} ${skill.shadow} text-white`}
            variants={fadeUp}
            custom={index * 0.15}
          >
            {/* Skill Icon */}
            <div className="text-5xl">{skill.icon}</div>

            {/* Skill Name */}
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
