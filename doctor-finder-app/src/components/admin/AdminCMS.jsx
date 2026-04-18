import React from 'react';

const categories = [
  { name: 'Cardiology', doctors: 12, clinics: 4, icon: 'favorite', color: 'primary' },
  { name: 'Neurology', doctors: 8, clinics: 2, icon: 'psychology', color: 'secondary' },
  { name: 'Pediatrics', doctors: 15, clinics: 5, icon: 'child_care', color: 'tertiary' },
  { name: 'Dermatology', doctors: 10, clinics: 3, icon: 'auto_fix_high', color: 'primary' },
  { name: 'Orthopedics', doctors: 7, clinics: 2, icon: 'bone', icon_text: 'bone' },
];

const AdminCMS = () => {
  return (
    <div className="animate-in fade-in duration-700 space-y-12 pb-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-black">Digital Infrastructure</span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">Hospital Branding & CMS</h3>
        </div>
        <button className="w-full md:w-auto bg-surface-container-high text-on-surface px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-outline-variant/10 hover:bg-surface-bright transition-all shadow-lg active:scale-95">
          Preview Customer View
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Global Announcement Module */}
        <div className="col-span-1 lg:col-span-5 bg-surface-container-low rounded-[2rem] p-6 md:p-10 border border-outline-variant/10 shadow-xl flex flex-col justify-between overflow-hidden relative group">
          <div className="relative z-10 text-on-surface">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">campaign</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold tracking-tight text-on-surface">Emergency/Global Banner</h4>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-4 ml-1">Banner Status</label>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 px-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Active</button>
                  <button className="flex-1 py-3 px-4 bg-surface-container-highest text-on-surface-variant rounded-xl text-[10px] font-black uppercase tracking-widest border border-outline-variant/10 transition-all">Inactive</button>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-4 ml-1">Banner Headline</label>
                <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-5 text-sm text-on-surface focus:ring-2 focus:ring-primary/10 transition-all outline-none" placeholder="e.g. Free Health Checkup Camp Scheduled for Next Sunday..." type="text" />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-4 ml-1">Color Aesthetics</label>
                <div className="flex gap-4">
                  {['bg-primary', 'bg-secondary', 'bg-tertiary', 'bg-error'].map(color => (
                    <div key={color} className={`w-10 h-10 ${color} rounded-full border-4 border-surface shadow-lg cursor-pointer hover:scale-110 transition-transform`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button className="mt-8 md:mt-12 bg-on-surface text-surface py-5 px-8 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-on-surface-variant transition-all active:scale-95 shadow-2xl relative z-10 w-full mb-2">
            Publish Digital Update
          </button>

          <div className="absolute -right-20 -bottom-20 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
            <span className="material-symbols-outlined text-[20rem] text-on-surface pointer-events-none">auto_awesome</span>
          </div>
        </div>

        {/* Categories & Specialized Units */}
        <div className="col-span-1 lg:col-span-7 space-y-8">
          <div className="bg-surface-container p-6 md:p-10 rounded-[2.5rem] border border-outline-variant/5 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-10 relative z-10">
              <div>
                <h4 className="text-2xl font-black tracking-tighter text-on-surface">Specialized Units</h4>
                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-2">Core Clinical Categorization</p>
              </div>
              <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed p-3 rounded-2xl shadow-xl hover:scale-105 transition-all">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
              {categories.map((cat, idx) => (
                <div key={idx} className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 hover:border-primary/20 hover:shadow-lg transition-all group cursor-pointer h-40 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center`}>
                      <span className="material-symbols-outlined text-primary text-2xl">{cat.icon || cat.icon_text}</span>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-lg opacity-0 group-hover:opacity-100">edit_square</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-on-surface text-base mb-1">{cat.name}</h5>
                    <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">{cat.doctors} Specialists • {cat.clinics} Clinics</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics Overlay */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-primary-fixed-dim rounded-[2rem] p-6 md:p-8 border border-primary/10 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-on-primary-fixed-variant">SEO Visibility Score</span>
                <h4 className="text-4xl font-black text-on-primary-fixed mt-2 tracking-tighter">94/100</h4>
              </div>
              <div className="w-16 h-16 rounded-full border-4 border-on-primary-fixed/20 flex items-center justify-center font-black text-on-primary-fixed">
                A+
              </div>
            </div>
            <div className="bg-surface-container-high rounded-[2rem] p-8 border border-outline-variant/10 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Avg Patient Rating</span>
                <h4 className="text-4xl font-black text-on-surface mt-2 tracking-tighter">4.92</h4>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCMS;
