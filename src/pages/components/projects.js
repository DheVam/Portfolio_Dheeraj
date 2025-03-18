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
    desc: "Ferofly is a simple Desktop Web Application which is also built using ReactJS, very cool css tricks are implemented in this project, It is a demo application to showcase CSS Parallax effect."
  },
  {
    name: "Job Seek",
    link: "https://github.com/DheVam/JobSeek",
    githubLink: "https://github.com/DheVam/JobSeek",
    image: jobSeek,
    desc: "JobSeek is a mobile application designed to provide users with a seamless experience for browsing and bookmarking job listings. The app features a user-friendly interface with smooth navigation, infinite scroll, and offline storage for bookmarked jobs.",
  },
  {
    name: "Namify",
    link: "https://namify-omega.vercel.app/",
    githubLink: "https://github.com/DheVam/Namify",
    image: namify,
    desc: "​Namify is a simple website that demonstrates fetching data through an API, displaying it, enabling search functionality, and implementing pagination. A Simple React Project which showcases the power of debounce. It also has multiple filters for each column",
  },
  {
    name: "Zoomcar Clone",
    link: "https://zoomcar-clone.vercel.app/",
    githubLink: "https://github.com/DheVam/Zoomcar-clone",
    image: zoomcar,
    desc: "This is a simple Html focused project which is a direct clone to Zoomcar.This is again made with react with lots of reused components like carousel's, cards and buttins etc.",
  },
  {
    name: "D-News",
    link: "https://d-news-murex.vercel.app/",
    githubLink: "https://github.com/DheVam/D-News",
    image: dnews,
    desc: "D-News is a web application built using ReactJS, It uses NEWSapi.org which is an open source api for fetching all kinds of news. Pagination and Lazy Loading is implemented in this project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" bg-gray-900 text-white text-center flex flex-col">
      {/* Section Heading */}
      <h2 className="text-3xl font-extrabold mt-6">Projects</h2>

      {/* Project List with Flex-Grow */}
      <div className="flex-grow overflow-hidden  px-4 md:px-8 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ name, link, githubLink, image, desc }) => (
            <div
              key={name}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl p-4"
            >
              <div className="relative h-40 w-full">
                <Image src={image} alt={name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-white">{name}</h3>
                <p className="text-gray-400 text-sm mt-2">{desc}</p>
                <div className="flex justify-between items-center mt-4">
                  <a href={link} className="text-blue-400 hover:text-blue-500 font-medium transition">
                    View Project
                  </a>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 font-medium transition">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Button at the Bottom */}
      <div className="flex justify-center items-center mt-8">
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
