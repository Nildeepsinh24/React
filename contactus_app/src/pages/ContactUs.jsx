import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// ==========================================
// CONFIGURATION FOR EMAILJS
// ==========================================
// Replace these with your own IDs from your EmailJS Dashboard:
// 1. Service ID (e.g. 'service_xxxxxxx')
// 2. Template ID (e.g. 'template_xxxxxxx')
// 3. Public Key (e.g. 'I3OKeIkWPY2_W0BsP')
// ==========================================
const EMAILJS_SERVICE_ID = 'service_y75yvoa';
const EMAILJS_TEMPLATE_ID = 'template_3u8dup7';
const EMAILJS_PUBLIC_KEY = 'Y5NpZ_PeEazb4k3F3';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef();
  const navigate = useNavigate();

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      toast.error('Name is required!');
      return;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address!');
      return;
    }
    if (!phone.trim()) {
      toast.error('Phone number is required!');
      return;
    }
    if (!subject) {
      toast.error('Please select a subject!');
      return;
    }
    if (!message.trim()) {
      toast.error('Please enter your message!');
      return;
    }

    setIsSending(true);

    const contactData = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject,
      message: message.trim(),
      submittedAt: new Date().toISOString()
    };

    // Save to LocalStorage first as backup
    try {
      const existingContacts = JSON.parse(localStorage.getItem('contacts')) || [];
      existingContacts.push(contactData);
      localStorage.setItem('contacts', JSON.stringify(existingContacts));
    } catch (err) {
      console.error('Failed to save contact backup to localStorage:', err);
    }

    // Send via EmailJS
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.current,
      {
        publicKey: EMAILJS_PUBLIC_KEY
      }
    )
    .then((response) => {
      console.log('EmailJS Success:', response.status, response.text);
      toast.success('Thanks for contacting us! We will get in touch with you soon.');
      handleReset();
      setIsSending(false);
      navigate('/contact-us');
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      toast.warning('Contact saved locally! Email sending failed, check EmailJS key setup.');
      setIsSending(false);
    });
  };

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl w-full mx-auto mt-6">
        
        {/* Left Side: Mockup/Illustration Image */}
        <section className="flex justify-center">
          <img
            src="https://assets-v2.lottiefiles.com/a/1f1c5790-1177-11ee-9220-5f141f7daa72/CB1D9PQM2P.gif"
            alt="Contact Illustration"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover transform hover:scale-[1.02] transition-transform duration-300"
          />
        </section>

        {/* Right Side: Contact Form Card */}
        <section className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Contact with Us</h2>
          
          <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            {/* Name Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-800"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-800"
              />
            </div>

            {/* Phone Input */}
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-800"
              />
            </div>

            {/* Subject Dropdown */}
            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-700"
              >
                <option value="">Select Subjects</option>
                <option value="24x7 support">24x7 support</option>
                <option value="customer care numbers">Customers care contact</option>
                <option value="return">Return products</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Message..."
                rows="3"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-50 text-slate-800"
              />
            </div>

            {/* Form Actions */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <button
                type="submit"
                disabled={isSending}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer text-center"
              >
                {isSending ? 'Sending...' : 'Send'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer text-center"
              >
                Reset
              </button>
            </div>
          </form>
        </section>

      </div>
    </main>
  );
}
