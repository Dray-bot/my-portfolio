"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { title } from "process";

const projects = [
  {
    title: "BuildWise",
    description:
      "A modern construction company platform designed to showcase services, completed projects, and client testimonials with a clean, responsive UI.",
    link: "https://build-wise-25a9.vercel.app/",
  },
  {
    title: "Bookium",
    description:
      "A sleek, category-based book showcase platform featuring dynamic pages, featured reads, and an intuitive user experience.",
    link: "https://bookium-leyq.vercel.app/",
  },
  {
    title: "Le Tailore",
    description:
      "A bespoke fashion portfolio site tailored for a female designer, with elegant visuals, booking capabilities, and a modern brand identity.",
    link: "https://le-tailore.vercel.app/",
  },
  {
    title: "Ola Watch Store",
    description:
      "An elegant online store for luxury watches, featuring a sleek design, user-friendly navigation, and secure payment options.",
    link: "https://ray-watch-store.vercel.app/",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-[#F8FAFC] py-24 px-6 font-outfit">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center text-gray-900 mb-14"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#1F2937] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#CA8A04] font-medium text-sm hover:underline transition-all"
              >
                View Project
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
