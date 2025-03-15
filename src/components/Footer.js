import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-400 hover:text-white transition-all transform hover:scale-110 hover:drop-shadow-lg"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/yourtwitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-400 hover:text-blue-500 transition-all transform hover:scale-110 hover:drop-shadow-lg"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-blue-500 hover:text-blue-600 transition-all transform hover:scale-110 hover:drop-shadow-lg"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm font-medium">
        © {new Date().getFullYear()} <span className="font-bold">Dray</span>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
