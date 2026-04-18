import React from 'react';
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0f172a] px-6">

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-electric-purple/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyber-cyan/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-md">
            <span className="text-cyber-cyan text-xs font-bold tracking-[0.2em] uppercase">
              Available for Internships 2028
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Building the <br />
            <span className="bg-gradient-to-r from-electric-purple via-cyber-cyan to-electric-purple bg-[length:200%_auto] animate-gradient-x bg-clip-text text-transparent">
              Future of Web
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I'm <span className="text-white font-semibold">Deepika Singh</span>, a Full-Stack Developer
            specializing in the MERN stack and Python. Currently engineering
            innovative solutions while mastering DSA.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="px-8 py-4 bg-gradient-to-r from-electric-purple to-cyber-cyan text-slate-900 font-black rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group">
              VIEW PROJECTS
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-4 ml-2">
              <a href="#" className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyber-cyan transition-all">
                <FaGithub size={24} />
              </a>
              <a href="#" className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-electric-purple transition-all">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Tech Stack Mini-Badges */}
          <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">React</span>
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Node.js</span>
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">MongoDB</span>
            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Python</span>
          </div>
        </div>

        {/* Right Content - Abstract Visual */}
        <div className="relative hidden lg:block">
          <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-4 overflow-hidden group">
             {/* Simple Code Snippet Illustration */}
             <div className="space-y-3 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                <div className="h-2 w-1/3 bg-electric-purple rounded-full"></div>
                <div className="h-2 w-1/2 bg-cyber-cyan rounded-full"></div>
                <div className="h-2 w-1/4 bg-slate-600 rounded-full"></div>
                <div className="h-2 w-2/3 bg-slate-600 rounded-full"></div>
                <div className="pt-4 h-2 w-1/2 bg-electric-purple rounded-full"></div>
                <div className="h-2 w-3/4 bg-cyber-cyan rounded-full"></div>
             </div>

             {/* Glowing Orbitals */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-slate-700 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute w-80 h-80 border border-dashed border-slate-800 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                <div className="absolute w-12 h-12 bg-cyber-cyan rounded-full blur-xl animate-pulse"></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;



