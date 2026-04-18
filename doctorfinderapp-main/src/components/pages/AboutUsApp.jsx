import React from 'react'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'

export default function AboutUsApp() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <HeaderApp />
      
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <section className="text-center mb-20">
          <p className="text-secondary font-bold tracking-widest text-xs uppercase mb-4">Our Legacy</p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary font-headline tracking-tight leading-tight mb-8">
            Providing <span className="text-secondary italic">Excellence</span> <br /> in Every Beat.
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            Krishna Hospitals is a sanctuary of healing where patient care meets clinical precision. 
            For over two decades, we have been at the forefront of medical innovation in India.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">medical_services</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Advanced Tech</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Equipped with the latest robotic surgical systems and diagnostic machinery.
            </p>
          </div>
          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Expert Faculty</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Our team consists of distinguished specialists from top international institutions.
            </p>
          </div>
          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10">
            <div className="w-14 h-14 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">favorite</span>
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Patient First</h3>
            <p className="text-on-surface-variant leading-relaxed">
              We provide a holistic healing environment focused on empathy and individual needs.
            </p>
          </div>
        </div>

        <section className="relative h-[500px] rounded-3xl overflow-hidden mb-24">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Z8suy0WGATMSJYBQezzesHnLR1aQF5gnpYqSTtCx2uGAPuloYVY2pxCVlWzCCP0SUwkO7cIiiiJFVGKse1pwHPbn1KFb83ycCDIG9kO1B8ORnDquJ9BlWYJrxq7TyHXtQn52bfSArpkYwIn5hgQqbZkWjPkDWcxFbFDOlZeavQXDlAf4cmlcTLpjFHnmLrAgr7dyYuCh7rRxo4BiVvKPDrhCZmhucvPGRxBJYFi_-UAhYpyWv0PeqtaQEK2jMgGsglkxUrLowT4" 
            alt="Krishna Hospital Facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-12">
            <div className="text-on-primary max-w-xl">
               <h2 className="text-3xl font-bold mb-4">The Sanctuary of Health</h2>
               <p className="opacity-80">Our campus is designed to be more than just a hospital; it is a space for recovery, meditation, and renewed life.</p>
            </div>
          </div>
        </section>
      </main>

      <FooterApp />
    </div>
  )
}
