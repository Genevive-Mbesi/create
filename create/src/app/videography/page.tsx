import React from "react";
import cover from "@/components/Images/cover.jpg";

const VideoDisplay: React.FC = () => {
  return (
<div>
    <div className=" pt-4 items-center" >
    <h2 className="text-3xl font-bold  text-center mb-4">
          Visual Narratives
       </h2> 
       </div>
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed px-4"
      style={{
        backgroundImage: `url(${cover.src})`,
      }}
    >
     
      {/* Glassmorphism Effect Container */}
      <div className="   p-6  max-w-3xl w-full flex flex-col items-center">
        
        {/* Video Container */}
        <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-xl border border-gray-400">
          <video
            controls
            className="w-full h-auto rounded-lg"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
    </div> 
  );
};

export default VideoDisplay;
