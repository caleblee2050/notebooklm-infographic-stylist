import React from 'react';
import Hero from './components/Hero';
import PromptGrid from './components/PromptGrid';

function App() {
  return (
    <div className="min-h-screen bg-[#030014] text-gray-100 font-sans selection:bg-purple-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/5 bg-[#030014]/60 px-4 backdrop-blur-xl md:px-8">
        <div className="flex items-center gap-2 text-lg font-bold tracking-tighter text-white">
          <div className="h-6 w-6 rounded-md bg-gradient-to-tr from-purple-500 to-cyan-400"></div>
          <span>NotebookLM <span className="text-purple-400 font-light">Stylist</span></span>
        </div>
        <a
          href="https://notebooklm.google.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all"
        >
          Open NotebookLM &rarr;
        </a>
      </nav>
      <main className="pt-16">
        <Hero />
        <div id="styles" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <PromptGrid />
        </div>
      </main>
      <footer className="border-t border-white/5 bg-black/50 py-12 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Infographic Prompt Stylist. Designed for NotebookLM Creators.</p>
        <p className="mt-2">Premium UI with Tailwind CSS & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
