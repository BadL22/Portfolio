import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-delay-2000"></div>
      </div>

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Brandon Ladouceur
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-200 mb-6">Front-End Developer</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Computer Programming student from Sault Ste. Marie, Ontario, passionate about creating 
            modern web experiences. Currently seeking junior developer opportunities to grow and contribute.
          </p>
          <button 
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;