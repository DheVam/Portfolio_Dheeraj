import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs,FaArrowDown } from "react-icons/fa";
import { SiTailwindcss, SiJest } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, link: "https://react.dev/" },
  { name: "JavaScript", icon: <FaJs />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "HTML", icon: <FaHtml5 />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: <FaCss3Alt />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Tailwind", icon: <SiTailwindcss />, link: "https://tailwindcss.com/docs" },
  { name: "Jest", icon: <SiJest />, link: "https://jestjs.io/docs/getting-started" },
  { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org/en/docs" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white text-center h-screen flex flex-col items-center justify-between">
      <h2 className="text-4xl font-bold text-blue-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {skills.map(({ name, icon, link }) => (
          <a 
            key={name}
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-10 py-10 bg-gray-800 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
          >
            <span className="text-2xl">{icon}</span>
            <span className="font-semibold">{name}</span>
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center mb-8">
        <a href="#projects">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50">
            My Projects
            <FaArrowDown className="text-xl animate-bounce" />
          </button>
        </a>
      </div>
    </section>
  );
}
