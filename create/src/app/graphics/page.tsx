"use client";
import React from "react";
import Image from "next/image";
import yellow from "@/components/Images/Yellow & Brown 3D We Are Hiring Poster.jpg";
import mbesi from "@/components/Images/NewsLetter.jpg";
import genny from "@/components/Images/Genevive Mbesi-logos.jpg";
import screenshot from "@/components/Images/Screenshot 2024-11-19 213322.png";
import screen from "@/components/Images/Screenshot 2024-11-19 213303.png";
import one from "@/components/Images/Mbesi Avartar.jpg"
import two from "@/components/Images/2.jpg";
import wall from "@/components/Images/SkillCode .jpg";

const images = [
  { src: yellow, desc: "Poster", top: "5%", left: "15%" },
  { src: mbesi, desc: "Newsletter Design", top: "15%", left: "40%" },
  { src: genny, desc: "Logo Design", top: "30%", left: "70%" },
  { src: screenshot, desc: "Information Flyer", top: "40%", left: "10%" },
  { src: screen, desc: "Company Bulletin", top: "50%", left: "50%" },
  { src: one, desc: "Avatar", top: "60%", left: "85%" },
  { src: two, desc: "Company Brochure", top: "70%", left: "25%" },
  { src: wall, desc: "Profile Cover", top: "80%", left: "60%" },
];

const Graphics: React.FC = () => {
  return (
    <div className="relative w-screen h-[150vh] bg-white overflow-hidden px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Graphics</h2>
        <p className="text-lg mb-12 font-semibold text-gray-700">
        Expressing Ideas Through Design
        </p>
      </div>

      {/* Grid Layout for Small Screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-6 p-6">
        {images.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.src}
              alt={item.desc}
              width={250}
              height={350}
              className="shadow-lg"
            />
            <div className="bg-white text-gray-900 shadow-md p-2 text-xs font-semibold text-center mt-2">
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Absolute Positioning for Large Screens */}
      <div className="hidden lg:block relative w-full h-full">
        {images.map((item, index) => (
          <div
            key={index}
            className="absolute transition-transform transform hover:scale-105"
            style={{
              top: item.top,
              left: item.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={item.src}
              alt={item.desc}
              width={250}
              height={350}
              className="shadow-lg"
            />
            <div className="bg-white text-gray-900 shadow-md p-2 text-xs font-semibold text-center mt-2">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graphics;
