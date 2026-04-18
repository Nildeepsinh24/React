import React from 'react';

const AdminSettings = () => {
  return (
    <div className="animate-in fade-in duration-700 space-y-10 pb-12 max-w-7xl mx-auto w-full">
      <header className="space-y-1 max-w-3xl">
        <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-black">System Configuration</span>
        <h3 className="text-2xl md:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">Admin Terminal Settings</h3>
        <p className="text-on-surface-variant mt-2 max-w-2xl opacity-80 font-medium">Fine-tune the Hospital Management System, hospital identity, and security protocols.</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-10 items-start">
        {/* Navigation for settings sections */}
        <div className="xl:col-span-3 xl:sticky xl:top-6 flex flex-row sm:flex-col overflow-x-auto sm:overflow-visible no-scrollbar gap-2 p-2 sm:p-0 bg-surface-container/40 sm:bg-transparent rounded-3xl sm:rounded-none border border-outline-variant/10 sm:border-0">
          <button className="min-w-42 sm:min-w-0 sm:w-full text-nowrap sm:text-left px-6 py-4 rounded-2xl bg-primary/10 text-primary font-black text-[10px] uppercase tracking-widest border border-primary/20 shadow-inner">
            Hospital Identity
          </button>
          <button className="min-w-42 sm:min-w-0 sm:w-full text-nowrap sm:text-left px-6 py-4 rounded-2xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-black text-[10px] uppercase tracking-widest border border-transparent hover:border-outline-variant/10">
            Security & Access
          </button>
          <button className="min-w-42 sm:min-w-0 sm:w-full text-nowrap sm:text-left px-6 py-4 rounded-2xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-black text-[10px] uppercase tracking-widest border border-transparent hover:border-outline-variant/10">
            Operational Rules
          </button>
          <button className="min-w-42 sm:min-w-0 sm:w-full text-nowrap sm:text-left px-6 py-4 rounded-2xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-black text-[10px] uppercase tracking-widest border border-transparent hover:border-outline-variant/10">
            Notifications
          </button>
          <button className="min-w-42 sm:min-w-0 sm:w-full text-nowrap sm:text-left px-6 py-4 rounded-2xl text-error/60 hover:bg-error/10 hover:text-error transition-all font-black text-[10px] uppercase tracking-widest border border-transparent hover:border-error/20 xl:mt-10">
            Factory Reset
          </button>
        </div>

        {/* Settings Content Area */}
        <div className="xl:col-span-9 min-w-0 space-y-8">
          {/* Section: Hospital Identity */}
          <div className="bg-surface-container rounded-4xl md:rounded-[2.5rem] p-5 sm:p-6 md:p-10 border border-outline-variant/5 shadow-2xl space-y-8 md:space-y-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-6">
              <div>
                <h4 className="text-xl md:text-2xl font-black text-on-surface tracking-tight">Hospital Identity</h4>
                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-2">Manage public-facing branding and headers</p>
              </div>
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
                Save Changes
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              <div className="sm:col-span-2 flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-8 p-5 sm:p-6 md:p-8 bg-surface-container-low rounded-3xl border border-outline-variant/10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-primary-container rounded-3xl flex items-center justify-center border-4 border-surface shadow-xl shrink-0">
                  <span className="material-symbols-outlined text-on-primary-container text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
                </div>
                <div className="space-y-3 text-center sm:text-left">
                  <p className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant">Hospital Visual Identity</p>
                  <div className="flex gap-3 justify-center sm:justify-start">
                    <button className="bg-surface-container-highest text-on-surface px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-outline-variant/10 hover:bg-surface-bright transition-all">Change Logo</button>
                    <button className="text-on-surface-variant px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:text-error transition-colors">Remove</button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant ml-1">Entity Official Name</label>
                <input className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/10 transition-all outline-none" defaultValue="Krishna Hospitals" type="text" />
              </div>
              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant ml-1">Clinical Tagline</label>
                <input className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/10 transition-all outline-none" defaultValue="The Sanctuary of Care" type="text" />
              </div>
              <div className="sm:col-span-2 space-y-4">
                <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant ml-1">Primary Support Email</label>
                <input className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm text-on-surface focus:ring-2 focus:ring-primary/10 transition-all outline-none" defaultValue="ops@krishnahospitals.com" type="email" />
              </div>
            </div>
          </div>

          {/* Section: Operational Switches */}
          <div className="bg-surface-container rounded-4xl md:rounded-[2.5rem] p-5 sm:p-6 md:p-10 border border-outline-variant/5 shadow-2xl">
            <h4 className="text-2xl font-black text-on-surface tracking-tight mb-6 md:mb-8">Operational Parameters</h4>

            <div className="space-y-4">
              {[
                { label: 'Auto-Confirm Appointments', desc: 'Accept all incoming bookings if slot is free.', enabled: true },
                { label: 'Emergency Mode Override', desc: 'Alert banner visible on all pages.', enabled: false },
                { label: 'Public Patient Registration', desc: 'Allow new patients to signup via web portal.', enabled: true },
                { label: 'Telemedicine Support', desc: 'Enable video conferencing for remote consultations.', enabled: false },
              ].map((opt, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 p-5 sm:p-6 bg-surface-container-low rounded-2xl border border-outline-variant/5 hover:border-outline-variant/20 transition-all">
                  <div className="min-w-0">
                    <p className="font-bold text-on-surface text-base mb-1">{opt.label}</p>
                    <p className="text-xs text-on-surface-variant opacity-70">{opt.desc}</p>
                  </div>
                  <div className={`w-12 h-7 rounded-full transition-all flex items-center p-1 cursor-pointer ${opt.enabled ? 'bg-primary' : 'bg-surface-container-highest border border-outline-variant/10'}`}>
                    <div className={`w-5 h-5 rounded-full transition-all ${opt.enabled ? 'bg-on-primary ml-auto shadow-md' : 'bg-outline-variant'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-error/5 rounded-4xl md:rounded-[2.5rem] p-5 sm:p-6 md:p-10 border border-error/10">
            <h4 className="text-xl font-black text-error tracking-tight mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">warning</span> Critical Operations
            </h4>
            <p className="text-sm text-on-surface-variant mb-8 font-medium opacity-80">These actions are irreversible. Exercise extreme clinical caution.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-error text-on-error font-black text-[10px] uppercase tracking-widest rounded-xl hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-error/20">Purge System Logs</button>
              <button className="px-8 py-4 border border-error/30 text-error font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-error/5 transition-all">Deactivate Web Portal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
