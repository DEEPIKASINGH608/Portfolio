import React from "react";
import { FaCodePullRequest, FaGlobe, FaTrophy, FaTerminal } from "react-icons/fa6";

const Experience = () => {
    const experiences = [
        {
            role: "Open Source Contributor",
            organization: "GirlScript Summer of Code (GSSoC) 2026",
            period: "April 2026 - Present",
            description: "Selected as a contributor for one of India's largest open-source programs. Focused on enhancing web components and fixing critical bugs in community-driven projects.",
            icon: <FaCodePullRequest />,
            color: "indigo"
        },
        {
            role: "Active Contributor",
            organization: "AOSSIE & Learning Unlimited",
            period: "Jan 2026 - March 2026",
            description: "Contributed to the 'ESP-Website' by designing UI components using CSS and React. Successfully merged PRs that improved the layout's structural consistency.",
            icon: <FaGlobe />,
            color: "blue"
        },
        {
            role: "Hackathon Participant",
            organization: "College & Community Hackathons",
            period: "2025 - 2026",
            description: "Collaborated in fast-paced environments to build prototypes like 'AI Medical Diagnosis Assistant'. Focused on rapid backend development and symptom-encoding logic.",
            icon: <FaTrophy />,
            color: "emerald"
        },
        {
            role: "Engineering Student (B.Tech)",
            organization: "AKTU - 2028 Batch",
            period: "Dec 2024 - Present",
            description: "Maintaining a strong academic foundation while mastering Data Structures and Algorithms. Consistently applying theoretical knowledge to personal projects like Task Planet.",
            icon: <FaTerminal />,
            color: "slate"
        }
    ];

    return (
        <section className="py-20 bg-slate-950" id="experience">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Heading */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        My <span className="text-indigo-500">Journey</span>
                    </h2>
                    <div className="h-1 w-20 bg-indigo-500 rounded mx-auto"></div>
                    <p className="mt-4 text-slate-400">Transforming curiosity into contributions and code.</p>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-12 ml-8 relative group">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[45px] top-1 p-2 bg-slate-950 border-2 border-slate-800 text-indigo-500 rounded-full group-hover:border-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                {exp.icon}
                            </div>

                            {/* Content Card */}
                            <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-slate-700 transition-all">
                                <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
                                    {exp.period}
                                </span>
                                <h3 className="text-xl font-bold text-white mt-1">
                                    {exp.role}
                                </h3>
                                <h4 className="text-slate-300 font-medium mb-4">
                                    {exp.organization}
                                </h4>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Note */}
                <div className="mt-12 p-6 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl text-center">
                    <p className="text-slate-400 text-sm">
                        I am currently seeking <span className="text-white font-semibold">Summer 2026 Internships</span> to apply my MERN and Python skills in a professional team environment.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;


