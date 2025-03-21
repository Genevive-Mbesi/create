import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import talent from "@/components/Images/talent.jpeg"
import game from "@/components/Images/tictac.jpeg"
import art from "@/components/Images/artheart.jpeg"
import girl from "@/components/Images/Portfolio.jpeg"
import creative from "@/components/Images/creative.jpeg"
import commerce from "@/components/Images/commerce (1).jpeg"

const projects = [
  {
    id: 1,
    title: "Talent",
    description:
      "A simple and professional company website portfolio set up to help local talent secure international job opportunities.",
    image: talent,
    github: "https://github.com/Genevive-Mbesi/Talent-Frontiers-Solution",
    live: "https://talent--frontiers--solution.vercel.app",
    type: "Professional Website Portfolio",
  },
  {
    id: 2,
    title: "ArtHub_Ke",
    description:
      "A curated selection of art services and products available for purchase. Developed using React and styled with Tailwind CSS.",
    image: art,
    github: "https://github.com/Genevive-Mbesi/MbesiArt",
    live: "https://arthubke.vercel.app",
    type: "Product Catalog",
  },
  {
    id: 3,
    title: "React Auth App",
    description:
      "React app featuring authentication, a connect-three game, and responsive design using Firebase.",
    image: game,
    github: "https://github.com/Genevive-Mbesi/React-auth-app",
    live: "https://react-auth-app-genevivembesis-projects.vercel.app/",
    type: "React Game",
  },
  
  {
    id: 4,
    title: "Portfolio",
    description:
      "Personal portfolio developed using React and styled with Tailwind CSS for a seamless user experience.",
    image: girl,
    github: "https://github.com/Genevive-Mbesi/Portfolio",
    live: "https://mbesi.vercel.app",
    type: "Website Portfolio",
  },
  {
    id: 5,
    title: "Creative Portfolio",
    description:
      "Designed with Next.js and Tailwind CSS to showcase my creative ability in design and web development.",
    image: creative,
    github: "https://github.com/Genevive-Mbesi/create",
    live: "https://creativembesi.vercel.app",
    type: "Creative Portfolio",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce platform with admin authentication, product listings, secure payments with Stripe, and order management.",
    image: commerce,
    github: "https://github.com/Genevive-Mbesi/commerce",
    live: "https://mbesi-e-commerce.onrender.com",
    type: "E-commerce Website",
  },
];

const Web: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-white bg-center text-white"
      
    >
      {/* Glassmorphism Effect Container */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center  backdrop-blur-lg p-10">
        <h1 className="text-4xl font-extrabold text-black mb-8 text-center">
          Featured Websites
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-black backdrop-blur-md  border-white rounded-2xl shadow-lg overflow-hidden  transform transition duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="w-full h-56 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  priority
                  
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold flex justify-between items-center">
                  {project.title}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white  transition"
                  >
                    <AiFillGithub className="text-3xl" />
                  </a>
                </h2>
                <p className="text-gray-300 font-bold ">{project.type}</p>
                <p className="text-white-800 mt-2">{project.description}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex justify-end">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:from-pink-500 hover:to-purple-500 transition"
                    >
                      View Live
                    </a>
                  ) : (
                    <span className="px-4 py-2 text-sm font-semibold text-gray-400 bg-gray-700 rounded-lg shadow-md">
                      Not Available
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Web;
