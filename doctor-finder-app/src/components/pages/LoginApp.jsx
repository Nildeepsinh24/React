import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'

export default function LoginApp() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <HeaderApp />
      <main className="flex-grow flex items-center justify-center relative pt-32 pb-20 px-6">
        {/* Background Imagery */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-20 scale-105 blur-[2px]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Z8suy0WGATMSJYBQezzesHnLR1aQF5gnpYqSTtCx2uGAPuloYVY2pxCVlWzCCP0SUwkO7cIiiiJFVGKse1pwHPbn1KFb83ycCDIG9kO1B8ORnDquJ9BlWYJrxq7TyHXtQn52bfSArpkYwIn5hgQqbZkWjPkDWcxFbFDOlZeavQXDlAf4cmlcTLpjFHnmLrAgr7dyYuCh7rRxo4BiVvKPDrhCZmhucvPGRxBJYFi_-UAhYpyWv0PeqtaQEK2jMgGsglkxUrLowT4"
            alt="Clinical Hospital Environment"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/40 to-transparent" />
        </div>

        {/* Auth Container */}
        <div className="relative z-10 w-full max-w-[1100px] flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest border border-outline-variant/10">
          {/* Left Side: Narrative/Brand */}
          <div className="hidden md:flex md:w-5/12 bg-primary relative p-12 flex-col justify-between text-on-primary">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXJ469rcf5PKeM3LBXA_-uz_7SZARQsfyUeP2ttEW8SuoFKa1aMIkABwUNK_T3LGKG5VZfsH3TA-3Pk8IDp8dKQzGq422H3ccS0jKMm8JloIkVMd460unnc8n3_xYv-USynyy-leyD5GklOgCmOGT0O1EPD0RcOaqpzjHRR54TDVcFt2YeiMPmVUKR35kfwbzlvcFoHaf9YQNcbu4NmtBeo9DAWyHZGcscF_d10zHjPEqIYvBUbJmJjZlAMfGbBOzo7LmD7vjHIxE"
                alt="Molecular Pattern"
              />
            </div>
            <div className="relative z-10">
              <h1 className="font-headline text-4xl font-extrabold tracking-tight mb-6 leading-tight">
                {isLogin ? "Your Gateway to Clinical Excellence." : "Start Your Clinical Journey Today."}
              </h1>
              <p className="text-on-primary/80 text-lg font-light leading-relaxed">
                {isLogin 
                  ? "Experience a sanctuary of healing where patient data meets editorial precision. Log in to access your curated clinical dashboard."
                  : "Join thousands of patients who have entrusted their health to Krishna Hospitals. Create your account for personalized clinical care."}
              </p>
            </div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4 bg-primary-container/30 p-4 rounded-lg backdrop-blur-md">
                <div className="bg-secondary p-2 rounded-full">
                  <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: '"FILL" 1' }}>verified_user</span>
                </div>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-on-primary/60">Secure Access</p>
                  <p className="font-medium">End-to-End Encrypted Data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interaction */}
          <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              {/* Tab Switcher */}
              <div className="flex p-1 bg-surface-container-low rounded-full mb-10">
                <button 
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-2 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${isLogin ? "bg-surface-container-lowest shadow-sm text-primary" : "text-on-surface-variant hover:text-primary"}`}
                >
                  Login
                </button>
                <button 
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-2 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${!isLogin ? "bg-surface-container-lowest shadow-sm text-primary" : "text-on-surface-variant hover:text-primary"}`}
                >
                  Sign Up
                </button>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-2">
                  {isLogin ? "Welcome Back" : "Create Account"}
                </h2>
                <p className="text-on-surface-variant">
                  {isLogin ? "Please enter your credentials to continue." : "Register to start booking your clinical appointments."}
                </p>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Full Name</label>
                    <input
                      className="w-full px-5 py-4 rounded-lg bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                      placeholder="Jane Doe"
                      type="text"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Email Address</label>
                  <input
                    className="w-full px-5 py-4 rounded-lg bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                    placeholder="john.doe@hospital.com"
                    type="email"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2 ml-1">
                    <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Password</label>
                    {isLogin && <a className="text-xs font-bold text-primary hover:underline" href="#">Forgot?</a>}
                  </div>
                  <input
                    className="w-full px-5 py-4 rounded-lg bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
                {!isLogin && (
                  <div>
                    <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Confirm Password</label>
                    <input
                      className="w-full px-5 py-4 rounded-lg bg-surface-container-low border-transparent focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all outline-none"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 py-2">
                  <input className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant/50" id="agree" type="checkbox" />
                  <label className="text-sm text-on-surface-variant font-medium" htmlFor="agree">
                    {isLogin ? "Remember this device for 30 days" : "I agree to the Terms & Privacy Policy"}
                  </label>
                </div>

                <Link to="/" className="block w-full">
                  <button
                    className="w-full py-4 rounded-full bg-primary text-on-primary font-bold font-headline tracking-wide hover:bg-primary-container transition-all active:scale-95 transform shadow-lg shadow-primary/20 mt-4"
                    type="button"
                  >
                    {isLogin ? "Access Sanctuary" : "Create Account"}
                  </button>
                </Link>
              </form>

              <p className="mt-8 text-center text-sm text-on-surface-variant">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary font-bold hover:underline ml-2"
                >
                  {isLogin ? "Sign Up" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
      <FooterApp />
    </div>
  )
}
