import React from 'react'
import { Link } from 'react-router-dom'

const featuredDoctors = [
  {
    id: 1,
    name: "Dr. James Sterling",
    specialty: "Sr. Cardiologist",
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfOV2VGx-9ookn1M0hJT3EoA1YTHjy3ly7xDeWwkpdXG8M7Qyuy1LmGikG4wG8g1c5-LgGtZDojqwDHxeSnCaXoVaG61SciptjA31a5rQpy9Ga7jKrHijN4T-F40wB3dwvnuV4t8eYLeu7yn0kA1-byZNReABewASasCJFN4HQgedR3EQwCqbBFi1kD5NbptZvR-614eUTF-qjs5Av4SdGRa1qUCt-nTpqGnIA-XX8dQEf6GuxR5SFZZe4ZNbI_qgKIYBn7NpmU9E",
    description: "Specializing in minimally invasive valve surgery and advanced heart failure treatment."
  },
  {
    id: 2,
    name: "Dr. Elena Rodriguez",
    specialty: "Neurosurgeon",
    rating: 5.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfu_yPREM1uFkg7s8-dvU9FfEbSKtzlIk8OqxodSMKUq0ESgICA8JVh52hhe6lSx6k6BmlDxKINvGTPQ7O_gcAHdygi2_EOKb1gUw7YT0BZxqE-eyXYfwMO7aXukXm0_kRcC6gs3vBsc1Lto8JyYH0Uvu0wcsiAOxAvZLsycxwykBXwnmVPx2PwSqMFJ6TBQl3yPJwqi4fuv94zv2mx9l6sZ-CrWC7QX91AUHf9PI7ZU7AiJQWmvl0zaCulq7bRR-zPGvUbNn9G8o",
    description: "Pioneer in robotic-assisted neurosurgery and spinal reconstruction with 15+ years experience."
  },
  {
    id: 3,
    name: "Dr. Marcus Thorne",
    specialty: "Pediatrician",
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx9UvoFkGAi46bQ94QEbD05H3A8uOm00wmnJLxWXArmMQSnqElm46-tpEfGTFEwuYDF0QLSrmc5pEJ6oLSnR8v50Slv5HzoWnNkZLFH_d7ZC5HbFNqM1faDuKXB-JrJp52Rpgd4OIJFO8XhUTW1xSC6k4fl-s-Ux_T3_dROzk511XkgrkV4sdL4Rjya3NLN_PDNKf288NlMN-Yhw3UTZ_xEL4WPDO3U1KMrHYrk0I4sHRaQ_P0oVgQvb7_kItwSH5_Zoo4CMY4pt0",
    description: "Dedicated to adolescent development and holistic wellness with a gentle patient-first approach."
  }
];

export default function DoctorSlider() {
  return (
    <section className="py-24 bg-surface-container-low px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-primary tracking-tight">
              Our Distinguished Faculty
            </h2>
            <p className="text-on-surface-variant font-body mt-2">
              Meet the pioneers in clinical medicine and surgical excellence.
            </p>
          </div>
          <Link to="/doctors-list" className="text-primary font-bold hover:underline">
            View All Doctors →
          </Link>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
          {featuredDoctors.map(doctor => (
            <div key={doctor.id} className="min-w-[320px] snap-center bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm group border border-outline-variant/10">
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={doctor.image}
                  alt={doctor.name}
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{doctor.name}</h3>
                    <p className="text-sm text-on-surface-variant font-label uppercase tracking-wider">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center text-secondary font-bold">
                    <span className="material-symbols-outlined text-sm mr-1" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                    {doctor.rating}
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {doctor.description}
                </p>
                <Link to="/book-appointment">
                  <button className="w-full mt-4 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
