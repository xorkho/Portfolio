import { Github, Code, Star, ExternalLink, Sparkles } from "lucide-react";

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      title: "To-Do List App",
      description:
        "A simple and intuitive to-do list app built using React, with task creation, deletion, and completion tracking.",
      github_link: "https://github.com/xorkho/My-Todo-List.git",
      tech: ["React", "CSS", "JavaScript"],
      gradient: "from-emerald-600 to-teal-600",
      hoverGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title: "Fitness Freak Website",
      description:
        "A gym-themed frontend portfolio styled in black and yellow, featuring products, contact forms, and modern UI elements.",
      github_link: "https://github.com/xorkho/Fitness-Freak-.git",
      tech: ["React", "Tailwind CSS"],
      gradient: "from-orange-600 to-red-600",
      hoverGradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
    },
  ];

  return (
   <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center pt-16 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 mb-6">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium text-blue-300">
            Featured Projects
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
          My Projects
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Explore my latest work and creative solutions
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 px-6 pb-16 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden"
            style={{
              animationDelay: `${index * 200}ms`,
              animation: "fadeInUp 0.8s ease-out both",
            }}
          >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md rounded-3xl"></div>

            {/* Hover Background Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${project.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
            ></div>

            <div className="relative z-10">
              {/* Header with Enhanced Design */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}
                  >
                    <Code className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-medium tracking-wide">
                        ACTIVE
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      Project #{project.id}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full border border-yellow-500/30 group-hover:border-yellow-400/50 transition-all duration-300">
                  <Star className="w-4 h-4 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-medium text-yellow-400">
                    Featured
                  </span>
                </div>
              </div>

              {/* Enhanced Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                {project.title}
              </h3>

              {/* Description with Better Typography */}
              <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base line-clamp-3 group-hover:text-slate-200 transition-colors duration-300">
                {project.description}
              </p>

              {/* Enhanced Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-800/80 backdrop-blur-sm text-slate-200 rounded-full border border-slate-600/50 hover:border-blue-500/50 hover:bg-slate-700/80 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group/btn"
                >
                  <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>View Code</span>
                </a>

                <button className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group/btn">
                  <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>

            {/* Subtle Corner Accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
          <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
