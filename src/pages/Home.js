import React, { useState, useEffect } from "react";
// Note: Replace with your router Link component
import { Code, Palette, Zap, Download, ArrowRight } from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Specialist",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Enhanced Grid Pattern */}
      <div
        className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20h20v20H20V20zM0 0h20v20H0V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30`}
      />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Enhanced Avatar with Floating Animation */}
            <div className="mb-8 relative">
              <div className="w-60 h-60 sm:w-62 sm:h-62 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-[4px] shadow-2xl animate-float">
                <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src="/umer.jpg"
                    alt="Muhammad Umer Ahmed"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full bg-slate-800 flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <Code className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Name */}
            <div className="mb-3">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-text-shimmer">
                Muhammad Umer Ahmed
              </h1>
            </div>

            {/* Role Animation */}
            <div className="mb-4 h-14 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                <span className="relative inline-block">
                  <span className="text-blue-400 font-bold text-2xl md:text-3xl tracking-wide animate-type-writer">
                    {roles[currentRole]}
                  </span>
                  <span className="absolute -right-2 top-0 w-0.5 h-full bg-blue-400 animate-blink"></span>
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-8 md:leading-9 mb-8 px-6 font-normal tracking-normal animate-fade-in-up delay-300">
              Passionate software developer with expertise in building{" "}
              <span className="text-blue-400 font-semibold">
                scalable web applications
              </span>
              . I specialize in modern frontend technologies and robust backend
              systems, delivering{" "}
              <span className="text-purple-400 font-semibold">
                high-quality solutions
              </span>{" "}
              that drive business growth and enhance user experience.
            </p>

            {/* Enhanced Skills with Better Animations */}
            <div className="flex justify-center gap-8 sm:gap-12 mb-12 flex-wrap">
              <div className="group cursor-pointer animate-fade-in-up delay-500">
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 border border-slate-700 group-hover:border-blue-400 shadow-lg group-hover:shadow-blue-500/25">
                  <Code className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 group-hover:text-white transition-all duration-300 group-hover:animate-pulse" />
                </div>
                <p className="text-sm text-gray-400 mt-3 group-hover:text-blue-400 transition-colors font-medium tracking-wide">
                  Development
                </p>
              </div>
              <div className="group cursor-pointer animate-fade-in-up delay-700">
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 border border-slate-700 group-hover:border-purple-400 shadow-lg group-hover:shadow-purple-500/25">
                  <Palette className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400 group-hover:text-white transition-all duration-300 group-hover:animate-pulse" />
                </div>
                <p className="text-sm text-gray-400 mt-3 group-hover:text-purple-400 transition-colors font-medium tracking-wide">
                  Design
                </p>
              </div>
              <div className="group cursor-pointer animate-fade-in-up delay-900">
                <div className="w-16 h-16 sm:w-18 sm:h-18 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 border border-slate-700 group-hover:border-indigo-400 shadow-lg group-hover:shadow-indigo-500/25">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-400 group-hover:text-white transition-all duration-300 group-hover:animate-pulse" />
                </div>
                <p className="text-sm text-gray-400 mt-3 group-hover:text-indigo-400 transition-colors font-medium tracking-wide">
                  Innovation
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-1000">
              <a
                href="/projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center gap-2 group tracking-wide"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/Resume.pdf"
                download
                className="px-8 py-4 border border-gray-500 text-gray-300 rounded-xl hover:bg-gray-200 hover:text-slate-900 transition-all duration-300 font-bold flex items-center justify-center gap-2 group hover:scale-105 hover:-translate-y-1 tracking-wide"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Enhanced Stats with Better Typography */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-1200">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-black text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                  2+
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-wide group-hover:text-gray-300 transition-colors">
                  Years Experience
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-black text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                  30+
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-wide group-hover:text-gray-300 transition-colors">
                  Projects Completed
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-black text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                  100%
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-wide group-hover:text-gray-300 transition-colors">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-black text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                  24/7
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-wide group-hover:text-gray-300 transition-colors">
                  Support Available
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center hover:border-blue-400 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wave {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes type-writer {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-type-writer {
          animation: type-writer 0.5s ease-in-out;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-text-shimmer {
          background-size: 200% 200%;
          animation: text-shimmer 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-900 {
          animation-delay: 0.9s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-1200 {
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  );
}
