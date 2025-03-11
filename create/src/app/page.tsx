import cover from "@/components/Images/cover.jpg";
import Skills from "@/app/Skills/page"
import About from "@/app/About/page"

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
         Genevive Mbesi <br/> Creative Portfolio
        </h1>
        <p className="text-lg text-gray-200 mt-4 max-w-2xl leading-relaxed animate-fade-in">
        Bringing ideas to life through compelling design, web experiences, and digital storytelling.
        </p>
      </div>
      <div className="relative z-10 py-16">
            <About/>
            <Skills />
        </div>
    </div>
  );
}
