import React from 'react'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'

const PolicyContent = ({ title, date, sections }) => (
  <div className="min-h-screen bg-surface flex flex-col">
    <HeaderApp />
    <main className="flex-grow pt-32 pb-20 px-6 max-w-4xl mx-auto w-full">
      <div className="mb-12">
        <p className="text-secondary font-bold tracking-widest text-xs uppercase mb-2">Legal Information</p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2 font-headline">{title}</h1>
        <p className="text-on-surface-variant font-medium">Last Updated: {date}</p>
      </div>
      
      <div className="space-y-12">
        {sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-secondary rounded-full" />
              {section.heading}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg font-light">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
    <FooterApp />
  </div>
);

export const PrivacyPolicy = () => (
  <PolicyContent 
    title="Privacy Policy" 
    date="October 2024" 
    sections={[
      { heading: "Information We Collect", content: "We collect personal health information identifying you as a patient of Krishna Hospitals, including clinical history, insurance details, and primary contact information." },
      { heading: "How We Use Your Data", content: "Your data is primarily used to provide clinical care, manage your appointments, and process insurance claims to ensure a seamless medical journey." },
      { heading: "Data Security", content: "We employ end-to-end encryption and strict access controls on our servers to protect your sensitive clinical data from unauthorized access." }
    ]} 
  />
);
export const CookiePolicy = () => (
  <PolicyContent 
    title="Cookie Policy" 
    date="October 2024" 
    sections={[
      { heading: "What are Cookies?", content: "Cookies are small text files stored on your device that help us recognize you when you return to our clinical portal and remember your preferences." },
      { heading: "Our Use of Cookies", content: "We use essential cookies to maintain your clinical session and performance cookies to understand how our patients interact with our sanctuary of healing." },
      { heading: "Managing Preferences", content: "You can manage or disable cookies through your browser settings, though some features of our clinical dashboard may be limited as a result." }
    ]} 
  />
);

export const TermsOfService = () => (
  <PolicyContent 
    title="Terms of Service" 
    date="October 2024" 
    sections={[
      { heading: "Appointment Policies", content: "Appointments must be booked through our official portal. Cancellations must be made at least 24 hours in advance to receive a full refund." },
      { heading: "Clinical Accuracy", content: "While we strive for excellence, clinical results and outcomes can vary. Our specialists will always provide the most accurate assessments based on available data." },
      { heading: "Patient Conduct", content: "Patients are expected to respect our faculty and maintain the sanctity of our clinical environment at all times." }
    ]} 
  />
);
