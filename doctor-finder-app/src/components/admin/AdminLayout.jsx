import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="bg-background text-on-background min-h-screen flex overflow-hidden font-body relative">
      
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* SideNavBar */}
      <aside className={`fixed left-0 top-0 h-screen w-64 z-[60] bg-surface-container-highest flex flex-col p-6 gap-y-8 no-border flat no-shadows border-r border-outline-variant/10 transition-transform duration-500 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <Link to="/admin/dashboard" className="flex items-center gap-3" onClick={() => setIsSidebarOpen(false)}>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
            </div>
            <div>
              <h1 className="text-on-surface font-black tracking-tighter leading-tight font-headline">The Sanctuary</h1>
              <p className="uppercase tracking-widest text-[10px] font-semibold text-primary/70">Clinical Precision</p>
            </div>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-on-surface-variant/60">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto no-scrollbar">
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/40 mb-2 px-4">Core Management</p>
          {[
            { to: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
            { to: '/admin/specialists', icon: 'medical_services', label: 'Specialists' },
            { to: '/admin/appointments', icon: 'event_available', label: 'Appointments' },
            { to: '/admin/patients', icon: 'groups', label: 'Patients' },
          ].map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary shadow-sm' : 'text-on-surface-variant/60 hover:text-on-surface hover:bg-surface-container-low'}`
              }
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
              <span className="uppercase tracking-widest text-[10px] font-bold whitespace-nowrap">{link.label}</span>
            </NavLink>
          ))}

          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/40 mt-6 mb-2 px-4">Operations</p>
          {[
            { to: '/admin/cms', icon: 'description', label: 'CMS Control' },
            { to: '/admin/financials', icon: 'account_balance_wallet', label: 'Financials' },
            { to: '/admin/logs', icon: 'terminal', label: 'System Logs' },
            { to: '/admin/settings', icon: 'settings', label: 'Settings' },
          ].map((link) => (
            <NavLink 
              key={link.to}
              to={link.to} 
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive ? 'bg-primary/10 text-primary shadow-sm' : 'text-on-surface-variant/60 hover:text-on-surface hover:bg-surface-container-low'}`
              }
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
              <span className="uppercase tracking-widest text-[10px] font-bold whitespace-nowrap">{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-4 pt-6 border-t border-outline-variant/10">
          {/* Theme Toggle */}
          <div className="bg-surface-container-low rounded-2xl p-4 flex flex-col gap-3 border border-outline-variant/10">
            <div className="flex justify-between items-center px-1">
              <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/60">System Mode</span>
            </div>
            <button 
              onClick={toggleTheme}
              className="relative w-full h-10 bg-surface-container rounded-xl flex items-center p-1 cursor-pointer overflow-hidden group shadow-inner border border-outline-variant/5"
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-600/20 to-indigo-600/20' : 'from-orange-500/10 to-amber-500/10'} opacity-0 group-hover:opacity-100 transition-opacity`}
              ></div>
              <div 
                className={`z-10 w-1/2 h-full rounded-lg transition-all duration-500 flex items-center justify-center gap-2 ${
                  isDark ? 'translate-x-full bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                }`}
              >
                <span className="material-symbols-outlined text-sm font-bold">
                  {isDark ? 'dark_mode' : 'light_mode'}
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest">{isDark ? 'Night' : 'Day'}</span>
              </div>
              <div className={`flex-1 flex items-center justify-center gap-2 text-on-surface-variant/40 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
                 <span className="material-symbols-outlined text-sm">dark_mode</span>
              </div>
              <div className={`flex-1 flex items-center justify-center gap-2 text-on-surface-variant/40 transition-opacity duration-500 absolute w-1/2 left-0 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                 <span className="material-symbols-outlined text-sm">light_mode</span>
              </div>
            </button>
          </div>

          <button className="bg-primary text-on-primary font-bold py-3 px-4 rounded-xl shadow-lg active:scale-95 transition-all text-[10px] uppercase tracking-wider mb-2">
            Emergency Portal
          </button>
          <Link to="/" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant/40 hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-lg">logout</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 flex flex-col h-screen overflow-hidden transition-all duration-500">
        {/* TopNavBar */}
        <header className="flex justify-between items-center px-6 md:px-8 h-20 w-full bg-surface/80 backdrop-blur-xl z-50 tonal-transition shadow-[0_8px_32px_rgba(0,0,0,0.04)] border-b border-outline-variant/10">
          <div className="flex items-center gap-4 md:gap-5">
            <button 
              onClick={toggleSidebar} 
              className="lg:hidden p-2.5 bg-surface-container-high border border-outline-variant/5 rounded-xl text-on-surface-variant hover:text-on-surface transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div className="flex flex-col md:flex-row md:items-center gap-0 md:gap-4">
              <h2 className="text-xl md:text-2xl font-black tracking-tighter text-on-surface font-headline antialiased whitespace-nowrap">Krishna Hospitals</h2>
              <div className="hidden md:flex h-4 w-[1px] bg-outline-variant/20 mx-2"></div>
              <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-black text-on-surface-variant/40">Admin Terminal</span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden sm:block bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
              <span className="text-[10px] md:text-sm font-bold text-primary uppercase font-headline">Clinical Admin</span>
            </div>
            <div className="flex items-center gap-2 md:gap-4 border-l border-outline-variant/20 pl-4 md:pl-6">
              <button className="hidden sm:block p-2 text-on-surface-variant/60 hover:bg-primary/10 rounded-full transition-colors active:scale-95 duration-200">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary overflow-hidden border-2 border-primary/20">
                <img 
                  alt="Administrator Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp_xdsa8OEmtV81eOQvBBrkW51puczl07e8TzqdoCff52KMw6Rxzz3mYYvV1hpOfZ0huWaLrZ5-W28Li4YT3Zlt0kb5uzVy50PyO2iWCOgCfRCpAzwUvo7hPoaeQYB69Sy55zE5MiS657eqcYSbb8yfsbacv7ARO7Ht9xb72QHC96YSq9lzd0uiXLzBAS6tzI1Cs7NB3Fj1U0rfMQUy5C8COaI_E6N1LgcIYUdByhchu1KGZL2AgpSZ0BpWsDQK5Wy8ujbdYSNOAVh"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <main className="flex-1 overflow-y-auto p-6 md:p-12 bg-surface-dim no-scrollbar font-body">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
