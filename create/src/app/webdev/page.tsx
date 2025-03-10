import React from "react";
import Image from "next/image";
import arthub from "@/components/Images/arthub.jpeg";
import talent from "@/components/Images/talent.jpeg";
import xo from "@/components/Images/xo.png";
import portfolio from "@/components/Images/Portfolio.jpeg";
import creative from "@/components/Images/creative.jpeg";
import commerce from "@/components/Images/commerce.jpeg";
import { AiFillGithub } from "react-icons/ai";
import cover from "@/components/Images/cover.jpg";

const projects = [
  {
    id: 1,
    title: "Talent",
    description:
      "A simple and professional company website portfolio set up to help local talent secure international job opportunities through .",
    image: talent,
    github: "https://github.com/Genevive-Mbesi/Talent-Frontiers-Solution",
    live: "https://talent--frontiers--solution.vercel.app",
    type: "Proffessional Website Portfolio",
  },
  {
    id: 2,
    title: "ArtHub_Ke",
    description:
      "ArtHub_Ke website is committed to presenting a curated selection of art services and products available for purchase. Developed using React and styled with Tailwind CSS to ensure a seamless and visually appealing experience for customers.",
    image: arthub,
    github: "https://github.com/Genevive-Mbesi/MbesiArt",
    live: "https://arthubke.vercel.app",
    type: "Product Catalog",
  },
 
  {
    id: 3,
    title: "React Auth App",
    description:
      "React application featuring authentication, a connect-three game, and responsive design. Developed using React.js, Tailwind CSS, and Firebase for authentication.",
    image: xo,
    github: "https://github.com/Genevive-Mbesi/React-auth-app",
    live: "https://react-auth-app-genevivembesis-projects.vercel.app/",
    type: "React xxx-ooo Game",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce application featuring admin authentication, product listings, secure payments with Stripe, order management, and responsive design. Built using Next.js (TypeScript), styled with Tailwind CSS and ShadCN, and Prisma for database management.",
    image: commerce,
    github: "https://github.com/Genevive-Mbesi/commerce",
    live: "https://mbesi-e-commerce.onrender.com",
    type: "E-commerce Website",
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "Personal portfolio developed using React and styled with Tailwind CSS to provide a seamless and visually appealing user experience.",
    image: portfolio,
    github: "https://github.com/Genevive-Mbesi/Portfolio",
    live: "https://mbesi.vercel.app",
    type: "Website Portfolio",
  },
  {
    id: 6,
    title: "Creative Portfolio",
    description:
      "This website has been developed and designed using Next.js and Tailwind CSS to show case my creative ability in design and web development.",
    image: creative,
    github: "https://github.com/Genevive-Mbesi/create",
    live: "https://creativembesi.vercel.app",
    type: "Creative Portfolio",
    
  },
];

const Web: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${cover.src})`,
      }}
    >
      {/* Glassmorphism Effect Container */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-black/60 backdrop-blur-lg p-10">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
          My Projects
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="w-full h-56 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
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
                    className="text-gray-300 hover:text-white transition"
                  >
                    <AiFillGithub className="text-3xl" />
                  </a>
                </h2>
                <p className="text-gray-400 text-sm">{project.type}</p>
                <p className="text-gray-300 mt-2">{project.description}</p>

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
                      {project.status }
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
