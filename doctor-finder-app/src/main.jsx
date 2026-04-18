import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import LoginApp from './components/pages/LoginApp'
import BookAppointmentApp from './components/pages/BookAppointmentApp'
import ContactUsApp from './components/pages/ContactUsApp'
import DoctorListApp from './components/pages/DoctorListApp'
import DoctorProfileApp from './components/pages/DoctorProfileApp'
import AboutUsApp from './components/pages/AboutUsApp'
import CareersApp from './components/pages/CareersApp'
import { PrivacyPolicy, TermsOfService, CookiePolicy } from './components/pages/PolicyPages'
import BookingSuccessApp from './components/pages/BookingSuccessApp'
import PageNotFound from './components/pages/PageNotFound'

// Admin Panel Imports
import AdminLayout from './components/admin/AdminLayout'
import AdminDashboard from './components/admin/AdminDashboard'
import SpecialistManagement from './components/admin/SpecialistManagement'
import AppointmentOperations from './components/admin/AppointmentOperations'
import AdminCMS from './components/admin/AdminCMS'
import AdminSettings from './components/admin/AdminSettings'
import PatientManagement from './components/admin/PatientManagement'
import AdminFinancials from './components/admin/AdminFinancials'
import SystemLogs from './components/admin/SystemLogs'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        
        {/* Customer Routes */}
        <Route path="/doctors-list" element={<DoctorListApp />} />
        <Route path="/doctor-profile" element={<DoctorProfileApp />} />
        <Route path="/book-appointment" element={<BookAppointmentApp />} />
        <Route path="/booking-success" element={<BookingSuccessApp />} />
        <Route path="/login-us" element={<LoginApp />} />
        <Route path="/contact-us" element={<ContactUsApp />} />
        <Route path="/about-us" element={<AboutUsApp />} />
        <Route path="/careers" element={<CareersApp />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="specialists" element={<SpecialistManagement />} />
          <Route path="appointments" element={<AppointmentOperations />} />
          <Route path="patients" element={<PatientManagement />} />
          <Route path="cms" element={<AdminCMS />} />
          <Route path="financials" element={<AdminFinancials />} />
          <Route path="logs" element={<SystemLogs />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
