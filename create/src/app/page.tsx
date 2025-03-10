import React, { Suspense } from "react";
import cover from "@/components/Images/cover.jpg";

const Skills = React.lazy(() => import("./Skills/page"));

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
    
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none"
        style={{ backgroundImage: `url(${cover.src})` }} 
      ></div>

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
         
          <Suspense fallback={<div className="text-white text-center">Loading Skills...</div>}>
            <Skills />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
