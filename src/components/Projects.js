import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Homy – Real Estate Marketplace",
    description:
      "A feature-rich platform where real estate agents list properties for sale. Includes agent verification, filters, chat system, and a subscription model.",
    tech: ["React", "Tailwind CSS", "Zustand", "Firebase"],
    github: "https://github.com/your-github/homy",
  },
  {
    title: "Netflix Clone",
    description:
      "A full-featured Netflix clone with authentication, real-time data fetching, and a sleek, responsive UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/your-github/netflix-clone",
  },
  {
    title: "Chevrolet Camaro Website",
    description:
      "A sleek and responsive website dedicated to showcasing the legendary Chevrolet Camaro lineup, featuring stunning visuals.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/your-github/camaro-website",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white text-gray-900 py-20 px-6 md:px-16 lg:px-32">
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-bold text-[#1E3A8A] italic text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects 🚀
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-300 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            variants={fadeUp}
            custom={index * 0.2}
          >
            {/* Project Title */}
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-3">{project.title}</h3>

            {/* Project Description */}
            <p className="text-sm text-gray-700 mb-4">{project.description}</p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#1E3A8A] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[#1E3A8A] font-semibold hover:underline"
            >
              <Github size={20} /> View on GitHub
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
