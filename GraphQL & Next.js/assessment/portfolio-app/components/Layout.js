import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#030014] flex flex-col font-sans text-slate-200 relative overflow-hidden selection:bg-fuchsia-500/30">
      {/* Massive Glowing Ambient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-50 pointer-events-none"></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-violet-600/20 rounded-full mix-blend-screen filter blur-[150px] opacity-40 pointer-events-none"></div>

      <div className="relative w-full min-h-screen bg-[#090715]/40 backdrop-blur-3xl border-white/10 shadow-[0_0_80px_-15px_rgba(124,58,237,0.2)] flex flex-col overflow-hidden">
        {/* Subtle top inner border highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 z-20 pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
