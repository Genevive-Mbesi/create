import React from "react";
import Image from "next/image";
import one from "@/components/Images/1.jpg";
import two from "@/components/Images/2.jpg";
import orange from "@/components/Images/Orange and Black Simple Real Estate For Sale Poster.jpg";
import screen from "@/components/Images/Screenshot 2024-11-19 213303.png";
import screenshot from "@/components/Images/Screenshot 2024-11-19 213322.png";
import wall from "@/components/Images/Wall Art Photo Pricing Menu List Frame.png";
import yellow from "@/components/Images/Yellow & Brown 3D We Are Hiring Poster.jpg";
import mbesi from "@/components/Images/Genevive Mbesi-logos_black.png";
import genny from "@/components/Images/Genevive Mbesi-logos.jpg";

const Graphics: React.FC = () => {
  return (
    <div className="bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-stone-100 mb-4">
          Graphics
        </h2>
        <p className="text-lg text-stone-300 mb-8">
          For all your{" "}
          <span className="font-semibold text-stone-100">
            posters, logos, brochures, and flyers
          </span>
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-8 justify-items-center">
          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={yellow}
              alt="Skill 1"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={orange}
              alt="Skill 2"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={mbesi}
              alt="Skill 3"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={genny}
              alt="Skill 4"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={screenshot}
              alt="Skill 5"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={screen}
              alt="Skill 6"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={one}
              alt="Skill 7"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={two}
              alt="Skill 8"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-3/4">
            <Image
              src={wall}
              alt="Skill 9"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-12"></div>
    </div>
    
  );
};

export default Graphics;
