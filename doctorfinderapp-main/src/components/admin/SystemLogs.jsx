import React from 'react';

const logs = [
  { id: 'LOG-4821', user: 'Super Admin', action: 'Modified Specialist Registry', target: 'Dr. Alena Smith', time: '2 mins ago', severity: 'Low' },
  { id: 'LOG-4819', user: 'Ops Lead', action: 'Emergency Banner Toggle', target: 'Global Header', time: '14 mins ago', severity: 'High' },
  { id: 'LOG-4815', user: 'System', action: 'Automated Database Backup', target: 'SQL Server Cluster', time: '1 hour ago', severity: 'Low' },
  { id: 'LOG-4812', user: 'Super Admin', action: 'Access Grant', target: 'New Admin: Marcus V.', time: '2 hours ago', severity: 'Medium' },
  { id: 'LOG-4810', user: 'Ops Lead', action: 'Purger System Logs', target: 'Archive Folder', time: 'Yesterday', severity: 'Medium' },
];

const SystemLogs = () => {
  return (
    <div className="animate-in fade-in duration-700 space-y-12 pb-12">
      <header className="space-y-2">
        <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-black">Audit Trail</span>
        <h3 className="text-2xl md:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">System Activity Logs</h3>
        <p className="text-on-surface-variant mt-2 max-w-2xl opacity-80 font-medium">Real-time surveillance of administrative maneuvers and automated system routines.</p>
      </header>

      <div className="bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 shadow-2xl p-2 transition-colors">
         <div className="bg-surface-container-low rounded-[2.2rem] overflow-hidden border border-outline-variant/5">
            <div className="p-6 md:p-8 border-b border-outline-variant/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-surface-container/80 backdrop-blur-xl">
               <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20 flex items-center justify-center gap-2">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-[10px] font-black uppercase text-green-500 tracking-widest whitespace-nowrap">Live Monitoring</span>
                  </div>
                  <span className="text-[10px] font-black uppercase text-on-surface-variant/40 self-center tracking-widest">Showing last 24 hours</span>
               </div>
               <div className="flex gap-2 w-full md:w-auto justify-end">
                  <button className="flex-1 md:flex-none p-3 bg-surface-container-high hover:bg-surface-bright rounded-xl text-on-surface-variant/60 transition-all border border-outline-variant/10 flex justify-center">
                    <span className="material-symbols-outlined">filter_alt</span>
                  </button>
                  <button className="flex-1 md:flex-none p-3 bg-surface-container-high hover:bg-surface-bright rounded-xl text-on-surface-variant/60 transition-all border border-outline-variant/10 flex justify-center">
                    <span className="material-symbols-outlined">delete_sweep</span>
                  </button>
               </div>
            </div>

            <div className="overflow-x-auto no-scrollbar">
               <table className="w-full text-left font-['JetBrains_Mono',monospace] min-w-[700px]">
                  <thead>
                     <tr className="bg-surface-container/30 border-b border-outline-variant/10">
                        <th className="px-8 py-5 text-[10px] text-on-surface-variant/60 uppercase font-black tracking-widest">Timestamp</th>
                        <th className="px-8 py-5 text-[10px] text-on-surface-variant/60 uppercase font-black tracking-widest">Operator</th>
                        <th className="px-8 py-5 text-[10px] text-on-surface-variant/60 uppercase font-black tracking-widest">Action Maneuver</th>
                        <th className="px-8 py-5 text-[10px] text-on-surface-variant/60 uppercase font-black tracking-widest">Target Context</th>
                        <th className="px-8 py-5 text-[10px] text-on-surface-variant/60 uppercase font-black tracking-widest text-right">Severity</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10 text-on-surface">
                     {logs.map((log) => (
                        <tr key={log.id} className="hover:bg-surface-container-high transition-all group">
                           <td className="px-8 py-6">
                              <span className="text-[11px] text-on-surface-variant/60">{log.time}</span>
                           </td>
                           <td className="px-8 py-6">
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                 <span className="text-[11px] font-bold text-on-surface">{log.user}</span>
                              </div>
                           </td>
                           <td className="px-8 py-6">
                              <span className="text-[11px] text-on-surface/80">{log.action}</span>
                           </td>
                           <td className="px-8 py-6">
                              <span className="text-[11px] text-on-surface-variant font-bold">{log.target}</span>
                           </td>
                           <td className="px-8 py-6 text-right">
                              <span className={`inline-block px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest
                                 ${log.severity === 'High' ? 'bg-error/10 text-error border border-error/20' :
                                   log.severity === 'Medium' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' :
                                   'bg-primary/10 text-primary border border-primary/20'}
                              `}>
                                 {log.severity}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            
            <div className="p-8 bg-surface-container/50 border-t border-outline-variant/10 flex justify-center">
               <button className="text-[10px] font-black uppercase text-on-surface-variant/40 tracking-widest hover:text-on-surface transition-colors">
                  Load Older Archival Entries
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default SystemLogs;
