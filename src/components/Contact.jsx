import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const CONTACT_EMAIL = 'muskanrairai45@gmail.com';

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio contact from ${form.firstName} ${form.lastName}`);
        const body = encodeURIComponent(
            `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        setSent(true);
    };

    return (
        <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
            <motion.div
                style={{ y }}
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
            >
                <h1
                    className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
                    style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
                >
                    Contact
                </h1>
            </motion.div>

            <div className="relative z-10 w-full flex justify-end items-end">
                <div
                    data-aos="fade-up"
                    className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
                >
                    <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
                        Reach Me
                    </div>

                    <form className="flex flex-col gap-12 md:gap-16 w-full" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
                            <div className="flex-1 flex flex-col gap-10">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="First Name"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Last Name"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col">
                                <div className="relative h-full flex flex-col">
                                    <textarea
                                        id="message"
                                        placeholder="Type your message here"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 mt-4">
                            <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                                <p className="leading-relaxed max-w-[320px]">
                                    Fill this out and hit send — it'll open your email client with everything filled in, ready to go.
                                </p>
                            </div>

                            <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                                    {sent && (
                                        <p className="max-w-[250px] leading-relaxed text-white font-bold">
                                            Opening your email app now...
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto ml-auto"
                                    >
                                        Send
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;