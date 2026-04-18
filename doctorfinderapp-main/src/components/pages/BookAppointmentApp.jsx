import React from 'react'
import { Link } from 'react-router-dom'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'
export default function BookAppointmentApp() {
  return (
   <>
   <HeaderApp />
   <main className="pt-28 pb-20 flex-grow px-6 max-w-7xl mx-auto w-full">
  {/* Progress Stepper */}
  <div className="mb-12 flex justify-between items-center max-w-2xl mx-auto relative">
    {/* Connector Line */}
    <div className="absolute top-5 left-0 w-full h-0.5 bg-surface-container-highest z-0" />
    <div className="absolute top-5 left-0 w-1/3 h-0.5 bg-primary z-0" />
    <div className="relative z-10 flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
        <span
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          check
        </span>
      </div>
      <span className="text-xs font-bold font-headline tracking-widest text-primary uppercase">
        Select Time
      </span>
    </div>
    <div className="relative z-10 flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center ring-4 ring-surface shadow-md">
        <span className="text-sm font-bold">2</span>
      </div>
      <span className="text-xs font-bold font-headline tracking-widest text-on-surface uppercase">
        Patient Details
      </span>
    </div>
    <div className="relative z-10 flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
        <span className="text-sm font-bold">3</span>
      </div>
      <span className="text-xs font-bold font-headline tracking-widest text-outline uppercase">
        Review
      </span>
    </div>
    <div className="relative z-10 flex flex-col items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center">
        <span className="text-sm font-bold">4</span>
      </div>
      <span className="text-xs font-bold font-headline tracking-widest text-outline uppercase">
        Confirm
      </span>
    </div>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
    {/* Left Column: Form Sections */}
    <div className="lg:col-span-8 space-y-8">
      {/* Section 1: Patient Details */}
      <section className="bg-surface-container-low rounded-xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <span
            className="material-symbols-outlined text-primary"
            data-icon="person_book"
          >
            person_book
          </span>
          <h2 className="text-2xl font-bold font-headline tracking-tight text-on-surface">
            Patient Details
          </h2>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2 font-label">
              Full Name
            </label>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition-all text-on-surface placeholder:text-outline-variant"
              placeholder="John Doe"
              type="text"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2 font-label">
              Age
            </label>
            <input
              className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition-all text-on-surface placeholder:text-outline-variant"
              placeholder={28}
              type="number"
            />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2 font-label">
              Gender
            </label>
            <select className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition-all text-on-surface">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Prefer not to say</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2 font-label">
              Contact Details (Phone/Email)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition-all text-on-surface placeholder:text-outline-variant"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
              <input
                className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition-all text-on-surface placeholder:text-outline-variant"
                placeholder="john.doe@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold tracking-widest text-on-surface-variant uppercase mb-2 font-label">
              Reason for Visit
            </label>
            <textarea
              className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:ring-opacity-10 transition-all text-on-surface placeholder:text-outline-variant"
              placeholder="Briefly describe your symptoms or concern..."
              rows={4}
              defaultValue={""}
            />
          </div>
        </form>
      </section>
      {/* Section 2: Date & Time Picker (Re-confirmation/Modification) */}
      <section className="bg-surface-container-low rounded-xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-primary"
              data-icon="calendar_today"
            >
              calendar_today
            </span>
            <h2 className="text-2xl font-bold font-headline tracking-tight text-on-surface">
              Preferred Slot
            </h2>
          </div>
          <button className="text-primary text-sm font-bold font-headline hover:underline">
            Change Selection
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Time Slot Card: Active */}
          <button className="p-4 rounded-xl bg-primary text-on-primary shadow-lg flex flex-col items-center gap-1 transition-all">
            <span className="text-xs opacity-80 uppercase font-bold tracking-tighter">
              Oct 24
            </span>
            <span className="text-lg font-bold font-headline">09:00 AM</span>
          </button>
          {/* Time Slot Card: Inactive */}
          <button className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col items-center gap-1 border border-outline-variant/10">
            <span className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">
              Oct 24
            </span>
            <span className="text-lg font-bold font-headline text-on-surface">
              10:30 AM
            </span>
          </button>
          <button className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col items-center gap-1 border border-outline-variant/10">
            <span className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">
              Oct 24
            </span>
            <span className="text-lg font-bold font-headline text-on-surface">
              01:00 PM
            </span>
          </button>
          <button className="p-4 rounded-xl bg-surface-container-lowest hover:bg-surface-container-high transition-all flex flex-col items-center gap-1 border border-outline-variant/10">
            <span className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">
              Oct 24
            </span>
            <span className="text-lg font-bold font-headline text-on-surface">
              03:30 PM
            </span>
          </button>
        </div>
      </section>
    </div>
    {/* Right Column: Summary Sticky Card */}
    <div className="lg:col-span-4">
      <div className="sticky top-28 bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8 bg-primary text-on-primary">
          <h3 className="text-xs font-bold tracking-widest uppercase opacity-80 mb-4 font-headline">
            Booking Summary
          </h3>
          <div className="flex items-start gap-4">
            <img
              alt="Dr. Sarah Mitchell"
              className="w-16 h-16 rounded-full object-cover border-2 border-on-primary/20"
              data-alt="portrait of a professional female doctor in white coat with stethoscope against clean medical background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfHvnjXa3erUXzw7Wn27uhDLkGeojoNCEi_oADQ0ul2LEvb9W6yh190H_5-F9o36lux7FOIBu8zLzuq6GEGvPpMDFA0a4MIpfg_F50u60U_rd0127LbiEwJXdhNZ40Hk41mRPpR7YSrlY-kxZSRIQZh1tArUQD4e-qyexnsOtEMoqb_Q2_NmX5op9cMimoh5BVadCv3fTc3oC4ngtd5jVPLPRU8VBz1WuvI6_Vy5HiOgS7PErClwqA2DFI_iSQSmGwUD-8Y5y19EM"
            />
            <div>
              <h4 className="text-xl font-bold font-headline">
                Dr. Sarah Mitchell
              </h4>
              <p className="text-sm opacity-80">Senior Cardiologist</p>
            </div>
          </div>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm font-medium">
                Date
              </span>
              <span className="text-on-surface font-bold font-headline">
                Thursday, Oct 24
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm font-medium">
                Time
              </span>
              <span className="text-on-surface font-bold font-headline">
                09:00 AM - 09:30 AM
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm font-medium">
                Location
              </span>
              <span className="text-on-surface font-bold font-headline text-right">
                Main Wing, 4th Floor
              </span>
            </div>
          </div>
          <div className="h-[1px] bg-outline-variant/20" />
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm font-medium">
                Consultation Fee
              </span>
              <span className="text-on-surface font-bold font-headline">
                $150.00
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant text-sm font-medium">
                Facility Charge
              </span>
              <span className="text-on-surface font-bold font-headline">
                $25.00
              </span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-bold font-headline">
                Total Payable
              </span>
              <span className="text-2xl font-extrabold font-headline text-primary">
                $175.00
              </span>
            </div>
          </div>
          <Link to="/booking-success" className="block">
            <button className="w-full py-4 rounded-full bg-primary text-on-primary font-bold font-headline text-lg shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 transform">
              Proceed to Payment
            </button>
          </Link>
          <p className="text-[10px] text-center text-outline uppercase font-bold tracking-widest leading-relaxed">
            By proceeding, you agree to our{" "}
            <a className="underline" href="#">
              Booking Policy
            </a>{" "}
            &amp;{" "}
            <a className="underline" href="#">
              Cancellation Terms
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </div>
</main>

<FooterApp />

   </>
  )
}
