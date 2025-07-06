import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">BL</div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block text-white/90 hover:text-white transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block text-white/90 hover:text-white transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block text-white/90 hover:text-white transition-colors duration-300"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;