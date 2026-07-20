import React from 'react';

export default function ProjectCard({ title, description, year }) {
  return (
    <div className="group relative bg-[#130E24]/40 border border-white/5 p-8 rounded-3xl hover:bg-[#1A1438]/80 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.2)] overflow-hidden">
      {/* Top gradient highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <h3 className="relative z-10 font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 text-2xl mb-3 tracking-tighter group-hover:from-cyan-300 group-hover:to-fuchsia-300 transition-all duration-500">
        {title} <span className="inline-block text-xs font-bold text-fuchsia-400 ml-3 py-1 px-3 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full align-middle">
          {year}
        </span>
      </h3>
      <p className="relative z-10 text-cyan-100/60 text-sm leading-relaxed font-light">{description}</p>
    </div>
  );
}
