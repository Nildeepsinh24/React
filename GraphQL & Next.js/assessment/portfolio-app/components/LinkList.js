import React from 'react';

export default function LinkList({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="p-12 pb-6 relative z-10">
      <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-400 mb-8 text-center drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">My Links</h3>
      <div className="flex flex-col gap-5 mb-10 w-full max-w-md mx-auto">
        {links.map(link => (
          <a 
            key={link.id} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-[#130E24]/60 backdrop-blur-md hover:bg-[#1A1438]/80 border border-white/5 p-5 rounded-2xl text-center font-bold text-slate-200 hover:text-white transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.3)] hover:-translate-y-1 overflow-hidden"
          >
            {/* Dynamic hover sweeping gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 text-lg tracking-wide">{link.title}</span>
          </a>
        ))}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
}
