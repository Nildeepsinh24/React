import React from 'react'
import { Link } from 'react-router-dom'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'

const doctorData = {
  id: 1,
  name: "Dr. James Sterling",
  specialty: "Senior Cardiologist",
  rating: 4.9,
  reviews: 128,
  experience: "15+ Years",
  fees: "$120",
  education: [
    "MD - Cardiology, Harvard Medical School",
    "Residency - Johns Hopkins Hospital",
    "Fellowship - American College of Cardiology"
  ],
  bio: "Dr. James Sterling is a world-renowned Senior Cardiologist with over 15 years of experience in clinical excellence. He specializing in minimally invasive valve surgery and advanced heart failure treatment. His dedication to patient outcomes and innovative research has earned him numerous distinguished faculty awards.",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfOV2VGx-9ookn1M0hJT3EoA1YTHjy3ly7xDeWwkpdXG8M7Qyuy1LmGikG4wG8g1c5-LgGtZDojqwDHxeSnCaXoVaG61SciptjA31a5rQpy9Ga7jKrHijN4T-F40wB3dwvnuV4t8eYLeu7yn0kA1-byZNReABewASasCJFN4HQgedR3EQwCqbBFi1kD5NbptZvR-614eUTF-qjs5Av4SdGRa1qUCt-nTpqGnIA-XX8dQEf6GuxR5SFZZe4ZNbI_qgKIYBn7NpmU9E",
  workingHours: "Mon - Sat: 09:00 AM - 05:00 PM"
};

export default function DoctorProfileApp() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <HeaderApp />
      
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Doctor Card & Stats */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest rounded-3xl p-8 shadow-xl border border-outline-variant/10">
              <div className="relative mb-8">
                <img 
                  src={doctorData.image} 
                  alt={doctorData.name} 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                  Verified Specialist
                </div>
              </div>
              
              <div className="text-center space-y-2 mt-10">
                <h1 className="text-3xl font-bold text-primary font-headline">{doctorData.name}</h1>
                <p className="text-secondary font-bold tracking-widest text-xs uppercase">{doctorData.specialty}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-10 pb-8 border-b border-outline-variant/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{doctorData.rating}</p>
                  <p className="text-[10px] uppercase font-bold text-outline">Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{doctorData.reviews}</p>
                  <p className="text-[10px] uppercase font-bold text-outline">Reviews</p>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant font-medium">Consultation Fee</span>
                  <span className="text-primary font-bold">{doctorData.fees}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant font-medium">Experience</span>
                  <span className="text-primary font-bold">{doctorData.experience}</span>
                </div>
              </div>

              <Link to="/book-appointment" className="block mt-10">
                <button className="w-full py-4 rounded-full bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 transform">
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Biography & Info */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined">person</span>
                Biography
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg font-light italic">
                "{doctorData.bio}"
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined">school</span>
                  Education
                </h2>
                <ul className="space-y-4">
                  {doctorData.education.map((edu, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                      <p className="text-on-surface-variant font-medium">{edu}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined">schedule</span>
                  Working Hours
                </h2>
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">event_available</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">Available Days</p>
                        <p className="text-lg font-bold text-primary">{doctorData.workingHours}</p>
                      </div>
                   </div>
                </div>
              </section>
            </div>

            <section>
               <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined">rate_review</span>
                Patient Stories
              </h2>
              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <div className="flex gap-4 mb-4">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  ))}
                </div>
                <p className="text-on-surface-variant text-lg italic leading-relaxed">
                  "Dr. Sterling is a compassionate healer. He took the time to explain every detail of my procedure and made me feel completely at ease. I am now back to my active lifestyle thanks to his expert care."
                </p>
                <div className="mt-6 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">JD</div>
                   <div>
                     <p className="font-bold text-on-surface">Jonah Davis</p>
                     <p className="text-xs text-on-surface-variant">Patient since 2023</p>
                   </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FooterApp />
    </div>
  )
}
