import Image from "next/image";
import cover from "@/components/Images/cover.jpg";

export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-white text-black flex flex-col items-center justify-center px-6">
      {/* Background Design */}
      <div className="absolute inset-0 bg-gray-100 opacity-50 pointer-events-none"></div>
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-[10rem] font-extrabold text-gray-200 opacity-40">CREATIVE</h1>
      </div>
      
      {/* About Section */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold drop-shadow-lg animate-fade-in">
          About Me
        </h1>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
          <Image 
            src={cover} 
            alt="Genevive Mbesi" 
            className="w-40 h-40 rounded-full border-4 border-black shadow-lg" 
          />
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
            I’m <span className="font-bold text-black">Genevive Mbesi</span>, a Digital Creative & Web Development Technophile with a love for clean, visually appealing designs, I craft seamless user experiences. My passion for <span className="text-black font-semibold">graphic design, web design, Web development, and videography</span> allows me to tell compelling stories through visuals. Whether you need  a website, brand identity, or dynamic content, I bring creativity, precision, and a touch of magic to everything I create.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 mt-12 text-center">
        <h2 className="text-4xl font-bold drop-shadow-lg animate-fade-in">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 mt-6 max-w-4xl mx-auto text-gray-700">
          <div className="p-4 border border-black bg-black text-white rounded-lg shadow-md backdrop-blur-sm hover:border-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold">Frontend Development</h3>
            <p className="text-sm mt-2">Building modern, responsive, and engaging user interfaces.</p>
          </div>
          <div className="p-4 border border-black bg-black text-white rounded-lg shadow-md backdrop-blur-sm hover:border-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold">Graphic Design</h3>
            <p className="text-sm mt-2">Creating visually compelling designs that elevate brands.</p>
          </div>
          <div className="p-4 border border-black bg-black text-white rounded-lg shadow-md backdrop-blur-sm hover:border-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold">Videography</h3>
            <p className="text-sm mt-2">Telling impactful stories through dynamic visuals.</p>
          </div>
          <div className="p-4 border border-black bg-black text-white rounded-lg shadow-md backdrop-blur-sm hover:border-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold">Web Design</h3>
            <p className="text-sm mt-2">Crafting aesthetic, user-friendly website layouts.</p>
          </div>
          <div className="p-4 border border-black bg-black text-white rounded-lg shadow-md backdrop-blur-sm hover:border-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold">SEO</h3>
            <p className="text-sm mt-2">Optimizing websites for higher visibility and search rankings.</p>
          </div>
          <div className="p-4 border border-black bg-black text-white rounded-lg shadow-md backdrop-blur-sm hover:border-gray-700 transition duration-300">
            <h3 className="text-xl font-semibold">Social Media Management</h3>
            <p className="text-sm mt-2">Strategizing and curating content to enhance online presence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
