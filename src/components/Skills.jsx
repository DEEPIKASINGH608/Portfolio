import React from "react";
import {
    FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDocker, FaDatabase, FaBrain
} from "react-icons/fa6";
import { SiMongodb, SiExpress, SiCplusplus, SiFlask, SiNumpy } from "react-icons/si";

const Skills = () => {
    return (
        <section className="py-20 bg-slate-950 text-slate-200" id="skills">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Technical <span className="text-indigo-500">Expertise</span>
                    </h2>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    <p className="mt-4 text-slate-400">Beyond the syntax: how I apply my toolkit to real-world challenges.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* MERN Stack Section */}
                    <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-indigo-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-2xl group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                <FaReact size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Full-Stack Engineering</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Expertise in the <span className="text-white font-medium">MERN Stack</span> (MongoDB, Express, React, Node.js).
                            I demonstrated this by architecting <span className="text-indigo-400">Task Planet</span>, where I handled everything
                            from complex state management in React to secure backend routing and MongoDB Atlas integration.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">React</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Node.js</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">MongoDB</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">SQL</span>
                        </div>
                    </div>

                    {/* Python & AI Section */}
                    <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-emerald-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                <FaBrain size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">AI & Automation</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Proficient in <span className="text-white font-medium">Python, NumPy, and Flask</span>.
                            I built <span className="text-emerald-400">Jarvis</span>, a voice-activated assistant using speech recognition,
                            and developed a backend for an <span className="text-emerald-400">AI Medical Assistant</span> that predicts diseases
                            based on symptoms using encoded data models.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Python</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Flask</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">NumPy</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Machine Learning</span>
                        </div>
                    </div>

                    {/* Languages & DSA */}
                    <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all">
                                <SiCplusplus size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Core Fundamentals</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Strong foundation in <span className="text-white font-medium">C++, Java, and C</span>.
                            I actively apply these for <span className="text-blue-400">Data Structures & Algorithms</span>, maintaining
                            a consistent problem-solving streak on LeetCode to ensure my logic remains sharp and optimized.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">C++</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Java</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">DSA</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Logic Building</span>
                        </div>
                    </div>

                    {/* Collaboration & DevOps */}
                    <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-cyan-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-cyan-500/10 text-cyan-500 rounded-2xl group-hover:bg-cyan-500 group-hover:text-white transition-all">
                                <FaGitAlt size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">DevOps & Open Source</h3>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Committed to <span className="text-white font-medium">Open Source</span> and version control.
                            From managing complex PRs with <span className="text-cyan-400">Git & GitHub</span> to containerizing
                            workflows with <span className="text-cyan-400">Docker</span>, I thrive in collaborative environments
                            like Learning Unlimited(many PRs) and GirlScript Summer of Code.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Git</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">GitHub</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Docker</span>
                            <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono">Open Source</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;




