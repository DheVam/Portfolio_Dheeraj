import { FaEnvelope, FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen py-20 bg-gray-900 text-white flex flex-col items-center justify-between"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-blue-400 tracking-wide">
        Contact Me
      </h2>

      {/* Contact Card */}
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-80 sm:w-96 text-lg flex flex-col items-start gap-6 border border-gray-700 hover:shadow-blue-500/50 transition-shadow mt-8">
        {/* Email */}
        <a
          href="mailto:dheeraj.inspires@gmail.com"
          className="flex items-center gap-3 text-blue-300 hover:text-blue-400 transition"
        >
          <FaEnvelope className="text-2xl text-blue-400" />
          <span className="font-semibold">dheeraj.inspires@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dheeraj-vamshi-v-00810a1b4"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-blue-300 hover:text-blue-400 transition"
        >
          <FaLinkedin className="text-2xl text-blue-400" />
          <span className="font-semibold">Dheeraj Vamshi</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/DheVam"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-blue-300 hover:text-blue-400 transition"
        >
          <FaGithub className="text-2xl text-blue-400" />
          <span className="font-semibold">DheVam</span>
        </a>
      </div>

      {/* Back to Top Button at the Bottom */}
      <div className="mt-auto">
        <a href="#hero">
          <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
            Back To Top
            <FaArrowUp className="text-xl animate-bounce" />
          </button>
        </a>
      </div>
    </section>
  );
}
