import React from 'react'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'
export default function ContactUsApp() {
  return (
   <>
   <HeaderApp />
    <main className="flex-grow pt-24 pb-16">
  {/* Hero Section */}
  <section className="max-w-7xl mx-auto px-8 py-12">
    <div className="flex flex-col md:flex-row gap-12 items-end">
      <div className="md:w-2/3">
        <p className="text-secondary font-semibold tracking-widest text-xs mb-4">
          REACH OUT TO US
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6 tracking-tight leading-tight">
          We’re here to provide <span className="text-secondary">Healing</span>{" "}
          guidance.
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">
          Connect with our specialized clinical teams or administrative offices.
          Our sanctuary of health is open for your inquiries and urgent care
          needs 24/7.
        </p>
      </div>
      <div className="md:w-1/3 flex justify-end">
        <div className="bg-tertiary-fixed p-8 rounded-xl shadow-sm text-on-tertiary-fixed w-full">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              emergency
            </span>
            <span className="font-bold uppercase tracking-wider text-xs">
              Emergency Hotline
            </span>
          </div>
          <div className="text-3xl font-black mb-1">1-800-KRISHNA</div>
          <p className="text-sm opacity-80 font-medium">
            Immediate clinical response available 24/7
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Bento Contact Layout */}
  <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-6">
    {/* Contact Details Card */}
    <div className="md:col-span-4 bg-surface-container-low p-10 rounded-xl flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-8">
          Contact Information
        </h2>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Phone
              </p>
              <p className="text-lg font-semibold text-on-surface">
                +1 (555) 000-HEALTH
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Email
              </p>
              <p className="text-lg font-semibold text-on-surface">
                care@krishnahospital.com
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Location
              </p>
              <p className="text-lg font-semibold text-on-surface">
                100 Sanctuary Drive,
                <br />
                Clinical Plaza, Health City 4001
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="flex gap-4">
          <a
            className="w-10 h-10 border border-outline-variant/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">public</span>
          </a>
          <a
            className="w-10 h-10 border border-outline-variant/30 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-sm">group</span>
          </a>
        </div>
      </div>
    </div>
    {/* Form Card */}
    <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl shadow-sm border border-outline-variant/10">
      <h2 className="text-2xl font-bold text-primary mb-2">Send a Message</h2>
      <p className="text-on-surface-variant mb-8">
        Our care coordinators will respond to your inquiry within 24 hours.
      </p>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant tracking-wide">
              Full Name
            </label>
            <input
              className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary/20 rounded-lg p-4 transition-all"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant tracking-wide">
              Email Address
            </label>
            <input
              className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary/20 rounded-lg p-4 transition-all"
              placeholder="john@example.com"
              type="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-on-surface-variant tracking-wide">
            Subject
          </label>
          <select className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary/20 rounded-lg p-4 transition-all">
            <option>General Inquiry</option>
            <option>Appointment Scheduling</option>
            <option>Billing Support</option>
            <option>Patient Feedback</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-on-surface-variant tracking-wide">
            Message
          </label>
          <textarea
            className="w-full bg-surface-container-low border-0 focus:ring-2 focus:ring-primary/20 rounded-lg p-4 transition-all"
            placeholder="How can we help you today?"
            rows={5}
            defaultValue={""}
          />
        </div>
        <button
          className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/20"
          type="submit"
        >
          Send Message
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </form>
    </div>
    {/* Map Card */}
    <div className="md:col-span-12 h-96 relative overflow-hidden rounded-xl bg-surface-container-high group">
      <img
        className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 transition-all duration-700"
        data-alt="Minimalist architectural map showing clean urban streets and hospital campus with soft gray tones and blue highlights"
        data-location="Health City"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtKTLE2WPtnHt6k1NZv5sA0UgFQxcTWgC3NOxnbDuSbyQYsgRkvt0mTCM3Q8lvHb4DqOd-5b3YkukjxW14qOSUzC11PdXO8GqbRNi4jyJKd8j4Wsf7OlVeQ6uSGHScfAS3ZRbtgidwp-E-yUSlajDMMMya8QOD5z8Uo1crVWBrfcZnA-decwtqPaRa7EjnXUFzPARfNbpVtCeAaLz74uz3avfRCFTcLZg01MVHFhcj9SqGIYxZbsZ-Tjl6UcOvA44dAqihkV5F2gk"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
      <div className="absolute bottom-8 left-8 bg-surface-container-lowest p-6 rounded-lg shadow-xl max-w-sm">
        <div className="flex items-center gap-2 text-primary mb-2">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: '"FILL" 1' }}
          >
            location_on
          </span>
          <span className="font-bold text-sm tracking-widest">
            VISIT OUR CAMPUS
          </span>
        </div>
        <h3 className="text-xl font-bold mb-1">Main Clinical Pavilion</h3>
        <p className="text-on-surface-variant text-sm mb-4">
          Parking available at North Wing Entrance.
        </p>
        <button className="text-secondary font-bold text-sm flex items-center gap-1 hover:underline">
          Get Directions
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  </section>
  {/* Department Quick Links */}
  <section className="max-w-7xl mx-auto px-8 mt-20">
    <div className="flex items-center gap-4 mb-10">
      <h2 className="text-2xl font-bold text-primary shrink-0">
        Direct Departments
      </h2>
      <div className="h-[2px] bg-outline-variant/20 w-full" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-6 bg-surface-container-low rounded-xl border border-transparent hover:border-primary/10 transition-all hover:bg-surface-container-lowest">
        <p className="font-bold text-on-surface mb-1">Cardiology</p>
        <p className="text-sm text-on-surface-variant">ext. 401</p>
      </div>
      <div className="p-6 bg-surface-container-low rounded-xl border border-transparent hover:border-primary/10 transition-all hover:bg-surface-container-lowest">
        <p className="font-bold text-on-surface mb-1">Neurology</p>
        <p className="text-sm text-on-surface-variant">ext. 405</p>
      </div>
      <div className="p-6 bg-surface-container-low rounded-xl border border-transparent hover:border-primary/10 transition-all hover:bg-surface-container-lowest">
        <p className="font-bold text-on-surface mb-1">Pediatrics</p>
        <p className="text-sm text-on-surface-variant">ext. 312</p>
      </div>
      <div className="p-6 bg-surface-container-low rounded-xl border border-transparent hover:border-primary/10 transition-all hover:bg-surface-container-lowest">
        <p className="font-bold text-on-surface mb-1">Diagnostics</p>
        <p className="text-sm text-on-surface-variant">ext. 220</p>
      </div>
    </div>
  </section>
</main>
<FooterApp />
   </>
  )
}
