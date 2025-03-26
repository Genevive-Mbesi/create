import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import talent from "@/components/Images/talent.jpeg";
import art from "@/components/Images/artheart.jpeg";
import game from "@/components/Images/tictac.jpeg";
import creative from "@/components/Images/creative.jpeg";
import commerce from "@/components/Images/commerce.jpeg";
import portfolio from "@/components/Images/Portfolio.jpeg";

const projects = [
  {
    title: "Company Website Portfolio",
    image: talent,
    github: "https://github.com/Genevive-Mbesi/Talent-Frontiers-Solution",
    live: "https://talent--frontiers--solution.vercel.app",
    description:
      "A professionally crafted corporate portfolio that enhances brand presence and provides a structured digital showcase.",
    tech: "Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Resend.",
  },
  {
    title: "ArtHub_Ke",
    image: art,
    github: "https://github.com/Genevive-Mbesi/MbesiArt",
    live: "https://arthubke.vercel.app",
    description:
      "A digital marketplace for curated art collections and creative services, providing artists a seamless online storefront.",
    tech: "React and Tailwind CSS.",
  },
  {
    title: "React Auth App",
    image: game,
    github: "https://github.com/Genevive-Mbesi/React-auth-app",
    live: "https://react-auth-app-genevivembesis-projects.vercel.app/",
    description:
      "A React authentication system powered by Firebase, integrated with a fun, interactive Tic-Tac-Toe game.",
    tech: "React.js, Firebase, and Tailwind CSS.",
  },
  {
    title: "Creative Portfolio",
    image: creative,
    github: "https://github.com/Genevive-Mbesi/create",
    live: "https://creativembesi.vercel.app",
    description:
      "A sleek and modern portfolio showcasing digital creativity and design expertise, crafted with a strong UI/UX approach.",
    tech: "Next.js and Tailwind CSS.",
  },
  {
    title: "E-commerce Platform",
    image: commerce,
    github: "https://github.com/Genevive-Mbesi/commerce",
    live: "https://mbesi-e-commerce.onrender.com",
    description:
      "A full-stack e-commerce platform with admin authentication, Stripe integration, and database management with Prisma.",
    tech: "Next.js (TypeScript), Tailwind CSS, and Shadcn UI.",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    github: "https://github.com/Genevive-Mbesi/Portfolio",
    live: "https://mbesi.vercel.app",
    description:
      "A structured and elegant personal portfolio, built to effectively showcase skills, projects, and professional expertise.",
    tech: "React and Tailwind CSS.",
  },
];

const Web: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black p-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center">
        Featured Websites
      </h1>

      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Project Image with Black Border */}
            <div className="w-full md:w-1/3">
              <div className="border-4 border-black rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold flex items-center justify-between">
                {project.title}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black transition hover:text-gray-600"
                >
                  <AiFillGithub className="text-3xl" />
                </a>
              </h2>
              <p className="text-gray-600 font-semibold">{project.tech}</p>
              <p className="mt-4 text-gray-800">{project.description}</p>

              {/* Action Button */}
              <div className="mt-6">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:from-pink-500 hover:to-purple-500 transition"
                  >
                    View Live
                  </a>
                ) : (
                  <span className="px-6 py-2 text-lg font-semibold text-gray-400 bg-gray-700 rounded-lg shadow-md">
                    Not Available
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
