import React from "react";
import { FaGithub, FaCode, FaRocket } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";



const Projects = () => {
    const projects = [
        {
            title: "Task Planet",
            description: "A comprehensive task management system built with the MERN stack. Features secure authentication, real-time updates, and a clean UI for productivity tracking.",
            tech: ["MongoDB", "Express", "React", "Node.js"],
            github: "https://github.com/DEEPIKASINGH608/Task-Planet",
            live: "https://task-planet-client.onrender.com",
            featured: true,
        },
        {
            title: "Personal AI Assistant (Jarvis)",
            description: "A Python-based voice assistant that uses speech recognition and automation to handle desktop tasks hands-free.",
            tech: ["Python", "Pyttsx3", "SpeechRecognition"],
            github: "https://github.com/DEEPIKASINGH608/personal-ai-assistant",
            live: null,
            featured: false,
        },
        {
            title: "Shortest Path Finder",
            description: "A visualization tool for pathfinding algorithms, demonstrating strong logical implementation and algorithm design.",
            tech: ["Python", "Algorithms", "Visualization"],
            github: "https://github.com/DEEPIKASINGH608/shortest-path-finder",
            live: null,
            featured: false,
        },
        {
            title: "Visual Secret Sharing",
            description: "An implementation of cryptographic techniques to share secret images visually through multiple 'shares'.",
            tech: ["JavaScript", "Cryptography", "Canvas API"],
            github: "https://github.com/DEEPIKASINGH608/Visual-Secret-Sharing",
            live: null,
            featured: false,
        },
        {
            title: "Fortress Password Manager",
            description: "A secure tool for generating and managing passwords, emphasizing data privacy and encryption.",
            tech: ["JavaScript", "Security", "Local Storage"],
            github: "https://github.com/DEEPIKASINGH608/Fortress-Your-Own-Password-Manager",
            live: null,
            featured: false,
        }
    ];

    return (
        <section className="py-20 bg-slate-950" id="projects">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Featured <span className="text-indigo-500">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-slate-900 border ${project.featured ? 'border-indigo-500/50' : 'border-slate-800'} p-6 rounded-3xl hover:-translate-y-2 transition-all duration-300`}
                        >
                            {project.featured && (
                                <span className="absolute -top-3 left-6 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                    <FaRocket /> Featured Project
                                </span>
                            )}

                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-slate-800 text-indigo-400 rounded-2xl">
                                    <FaCode size={24} />
                                </div>
                                <div className="flex gap-4 text-slate-400">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                        <FaGithub size={20} />
                                    </a>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-slate-800 text-slate-300 rounded-md">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action for more projects */}
                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/DEEPIKASINGH608"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-700 text-white rounded-full hover:bg-slate-800 hover:border-indigo-500 transition-all"
                    >
                        View More on GitHub <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;



