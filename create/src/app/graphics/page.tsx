import React from "react";
import Image from "next/image";
import cover from "@/components/Images/cover.jpg";
import one from "@/components/Images/1.jpg";
import two from "@/components/Images/2.jpg";
import orange from "@/components/Images/Orange and Black Simple Real Estate For Sale Poster.jpg";
import screen from "@/components/Images/Screenshot 2024-11-19 213303.png";
import screenshot from "@/components/Images/Screenshot 2024-11-19 213322.png";
import wall from "@/components/Images/SkillCode .jpg";
import yellow from "@/components/Images/Yellow & Brown 3D We Are Hiring Poster.jpg";
import mbesi from "@/components/Images/NewsLetter.jpg";
import genny from "@/components/Images/Genevive Mbesi-logos.jpg";
import Slide from "@/components/Slide";

const Graphics: React.FC = () => {
  return (
    <div
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${cover.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4"> Graphics</h2>
        <p className="text-lg mb-8 font-semibold">
            posters, logos, brochures, and flyers
        </p>
        <Slide>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[yellow, orange, mbesi, genny, screenshot, screen, one, two, wall].map(
            (img, index) => (
              <div key={index} className="relative w-full">
                <Image
                  src={img}
                  alt={`Graphic ${index + 1}`}
                  layout="responsive"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
                />
              </div>
            )
          )}
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default Graphics;
