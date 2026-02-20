import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative overflow-hidden w-full pt-20 pb-16 md:pt-32 md:pb-24">
            {/* Background glowing orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute top-20 -right-20 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-8 backdrop-blur-md"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
                    NotebookLM V1.0 Ready
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50 mb-6 drop-shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    100 Premium Styles for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">NotebookLM Infographics</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Discover 100 meticulously crafted visual styles across 10 distinct categories. Just copy the prompt and paste it directly into NotebookLM to generate stunning, consistent infographic slides.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <button
                        onClick={() => document.getElementById('styles').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transform hover:-translate-y-0.5"
                    >
                        Explore Styles
                    </button>
                </motion.div>
            </div>

            {/* Decorative Grid line */}
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent bottom-0"></div>
        </section>
    );
};

export default Hero;
