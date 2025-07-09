import React from 'react';
import { Code, Database, Globe, Zap, BookOpen, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const skills = [
    { name: "Python", level: 95, icon: Code, color: "blue" },
    { name: "Django", level: 90, icon: Database, color: "blue" },
    { name: "HTML/CSS", level: 90, icon: Globe, color: "purple" },
    { name: "JavaScript", level: 85, icon: Globe, color: "purple" },
    { name: "React", level: 80, icon: Zap, color: "indigo" },
    { name: "Git", level: 80, icon: Code, color: "blue" },
    { name: "C", level: 50, icon: Code, color: "purple" }
  ];

  const achievements = [
    {
      icon: BookOpen,
      title: "Educational Background",
      subtitle: "NED University of Engineering & Technology",
      description: "Pursuing degree in Computer & Information Systems Engineering with focus on software development and system design."
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      subtitle: "Django & React Specialist",
      description: "Specialized in building scalable web applications using Django backend and React frontend with REST API integration."
    },
    {
      icon: Users,
      title: "Problem Solver",
      subtitle: "Analytical Mindset",
      description: "Strong analytical and problem-solving skills with experience in debugging complex systems and optimizing performance."
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a strong foundation in computer science and hands-on experience in modern web technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">My Journey</h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I'm a Computer & Information Systems Engineering student at NED University, 
                    passionate about creating innovative solutions through code. My journey in 
                    software development began with curiosity and has evolved into a deep 
                    expertise in full-stack development.
                  </p>
                  
                  <p>
                    I specialize in building robust, scalable web applications using Django for 
                    backend development and React for creating dynamic, responsive user interfaces. 
                    My experience extends to designing and implementing RESTful APIs that power 
                    modern web applications.
                  </p>
                  
                  <p>
                    What drives me is the endless possibilities that technology offers to solve 
                    real-world problems. I'm constantly learning new technologies and best practices 
                    to deliver high-quality solutions that make a difference.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">{achievement.title}</h4>
                      <p className="text-blue-400 font-medium mb-2">{achievement.subtitle}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-2">Technical Skills</h3>
              <p className="text-gray-400">Technologies and tools I work with</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className={`w-5 h-5 text-${skill.color}-400`} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-400 text-sm">Years Learning</div>
            </div>
            <div className="text-center bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-gray-400 text-sm">Projects Built</div>
            </div>
            <div className="text-center bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-indigo-400 mb-2">8</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="text-center bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}