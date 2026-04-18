import React from 'react'
import HeaderApp from '../common/HeaderApp'
import FooterApp from '../common/FooterApp'
export default function PageNotFound() {
return (
<div>
<HeaderApp />
<main className="flex-grow flex items-center justify-center relative pt-20 pb-12 px-6">
{/* Background Imagery */}
<div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="404 background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="z-10 text-center px-6">
        <h1 className="text-7xl font-bold mb-4 animate-bounce">404</h1>
        <h2 className="text-2xl mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-300 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* GIF */}
        <img
          src="https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif"
          alt="Page not found"
          className="mx-auto mb-6 rounded-lg shadow-lg w-72"
        />

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-lg text-white font-semibold"
        >
          Go to Home
        </button>
      </div>
    </div>
</main>
<FooterApp />  
</div>
)
}
