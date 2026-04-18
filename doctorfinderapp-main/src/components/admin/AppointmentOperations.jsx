import React, { useState } from 'react';

const appointments = [
  { id: '#PX-89210', patient: 'Arthur Jenkins', email: 'arthur.j@email.com', doctor: 'Dr. Elena Rodriguez', department: 'Cardiology Department', date: 'Oct 24, 2023', time: '09:15 AM', status: 'Confirmed', initial: 'AJ', color: 'primary' },
  { id: '#PX-89244', patient: 'Sarah McAlister', email: 's.mcalister@cloud.com', doctor: 'Dr. Marcus Thorne', department: 'Neurology Wing', date: 'Oct 24, 2023', time: '10:45 AM', status: 'Incoming', initial: 'SM', color: 'secondary' },
  { id: '#PX-89102', patient: 'Robert Blackstone', email: 'r.black@service.net', doctor: 'Dr. Elena Rodriguez', department: 'Cardiology Department', date: 'Oct 24, 2023', time: '08:30 AM', status: 'Completed', initial: 'RB', color: 'tertiary' },
  { id: '#PX-89001', patient: 'David Vance', email: 'vance.d@web.com', doctor: 'Dr. Sarah Jenkins', department: 'Orthopedics Unit', date: 'Oct 25, 2023', time: '11:15 AM', status: 'Cancelled', initial: 'DV', color: 'error' },
];

