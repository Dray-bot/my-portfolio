import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Contact Info */}
        <motion.div
          className="text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-2xl text-blue-500" />
            <p className="text-lg text-gray-700">ibiyemiayomide180@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <FaPhone className="text-2xl text-green-500" />
            <p className="text-lg text-gray-700">+234 816 818 1218</p>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-2xl text-red-500" />
            <p className="text-lg text-gray-700">Lagos, Nigeria</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-6 rounded-xl shadow-md space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
