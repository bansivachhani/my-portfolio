import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/bansivachhani',
      label: 'GitHub',
      color: isDark ? 'hover:text-gray-300' : 'hover:text-purple-600'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/bansi-vachhani-787a8b282/',
      label: 'LinkedIn',
      color: isDark ? 'hover:text-pink-400' : 'hover:text-purple-600'
    },
    {
      icon: <Code size={24} />,
      href: 'https://leetcode.com/bansivachhani153/',
      label: 'LeetCode',
      color: isDark ? 'hover:text-purple-400' : 'hover:text-purple-600'
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:bansi.vachhani@example.com',
      label: 'Email',
      color: isDark ? 'hover:text-pink-400' : 'hover:text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Work Together
            </h2>
            <div className={`w-32 h-1 mx-auto mb-8 bg-gradient-to-r ${
              isDark ? 'from-pink-400 to-purple-400' : 'from-purple-600 to-pink-600'
            }`}></div>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className={`text-3xl font-semibold mb-6 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Get In Touch</h3>
                <p className={`text-lg leading-relaxed mb-8 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Let's create something amazing together!
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm ${
                    isDark 
                      ? 'bg-purple-700/50 text-pink-400' 
                      : 'bg-purple-100/70 text-purple-600'
                  }`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Email</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>bansi.vachhani@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm ${
                    isDark 
                      ? 'bg-purple-700/50 text-pink-400' 
                      : 'bg-purple-100/70 text-purple-600'
                  }`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Location</h4>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Manavadar</p>
                  </div>
                </div>

            <div className="flex items-center space-x-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-sm ${
                isDark 
                ? 'bg-purple-700/50 text-pink-400' 
                : 'bg-purple-100/70 text-purple-600'
            }`}>
                <Phone size={20} />
            </div>
            <div>
            <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Phone
                    </h4>
                    <a 
                    href="tel:+918780762365" 
                    className={`${isDark ? 'text-gray-300' : 'text-gray-700'} underline hover:text-purple-500`}
                    >
                    +91 87807 62365
                    </a>
                    <p className={isDark ? 'text-gray-400 text-sm' : 'text-gray-600 text-sm'}>
                    Response time: Usually within 24 hours
                    </p>
                </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className={`font-semibold mb-6 text-xl ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Connect With Me</h4>
                <div className="flex space-x-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                        isDark 
                          ? 'bg-purple-700/50 text-gray-300' 
                          : 'bg-white/70 text-gray-700 shadow-lg'
                      } ${link.color}`}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`backdrop-blur-md rounded-2xl p-10 border shadow-xl ${
              isDark 
                ? 'bg-purple-800/30 border-purple-700/50' 
                : 'bg-white/70 border-purple-200/50 shadow-purple-100/50'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block font-medium mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                        isDark 
                          ? 'bg-purple-700/50 border-purple-600 text-white placeholder-gray-400 focus:border-pink-400' 
                          : 'bg-white/70 border-purple-200 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block font-medium mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                        isDark 
                          ? 'bg-purple-700/50 border-purple-600 text-white placeholder-gray-400 focus:border-pink-400' 
                          : 'bg-white/70 border-purple-200 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={`block font-medium mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                      isDark 
                        ? 'bg-purple-700/50 border-purple-600 text-white placeholder-gray-400 focus:border-pink-400' 
                        : 'bg-white/70 border-purple-200 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                    }`}
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block font-medium mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none resize-none backdrop-blur-sm ${
                      isDark 
                        ? 'bg-purple-700/50 border-purple-600 text-white placeholder-gray-400 focus:border-pink-400' 
                        : 'bg-white/70 border-purple-200 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                    }`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full px-8 py-4 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 bg-gradient-to-r ${
                    isDark 
                      ? 'from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700' 
                      : 'from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                  }`}
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;