import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'

const doctors = [
  {
    id: 1,
    name: "Dr. James Sterling",
    specialty: "Senior Cardiologist",
    rating: 4.9,
    reviews: 120,
    experience: "15+ Yrs",
    fees: "$120",
    nextSlot: "Today",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfOV2VGx-9ookn1M0hJT3EoA1YTHjy3ly7xDeWwkpdXG8M7Qyuy1LmGikG4wG8g1c5-LgGtZDojqwDHxeSnCaXoVaG61SciptjA31a5rQpy9Ga7jKrHijN4T-F40wB3dwvnuV4t8eYLeu7yn0kA1-byZNReABewASasCJFN4HQgedR3EQwCqbBFi1kD5NbptZvR-614eUTF-qjs5Av4SdGRa1qUCt-nTpqGnIA-XX8dQEf6GuxR5SFZZe4ZNbI_qgKIYBn7NpmU9E"
  },
  {
    id: 2,
    name: "Dr. Elena Rodriguez",
    specialty: "Interventional Cardiologist",
    rating: 4.7,
    reviews: 85,
    experience: "12+ Yrs",
    fees: "$150",
    nextSlot: "Tomorrow",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfu_yPREM1uFkg7s8-dvU9FfEbSKtzlIk8OqxodSMKUq0ESgICA8JVh52hhe6lSx6k6BmlDxKINvGTPQ7O_gcAHdygi2_EOKb1gUw7YT0BZxqE-eyXYfwMO7aXukXm0_kRcC6gs3vBsc1Lto8JyYH0Uvu0wcsiAOxAvZLsycxwykBXwnmVPx2PwSqMFJ6TBQl3yPJwqi4fuv94zv2mx9l6sZ-CrWC7QX91AUHf9PI7ZU7AiJQWmvl0zaCulq7bRR-zPGvUbNn9G8o"
  },
  {
    id: 3,
    name: "Dr. Sarah Chen",
    specialty: "Pediatric Specialist",
    rating: 5.0,
    reviews: 210,
    experience: "18+ Yrs",
    fees: "$100",
    nextSlot: "Today",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx9UvoFkGAi46bQ94QEbD05H3A8uOm00wmnJLxWXArmMQSnqElm46-tpEfGTFEwuYDF0QLSrmc5pEJ6oLSnR8v50Slv5HzoWnNkZLFH_d7ZC5HbFNqM1faDuKXB-JrJp52Rpgd4OIJFO8XhUTW1xSC6k4fl-s-Ux_T3_dROzk511XkgrkV4sdL4Rjya3NLN_PDNKf288NlMN-Yhw3UTZ_xEL4WPDO3U1KMrHYrk0I4sHRaQ_P0oVgQvb7_kItwSH5_Zoo4CMY4pt0"
  },
  {
    id: 4,
    name: "Dr. Michael Vaughan",
    specialty: "Neurologist",
    rating: 4.8,
    reviews: 92,
    experience: "10+ Yrs",
    fees: "$180",
    nextSlot: "Wed, 10 AM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJWJ3ElXorjtnJA83CKeCR-BD_ISDWt95X6eVzTgpGS63fjI4uJLp2_yFS4kZBv2Bs0sVp47YI6R0GW5GjINwXZmwAdhC6NuIaCuxMHpY7y8TAvNfLeBLpCk4HskdItj1WWLOzgSr05J6g9zViMC7grpyVzxnjVUvciwZysKYifzlLCfv7x72GXaXQMAjyorxKGyXi7sobavM5Fl_AMaDKfIPnDyFoCaoXzYIatfxfy-21b5fCELl-ChiEksyA4gqmodalf66kHMI"
  }
];

