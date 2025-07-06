import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/20 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:brandonladouceur17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/brandon-ladouceur-152216236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/BadL22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
          <p className="text-white/60">
            © 2024 Brandon Ladouceur. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;