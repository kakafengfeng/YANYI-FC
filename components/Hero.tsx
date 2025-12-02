import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed transform scale-105 animate-subtle-zoom"></div>
      
      {/* Particles/Overlay Effect (CSS Only for Simplicity) */}
      <div className="absolute inset-0 bg-gradient-to-t from-club-navy via-transparent to-transparent opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <h2 className="text-club-red font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">欢迎加入荣耀塘外</h2>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-tight animate-fade-in-up delay-100">
          咆哮 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">致胜</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-10 animate-fade-in-up delay-200">
          不仅仅是一家俱乐部。这是一段建立在激情、坚韧和荣耀之上的传奇。加入我们，就在塘外竞技场。
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
          <a href="#team" className="bg-club-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
            探索球队
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#tickets" className="border-2 border-white text-white hover:bg-white hover:text-club-navy font-bold py-4 px-8 rounded-none uppercase tracking-widest transition-all flex items-center justify-center">
            购买门票
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-club-red rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
