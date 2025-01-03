import React from "react";

const VideoDisplay: React.FC = () => {
  return (
    <div>
    <div className="bg-neutral-950 min-h-screen flex items-center justify-center py-10 px-4">
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Sample Video
        </h2>
        <video controls className="w-full max-w-lg rounded-lg shadow-lg">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> 
    </div>
    <div className="w-full bg-white h-12"></div>
    </div>
  );
  
};

export default VideoDisplay;
