"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#FFFAF0] text-[#1F1F1F] py-24 font-outfit">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Hello, I’m <span className="text-[#92400e]">Dray</span>
          </h1>
          <p className="text-lg text-[#333] max-w-xl mb-8">
            I build modern, accessible websites that blend clean design with
            seamless functionality. Focused on delivering top-notch user
            experiences for growing brands.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="#projects"
              className="bg-[#FDE68A] text-[#1F1F1F] font-semibold px-6 py-3 rounded-md shadow hover:bg-[#fcd34d] transition duration-300"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border border-[#6B4F31] text-[#6B4F31] font-semibold px-6 py-3 rounded-md hover:bg-[#6B4F31] hover:text-white transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-[#FDE68A] shadow-lg">
            <Image
              src="/img/dray.png"
              alt="Dray's photo"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
