import React from 'react';
import { Code } from 'lucide-react';

const getSkillConfig = (skillName) => {
    if (skillName === "React JS") {
      return {
        hasIcon: true,
        src: "/physics.png",
        className: "w-6 h-6 animate-[spin_3s_linear_infinite]"
      };
    }

    if (skillName === "Tailwind CSS") {
      return {
        hasIcon: true,
        src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", 
        className: "w-6 h-6"
      };
    }

    if (skillName.includes("JavaScript")) {
      return {
        hasIcon: true,
        src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        className: "w-6 h-6 rounded-sm" 
      };
    }

    return { hasIcon: false };
  };

const Skills = ({ skills }) => {

  return (
    <section id="skills" className="py-20 px-4 bg-black/30">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-center gap-3 mb-10">
          <Code className="text-purple-500" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const config = getSkillConfig(skill.name);

            return (
              <div key={index} className="group bg-[#1e1e1e] p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    
                    {config.hasIcon && (
                      <img 
                        src={config.src} 
                        alt={`${skill.name} Icon`} 
                        className={config.className} 
                      />
                    )}
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  <span className={`text-xs px-2 py-1 rounded text-black font-bold ${skill.color} opacity-80`}>
                    {skill.level}
                  </span>
                </div>

                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} transition-all duration-1000 ease-out group-hover:opacity-100 opacity-70`}
                    style={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Intermediate' ? '70%' : '40%' }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;