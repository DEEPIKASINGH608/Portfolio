import React from "react";
import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaXTwitter,
    FaDiscord,
    FaLocationDot
} from "react-icons/fa6";

const Contact = () => {
    const socialLinks = [
        {
            name: "LinkedIn",
            icon: <FaLinkedin size={24} />,
            link: "https://linkedin.com/in/deepikasingh0918",
            color: "hover:text-blue-500",
        },
        {
            name: "GitHub",
            icon: <FaGithub size={24} />,
            link: "https://github.com/DEEPIKASINGH608",
            color: "hover:text-white",
        },
        {
            name: "X (Twitter)",
            icon: <FaXTwitter size={24} />,
            link: "https://x.com/DeepikaSingh091",
            color: "hover:text-sky-400",
        },
        {
            name: "Discord",
            icon: <FaDiscord size={24} />,
            link: "https://discord.com/users/deepikasingh0165",
            color: "hover:text-indigo-400",
        },
    ];

    return (
        <section className="py-20 bg-slate-950 text-slate-200" id="contact">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Heading */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Connect With <span className="text-indigo-500">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Professional Channels */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Let's talk!</h3>
                            <p className="text-slate-400 leading-relaxed">
                                I'm currently looking for Summer 2026 internships and open-source collaborations.
                                Whether you have a technical question or just want to connect, feel free to reach out.
                            </p>
                        </div>

                        {/* Direct Contact Cards */}
                        <div className="space-y-4">
                            <a href="mailto:ds0648775@gmail.com" className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all group">
                                <FaEnvelope className="text-indigo-500 group-hover:scale-110 transition-transform" size={20} />
                                <span className="text-slate-300 font-medium">ds0648775@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl cursor-default">
                                <FaLocationDot className="text-indigo-500" size={20} />
                                <span className="text-slate-300 font-medium">Rajkiya Engineering College Sonbhadra, Uttar Pradesh</span>
                            </div>
                        </div>

                        {/* Social Icon Grid */}
                        <div className="pt-6">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Social Ecosystem</p>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`p-4 bg-slate-900 border border-slate-800 rounded-2xl transition-all ${social.color} hover:-translate-y-1 hover:border-indigo-500/30`}
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: The "Recruiter" CTA */}
                    <div className="lg:col-span-7">
                        <div className="h-full bg-gradient-to-br from-indigo-600/10 to-transparent border border-indigo-500/10 p-10 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to collaborate on the next big project?
                                </h3>
                                <p className="text-lg text-slate-400 mb-8 max-w-lg">
                                    I bring a mix of <span className="text-white">Full-Stack engineering</span> and <span className="text-white">Open Source experience</span> to the table. Let’s discuss how I can add value to your team.
                                </p>
                                <a
                                    href="mailto:ds0648775@gmail.com"
                                    className="inline-block px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-600/20"
                                >
                                    Send an Inquiry
                                </a>
                            </div>

                            {/* Abstract decorative elements */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;




