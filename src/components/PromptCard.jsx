import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Info } from 'lucide-react';

const PromptCard = ({ promptData, index }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(promptData.prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Generate a smooth gradient based on the index or category for the placeholder thumbnail
    const gradientClass = [
        "from-blue-500 to-cyan-400",
        "from-purple-500 to-pink-500",
        "from-emerald-400 to-teal-500",
        "from-orange-400 to-rose-400",
        "from-violet-600 to-indigo-500",
        "from-yellow-400 to-orange-500",
        "from-cyan-500 to-blue-600",
    ][index % 7];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col bg-[#0b0b13] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:border-white/20 transition-all"
        >
            {/* Thumbnail Area - Using Actual Image or Fallback Gradient */}
            <div className={`w-full h-48 ${!promptData.image ? 'bg-gradient-to-br ' + gradientClass : 'bg-black'} opacity-90 group-hover:opacity-100 transition-opacity relative overflow-hidden flex flex-col items-center justify-end p-6`}>
                {promptData.image && (
                    <img
                        src={promptData.image}
                        alt={promptData.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                    />
                )}
                {/* Subtle glass effect overlay */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0b0b13] via-[#0b0b13]/80 to-transparent"></div>
                <h3 className="relative z-10 text-white font-bold text-2xl text-center drop-shadow-lg tracking-tight leading-tight w-full">
                    {promptData.title}
                </h3>
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 rounded-md bg-white/10 text-gray-300">
                        {promptData.category}
                    </span>
                </div>

                <p className="text-sm text-gray-400 flex-grow mb-6 line-clamp-3">
                    {promptData.description}
                </p>

                {/* Action Button */}
                <button
                    onClick={handleCopy}
                    onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
                    aria-label={copied ? "Copied" : "Copy Prompt"}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${copied
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                        }`}
                >
                    {copied ? (
                        <>
                            <Check size={16} />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Copy size={16} />
                            Copy Prompt
                        </>
                    )}
                </button>
            </div>

            {/* Decorative hover glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
        </motion.div>
    );
};

export default PromptCard;