export default function DoctorListApp() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Refine Search</h2>
        <p className="text-sm text-on-surface-variant">Find the perfect specialist for your care.</p>
      </div>

      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Specialization</label>
        <select className="w-full bg-surface-container-low border-none rounded-lg p-3 text-on-surface focus:ring-2 focus:ring-primary transition-all">
          <option>All Specialties</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Pediatrics</option>
        </select>
      </div>

      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Experience</label>
        <div className="grid grid-cols-2 gap-2">
          {['5+ Years', '10+ Years', '15+ Years', '20+ Years'].map((exp) => (
            <button key={exp} className={`py-2 px-3 rounded-md text-xs font-bold transition-all ${exp === '10+ Years' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'}`}>
              {exp}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Availability</label>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-5 h-5 rounded text-primary border-outline-variant/50 focus:ring-primary" />
            <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">Available Today</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-5 h-5 rounded text-primary border-outline-variant/50 focus:ring-primary" />
            <span className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">Available Tomorrow</span>
          </label>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant font-label">Consultation Fees</label>
        </div>
        <div className="pt-2">
          <input type="range" className="w-full accent-primary" min="50" max="500" />
          <div className="flex justify-between text-[10px] font-bold text-outline uppercase mt-2">
            <span>$50</span>
            <span>$500+</span>
          </div>
        </div>
      </div>

      <button className="w-full py-3 rounded-full bg-surface-container-high text-primary font-bold text-sm tracking-wide hover:bg-surface-container-highest transition-all">
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <HeaderApp />
      
      <main className="flex-grow pt-28 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Desktop Sidebar Filter */}
          <aside className="hidden lg:block w-72 shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-between w-full bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 mb-4"
          >
            <span className="font-bold text-primary">Refine Search</span>
            <span className="material-symbols-outlined">filter_list</span>
          </button>

          {/* Main Specialist Grid */}
          <div className="flex-grow space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-bold text-on-surface font-headline">Expert Specialists</h1>
                <p className="text-on-surface-variant text-sm mt-1">Showing 24 cardiologists near your location.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 bg-primary-fixed/20 text-on-primary-fixed-variant px-4 py-2 rounded-lg text-sm font-bold">
                Sort by: Highly Recommended
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctors.map(doctor => (
                <div key={doctor.id} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-outline-variant/5 group">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 shrink-0 relative">
                      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                        Verified
                      </div>
                    </div>
                    <div className="flex-grow space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{doctor.name}</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-secondary">{doctor.specialty}</p>
                      </div>
                      <div className="flex items-center gap-1 text-secondary font-bold text-sm">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                        {doctor.rating} <span className="text-on-surface-variant font-normal">({doctor.reviews} Reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="bg-surface-container-low p-3 rounded-xl text-center">
                      <p className="text-[10px] font-bold uppercase text-outline mb-1">Experience</p>
                      <p className="text-sm font-bold text-primary">{doctor.experience}</p>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded-xl text-center">
                      <p className="text-[10px] font-bold uppercase text-outline mb-1">Fees</p>
                      <p className="text-sm font-bold text-primary">{doctor.fees}</p>
                    </div>
                    <div className="bg-surface-container-low p-3 rounded-xl text-center">
                      <p className="text-[10px] font-bold uppercase text-outline mb-1">Next Slot</p>
                      <p className="text-sm font-bold text-primary">{doctor.nextSlot}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <Link to="/doctor-profile" className="block">
                      <button className="w-full py-3 rounded-full border border-outline-variant text-primary font-bold text-sm hover:bg-surface-container-low transition-all">
                        View Profile
                      </button>
                    </Link>
                    <Link to="/book-appointment" className="block">
                      <button className="w-full py-3 rounded-full bg-primary text-on-primary font-bold text-sm hover:bg-primary-container shadow-lg shadow-primary/20 transition-all">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-center items-center gap-2 pt-12">
               <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all">
                 <span className="material-symbols-outlined">chevron_left</span>
               </button>
               <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-on-primary font-bold shadow-md">1</button>
               <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high">2</button>
               <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high">3</button>
               <span className="px-2 text-outline">...</span>
               <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high font-bold">8</button>
               <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all">
                 <span className="material-symbols-outlined">chevron_right</span>
               </button>
            </div>
          </div>
        </div>
      </main>

      <FooterApp />

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-60 flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)} />
          <div className="relative w-[88vw] max-w-sm sm:w-full bg-surface h-dvh shadow-2xl p-5 sm:p-8 overflow-y-auto transform transition-transform animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-8 sm:mb-10">
              <span className="font-bold text-primary font-headline">Filters</span>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <FilterContent />
            <div className="mt-8 sm:mt-12">
               <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-4 rounded-full bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
               >
                 See Results
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
