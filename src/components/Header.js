import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Dray</h1>

        <nav className="hidden md:flex space-x-6">
          <Link to="home" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:underline cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">
            Contact
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-blue-600 text-center p-4 space-y-4"
          >
            <Link to="home" smooth={true} duration={500} className="block" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="block" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link to="projects" smooth={true} duration={500} className="block" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link to="skills" smooth={true} duration={500} className="block" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
            <Link to="contact" smooth={true} duration={500} className="block" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
