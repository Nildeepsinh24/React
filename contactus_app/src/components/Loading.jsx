import React from 'react';

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        {/* Inner Ring (Counter-spinning) */}
        <div 
          className="absolute w-10 h-10 border-4 border-t-pink-500 border-pink-200 rounded-full animate-spin" 
          style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
        ></div>
      </div>
      <h3 className="mt-4 text-lg font-medium text-slate-600 animate-pulse">Loading App...</h3>
    </div>
  );
}
