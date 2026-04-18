import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './pages/Home';
import { i } from 'framer-motion/client';
import About from './components/about';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { FaGithub, FaLinkedin, FaArrowRight, FaXTwitter } from "react-icons/fa6";
import Experience from './components/Experience';
import Contact from './components/Contacts';

const App = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
      </main>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App;

