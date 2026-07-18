import React from 'react';

const projects = [
    {
        number: '01',
        title: 'AI Attendance System',
        text: 'A face-recognition based attendance app with a Streamlit frontend and a Supabase backend for storing records in real time.',
        tags: ['Python', 'OpenCV', 'Streamlit', 'Supabase'],
        link: '#',
    },
    {
        number: '02',
        title: 'Shortify — AI Text Summarizer',
        text: 'An AI-powered text summarizer that converts lengthy content into concise, meaningful summaries using generative AI and NLP, with context retention for fast, accurate results.',
        tags: ['Python', 'NLP', 'Generative AI', 'Flask'],
        link: 'https://github.com/muskanrai-20/Shortify',
        demo: 'https://shortify-xi-ten.vercel.app',
    },
    {
        number: '03',
        title: 'Intelligent Loan Approval',
        text: 'An AI-powered loan approval prediction system that analyzes applicant financial data and uses machine learning to automate loan eligibility decisions and credit risk assessment.',
        tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Streamlit'],
        link: 'https://github.com/muskanrai-20/intelligent-loan-approval',
    },
    {
        number: '04',
        title: 'Portfolio Website',
        text: 'This site — a React + Vite portfolio styled with Tailwind CSS and Framer Motion, deployed on GitHub Pages.',
        tags: ['React', 'Vite', 'Tailwind CSS'],
        link: '#',
    },
];

const ProjectCard = ({ project }) => (
    <div
        data-aos="fade-up"
        className="w-full rounded-[2rem] p-2 relative flex flex-col bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] hover:-translate-y-1 transition-all duration-500"
    >
        <div className="w-full h-full rounded-[1.5rem] p-8 flex flex-col bg-[#f4f4f4] min-h-[260px]">
            <span className="text-xl font-bold mb-2 font-serif italic text-gray-400">{project.number}</span>
            <h3 className="text-2xl font-black mb-3 tracking-tight text-gray-900">{project.title}</h3>
            <p className="text-sm leading-relaxed font-medium text-gray-500 mb-6 flex-1">
                {project.text}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#ff2a2a]/10 text-[#ff2a2a] text-xs font-bold">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex items-center gap-5">
                <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#ff2a2a] transition-colors group w-fit"
                >
                    {project.link.startsWith('http') ? 'View Code' : 'View Project'}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#ff2a2a] hover:text-black transition-colors group w-fit"
                    >
                        Live Demo
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div data-aos="fade-up" className="max-w-2xl mb-16">
                    <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
                        My Work
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
                        A few things I've built
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
                        Projects that combine web development with practical, real-world tools.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.number} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
