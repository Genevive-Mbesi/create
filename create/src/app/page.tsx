import React from "react";
import Image from "next/image";
import cover from "@/components/Images/cover.jpg";
import Skills from "./Skills/page";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={cover}
          alt="Cover image"
          fill
          priority
          loading="eager"  
          className="object-cover object-center opacity-60 pointer-events-none"
        />
      </div>
      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 backdrop-blur-sm">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg animate-fade-in">
          Creative Portfolio
        </h1>
        <p className="text-lg text-gray-200 mt-4 max-w-2xl leading-relaxed animate-fade-in">
          Hello there! I am <span className="font-bold">Genevive Mbesi</span>, a creative 
          professional passionate about turning ideas into visually captivating designs.
          Expect a blend of flair and creativity in every project I take on.
        </p>
      </div>
      {/* Skills Section */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <Skills />
        </div>
      </div>
    </div>
  );
}
