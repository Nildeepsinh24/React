import React from 'react'
import { Link } from 'react-router-dom'
export default function FooterApp() {
  return (
  <>
    <footer className="w-full mt-auto bg-slate-100 dark:bg-slate-950">
  <div className="bg-slate-200 dark:bg-slate-800 p-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto py-16">
      <div className="space-y-6">
        <div className="text-lg font-bold text-blue-900 dark:text-blue-200 font-manrope">
          Krishna Hospitals Inc
        </div>
        <p className="text-slate-500 font-inter text-sm antialiased leading-relaxed">
          Setting the gold standard in clinical excellence and empathetic
          patient navigation.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-blue-900 dark:text-blue-400">
          Quick Links
        </h4>
        <nav className="flex flex-col space-y-3">
          <Link 
            className="text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 transition-colors font-inter text-sm"
            to="/about-us"
          >
            About Us
          </Link>
          <Link 
            className="text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 transition-colors font-inter text-sm"
            to="/doctors-list"
          >
            Find Doctors
          </Link>
          <Link 
            className="text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 transition-colors font-inter text-sm"
            to="/careers"
          >
            Careers
          </Link>
          <Link 
            className="text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 transition-colors font-inter text-sm"
            to="/contact-us"
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-blue-900 dark:text-blue-400">Legal</h4>
        <nav className="flex flex-col space-y-3">
          <Link
            className="text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 transition-colors font-inter text-sm"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 transition-colors font-inter text-sm"
            to="/terms-of-service"
          >
            Terms of Service
          </Link>
          <Link
            className="text-slate-500 hover:text-blue-900 dark:hover:text-blue-100 transition-colors font-inter text-sm"
            to="/cookie-policy"
          >
            Cookie Policy
          </Link>
        </nav>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-blue-900 dark:text-blue-400">
          Newsletter
        </h4>
        <p className="text-slate-500 font-inter text-sm">
          Subscribe for health tips and sanctuary news.
        </p>
        <div className="flex">
          <input
            className="bg-surface-container-lowest border border-outline-variant/30 rounded-l-full px-4 py-2 w-full text-sm focus:ring-1 focus:ring-primary outline-none"
            placeholder="Email Address"
            type="email"
          />
          <button className="bg-primary text-on-primary px-4 py-2 rounded-r-full material-symbols-outlined">
            send
          </button>
        </div>
      </div>
    </div>
    <div className="pt-12 border-t border-slate-300 dark:border-slate-800 text-center">
      <p className="text-slate-500 font-inter text-xs antialiased">
        © 2024 Krishna Hospitals Inc. Curated Sanctuary for Clinical Excellence.
      </p>
    </div>
  </div>
</footer>

  </>

  )
}
