import React from "react";
import { FaRocket, FaCodeBranch, FaTerminal, FaLightbulb } from "react-icons/fa6";

const About = () => {
    return (
        <section className="py-20 bg-slate-950 text-slate-200" id="about">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Heading */}
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        The Person Behind The <span className="text-indigo-500">Code</span>
                    </h2>
                    <div className="h-1 w-20 bg-indigo-500 rounded mx-auto md:mx-0"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Your Story & Philosophy */}
                    <div className="md:col-span-7 space-y-6">
                        <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                            <FaLightbulb className="text-indigo-500" /> My Journey
                        </h3>
                        <p className="text-lg leading-relaxed text-slate-400">
                            I am a <span className="text-white font-medium">Full-Stack Developer</span> fueled by the challenge of turning complex logic into seamless user experiences. My fascination with technology has evolved into a deep expertise in the <span className="text-indigo-400">MERN stack</span> and Python.
                        </p>

                        <p className="text-lg leading-relaxed text-slate-400">
                            I don't just build websites; I build solutions. From architecting the backend for
                            <span className="text-white font-medium"> Task Planet</span> to creating an AI-driven assistant
                            like <span className="text-indigo-400 font-medium">Jarvis</span>, I treat every project as an
                            opportunity to push my boundaries and learn something new.
                        </p>

                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl mt-8">
                            <h3 className="text-xl font-semibold text-white mb-2">My Philosophy</h3>
                            <p className="italic text-slate-500">
                                "I believe great software is built at the intersection of rigorous logic and creative design.
                                Consistency in learning is my biggest competitive advantage."
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Experience Highlights */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl space-y-6">
                            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                Milestones & Dedication
                            </h3>

                            <div className="flex gap-4">
                                <div className="mt-1 text-indigo-500"><FaRocket size={20} /></div>
                                <div>
                                    <h4 className="font-semibold text-white text-lg">Project Architect</h4>
                                    <p className="text-sm text-slate-500">Built & deployed full-scale apps like Task Planet using MERN & Vercel.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 text-indigo-500"><FaCodeBranch size={20} /></div>
                                <div>
                                    <h4 className="font-semibold text-white text-lg">Open Source Contributor</h4>
                                    <p className="text-sm text-slate-500">Active contributor to communities like ESP-LEARNING-UNLIMITED and GSSoC.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="mt-1 text-indigo-500"><FaTerminal size={20} /></div>
                                <div>
                                    <h4 className="font-semibold text-white text-lg">Logic Enthusiast</h4>
                                    <p className="text-sm text-slate-500">Mastering DSA and building the next generation of web tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;



