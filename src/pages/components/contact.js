import { FaEnvelope, FaLinkedin, FaGithub,FaArrowUp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="h-screen py-20 bg-gray-900 text-white text-center flex flex-col items-center justify-between">
      <h2 className="text-4xl font-bold text-blue-400 mb-6">Contact Me</h2>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 sm:w-96 text-lg flex flex-col items-start gap-6">
        {/* Email */}
        <a href="mailto:dheeraj.inspires@gmail.com" 
           className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition">
          <FaEnvelope className="text-2xl" />
          <span className="font-semibold">dheeraj.inspires@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/dheeraj-vamshi-v-00810a1b4" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition">
          <FaLinkedin className="text-2xl" />
          <span className="font-semibold">Dheeraj Vamshi</span>
        </a>

        {/* GitHub */}
        <a href="https://github.com/DheVam" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition">
          <FaGithub className="text-2xl" />
          <span className="font-semibold">DheVam</span>
        </a>
      </div>
      <div className="flex justify-center items-center mt-8">
        <a href="#hero">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50">
           Bact To Top
            <FaArrowUp className="text-xl animate-bounce" />
          </button>
        </a>
      </div>
    </section>
  );
}
