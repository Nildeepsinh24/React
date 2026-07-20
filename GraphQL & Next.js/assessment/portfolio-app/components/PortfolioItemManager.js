import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export default function PortfolioItemManager() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolioData');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('portfolioData', JSON.stringify(projects));
    }
  }, [projects, isLoaded]);

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!title || !description || !year) return;
    
    const newProject = { id: Date.now().toString(), title, description, year };
    setProjects([...projects, newProject]);
    
    setTitle('');
    setDescription('');
    setYear('');
  };

  const handleClearPortfolio = () => {
    setProjects([]);
    localStorage.removeItem('portfolioData');
  };

  // Prevent hydration mismatch by not rendering until localStorage is loaded
  if (!isLoaded) return null;

  return (
    <div className="p-12 relative z-10">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300 tracking-tighter">Portfolio Projects</h2>
        {projects.length > 0 && (
          <button 
            onClick={handleClearPortfolio} 
            className="group relative text-xs uppercase tracking-widest font-black text-fuchsia-400 px-6 py-2 rounded-full transition-all overflow-hidden border border-fuchsia-500/30 hover:border-fuchsia-400"
          >
            <div className="absolute inset-0 bg-fuchsia-500/10 group-hover:bg-fuchsia-500/20 transition-colors"></div>
            <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(232,121,249,0.8)] transition-all">Clear All</span>
          </button>
        )}
      </div>
      
      <form onSubmit={handleAddProject} className="flex flex-col md:flex-row gap-5 mb-12 bg-[#130E24]/60 p-6 rounded-3xl border border-white/5 backdrop-blur-xl shadow-[inset_0_2px_20px_rgba(0,0,0,0.5)]">
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Project Title" 
          required 
          className="px-6 py-4 flex-1 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500/70 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-inner font-medium text-lg" 
        />
        <input 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Short Description" 
          required 
          className="px-6 py-4 flex-[2] rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all shadow-inner font-medium text-lg" 
        />
        <input 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          placeholder="Year" 
          required 
          className="px-6 py-4 w-full md:w-32 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500/70 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-inner font-medium text-lg text-center tracking-wider" 
        />
        <button 
          type="submit" 
          className="relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-lg py-4 px-10 rounded-2xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1"
        >
          <span className="relative z-10">Add</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </form>

      {projects.length === 0 ? (
        <div className="py-20 text-center bg-[#130E24]/40 border-2 border-dashed border-white/10 rounded-3xl backdrop-blur-sm group hover:border-cyan-500/50 transition-colors duration-500">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <svg className="w-8 h-8 text-cyan-400/80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" /></svg>
          </div>
          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 mb-2">Build Your Legacy</h3>
          <p className="text-cyan-100/50 font-light">Add your first project using the form above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              year={project.year} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
