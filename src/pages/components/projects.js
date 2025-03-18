import Image from 'next/image';
import namify from '../../../public/namify.png';
import jobSeek from '../../../public/jobSeek.jpg';
import zoomcar from "../../../public/Zoomcar.png";
import ferofly from "../../../public/ferofly.png";
import dnews from "../../../public/dnews.png";
import { FaArrowDown } from 'react-icons/fa';

const projects = [
  {
    name: "Ferofly",
    link: "https://ferofly-xi.vercel.app/",
    githubLink: "https://github.com/DheVam/Ferofly",
    image: ferofly,
    desc: "A ReactJS demo showcasing cool CSS tricks & parallax effects.",
  },
  {
    name: "Job Seek",
    link: "https://github.com/DheVam/JobSeek",
    githubLink: "https://github.com/DheVam/JobSeek",
    image: jobSeek,
    desc: "A mobile app with infinite scrolling & offline job bookmarks.",
  },
  {
    name: "Namify",
    link: "https://namify-omega.vercel.app/",
    githubLink: "https://github.com/DheVam/Namify",
    image: namify,
    desc: "React app with API fetching, search, pagination & filters.",
  },
  {
    name: "Zoomcar Clone",
    link: "https://zoomcar-clone.vercel.app/",
    githubLink: "https://github.com/DheVam/Zoomcar-clone",
    image: zoomcar,
    desc: "A responsive Zoomcar clone with reusable UI components.",
  },
  {
    name: "D-News",
    link: "https://d-news-murex.vercel.app/",
    githubLink: "https://github.com/DheVam/D-News",
    image: dnews,
    desc: "ReactJS news app using NEWSapi with lazy loading & pagination.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="h-screen bg-gray-900 text-white text-center flex flex-col ">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mt-6">Projects</h2>

      {/* Project List */}
      <div className="flex-grow overflow-hidden px-4 md:px-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {projects.map(({ name, link, githubLink, image, desc }) => (
            <div
              key={name}
              className="bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-3"
            >
              <div className="relative h-36 w-full">
                <Image src={image} alt={name} fill className="object-cover rounded-md" />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-400 text-xs mt-1">{desc}</p>
                <div className="flex justify-between items-center mt-3 text-sm">
                  <a href={link} className="text-blue-400 hover:text-blue-500 font-medium transition">
                    View
                  </a>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 font-medium transition">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Button at the Bottom */}
      <div className="flex justify-center items-center mb-8">
        <a href="#contact">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50">
            Interested? Contact Me!
            <FaArrowDown className="text-xl animate-bounce" />
          </button>
        </a>
      </div>
    </section>
  );
}
