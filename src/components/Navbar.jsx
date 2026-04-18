import React, { useState, useEffect } from 'react';
import logo from '/logo.jpeg';
import { FaXmark, FaBars, FaMoon, FaSun } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light');
      if (!theme) localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const resumeLink = "https://drive.google.com/file/d/1XDUP_AnZ3vUoCCpMYzWZCkBgEvvWczK3/view?usp=drivesdk";

  return (
    <nav className="sticky top-0 z-[100] w-full px-6 py-4 backdrop-blur-xl border-b transition-colors duration-500 bg-[#0f172a]/90 border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto filter drop-shadow-[0_0_8px_#8B5CF6] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_#00F0FF]"
          />
          <span className="text-xl font-extrabold tracking-tighter text-white">
            DEEPIKA<span className="bg-gradient-to-r from-electric-purple to-cyber-cyan bg-clip-text text-transparent">SINGH</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group text-white/60 hover:text-cyber-cyan"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-electric-purple shadow-[0_0_10px_#8B5CF6] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="text-xl transition-colors duration-300 text-white/70 hover:text-cyber-cyan"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>


          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block relative overflow-hidden px-7 py-2.5 rounded-sm bg-transparent border border-cyber-cyan text-cyber-cyan font-black text-xs tracking-widest hover:text-dark-100 transition-all duration-300 group text-center"
          >
            <span className="relative z-10">RESUME</span>
            <div className="absolute inset-0 bg-cyber-cyan translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          {/* Mobile Menu Toggle Button */}
          <div className='lg:hidden flex items-center z-[110]'>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className='text-2xl cursor-pointer text-white transition-all duration-300'
              aria-label="Toggle Menu"
            >
              {showMenu ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>


      <div
        className={`fixed left-0 right-0 top-[68px] bg-[#0f172a]/98 backdrop-blur-2xl border-b border-slate-800 transition-all duration-300 lg:hidden z-[105] overflow-hidden ${showMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
      >
        <div className='flex flex-col items-center py-8 space-y-5'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setShowMenu(false)}
              className='group relative inline-block text-sm font-bold uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-cyber-cyan'
            >
              <span>{link.name}</span>
              <span className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-electric-purple to-cyber-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#00F0FF]'></span>
            </a>
          ))}


          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="w-full max-w-xs mt-6 px-10 py-4 bg-gradient-to-r from-electric-purple to-cyber-cyan text-white font-black rounded-sm shadow-[0_0_20px_rgba(139,92,246,0.4)] active:scale-95 transition-all duration-300 uppercase tracking-widest text-center"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



