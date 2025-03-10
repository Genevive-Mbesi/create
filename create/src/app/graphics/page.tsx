import React from "react";
import Image from "next/image";
import cover from "@/components/Images/cover.jpg";
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
    <div
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(${cover.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">Graphics</h2>
        <p className="text-lg mb-8">
          For all your{" "}
          <span className="font-semibold text-yellow-400">
            posters, logos, brochures, and flyers
          </span>
        </p>

        {/* Image Grid */}
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
      </div>
    </div>
  );
};

export default Graphics;
