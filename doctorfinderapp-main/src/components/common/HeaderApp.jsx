import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome,FaBook,FaUser,FaMobile,FaSearch,FaStethoscope } from "react-icons/fa";
export default function HeaderApp() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) => 
    isActive 
      ? "text-blue-900 dark:text-blue-400 border-b-2 border-blue-900 dark:border-blue-400 pb-1"
      : "text-slate-600 dark:text-slate-400 hover:text-blue-700 transition-colors";

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto w-full">
          
          {/* Logo */}
          <div className="text-xl font-bold text-blue-900 dark:text-blue-100 font-manrope tracking-tight">
            Krishna Hospitals Inc
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-manrope font-semibold tracking-tight">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/doctors-list" className={navLinkClasses}>
              Find Doctors
            </NavLink>
            <NavLink to="/book-appointment" className={navLinkClasses}>
              Appointments
            </NavLink>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4 md:space-x-6">
            
            {/* Search */}
            <button className="material-symbols-outlined text-slate-600 hover:text-blue-600">
              search
            </button>

            {/* Login */}
            <Link to="/login-us">
              <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700">
                Login
              </button>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden text-3xl text-slate-700 dark:text-white"
            >
              ☰
            </button>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-800 h-[1px] opacity-10" />
      </header>

      {/* SIDEBAR */}
      <div
        className={`fixed inset-y-0 left-0 h-dvh w-[82vw] max-w-[320px] bg-white dark:bg-slate-900 shadow-2xl transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 className="font-bold text-lg">
            <FaStethoscope className="inline-flex mt-0 top-0" /> Doctor Finder App</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl leading-none p-1"
          >
            ✕
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col p-5 sm:p-6 space-y-4 font-semibold uppercase text-sm tracking-widest text-on-surface-variant overflow-y-auto h-[calc(100dvh-73px)]">
          <NavLink 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `transition-colors flex items-center gap-3 ${isActive ? 'text-primary' : 'hover:text-primary transition-colors'}`}
          >
            <FaHome className="text-lg" /> Home
          </NavLink>
          
          <NavLink 
            to="/doctors-list" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `transition-colors flex items-center gap-3 ${isActive ? 'text-primary' : 'hover:text-primary transition-colors'}`}
          >
            <FaSearch className="text-lg" /> Find Doctors
          </NavLink>

          <NavLink 
            to="/book-appointment" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `transition-colors flex items-center gap-3 ${isActive ? 'text-primary' : 'hover:text-primary transition-colors'}`}
          >
            <FaBook className="text-lg" /> Appointments
          </NavLink>
          
          <NavLink 
            to="/login-us" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `transition-colors flex items-center gap-3 ${isActive ? 'text-primary' : 'hover:text-primary transition-colors'}`}
          >
            <FaUser className="text-lg" /> Login
          </NavLink>
        
          <NavLink 
            to="/contact-us" 
            onClick={() => setIsOpen(false)} 
            className={({ isActive }) => `transition-colors flex items-center gap-3 ${isActive ? 'text-primary' : 'hover:text-primary transition-colors'}`}
          >
            <FaMobile className="text-lg" /> Contact Us
          </NavLink>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/45 backdrop-blur-[1px] z-40"
        />
      )}
    </>
  );
}