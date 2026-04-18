import React from 'react';

const stats = [
  { label: 'Total Specialists', value: '148', trend: '+12.4%', icon: 'medical_information', color: 'primary' },
  { label: 'Total Patients', value: '12,482', trend: '+8.4%', icon: 'person', color: 'secondary' },
  { label: 'Monthly Appointments', value: '2,842', trend: 'Optimal', icon: 'event_available', color: 'primary' },
  { label: 'Gross Revenue', value: '$1.2M', trend: 'Q3 Milestone', icon: 'payments', color: 'tertiary' },
];

const AdminDashboard = () => {
  return (
    <div className="max-w-[1600px] mx-auto space-y-12 animate-in fade-in duration-700">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8 md:mb-12">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-2">Hospital Command Center</h2>
          <p className="text-on-surface-variant max-w-md text-sm md:text-base opacity-80">Real-time clinical performance metrics and operational oversight for the Sanctuary facility.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none px-6 py-3 bg-surface-container-highest text-on-surface font-bold text-[11px] uppercase tracking-widest rounded-xl hover:bg-surface-bright transition-all border border-outline-variant/10">
            Generate Report
          </button>
          <button className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-black text-[11px] uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
            + New Specialist
          </button>
        </div>
      </div>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6 items-stretch">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`col-span-1 md:col-span-3 bg-surface-container rounded-3xl p-6 md:p-8 flex flex-col justify-between group hover:translate-y-[-4px] transition-all duration-300 border border-outline-variant/10 shadow-sm min-h-[180px]`}
          >
            <div className="flex justify-between items-start">
              <div className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-primary text-2xl`}>{stat.icon}</span>
              </div>
              <span className={`px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-widest`}>{stat.trend}</span>
            </div>
            <div className="mt-6 md:mt-10">
              <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{stat.label}</p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-on-surface">{stat.value}</h3>
            </div>
          </div>
        ))}

        {/* Heatmap Section */}
        <div className="col-span-1 md:col-span-8 bg-surface-container-low rounded-3xl p-6 md:p-10 flex flex-col justify-start border border-outline-variant/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
            <div>
              <h4 className="text-xl font-bold tracking-tight text-on-surface">Doctor Availability Heatmap</h4>
              <p className="text-sm text-on-surface-variant mt-1">Utilization per department wing.</p>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Low</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">High</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-8 md:gap-3">
            {/* Desktop Headers */}
            <div className="hidden md:contents">
              {['DEPT', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                <div key={day} className="text-[10px] font-bold text-on-surface-variant uppercase text-center mb-4 tracking-widest">{day}</div>
              ))}
            </div>

            {['Cardiology', 'Oncology', 'Pediatrics', 'Neurology'].map((dept, i) => (
              <div key={dept} className="flex flex-col md:contents">
                <div className="flex justify-between items-center mb-3 md:mb-0 md:contents">
                  <div className="text-[10px] font-black text-primary uppercase tracking-widest md:self-center">{dept}</div>
                  <div className="md:hidden flex gap-1">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, idx) => (
                      <div key={idx} className="w-6 h-6 rounded bg-surface-container flex items-center justify-center text-[8px] font-bold text-on-surface-variant">{d}</div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-7 md:contents gap-2 md:gap-3">
                  {[...Array(7)].map((_, j) => (
                    <div
                      key={j}
                      className={`h-10 md:h-12 rounded-lg transition-all border border-outline-variant/5 ${(i + j) % 3 === 0 ? 'bg-primary/20' : (i + j) % 2 === 0 ? 'bg-primary/60' : 'bg-surface-container-highest'
                        }`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Patient Registrations */}
        <div className="col-span-1 md:col-span-4 bg-primary-container rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group border border-outline-variant/5 shadow-xl min-h-[240px]">
          <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-9xl text-on-primary-container">person_add</span>
          </div>
          <div className="relative z-10">
            <p className="text-on-primary-container/60 text-[10px] font-bold uppercase tracking-widest mb-1">New Registrations</p>
            <h3 className="text-5xl sm:text-6xl font-black tracking-tighter text-on-primary-container leading-none">124</h3>
            <div className="flex items-center gap-2 mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-9 h-9 rounded-full border-2 border-primary-container bg-surface-container-highest overflow-hidden`}>
                    <img className="w-full h-full object-cover" src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="Patient" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-primary-container bg-primary-container flex items-center justify-center text-[10px] font-bold text-white">+8</div>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-on-primary-container/60 ml-3">Enrolled Today</span>
            </div>
          </div>
        </div>

        {/* Facility Status Card */}
        <div className="col-span-1 md:col-span-12 bg-surface-container rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-outline-variant/5 shadow-2xl relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

          <div className="flex-shrink-0 w-44 h-44 md:w-56 md:h-56 flex items-center justify-center relative bg-surface-container-low rounded-full shadow-inner border border-outline-variant/5">
            <svg className="absolute inset-0 w-full h-full -rotate-90 p-2" viewBox="0 0 192 192">
              <circle
                className="text-primary/5"
                cx="96" cy="96" r="82"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
              />
              <circle
                className="text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.3)] transition-all duration-1000"
                cx="96" cy="96" r="82"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeDasharray="515.22"
                strokeDashoffset={515.22 * (1 - 0.82)}
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center relative z-10">
              <span className="text-4xl md:text-5xl font-black text-on-surface leading-none tracking-tighter">82%</span>
              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant mt-3">Occupancy</span>
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 flex-grow w-full">
            {[
              { label: 'ICU Capacity', value: '14/20', color: 'error', width: '70%', status: 'Critical' },
              { label: 'Theater Availability', value: '6/8', color: 'secondary', width: '75%', status: 'Optimal' },
              { label: 'ER Wait Time', value: '18m', color: 'primary', width: '40%', status: 'Fair' },
              { label: 'Blood Bank Supply', value: '92%', color: 'primary', width: '92%', status: 'Secure' },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 group-hover:text-on-surface-variant transition-colors">{item.label}</span>
                  <span className={`text-[10px] font-black text-${item.color} tracking-widest uppercase bg-surface-container-high px-2 py-0.5 rounded-md`}>{item.status}</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-on-surface tracking-tighter">{item.value}</span>
                </div>
                <div className="w-full h-2 bg-surface-container-low rounded-full mt-4 overflow-hidden border border-outline-variant/5">
                  <div className={`h-full bg-${item.color} rounded-full transition-all duration-1000 group-hover:brightness-110`} style={{ width: item.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
