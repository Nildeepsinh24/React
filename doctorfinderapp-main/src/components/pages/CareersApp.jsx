import React from 'react'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'

const jobCategories = [
  {
    title: "Medical & Clinical",
    icon: "medical_services",
    description: "Join our team of world-class specialists and surgeons in cardiology, neurology, and more.",
    openRoles: 12
  },
  {
    title: "Nursing & Care",
    icon: "health_and_safety",
    description: "Provide empathetic care at the bedside and be the heart of Krishna Hospitals' healing mission.",
    openRoles: 8
  },
  {
    title: "Administration",
    icon: "admin_panel_settings",
    description: "Ensure smooth operations and clinical precision from behind the scenes in our management office.",
    openRoles: 5
  }
];

export default function CareersApp() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <HeaderApp />
      
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <section className="text-center mb-20">
          <p className="text-secondary font-bold tracking-widest text-xs uppercase mb-4">Work with Us</p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary font-headline tracking-tight leading-tight mb-8">
            Build the Future of <br /> <span className="text-secondary">Healthcare.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            Krishna Hospitals is always looking for passionate medical professionals and visionaries to join our sanctuary of healing.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {jobCategories.map((cat, idx) => (
            <div key={idx} className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10 group hover:border-primary/20 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{cat.title}</h3>
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{cat.openRoles} Open Positions</p>
              <p className="text-on-surface-variant leading-relaxed text-sm mb-8">
                {cat.description}
              </p>
              <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                Explore Roles
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

        <section className="bg-primary p-12 md:p-20 rounded-[3rem] text-on-primary text-center relative overflow-hidden">
           <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold font-headline mb-6">Didn't find your role?</h2>
              <p className="text-lg opacity-80 mb-10">
                Send us your clinical portfolio or administrative resume, and we'll keep you in mind for future openings in our clinical dashboard.
              </p>
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-container-low transition-all shadow-xl">
                 Submit General Application
              </button>
           </div>
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-tertiary/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        </section>
      </main>

      <FooterApp />
    </div>
  )
}
