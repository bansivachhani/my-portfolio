import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
const Skills = () => {
  const { isDark } = useTheme();

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Firebase', level: 75 },
        { name: 'Vercel', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'VS Code', level: 95 },
        { name: 'Responsive Design', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Skills & Technologies
            </h2>
            <div className={`w-32 h-1 mx-auto mb-8 bg-gradient-to-r ${
              isDark ? 'from-pink-400 to-purple-400' : 'from-purple-600 to-pink-600'
            }`}></div>
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Here are the technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 hover:scale-105 shadow-xl ${
                  isDark 
                    ? 'bg-purple-800/30 border-purple-700/50 hover:bg-purple-700/40' 
                    : 'bg-white/70 border-purple-200/50 hover:bg-white/90 shadow-purple-100/50'
                }`}
              >
                <h3 className={`text-2xl font-semibold mb-8 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                        {/* <span className={`font-semibold ${
                          isDark ? 'text-pink-400' : 'text-purple-600'
                        }`}>
                          {skill.level}%
                        </span> */}
                        <span
                        className="font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                        title={`Proficiency: ${skill.level}%`}
                        >
                        {skill.level}%
                        </span>


                      </div>
                     <div className={`w-full rounded-full h-3 md:h-4 ${isDark ? 'bg-purple-700/50' : 'bg-gray-200'}`}>

                       <div
                        className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r shadow-md ${
                            isDark 
                            ? 'from-green-400 to-blue-500' 
                            : 'from-green-500 to-blue-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                        ></div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;