import React from 'react'
import { Link } from 'react-router-dom'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'

export default function BookingSuccessApp() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <HeaderApp />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <div className="max-w-md w-full text-center space-y-8 bg-surface-container-low p-12 rounded-[3rem] border border-primary/10 shadow-2xl relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-tertiary" />
          
          <div className="relative z-10">
            <div className="w-24 h-24 bg-secondary text-on-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl animate-bounce">
              <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
            </div>
            
            <h1 className="text-4xl font-bold text-primary font-headline tracking-tight mb-4">Confirmed!</h1>
            <p className="text-on-surface-variant font-medium leading-relaxed mb-10">
              Your sanctuary of healing awaits. Your clinical appointment at Krishna Hospitals has been successfully scheduled.
            </p>

            <div className="space-y-4 pt-8 border-t border-outline-variant/10 mb-10 text-left">
               <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Booking ID</span>
                  <span className="text-primary font-bold">#KH-99214</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">Arrival Time</span>
                  <span className="text-primary font-bold">08:45 AM</span>
               </div>
            </div>

            <div className="flex flex-col gap-4">
               <Link to="/">
                <button className="w-full py-4 rounded-full bg-primary text-on-primary font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95 transform">
                  Return Home
                </button>
               </Link>
               <button className="w-full py-4 rounded-full border border-outline-variant text-primary font-bold hover:bg-surface-container-lowest transition-all">
                  Get Directions
               </button>
            </div>
          </div>
        </div>
      </main>

      <FooterApp />
    </div>
  )
}
