import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import CaribouImg from '../assets/images/Caribou.png';
import CryptoImg from '../assets/images/Crypto-Img.png';


const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Crypto Tracker",
      description: "A real-time cryptocurrency tracking application built with React. Features live price updates, filtering capabilities, and responsive design for monitoring your favorite digital assets.",
      technologies: ["React", "API Integration", "CSS3", "JavaScript"],
      image: CryptoImg,
      liveUrl: "https://crypto-tracker-mu-wheat.vercel.app/",
      githubUrl: "https://github.com/BadL22/Crypto-Tracker"
    },
    {
      title: "Caribou Log Cabin Resort",
      description: "A complete business website for a cabin rental company featuring booking functionality, seasonal availability logic, and responsive design optimized for tourism industry needs.",
      technologies: ["React", "JavaScript", "Responsive Design", "Business Logic"],
      image: CaribouImg,
      liveUrl: "https://caribou-1742.vercel.app/",
      githubUrl: "https://github.com/BadL22/Caribou"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in front-end development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Bigger image container */}
              <div className="w-full h-64 mb-6 rounded-xl overflow-hidden bg-gray-800">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/20 text-white px-6 py-2 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;