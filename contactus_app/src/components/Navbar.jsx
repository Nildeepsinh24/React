import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskCount, setTaskCount] = useState(0);
  const location = useLocation();

  // Function to load the current count from localStorage
  const updateTaskCount = () => {
    try {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTaskCount(tasks.length);
    } catch (error) {
      console.error('Failed to parse tasks from localStorage:', error);
      setTaskCount(0);
    }
  };

  useEffect(() => {
    updateTaskCount();
    
    // Listen for custom storage events or local storage updates
    window.addEventListener('storage', updateTaskCount);
    // Add custom interval check for reactive count within single-tab routing
    const interval = setInterval(updateTaskCount, 1000);

    return () => {
      window.removeEventListener('storage', updateTaskCount);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand/Logo */}
          <Link to="/" className="text-xl font-bold flex items-center gap-2">
            ToDo App
          </Link>

          {/* Hamburger menu button for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 focus:outline-none border-0 bg-transparent cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link 
              to="/" 
              className={`hover:text-gray-200 transition ${
                location.pathname === '/' ? 'font-semibold border-b-2 border-white pb-1' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/tasks" 
              className={`hover:text-gray-200 transition ${
                location.pathname === '/tasks' ? 'font-semibold border-b-2 border-white pb-1' : ''
              }`}
            >
              Tasks
            </Link>
            <Link 
              to="#" 
              className="hover:text-gray-200 transition flex items-center"
            >
              Total Task 
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full ms-2">
                {taskCount}
              </span>
            </Link>
            <Link 
              to="/contact-us" 
              className={`hover:text-gray-200 transition ${
                location.pathname === '/contact-us' ? 'font-semibold border-b-2 border-white pb-1' : ''
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        <nav 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-60 py-3' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-3 pb-2">
            <Link
              to="/"
              className="hover:text-gray-200 py-1"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/tasks"
              className="hover:text-gray-200 py-1"
              onClick={() => setIsOpen(false)}
            >
              Tasks
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-gray-200 py-1"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="#"
              className="hover:text-gray-200 py-1 flex items-center justify-between"
              onClick={() => setIsOpen(false)}
            >
              <span>Total Tasks</span>
              <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {taskCount}
              </span>
            </Link>
            <Link
              to="#"
              className="hover:text-gray-200 py-1 text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Completed (Coming Soon)
            </Link>
            <Link
              to="#"
              className="hover:text-gray-200 py-1 text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Profile (Coming Soon)
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
