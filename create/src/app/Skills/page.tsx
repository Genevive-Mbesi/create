import React from "react";
import Image from "next/image";
import web from "@/components/Images/web.jpg";
import video from "@/components/Images/videography.jpg";
import socials from "@/components/Images/social media.jpg";
import seo from "@/components/Images/seo.jpg";
import webmgt from "@/components/Images/webmgt.jpg";
import graphic from "@/components/Images/graphic.jpg";


const Skills: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          My Skills
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="w-full">
            <Image
              src={web}
              alt="Skill 1"
              width={1200}
              height={800}
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <div className="text-center mt-12">
            <a 
                href="/graphics">
              <h1 className="hover:bg-gray-100 text-xl font-bold text-bl animate-wave">
                Web Design
              </h1>
              </a>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={video}
              alt="Skill 2"
              width={1200}
              height={800}
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <div className="text-center mt-12">
              <h1 className="text-xl font-bold text-bl animate-wave">
                Videography
              </h1>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={socials}
              alt="Skill 3"
              width={1200}
              height={800}
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <div className="text-center mt-12">
              <h1 className="text-xl font-bold text-bl animate-wave">
                Social Media Managament
              </h1>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={seo}
              alt="Skill 4"
              width={1200}
              height={800}
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <div className="text-center mt-12">
              <h1 className="text-xl font-bold text-bl animate-wave">
                Search Engine Optimization
              </h1>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={webmgt}
              alt="Skill 5"
              width={1200}
              height={800}
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <div className="text-center mt-12">
              <h1 className="text-xl font-bold text-bl animate-wave">
                Web Development
              </h1>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={graphic}
              alt="Skill 6"
              width={1200}
              height={800}
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
            <div className="text-center mt-12">
            <a 
                href="/graphics">
              <h1 className="hover:bg-gray-100 text-xl font-bold text-bl animate-wave">
                Graphic Design
              </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
