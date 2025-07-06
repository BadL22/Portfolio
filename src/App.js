import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeDownload from './components/ResumeDownload';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <ResumeDownload />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;