import React from 'react';

const AdminFinancials = () => {
  return (
    <div className="animate-in fade-in duration-700 space-y-12 pb-12">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-primary uppercase tracking-[0.2em] text-[10px] font-black">Financial Oversight</span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-on-surface mt-2 tracking-tight">Revenue & Billing Analysis</h3>
          <p className="text-on-surface-variant mt-2 max-w-2xl opacity-80 font-medium">Monitoring fiscal health, insurance disbursements, and operational expenses.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button className="bg-surface-container-high text-on-surface px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-outline-variant/10">Download Ledger</button>
          <button className="bg-primary text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20">Fiscal Report Q3</button>
        </div>
      </header>

      {/* Revenue Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="col-span-1 lg:col-span-4 bg-surface-container-low p-6 md:p-10 rounded-[2.5rem] border border-outline-variant/5 shadow-xl flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">Total Gross Revenue</span>
            <h4 className="text-4xl md:text-6xl font-black text-on-surface tracking-tighter leading-none">$1.28M</h4>
            <div className="flex items-center gap-2 mt-4">
              <span className="material-symbols-outlined text-green-500">trending_up</span>
              <span className="text-[10px] md:text-xs font-bold text-green-500">+14.2% Growth vs Last Quarter</span>
            </div>
          </div>
          <div className="mt-12 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant font-bold">Consultation Fees</span>
              <span className="text-on-surface font-black">$842,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant font-bold">Diagnostics</span>
              <span className="text-on-surface font-black">$210,000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant font-bold">Pharmacy Yield</span>
              <span className="text-on-surface font-black">$228,000</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-8 bg-surface-container p-6 md:p-10 rounded-[2.5rem] border border-outline-variant/5 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-10 relative z-10">
            <div>
              <h4 className="text-2xl font-black text-on-surface tracking-tight">Monthly Revenue Stream</h4>
              <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-2 px-1">Trend Analysis (Current Fiscal Year)</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar pb-2 sm:pb-0">
              <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/10 whitespace-nowrap">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-[9px] font-black uppercase text-on-surface-variant">Realized</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/10 whitespace-nowrap">
                <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
                <span className="text-[9px] font-black uppercase text-on-surface-variant">Projected</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto no-scrollbar pb-6 md:pb-0">
            <div className="flex items-end justify-between gap-4 h-64 min-w-[500px] md:min-w-0 relative z-10">
              {[
                { m: 'Jan', h: '60%' }, { m: 'Feb', h: '45%' }, { m: 'Mar', h: '75%' },
                { m: 'Apr', h: '90%' }, { m: 'May', h: '55%' }, { m: 'Jun', h: '82%' },
                { m: 'Jul', h: '95%' }, { m: 'Aug', h: '65%' }, { m: 'Sep', h: '88%' }
              ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center flex-1 gap-4 group">
                  <div className="w-full bg-primary/10 rounded-t-xl relative overflow-hidden h-full flex flex-col justify-end group-hover:bg-primary/20 transition-all cursor-pointer">
                    <div className="w-full bg-primary rounded-t-xl transition-all duration-1000 delay-300" style={{ height: bar.h }}></div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{bar.m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Ledger */}
      <div className="bg-surface-container-low rounded-[2.5rem] border border-outline-variant/10 overflow-hidden shadow-2xl">
        <div className="p-6 md:p-8 border-b border-outline-variant/10 bg-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <h4 className="text-xl font-black text-on-surface tracking-tight">Recent Financial Activity</h4>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant self-center">Live Transaction Feed</span>
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest"></div>)}
            </div>
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full text-left min-w-[900px]">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/5">
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Reference ID</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Payer Entity</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Classification</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Settlement</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest">Amount</th>
                <th className="px-8 py-5 text-[10px] text-on-surface-variant uppercase font-black tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {[
                { id: 'TXN-9021', payer: 'Arthur Morgan', class: 'Consultation', date: 'Oct 14, 2023', amt: '$150.00', status: 'Settled' },
                { id: 'TXN-9025', payer: 'Medicare Plus', class: 'Disbursement', date: 'Oct 14, 2023', amt: '$2,480.00', status: 'Verified' },
                { id: 'TXN-9029', payer: 'John Marston', class: 'Diagnostic', date: 'Oct 13, 2023', amt: '$420.00', status: 'Settled' },
                { id: 'TXN-9032', payer: 'Universal Care', class: 'Claim Refund', date: 'Oct 12, 2023', amt: '$120.00', status: 'Pending' },
              ].map((txn, i) => (
                <tr key={i} className="hover:bg-surface-bright transition-all group cursor-pointer">
                  <td className="px-8 py-6 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">{txn.id}</td>
                  <td className="px-8 py-6 text-sm font-bold text-on-surface">{txn.payer}</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-surface-container-high rounded-full text-[9px] font-black uppercase tracking-widest border border-outline-variant/10 text-on-surface-variant">{txn.class}</span>
                  </td>
                  <td className="px-8 py-6 text-sm text-on-surface-variant font-medium">{txn.date}</td>
                  <td className="px-8 py-6 text-sm font-black text-on-surface">{txn.amt}</td>
                  <td className="px-8 py-6 text-right">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-outline-variant/10
                         ${txn.status === 'Settled' ? 'bg-green-500/10 text-green-500' :
                        txn.status === 'Pending' ? 'bg-error/10 text-error' : 'bg-primary/10 text-primary'}
                       `}>
                      {txn.status}
                    </span>
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

export default AdminFinancials;
