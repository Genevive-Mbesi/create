import React from "react";
import Image from "next/image";
import web from "@/components/Images/web.jpg";
import video from "@/components/Images/videography.jpg";
import socials from "@/components/Images/social media.jpg";
import seo from "@/components/Images/seo.jpg";
import webmgt from "@/components/Images/webmgt.jpg";
import graphic from "@/components/Images/graphic.jpg";
import Slide from "@/components/Slide";

const Skills: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
       <Slide>
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          View Projects
        </h2>
        
        {/* Image Grid */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {[  
            { src: webmgt, title: "Web Development", link: "/webdev" },
            { src: graphic, title: "Graphic Design", link: "/graphics" },
            { src: video, title: "Videography", link: "/videography" },
            { src: web, title: "Web Design", link: "#" },
            { src: socials, title: "Social Media Management", link: "#" },
            { src: seo, title: "Search Engine Optimization", link: "#" }
          ].map((skill, index) => (
            <div key={index} className="relative w-full group cursor-pointer">
              <a href={skill.link} className="block relative">
                <Image
                  src={skill.src}
                  alt={skill.title}
                  width={1200}
                  height={800}
                  className="w-full h-72 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <span className="text-white font-bold text-lg">View Work</span>
                </div>
              </a>
              <div className="text-center mt-6">
                <h1 className="text-xl font-bold text-black animate-wave group-hover:text-gray-700 transition-colors duration-300">
                  {skill.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      </Slide>
    </div>
  );
};

export default Skills;
