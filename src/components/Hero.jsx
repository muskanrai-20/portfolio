import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            const newMutedState = !videoRef.current.muted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);
            if (!newMutedState && videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    return (
        <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
            <video
                ref={videoRef}
                src={`${import.meta.env.BASE_URL}videos/vedio.mp4`}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onPlay={handlePlay}
                onPause={handlePause}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

                <div className="flex flex-col items-start text-left max-w-2xl w-full">
                    <h1
                        data-aos="fade-up"
                        className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        Hi, I’m Muskan Rai <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]"> AI & Full Stack Developer</span>
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
                    >

                        Building intelligent web applications using AI, Machine Learning, Java, Python, and modern web technologies.
                    </p>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="flex flex-row flex-wrap items-center gap-3 w-full"
                    >
                        <a href="#projects" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
                            View My Work
                        </a>

                        <a href="#contact" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-delay="600"
                    className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group self-start md:self-auto"
                    onClick={toggleMute}
                >
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
                        {isMuted ? (
                            <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.8L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                            </svg>
                        )}
                    </div>
                    <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                        {isMuted ? "Unmute" : "Mute"}
                    </span>
                </div>
            </div>

            <div
                data-aos="fade-up"
                data-aos-delay="800"
                className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
            >
                <div className="animate-bounce">
                    <svg
                        className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;