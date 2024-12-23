import React from "react";


const VideoDisplay: React.FC = () => {
  return (
   
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
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full"
            viewBox="44 4 1390 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,181.3C672,203,768,213,864,224C960,235,1056,245,1152,224C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
   
  );
};

export default VideoDisplay;
