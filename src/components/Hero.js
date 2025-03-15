import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-12"
    >
      {/* Image Container */}
      <motion.div
        className="flex justify-center md:justify-start w-full md:w-auto mt-8 md:mt-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/Dray.jpg"
          alt="Dray"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-gray-300 shadow-xl"
        />
      </motion.div>

      {/* Text Content */}
      <div className="mt-6 md:mt-0 md:ml-12 max-w-lg">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-500">Dray</span> 👋
        </motion.h1>
        <motion.p
          className="mt-3 text-lg text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A Frontend Developer who loves creating awesome UIs and making your dream website come to life.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
