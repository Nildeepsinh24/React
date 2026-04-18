import React, { useState } from 'react';

const specialists = [
  { id: 'KH-8829', name: 'Dr. Alena Smith', specialty: 'Cardiology', experience: '12 Years', fee: '$150.00', status: 'Verified', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD679Ta0szyHqt0Cy7dbRspvT3H_kiZuGWqBtZaDSdZ4VRI35XhdmBENq3qPk371YjXMMAXy3KpxxyifTg9Yj6lqGc1ercMSaEpN9yNQ93VPysYNq9094VQzwQn2Whlch1sDxkFaIYiFXLuGJhnUSiCndCNqwFSmmFuhwP5S7xHKAjO96l063L9BSLlqy4n_Uu1d7PncbEte7FspBfEtvWS0uIJ_hRBs5cN8szn3iQSLQAYakVb5WAv3qzo_R54K3GriUGIxdJ_NayI' },
  { id: 'KH-4491', name: 'Dr. Marcus Thorne', specialty: 'Neurology', experience: '8 Years', fee: '$220.00', status: 'Pending', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASJs2DEADWlw_GsDGxtKKZm_mvpU9MWBSLfbD7xt8cA5Wvyh45r6_TIyuOEj3MVAikfyX5VlneLV4RwrHvKIrTH83zSG8vZpSAxL_e-btnY8bC9YgFdOzIPb8uVcuDKoASz2e0lrXyzo4PCWWA88ayn8ennKHcvFLSimUjXP1Br9H_E6dbxnWZmEXM-GUOvNkYbaouJkrkpwFET2k7LSsAoH7yLCZxz_OBpED_mz5jFrHG8KjtCyVXE87DCWz52tpoMPsBQAEfP7gS' },
  { id: 'KH-1205', name: 'Dr. Sarah Jenkins', specialty: 'Pediatrics', experience: '15 Years', fee: '$125.00', status: 'Verified', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANQ-y5gqCoO1z9SfCWOkIdcHxvuWYpww43Cbvzdrpl2LHjAe-Fv57oTIA4rp695jgfaWWA3k-mQKrJiGCAmbsGFfT20pdB8PYfoRpbH5N7c5Wi5gy_J2HDIGW212lC2vkIAR41bSyMVIINBQBAt4zHfinC_yuQIAII1TJ4hPsHCyjRCVRx8LWVaMEpmjI8IB91j_2o7tyj124suKj0SeQgJt7f0FFSdI34cTkZXdkwWCJ2liCDD7Ljyel-zNF55Y1iCCOoL362qA2M' },
];

const SpecialistManagement = () => {
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

  return (
    <div className="animate-in fade-in duration-700 relative h-full">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-black">Clinical Talent Pool</span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">Specialist Management</h3>
        </div>
        <button
          onClick={() => setIsAddDrawerOpen(true)}
          className="w-full md:w-auto bg-primary text-white px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
        >
          + Register New Specialist
        </button>
      </header>

      {/* Bento Grid - Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 text-on-surface">
        <div className="col-span-1 bg-surface-container p-8 rounded-3xl flex flex-col justify-between h-44 shadow-sm border border-outline-variant/10 transition-colors">
          <span className="material-symbols-outlined text-primary text-3xl">groups</span>
          <div>
            <p className="text-4xl font-black text-on-surface tracking-tighter">124</p>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Total Doctors</p>
          </div>
        </div>
        <div className="col-span-1 bg-primary-container p-8 rounded-3xl flex flex-col justify-between h-44 border border-primary/20 shadow-xl transition-colors">
          <span className="material-symbols-outlined text-on-primary-container text-3xl">verified</span>
          <div>
            <p className="text-4xl font-black text-on-primary-container tracking-tighter">98%</p>
            <p className="text-[10px] uppercase tracking-widest text-on-primary-container/60 font-bold mt-1">Verified Personnel</p>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 bg-surface-container p-8 rounded-3xl flex flex-col justify-between h-44 overflow-hidden relative shadow-sm border border-outline-variant/10 transition-colors">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <span className="material-symbols-outlined text-primary text-3xl">emergency_home</span>
            <div>
              <p className="text-4xl font-black text-on-surface tracking-tighter">12</p>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">On-Call Specialists Today</p>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSJ-VxEWRUacEKawRUWpUkCS-x_5FlK3TUA_ee1kDwyHWXm8dkt979NppQqUA5rHqfwXF0JxjAiDBnc1l333GT_Ls4teDrA2ODea62extJWqmLUmhSBUQwoGbpYm2cEvPVsMc-slZEmhSWKzNEL3vFhu9vluw6v5QhZE-dLioeHxfFjMXzcu4GaaF2mnRoQqlmErg6INGNQm4UdCRnH-HV7MeUfydl5OlpomwB4KTd3FqbeFi6sLYiHeJdnKJC0ZrVEDICNiB3ykmk"
              alt="Hospital Hallway"
            />
          </div>
        </div>
      </div>

      {/* Specialist Table Container */}
      <div className="bg-surface-container rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/5">
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-surface-container-low border-b border-outline-variant/5">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none justify-center bg-surface-container-highest text-on-surface text-[10px] font-black py-2.5 px-5 rounded-full flex items-center gap-2 border border-outline-variant/10 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              <span className="hidden xs:inline">Filter By Specialty</span>
              <span className="xs:hidden">Filter</span>
            </button>
            <button className="flex-1 md:flex-none justify-center bg-surface-container-highest text-on-surface text-[10px] font-black py-2.5 px-5 rounded-full flex items-center gap-2 border border-outline-variant/10 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">sort</span>
              Experience
            </button>
          </div>
          <div className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] w-full md:w-auto text-center md:text-left">
            Showing 1-10 of 124 Results
          </div>
        </div>

        {/* Mobile Card List (Zero-Scroll) */}
        <div className="md:hidden space-y-4 p-4 bg-surface-dim">
          {specialists.map((dr) => (
            <div key={dr.id} className="bg-surface-container rounded-3xl p-6 border border-outline-variant/10 shadow-sm space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-outline-variant/20 shadow-md">
                  <img className="w-full h-full object-cover" src={dr.image} alt={dr.name} />
                </div>
                <div>
                  <div className="font-bold text-on-surface text-lg leading-tight">{dr.name}</div>
                  <div className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest mt-1">{dr.id}</div>
                  <div className="mt-2 text-[9px] font-black text-primary uppercase tracking-[0.2em]">{dr.specialty}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-outline-variant/5">
                <div>
                  <span className="block text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Experience</span>
                  <span className="text-sm font-bold text-on-surface">{dr.experience}</span>
                </div>
                <div>
                  <span className="block text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Status</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${dr.status === 'Verified' ? 'bg-primary shadow-[0_0_8px_#abc7ff]' : 'bg-outline'}`}></div>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${dr.status === 'Verified' ? 'text-primary' : 'text-on-surface-variant'}`}>{dr.status}</span>
                  </div>
                </div>
                <div>
                  <span className="block text-[8px] font-black text-on-surface-variant/40 uppercase tracking-widest mb-1">Consult Fee</span>
                  <span className="text-sm font-black text-on-surface">{dr.fee}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-outline-variant/5">
                <button className="flex-1 bg-surface-container-highest text-on-surface font-black py-3 rounded-xl text-[9px] uppercase tracking-widest transition-all active:scale-95 border border-outline-variant/10 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">edit</span>
                  Edit
                </button>
                <button className="px-5 bg-error/10 text-error font-black py-3 rounded-xl transition-all active:scale-95 border border-error/10">
                  <span className="material-symbols-outlined text-[14px]">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table Container (Hidden on Mobile) */}
        <div className="hidden md:block overflow-x-auto no-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/5">
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase tracking-widest font-black">Specialist</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase tracking-widest font-black">Specialty</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase tracking-widest font-black">Experience</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase tracking-widest font-black">Consultation Fee</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase tracking-widest font-black">Status</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase tracking-widest font-black text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {specialists.map((dr) => (
                <tr key={dr.id} className="hover:bg-surface-bright transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-surface-container-highest overflow-hidden border border-outline-variant/20 shadow-sm">
                        <img className="w-full h-full object-cover" src={dr.image} alt={dr.name} />
                      </div>
                      <div>
                        <div className="font-bold text-on-surface text-base mb-1">{dr.name}</div>
                        <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">{dr.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-blue-500/10 text-primary text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest border border-primary/5">{dr.specialty}</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface font-semibold">{dr.experience}</td>
                  <td className="px-8 py-6 text-sm text-on-surface font-black">{dr.fee}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${dr.status === 'Verified' ? 'bg-primary shadow-[0_0_10px_#abc7ff]' : 'bg-outline'} `}></div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${dr.status === 'Verified' ? 'text-primary' : 'text-on-surface-variant'}`}>{dr.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2.5 hover:bg-surface-container-highest rounded-xl text-on-surface-variant hover:text-on-surface transition-all border border-transparent hover:border-outline-variant/20">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                      <button className="p-2.5 hover:bg-error/10 hover:text-error rounded-xl text-on-surface-variant transition-all border border-transparent hover:border-error/20">
                        <span className="material-symbols-outlined text-lg">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Onboarding Drawer */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isAddDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md" onClick={() => setIsAddDrawerOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-full sm:w-[500px] md:w-[600px] bg-surface-container shadow-2xl transition-transform duration-500 transform ${isAddDrawerOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
          <div className="p-8 md:p-12 space-y-10">
            <div className="border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
              <div>
                <h4 className="text-2xl font-black text-on-surface tracking-tight leading-none">Add Specialist</h4>
                <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em] mt-3">Personnel Onboarding Module</p>
              </div>
              <button
                onClick={() => setIsAddDrawerOpen(false)}
                className="p-3 hover:bg-surface-container-highest rounded-full transition-all active:scale-90"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar space-y-10">
              <form className="space-y-10">
                {/* Photo Upload */}
                <div className="flex flex-col items-center gap-4 p-6 md:p-8 bg-surface-container-highest rounded-3xl border-2 border-dashed border-outline-variant/30 group hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-surface-container-low flex items-center justify-center border border-outline-variant/20 overflow-hidden relative group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-outline text-3xl md:text-4xl">add_a_photo</span>
                  </div>
                  <p className="text-[9px] md:text-[10px] text-on-surface-variant uppercase font-black tracking-widest text-center">Upload Profile Signature (Max 5MB)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-3 ml-1">Full Clinical Name</label>
                    <input className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-on-surface" placeholder="e.g. Dr. Jane Cooper" type="text" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-3 ml-1">Specialty Wing</label>
                    <select className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-on-surface appearance-none">
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Pediatrics</option>
                      <option>Orthopedics</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-3 ml-1">Practice Tenure (Years)</label>
                    <input className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-on-surface" placeholder="10" type="number" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-3 ml-1">Consultation Fees</label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">$</span>
                      <input className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl pl-10 pr-6 py-4 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-on-surface" placeholder="150" type="text" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Verified Access</span>
                      <div className="w-10 h-6 bg-primary rounded-full relative p-1 cursor-pointer">
                        <div className="w-4 h-4 bg-on-primary-fixed rounded-full ml-auto"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-3 ml-1">Clinical Philosophy & Bio</label>
                  <textarea className="w-full bg-surface-container-low border border-outline-variant/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-on-surface min-h-[120px]" placeholder="Brief overview of clinical focus..." rows="3"></textarea>
                </div>
              </form>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 md:p-10 bg-surface-container-low border-t border-outline-variant/10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsAddDrawerOpen(false)}
                className="flex-1 bg-surface-container-highest text-on-surface font-black py-4 rounded-2xl active:scale-95 transition-all text-[10px] uppercase tracking-widest border border-outline-variant/20"
              >
                Cancel
              </button>
              <button className="flex-[2] bg-gradient-to-br from-primary to-primary-container text-on-primary-fixed font-black py-4 rounded-2xl shadow-xl shadow-primary/20 active:scale-95 transition-all text-[10px] uppercase tracking-widest">
                Save Specialist Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistManagement;
