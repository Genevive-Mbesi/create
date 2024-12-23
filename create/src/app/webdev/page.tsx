import React from "react";
import Image from "next/image";
import arthub from "@/components/Images/arthub.jpeg";
import xo from "@/components/Images/xo.png";
import portfolio from "@/components/Images/Portfolio.jpeg";
import creative from "@/components/Images/creative.jpeg";
import commerce from "@/components/Images/commerce.jpeg";
import { AiFillGithub } from "react-icons/ai";


const projects = [
  {
    id: 1,
    title: "ArtHub_Ke",
    description:
      "ArtHub_Ke website is committed to presenting a curated selection of art services and products available for purchase. Developed using React and styled with Tailwind CSS to ensure a seamless and visually appealing experience for customers.",
    image: arthub,
    github: "https://github.com/Genevive-Mbesi/MbesiArt",
    live: "https://arthubke.vercel.app",
    type: "Product Catalog",
  },
  {
    id: 2,
    title: "React Auth App",
    description:
      "React application featuring authentication, a connect-three game, and responsive design. Developed using React.js, Tailwind CSS, and Firebase for authentication.",
    image: xo,
    github: "https://github.com/Genevive-Mbesi/React-auth-app",
    live: "https://react-auth-app-genevivembesis-projects.vercel.app/",
    type: "React xxx-ooo Game",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce application featuring admin authentication, product listings, secure payments with Stripe, order management, and responsive design. Built using Next.js (TypeScript), styled with Tailwind CSS and ShadCN, and Prisma for database management.",
    image: commerce,
    github: "https://github.com/Genevive-Mbesi/commerce",
    live: "https://mbesi-e-commerce.onrender.com",
    type: "E-commerce Website",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "Personal portfolio developed using React and styled with Tailwind CSS to provide a seamless and visually appealing user experience.",
    image: portfolio,
    github: "https://github.com/Genevive-Mbesi/Portfolio",
    live: "https://mbesi.vercel.app",
    type: "Website Portfolio",
  },
  {
    id: 5,
    title: "Creative Portfolio",
    description:
      "This website has been developed and designed using Next.js and Tailwind CSS to show case my creative ability in design and web development.",
    image: creative,
    github: "https://github.com/Genevive-Mbesi/create",
    live: "",
    type: "Creative Portfolio",
    status: "In Progress",
  },
];


const Web: React.FC = () => {
  return (
   
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="sections-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project) => (
          <div key={project.id} className="card-container">
            <div className="card w-full bg- text-white shadow-xl rounded-lg overflow-hidden">
              <figure className="w-full h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </figure>
              <div className="card-body p-6 space-y-4">
                <h2 className="card-title text-2xl font-bold flex justify-between items-center">
                  {project.title}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <AiFillGithub className="text-3xl hover:text-gray-700" />
                  </a>
                </h2>
                <p className="text-gray-600">{project.type}</p>
                <p className="text-white-800">{project.description}</p>
                <div className="card-actions justify-end">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge border border-gray-400 px-4 py-2 rounded-md hover:bg-black hover:text-white"
                    >
                      View Live Site
                    </a>
                  ) : (
                    <span className="badge border border-gray-400 px-4 py-2 rounded-md">
                      {project.status || "Unavailable"}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Web;
