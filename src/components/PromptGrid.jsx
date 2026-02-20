import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { prompts, categories } from '../data/prompts';
import PromptCard from './PromptCard';

const PromptGrid = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    // Filter prompts based on category
    const filteredPrompts = activeCategory === 'All'
        ? prompts
        : prompts.filter(p => p.category === activeCategory);

    return (
        <div className="w-full">
            {/* Category Filter Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                <button
                    onClick={() => setActiveCategory('All')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'All'
                            ? 'bg-white text-black shadow-lg'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5 border-transparent'
                        }`}
                >
                    All Styles
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                ? 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid Layout */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredPrompts.map((item, i) => (
                        <PromptCard key={item.id} promptData={item} index={i} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default PromptGrid;
