import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaArrowRight, FaXTwitter } from "react-icons/fa6";
import profileImg from '../assets/profileb.jpeg';


const Hero = () => {
  // 1. Initialize state at the top
  const [displayText, setDisplayText] = useState('');
  const fullText = "Future of Web";
  const typingSpeed = 150;

  // 2. Setup the typewriter effect
  useEffect(() => {
    let currentIdx = 0;
    const intervalId = setInterval(() => {
      if (currentIdx < fullText.length) {
        setDisplayText(fullText.slice(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);


  return (

    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0f172a] px-6 transition-colors duration-500 light:bg-slate-50">

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#9D50FF]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-[#00F0FF]/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-md">
            <span className="text-[#00F0FF] text-xs font-bold tracking-[0.2em] uppercase">
              Available for Internships
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Building the <br />
            <span className="relative bg-gradient-to-r from-[#9D50FF] via-[#00F0FF] to-[#9D50FF] bg-[length:200%_auto] bg-clip-text text-transparent">
              
              {displayText}
              <span className="ml-1 inline-block w-1 h-12 md:h-16 bg-[#00F0FF] animate-blink align-middle"></span>
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I'm <span className="text-white font-semibold">Deepika Singh</span>, a Full-Stack Developer
            specializing in the MERN stack and Python. Currently engineering
            innovative solutions while mastering DSA and AI/ML.
          </p>

          <div className="flex flex-wrap text-1xl items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="px-2 py-2 bg-gradient-to-r from-[#9D50FF] to-[#00F0FF] text-slate-900 font-black rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              VIEW PROJECTS
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-4 ml-2">
              <a href="https://github.com/DEEPIKASINGH608" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-[#00F0FF] transition-all">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/deepikasingh0918" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-[#9D50FF] transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/DeepikaSingh091" target="_blank" rel="noreferrer" title="Twitter / X" className="p-3 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-[#00F0FF] transition-all">
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content (Image Section) */}
        <div className="relative flex justify-center items-center">
          <div className="relative group">
            {/* Animated Glow Behind Image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9D50FF] to-[#00F0FF] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            {/* Image Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-[#16161D] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImg}
                alt="Deepika Singh"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />

              {/* Overlay Decoration */}
              <div className="absolute inset-0 border-[16px] border-[#0f172a]/20 pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700 p-4 rounded-xl backdrop-blur-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-white text-sm font-mono tracking-tighter">DEEPIKA_SINGH.exe</span>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default Hero;

