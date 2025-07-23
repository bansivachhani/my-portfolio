import React from 'react';
import { Heart, Github, Linkedin, Code, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/bansivachhani', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/bansi-vachhani-787a8b282/', label: 'LinkedIn' },
    { icon: <Code size={20} />, href: 'https://leetcode.com/bansivachhani153/', label: 'LeetCode' },
    { icon: <Mail size={20} />, href: 'mailto:bansi.vachhani@example.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t backdrop-blur-sm ${
      isDark 
        ? 'bg-purple-900 border-purple-800' 
        : 'bg-white/70 border-purple-200'
    }`}>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className={`text-3xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Bansi<span className={isDark ? 'text-pink-400' : 'text-purple-600'}>.</span>
              </div>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Full Stack Developer passionate about creating innovative web solutions 
                and bringing ideas to life through code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h3 className={`font-semibold mb-6 text-xl ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Quick Links</h3>
              <div className="space-y-3">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block transition-colors duration-300 mx-auto ${
                      isDark 
                        ? 'text-gray-400 hover:text-pink-400' 
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="text-center md:text-right">
              <h3 className={`font-semibold mb-6 text-xl ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Let's Connect</h3>
              <div className="flex justify-center md:justify-end space-x-4 mb-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                      isDark 
                        ? 'bg-purple-800 text-gray-400 hover:text-white hover:bg-purple-700' 
                        : 'bg-purple-100 text-gray-600 hover:text-purple-600 hover:bg-purple-200'
                    }`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Always open to new opportunities
              </p>
            </div>
          </div>

          <div className={`border-t mt-12 pt-8 text-center ${
            isDark ? 'border-purple-800' : 'border-purple-200'
          }`}>
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © {currentYear} Bansi Vachhani. All rights reserved.
              </p>
              <div className={`flex items-center space-x-1 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span>Made with</span>
                <Heart size={18} className="text-red-500 mx-1" />
                <span>using React & Tailwind CSS</span>
              </div>
              <button
                onClick={scrollToTop}
                className={`font-medium transition-colors duration-300 ${
                  isDark 
                    ? 'text-pink-400 hover:text-pink-300' 
                    : 'text-purple-600 hover:text-purple-500'
                }`}
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;