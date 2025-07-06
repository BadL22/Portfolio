import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    emailjs.init('INRQV23ypNd2COHSE-');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Brandon'
    };

    try {
      const response = await emailjs.send(
        'service_yb2gkak',
        'template_9twf9fk',
        templateParams,
        'INRQV23ypNd2COHSE'
      );

      console.log('SUCCESS!', response.status, response.text);
      setSubmitMessage('success');
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('EmailJS failed:', error);
      setSubmitMessage('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on a project? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
            
            {submitMessage === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200 text-center">
                ✅ Thank you for your message! I'll respond within 24 hours.
              </div>
            )}

            {submitMessage === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-center">
                ❌ Message delivery failed. Please email me directly at brandonladouceur17@gmail.com
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-white/90 font-semibold mb-2">Name</div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <div className="block text-white/90 font-semibold mb-2">Email</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <div className="block text-white/90 font-semibold mb-2">Message</div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;