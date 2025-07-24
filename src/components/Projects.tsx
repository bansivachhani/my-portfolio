import React from 'react';
import { Github, Code, Image } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import blinkitImg from '../assets/blink it.png'
import jokesImg from '../assets/jokes.jpg'
import quoteImg from '../assets/quote.png'
import receipeImg from '../assets/receipe.png'
import weatherImg from '../assets/weather.webp'
import todoImg from '../assets/todo.jpg'


const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
    title: 'Blinkit Clone App',
    description: 'A complete clone of Blinkit grocery delivery app with modern UI...',
    image: blinkitImg,
    technologies: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
    githubLink: 'https://github.com/bansivachhani/Binkey-it',
    liveDemoLink: 'https://www.youtube.com/watch?v=slN124MPVrc',
    featured: true
    },
    {
        title: 'Todo List',
        description: 'A simple Todo List app with CRUD operations...',
        image : todoImg,
        technologies: ['React', 'JavaScript', 'CSS3'],
        githubLink: 'https://github.com/bansivachhani/todo-list-app',
        liveDemoLink: 'https://todo-list-app-alpha-lyart.vercel.app/',
        featured: true
    },
    {
      title: 'Jokes App',
      description: 'A fun and interactive jokes application that fetches random jokes from API. Features different joke categories, favorites functionality, and clean modern interface with smooth animations.',
      image: jokesImg,
      technologies: ['React', 'Jokes API', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/bansivachhani/Joke-Generator',
     liveDemoLink: 'https://joke-generator-lake.vercel.app/',
      featured: true
    },
    {
      title: 'Quote Generator App',
      description: 'Inspirational quote generator with beautiful typography and sharing functionality. Features random quotes, author information, category filtering, and social media sharing options.',
      image: quoteImg,
      technologies: ['React', 'Quotes API', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/bansivachhani/quote-generator-',
       liveDemoLink: 'https://quote-generator-liart-chi.vercel.app/',
      featured: true
    },
    
    {
      title: 'Quiz Application',
      description: 'Interactive quiz app with multiple categories, timer functionality, score tracking, and results analysis. Features progress tracking, difficulty levels, and detailed performance analytics.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      githubLink: 'https://github.com/bansivachhani/quizapp',
       liveDemoLink: 'https://quizapp-zeta-sand.vercel.app/',
      featured: true
    },
    {
        title: 'Weather App',
        description: 'A simple weather application that fetches current weather and 5-day forecast from API Features location-based search, temperature units conversion, and weather conditions display.',
        image: weatherImg,
        technologies: ['React', 'Weather API', 'CSS3', 'JavaScript'],
        githubLink: 'https://github.com/bansivachhani/weather-app',
        liveDemoLink: 'https://weather-app-lime-omega-94.vercel.app/',
        featured: true
    }
    
  ];

  return (
    <section id="projects" className={`py-20 lg:py-32 ${
      isDark ? 'bg-purple-800/20' : 'bg-purple-50/50'
    } backdrop-blur-sm`}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              My Projects
            </h2>
            <div className={`w-32 h-1 mx-auto mb-8 bg-gradient-to-r ${
              isDark ? 'from-pink-400 to-purple-400' : 'from-purple-600 to-pink-600'
            }`}></div>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A showcase of my recent work in frontend and full stack development
            </p>
          </div>

          <div className="grid gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`backdrop-blur-md rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                  isDark 
                    ? 'bg-purple-800/30 border-purple-700/50 hover:bg-purple-700/40' 
                    : 'bg-white/70 border-purple-200/50 hover:bg-white/90 shadow-purple-100/50'
                } ${project.featured ? 'lg:grid lg:grid-cols-2' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? 'from-purple-900/80 to-transparent' : 'from-gray-900/60 to-transparent'
                  }`}></div>
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-lg backdrop-blur-sm ${
                      isDark ? 'bg-purple-800/50' : 'bg-white/70'
                    }`}>
                      <Image size={20} className={isDark ? 'text-pink-400' : 'text-purple-600'} />
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-2xl lg:text-3xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className={`px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r ${
                          isDark 
                            ? 'from-pink-500 to-purple-500 text-white' 
                            : 'from-purple-600 to-pink-600 text-white'
                        }`}>
                          Featured
                        </span>
                      )}
                    </div>

                    <p className={`text-lg mb-6 leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 text-sm font-medium rounded-full border backdrop-blur-sm ${
                            isDark 
                              ? 'bg-purple-700/50 text-pink-400 border-pink-400/20' 
                              : 'bg-purple-100/70 text-purple-700 border-purple-300/50'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                        isDark 
                          ? 'bg-purple-700 text-white hover:bg-purple-600' 
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    {/* <button
                      className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                        isDark 
                          ? 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-purple-900' 
                          : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                      }`}
                    >
                      <Image size={20} />
                      <span>View Screenshots</span>
                    </button> */}
                    <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                        isDark 
                        ? 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-purple-900' 
                        : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                    }`}
                    >
                    <Image size={20} />
                    <span>View Live Demo</span>
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/bansivachhani"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-3 px-8 py-4 border-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-purple-900' 
                  : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
              }`}
            >
              <Code size={22} />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;