const AppointmentOperations = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div className="animate-in fade-in duration-700 relative h-full">
      <header className="mb-10">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface mb-2">Central Booking Registry</h2>
            <p className="text-on-surface-variant font-medium opacity-80 text-sm md:text-base">Managing 1,284 patient encounters for current clinical cycle</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full xl:w-auto">
            <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 bg-surface-container-high text-on-surface px-6 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-surface-bright transition-all border border-outline-variant/10">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Advanced Filters
            </button>
            <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary-container/20 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-sm">add</span>
              New Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Bento Grid: Stats Quickview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {[
          { label: 'Total Bookings', value: '2,481', sub: '+12% vs last month', color: 'primary' },
          { label: 'Pending Actions', value: '42', sub: 'Requires confirmation', color: 'primary' },
          { label: 'Cancellation Rate', value: '3.2%', sub: 'Down 0.5% today', color: 'primary' },
          { label: 'Hospital Capacity', value: '88%', sub: 'Occupancy Visual', color: 'primary', progress: 88 },
        ].map((stat, idx) => (
          <div key={idx} className="bg-surface-container rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-outline-variant/5 shadow-sm hover:translate-y-[-2px] transition-all">
            <span className={`text-[10px] text-${stat.color} tracking-[0.15em] uppercase font-black`}>{stat.label}</span>
            <div className="mt-6">
              <span className="text-3xl md:text-4xl font-black tracking-tighter text-on-surface">{stat.value}</span>
              {stat.progress ? (
                <div className="w-full bg-surface-container-low h-1.5 mt-4 rounded-full overflow-hidden">
                  <div className={`bg-${stat.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${stat.progress}%` }}></div>
                </div>
              ) : (
                <span className={`text-[10px] font-bold text-on-surface-variant/60 block mt-2 uppercase tracking-wide`}>{stat.sub}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Master Registry Container */}
      <section className="bg-surface-container-low rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/5">
        <div className="p-6 md:p-8 bg-surface-container flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-6 border-b border-outline-variant/5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 flex-1">
            <div className="relative flex-1 md:min-w-[300px]">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input className="w-full bg-surface-container-highest border border-outline-variant/10 rounded-2xl py-3.5 pl-12 pr-6 text-sm text-on-surface focus:ring-2 focus:ring-primary/10 transition-all outline-none" placeholder="Search patient ID or name..." type="text" />
            </div>
            <select className="bg-surface-container-highest border border-outline-variant/10 rounded-2xl py-3.5 px-6 text-sm text-on-surface focus:ring-2 focus:ring-primary/10 outline-none appearance-none pr-12 cursor-pointer font-bold">
              <option>All Specializations</option>
              <option>Cardiology</option>
              <option>Neurology</option>
            </select>
          </div>
          <div className="flex gap-2 justify-end">
            <button className="flex-1 md:flex-none p-3 bg-surface-container-highest hover:bg-surface-bright rounded-xl text-on-surface-variant transition-all border border-outline-variant/10 flex justify-center">
              <span className="material-symbols-outlined">download</span>
            </button>
            <button className="flex-1 md:flex-none p-3 bg-surface-container-highest hover:bg-surface-bright rounded-xl text-on-surface-variant transition-all border border-outline-variant/10 flex justify-center">
              <span className="material-symbols-outlined">print</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container">
              <tr>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Patient Identification</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Assigned Specialist</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Schedule & Time</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Operational Status</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {appointments.map((apt, idx) => (
                <tr
                  key={idx}
                  onClick={() => setSelectedAppointment(apt)}
                  className="hover:bg-surface-bright transition-all cursor-pointer group"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center text-${apt.color} font-black text-sm border border-outline-variant/10 shadow-sm`}>{apt.initial}</div>
                      <div>
                        <div className="text-sm font-bold text-on-surface mb-1">{apt.patient}</div>
                        <div className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{apt.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm text-on-surface font-bold mb-1">{apt.doctor}</div>
                    <div className="text-[10px] text-primary uppercase font-black tracking-widest">{apt.department}</div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="text-sm text-on-surface font-semibold mb-1">{apt.date}</div>
                    <div className="text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Arrival: {apt.time}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-outline-variant/10
                      ${apt.status === 'Confirmed' ? 'bg-primary/10 text-primary' :
                        apt.status === 'Completed' ? 'bg-green-500/10 text-green-500' :
                          apt.status === 'Cancelled' ? 'bg-error/10 text-error' : 'bg-surface-container-highest text-on-surface-variant'}
                    `}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <button className="text-primary hover:text-primary-container transition-all flex items-center gap-1 font-black text-[10px] uppercase tracking-[0.15em] group-hover:translate-x-1 duration-300">
                      Details <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Appointment Detail Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-surface-container rounded-[2.5rem] w-full max-w-4xl shadow-2xl overflow-hidden border border-outline-variant/10 animate-in zoom-in-95 duration-500">
            <div className="h-2 bg-gradient-to-r from-primary to-primary-container"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="p-10 bg-surface-container-low border-r border-outline-variant/10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-3xl bg-surface-container-highest flex items-center justify-center text-primary font-black text-3xl mb-6 shadow-xl border border-outline-variant/10">
                    {selectedAppointment.initial}
                  </div>
                  <h3 className="text-2xl font-black text-on-surface tracking-tight">{selectedAppointment.patient}</h3>
                  <p className="text-primary text-[10px] font-black tracking-[0.2em] uppercase mt-3">PX-ID: {selectedAppointment.id}</p>

                  <div className="w-full mt-10 space-y-3">
                    <div className="bg-surface-container p-5 rounded-2xl border border-outline-variant/5 text-left">
                      <span className="text-[9px] text-on-surface-variant uppercase font-black block mb-2 tracking-widest">Assigned Specialist</span>
                      <p className="text-sm font-bold text-on-surface">{selectedAppointment.doctor}</p>
                    </div>
                    <div className="bg-surface-container p-5 rounded-2xl border border-outline-variant/5 text-left">
                      <span className="text-[9px] text-on-surface-variant uppercase font-black block mb-2 tracking-widest">Schedule Arrival</span>
                      <p className="text-sm font-bold text-on-surface">{selectedAppointment.time} IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2 p-12 flex flex-col">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-on-surface-variant mb-3 block">Clinical Encounter Brief</h4>
                    <h2 className="text-3xl font-black text-on-surface tracking-tighter">Diagnostic Follow-up Session</h2>
                  </div>
                  <button
                    onClick={() => setSelectedAppointment(null)}
                    className="p-3 hover:bg-surface-container-highest rounded-full transition-all active:scale-90 text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-2xl">close</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-12">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase font-black text-primary mb-2 tracking-widest">Patient Contact</p>
                      <p className="text-sm text-on-surface font-bold">{selectedAppointment.email}</p>
                      <p className="text-sm text-on-surface font-bold mt-1">+91 98765 43210</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-primary mb-2 tracking-widest">Insurance Status</p>
                      <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">Verified Active</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-primary mb-2 tracking-widest">Clinical Notes</p>
                    <p className="text-sm text-on-surface-variant font-medium leading-relaxed italic opacity-80">
                      "Patient reporting recurring fatigue levels. Routine ECG and complete metabolic panel scheduled for 09:30 AM slot."
                    </p>
                  </div>
                </div>

                <div className="mt-auto pt-10 border-t border-outline-variant/10 flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:brightness-110 transition-all active:scale-95">
                    Process Check-in
                  </button>
                  <button className="flex-1 bg-surface-container-highest text-on-surface py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] border border-outline-variant/10 hover:bg-surface-bright transition-all active:scale-95">
                    Reschedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentOperations;
