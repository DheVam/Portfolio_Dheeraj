import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white" id="hero">
      {/* Wrapped content inside a div */}
      <div className="flex flex-col flex-grow items-center justify-center">
        <h1 className="text-4xl font-bold">Hey, I'm Dheeraj Vamshi V 👋</h1>
        <p className="mt-4 text-lg">Web Developer | React | Tailwind | Jest</p>
      </div>

      {/* Skills Button at the bottom */}
      <a href="#skills" className="flex flex-col items-center mb-8">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50">
          Skills
          <FaArrowDown className="text-xl animate-bounce" />
        </button>
      </a>
    </section>
  );
}
