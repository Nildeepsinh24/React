import React from 'react';

const patients = [
  { id: 'PX-20412', name: 'Arthur Morgan', gender: 'Male', age: 42, registered: '12 May 2023', lastVisit: '10 Oct 2023', insurance: 'Medicare Plus', visits: 12, status: 'Stable' },
  { id: 'PX-20455', name: 'Sadie Adler', gender: 'Female', age: 34, registered: '15 Jun 2023', lastVisit: '12 Oct 2023', insurance: 'HealthFront', visits: 4, status: 'Critical' },
  { id: 'PX-20501', name: 'John Marston', gender: 'Male', age: 38, registered: '20 Aug 2023', lastVisit: '08 Oct 2023', insurance: 'Universal Care', visits: 8, status: 'Recovering' },
  { id: 'PX-20510', name: 'Abigail Roberts', gender: 'Female', age: 32, registered: '22 Aug 2023', lastVisit: '14 Oct 2023', insurance: 'CareFree', visits: 2, status: 'Stable' },
  { id: 'PX-20600', name: 'Charles Smith', gender: 'Male', age: 45, registered: '10 Sep 2023', lastVisit: '11 Oct 2023', insurance: 'HealthFront', visits: 1, status: 'Observation' },
];

const PatientManagement = () => {
  return (
    <div className="animate-in fade-in duration-700 space-y-10 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-black">Clinical Registry</span>
          <h3 className="text-4xl font-extrabold text-on-surface mt-2 tracking-tight">Patient Management</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
            <input className="w-full bg-surface-container-high border border-outline-variant/10 rounded-xl py-3 pl-12 pr-6 text-sm text-on-surface focus:ring-2 focus:ring-primary/10 outline-none" placeholder="Search Master ID or Name..." type="text" />
          </div>
          <button className="whitespace-nowrap bg-primary text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
            + New Registry
          </button>
        </div>
      </header>

      {/* Patient Stats Overlay */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Registered Patients', value: '12,482', sub: '+124 this week', icon: 'groups' },
          { label: 'Indoor Patients', value: '156', sub: '82% Bed Occupancy', icon: 'bed' },
          { label: 'Outpatient Visits', value: '242Today', sub: 'Avg wait 18m', icon: 'stethoscope' },
          { label: 'Surgical Clearances', value: '18', sub: 'Scheduled Today', icon: 'medical_services' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">{stat.icon}</span>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest font-black text-on-surface-variant mb-0.5">{stat.label}</p>
              <h4 className="text-2xl font-black text-on-surface tracking-tighter">{stat.value}</h4>
              <p className="text-[9px] font-bold text-on-surface-variant/60 uppercase">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Registry Table */}
      <div className="bg-surface-container rounded-[2.5rem] overflow-hidden shadow-2xl border border-outline-variant/5">
        <div className="p-6 md:p-8 border-b border-outline-variant/5 bg-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-2 md:gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-5 py-2.5 whitespace-nowrap bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/10 shadow-lg shadow-primary/20">All Residents</button>
            <button className="flex-1 md:flex-none px-5 py-2.5 whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded-full text-[10px] font-black uppercase tracking-widest transition-all">Outpatients</button>
            <button className="flex-1 md:flex-none px-5 py-2.5 whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded-full text-[10px] font-black uppercase tracking-widest transition-all">In-Patients</button>
          </div>
          <button className="p-3 text-on-surface-variant hover:text-on-surface bg-surface-container-high rounded-xl border border-outline-variant/10 transition-all self-end md:self-auto">
            <span className="material-symbols-outlined text-lg">tune</span>
          </button>
        </div>

        {/* Mobile Card List (Zero-Scroll) */}
        <div className="md:hidden space-y-4 p-4 bg-surface-dim">
          {patients.map((px) => (
            <div key={px.id} className="bg-surface-container rounded-3xl p-6 border border-outline-variant/10 shadow-sm space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-lg border border-primary/20">{px.name.charAt(0)}</div>
                <div>
                  <div className="font-bold text-on-surface text-lg leading-tight">{px.name}</div>
                  <div className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest mt-1">{px.id} • {px.gender}, {px.age}yrs</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 pt-4 border-t border-outline-variant/5">
                <div>
                  <span className="block text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Insurance</span>
                  <span className="text-sm font-bold text-on-surface">{px.insurance}</span>
                </div>
                <div>
                  <span className="block text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Prognosis</span>
                  <div className="mt-1">
                    <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-outline-variant/10
                          ${px.status === 'Stable' ? 'bg-green-500/10 text-green-500' :
                        px.status === 'Critical' ? 'bg-error/10 text-error' :
                          px.status === 'Recovering' ? 'bg-primary/10 text-primary' : 'bg-surface-container-highest text-on-surface-variant'}
                        `}>
                      {px.status}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="block text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Visit Metrics</span>
                  <span className="text-sm font-black text-on-surface">{px.visits} <span className="text-[9px] font-bold text-on-surface-variant uppercase">Visits</span></span>
                </div>
                <div>
                  <span className="block text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Last Encounter</span>
                  <span className="text-sm font-bold text-on-surface">{px.lastVisit}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/5">
                <button className="w-full bg-primary/10 text-primary font-black py-4 rounded-xl text-[9px] uppercase tracking-widest transition-all active:scale-95 border border-primary/10 flex items-center justify-center gap-2">
                  View Clinical History
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View (Hidden on Mobile) */}
        <div className="hidden md:block overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/10">
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Master Identity</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Insurance Partner</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Visit Metrics</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Last Encounter</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Prognosis</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {patients.map((px) => (
                <tr key={px.id} className="hover:bg-surface-bright transition-all group cursor-pointer">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container-highest rounded-2xl flex items-center justify-center text-on-surface font-black text-sm border border-outline-variant/10 shadow-sm">{px.name.charAt(0)}</div>
                      <div>
                        <div className="text-sm font-bold text-on-surface mb-1">{px.name}</div>
                        <div className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">{px.id} • {px.gender}, {px.age}yrs</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                      <span className="text-sm text-on-surface font-semibold">{px.insurance}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface font-black">
                    {px.visits} <span className="text-[10px] font-bold text-on-surface-variant ml-1 uppercase">Visits</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm text-on-surface font-bold mb-1">{px.lastVisit}</div>
                    <div className="text-[10px] text-primary uppercase font-black tracking-widest">Clinical Logged</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-outline-variant/10
                      ${px.status === 'Stable' ? 'bg-green-500/10 text-green-500' :
                        px.status === 'Critical' ? 'bg-error/10 text-error' :
                          px.status === 'Recovering' ? 'bg-primary/10 text-primary' : 'bg-surface-container-highest text-on-surface-variant'}
                    `}>
                      {px.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-primary hover:text-primary-container font-black text-[10px] uppercase tracking-widest group-hover:underline">View History</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientManagement;
