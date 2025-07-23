import React from 'react';
import { Code2, Database, Globe, Smartphone } from 'lucide-react';
//import { useTheme } from '../contexts/ThemeContext';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Modern React applications with TypeScript and cutting-edge frameworks'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Scalable APIs and database design with Node.js and various databases'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Full Stack Solutions',
      description: 'End-to-end application development from concept to deployment'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience across all devices'
    }
  ];

  return (
    <section id="about" className={`py-20 lg:py-32 ${
      isDark ? 'bg-purple-800/30' : 'bg-white/50'
    } backdrop-blur-sm`}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
            <div className={`w-32 h-1 mx-auto mb-8 bg-gradient-to-r ${
              isDark ? 'from-pink-400 to-purple-400' : 'from-purple-600 to-pink-600'
            }`}></div>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm a passionate full stack developer with a love for creating digital experiences 
              that make a difference. My journey in web development spans across modern frontend 
              frameworks and robust backend technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className={`text-3xl font-semibold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>My Story</h3>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                As a full stack developer, I thrive on the challenge of building complete web solutions 
                from the ground up. My expertise spans from crafting intuitive user interfaces to 
                designing scalable backend architectures.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends. Whether it's implementing complex business logic or optimizing user 
                experience, I approach every project with dedication and attention to detail.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                When I'm not coding, you'll find me exploring new technologies, contributing to open 
                source projects, or solving algorithmic challenges on platforms like LeetCode.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105 shadow-xl ${
                    isDark 
                      ? 'bg-purple-700/30 border-purple-600/30 hover:bg-purple-600/40' 
                      : 'bg-white/70 border-purple-200/50 hover:bg-white/90 shadow-purple-100/50'
                  }`}
                >
                  <div className={`mb-4 ${
                    isDark ? 'text-pink-400' : 'text-purple-600'
                  }`}>
                    {item.icon}
                  </div>
                  <h4 className={`font-semibold mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;