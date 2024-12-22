import React from "react";
import Image from "next/image";
import cover from "@/components/Images/cover.jpg";
import Navbar from "./Navbar/page";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <Image
        src={cover}
        alt="Cover image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="z-[-1]"
      />
  {/* Animated "Creative Portfolio" Text */}
  <div className="text-center mt-12">
        <h1 className="text-5xl font-bold text-white animate-wave">Creative Portfolio</h1>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen">
        
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full animate-fade-in">
          
          <h2 className="text-2xl font-bold mb-4 text-left">Get to know me </h2>
          <p className="text-gray-700 text-left">
            Hello there!
            <br />
            I am<span className ='font-bold'> Genevive Mbesi</span>, a creative with an eye for turning ideas into a
            visually appealing reality,
            <br />
            prepare for a whole lot of flair and creativity packed into every
            project I take.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,181.3C672,203,768,213,864,224C960,235,1056,245,1152,224C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
