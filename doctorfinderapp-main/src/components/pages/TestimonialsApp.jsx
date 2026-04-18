import React from 'react'

export default function TestimonialsApp() {
  return (
    <>
  {/* Testimonials */}
  <section className="py-24 bg-surface-container-lowest px-8">
    <div className="max-w-4xl mx-auto text-center space-y-16">
      <div className="space-y-4">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs">
          Testimonials
        </span>
        <h2 className="text-4xl font-bold text-primary">Voices of Recovery</h2>
      </div>
      <div className="relative px-12">
        <span className="material-symbols-outlined absolute -top-10 -left-4 text-7xl text-primary/10">
          format_quote
        </span>
        <div className="space-y-8">
          <p className="text-2xl md:text-3xl font-medium text-primary leading-relaxed italic">
            "The level of precision and care I received at Krishna Hospitals was
            beyond anything I've experienced. From the concierge check-in to the
            neurosurgery team, everything felt curated for my recovery."
          </p>
          <div className="flex flex-col items-center space-y-2">
            <img
              className="w-16 h-16 rounded-full border-4 border-surface shadow-md"
              data-alt="Portrait of a middle-aged man with a peaceful expression in a sunlit room"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnwyz7tHhZWhnb_uYqEk4fsUrONhnknKDsIfnn7NyKE4aT37RoEx7Kx2fjrqIs8HCAQiCgVWkfx-L17BV6FaZZv2l4L8eCmV2qZuHwnJ3GizhwNnkoa7abmeA0jicgd6CK9S4U_xEal4DkbIdQIm00m8N1uGBYrK84YPktFZNITI7qMpy8GaRjilB-kyymA5tr83tRGvpeOyDw1SuF9J7L8v1W9f5yh8VgHUVXGfFFGN5q08CwKgX8a_93UxiC4ZjtA0IfCw3UYDA"
            />
            <div>
              <p className="font-bold text-primary">Arthur P. Sterling</p>
              <p className="text-sm text-on-surface-variant">
                Heart Valve Replacement Patient
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
