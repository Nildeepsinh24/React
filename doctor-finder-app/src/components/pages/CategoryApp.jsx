import React from 'react'

export default function CategoryApp() {
  return (
    
    <>
      {/* Browse by Specialization */}
      <section className="py-24 bg-surface px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Browse by Specialization</h2>
              <p className="text-on-surface-variant font-body">World-class departments designed for focused healing.</p>
            </div>
            <a className="text-primary font-bold flex items-center group" href="#">
              View All Departments <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="group cursor-pointer bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-lowest hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">cardiology</span>
              </div>
              <p className="font-bold text-primary font-headline">Cardiologist</p>
            </div>
            <div className="group cursor-pointer bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-lowest hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto text-on-secondary-container group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-3xl">dentistry</span>
              </div>
              <p className="font-bold text-primary font-headline">Dentist</p>
            </div>
            <div className="group cursor-pointer bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-lowest hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto text-on-tertiary-fixed-variant group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined text-3xl">stethoscope</span>
              </div>
              <p className="font-bold text-primary font-headline">Physician</p>
            </div>
            <div className="group cursor-pointer bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-lowest hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">neurology</span>
              </div>
              <p className="font-bold text-primary font-headline">Neurology</p>
            </div>
            <div className="group cursor-pointer bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-lowest hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mx-auto text-on-secondary-container group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-3xl">pediatrics</span>
              </div>
              <p className="font-bold text-primary font-headline">Pediatrics</p>
            </div>
            <div className="group cursor-pointer bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-lowest hover:shadow-xl transition-all duration-300 text-center space-y-4">
              <div className="w-16 h-16 bg-tertiary-fixed rounded-full flex items-center justify-center mx-auto text-on-tertiary-fixed-variant group-hover:bg-tertiary group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined text-3xl">psychiatry</span>
              </div>
              <p className="font-bold text-primary font-headline">Mental Health</p>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
