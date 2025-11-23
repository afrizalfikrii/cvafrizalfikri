import React from 'react';
import { Briefcase } from 'lucide-react';

const Experiences = ({ experiences }) => {
  return (
    <section id="experiences" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-pink-500" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience Journey</h2>
        </div>

        <div className="relative border-l-2 border-gray-700 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 border-2 border-pink-500 rounded-full group-hover:bg-pink-500 transition-colors duration-300"></div>
              
              <div className="bg-[#1e1e1e]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-pink-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 md:mt-0 bg-gray-800 px-3 py-1 rounded-full inline-block">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
