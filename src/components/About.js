import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-900 py-20 px-6 md:px-16 lg:px-32">
      {/* Title */}
      <motion.h2
        className="text-5xl font-bold text-[#1E3A8A] italic text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Who is Dray? 🚀
      </motion.h2>

      {/* Introduction */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto text-center text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Hey there! I’m Dray, a Frontend Developer, Entrepreneur, and CEO of Homy.com from Nigeria.  
        I don’t just build interfaces I craft seamless digital experiences that bring ideas to life.  
        For me, it’s not just about writing code; it’s about building a legacy.
      </motion.p>

      {/* My Story */}
      <motion.div
        className="mt-8 text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p>
          My journey in tech started early, but my drive for success came from my experiences.  
          Growing up, I saw how hard work, persistence, and smart moves could change lives.  
          That’s when I knew I had to build something bigger than myself.
        </p>
        <br />
        <p>
          I’ve spent years mastering frontend development, pushing myself to create  
          fast, user-friendly, and visually stunning web applications.  
          My tech stack includes React, Tailwind CSS, Framer Motion, Zustand, Firebase, and more.
        </p>
        <br />
        <p>
          But I'm not just about tech I have a deep passion for cars,  
          especially my dream ride, the Chevrolet Camaro ZL1 🔥.  
          When I’m not coding, I’m checking out cars, luxury wristwatches,  
          or thinking about my future tech business empire that will run on passive income.  
          I also enjoy gaming, football, and anime.
        </p>
        <br />
        <p>
          Success isn’t optional it’s a must. 
          I work daily to build projects, learn new skills, and turn dreams into reality.  
          Whether it’s my real estate platform, Homy, or the next big thing I create,  
          one thing is certain I’m here to make an impact.
        </p>
        <br />
        <p>
          I've faced challenges, setbacks, and even bugs that made me question life 😅,  
          but I never stop grinding. My vision is clear:  
          Build a long-term company, create value, and achieve financial freedom  
          through tech & business.  
          This is just the beginning. Watch me build my future. 🚀  
        </p>
      </motion.div>
    </section>
  );
};

export default About;
