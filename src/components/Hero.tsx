import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-1/2 -right-1/2 w-full h-full rounded-full transform rotate-12 ${
          isDark 
            ? 'bg-gradient-to-br from-pink-400/10 to-purple-600/10' 
            : 'bg-gradient-to-br from-purple-300/20 to-pink-300/20'
        }`}></div>
        <div className={`absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full transform -rotate-12 ${
          isDark 
            ? 'bg-gradient-to-tr from-purple-400/10 to-pink-600/10' 
            : 'bg-gradient-to-tr from-blue-300/20 to-purple-300/20'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className={`w-36 h-36 mx-auto mb-8 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-4 ${
            isDark 
              ? 'bg-gradient-to-br from-pink-400 to-purple-600 border-pink-400/30' 
              : 'bg-gradient-to-br from-purple-500 to-pink-500 border-purple-300/50'
          }`}>
            <span className="text-5xl font-bold text-white">BV</span>
          </div>

          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Hi, I'm{' '}
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-pink-400 to-purple-400' 
                : 'from-purple-600 to-pink-600'
            }`}>
              Bansi Vachhani
            </span>
          </h1>

          <p className={`text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Full Stack Developer passionate about creating innovative web solutions
          </p>

          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I build end-to-end applications with modern technologies, focusing on clean code, 
            user experience, and scalable architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-10 py-4 font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm ${
                isDark 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              }`}
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-10 py-4 border-2 font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm ${
                isDark 
                  ? 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-purple-900' 
                  : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
              }`}
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/bansivachhani"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                isDark 
                  ? 'bg-purple-800/50 text-gray-300 hover:text-white hover:bg-purple-700' 
                  : 'bg-white/70 text-gray-700 hover:text-purple-600 hover:bg-white shadow-lg'
              }`}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/bansi-vachhani-787a8b282/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                isDark 
                  ? 'bg-purple-800/50 text-gray-300 hover:text-white hover:bg-purple-700' 
                  : 'bg-white/70 text-gray-700 hover:text-purple-600 hover:bg-white shadow-lg'
              }`}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/bansivachhani153/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                isDark 
                  ? 'bg-purple-800/50 text-gray-300 hover:text-white hover:bg-purple-700' 
                  : 'bg-white/70 text-gray-700 hover:text-purple-600 hover:bg-white shadow-lg'
              }`}
            >
              <Code size={20} />
            </a>
            <a
              href="mailto:bansi.vachhani@example.com"
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm ${
                isDark 
                  ? 'bg-purple-800/50 text-gray-300 hover:text-white hover:bg-purple-700' 
                  : 'bg-white/70 text-gray-700 hover:text-purple-600 hover:bg-white shadow-lg'
              }`}
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToAbout}
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-colors duration-300 animate-bounce ${
            isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;