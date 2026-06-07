import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Loading from './components/Loading';
import Navbar from './components/Navbar';

// Pages
import AddTask from './pages/AddTask';
import ManageTasks from './pages/ManageTasks';
import ContactUs from './pages/ContactUs';

// Reusable wrapper to handle the 1.5s page load transitions
function PageWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <AddTask />
            </PageWrapper>
          } 
        />
        <Route 
          path="/tasks" 
          element={
            <PageWrapper>
              <ManageTasks />
            </PageWrapper>
          } 
        />
        <Route 
          path="/contact-us" 
          element={
            <PageWrapper>
              <ContactUs />
            </PageWrapper>
          } 
        />
      </Routes>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;
