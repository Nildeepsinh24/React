import React from 'react'

export default function ChoiceApp() {
  return (
   <section className="py-24 bg-surface px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4 bg-primary p-12 rounded-3xl text-on-primary flex flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Defining Excellence in Modern Healthcare.
          </h2>
          <p className="text-on-primary-container leading-relaxed">
            We don't just treat symptoms; we curate a pathway to recovery
            through technology and empathy.
          </p>
        </div>
        <div className="pt-12">
          <span className="text-7xl font-extrabold tracking-tighter opacity-20">
            24/7
          </span>
          <p className="font-bold uppercase tracking-widest text-xs mt-2">
            Emergency Response System
          </p>
        </div>
      </div>
      <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-container-low p-8 rounded-3xl space-y-6 border border-outline-variant/5">
          <span className="material-symbols-outlined text-4xl text-secondary">
            clinical_notes
          </span>
          <h3 className="text-2xl font-bold text-primary">
            Precision Diagnostics
          </h3>
          <p className="text-on-surface-variant">
            Our facility houses the region's most advanced 3T MRI and 256-slice
            CT scanners for pinpoint accuracy.
          </p>
        </div>
        <div className="bg-secondary-container p-8 rounded-3xl space-y-6">
          <span className="material-symbols-outlined text-4xl text-on-secondary-container">
            favorite
          </span>
          <h3 className="text-2xl font-bold text-on-secondary-container">
            Patient-Centricity
          </h3>
          <p className="text-on-secondary-container/80">
            Every recovery plan is bespoke, designed around your lifestyle,
            history, and long-term wellness goals.
          </p>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-3xl space-y-6 shadow-sm border border-outline-variant/10">
          <span className="material-symbols-outlined text-4xl text-tertiary">
            group
          </span>
          <h3 className="text-2xl font-bold text-primary">
            Interdisciplinary Teams
          </h3>
          <p className="text-on-surface-variant">
            Our specialists collaborate across departments to provide holistic
            care for complex medical conditions.
          </p>
        </div>
        <div className="bg-primary-fixed p-8 rounded-3xl space-y-6">
          <span className="material-symbols-outlined text-4xl text-primary">
            science
          </span>
          <h3 className="text-2xl font-bold text-primary">Research Focused</h3>
          <p className="text-on-primary-fixed-variant">
            We lead clinical trials that bring tomorrow's treatments to our
            patients today.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
