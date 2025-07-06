import React from 'react';
import { Download } from 'lucide-react';

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Brandon-Ladouceur-Resume.pdf';
    link.download = 'Brandon-Ladouceur-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Download My Resume</h2>
          <p className="text-white/80 mb-8">
            Get a detailed overview of my education, projects, and technical skills
          </p>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mx-auto"
          >
            <Download size={20} />
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;