import React, { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { UPDATE_PROFILE } from '../graphql/queries';

export default function ProfileHeader({ profile }) {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [isEditing, setIsEditing] = useState(false);

  const [updateProfile, { loading }] = useMutation(UPDATE_PROFILE);

  const handleSave = () => {
    updateProfile({ variables: { name, bio } });
    setIsEditing(false);
  };

  return (
    <div className="relative overflow-hidden p-12 text-white text-center border-b border-white/5">
      <div className="relative z-10 flex flex-col items-center">
        {/* Intensely Glowing Avatar */}
        <div className="relative w-32 h-32 mb-8 group">
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
          {/* Inner animated border */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-fuchsia-500 rounded-full p-[2px]">
            <div className="w-full h-full bg-[#050510] rounded-full flex items-center justify-center text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-fuchsia-300">
              {name.charAt(0)}
            </div>
          </div>
        </div>
        
        {isEditing ? (
          <div className="flex flex-col items-center gap-5 animate-in fade-in zoom-in-95 duration-500 w-full max-w-sm">
            <input 
              value={name} 
              onChange={e => setName(e.target.value)} 
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl w-full text-center text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent backdrop-blur-xl transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
              placeholder="Your Name"
            />
            <textarea 
              value={bio} 
              onChange={e => setBio(e.target.value)} 
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl w-full text-center text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-xl transition-all resize-none shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
              placeholder="Your Bio"
              rows={2}
            />
            <button 
              onClick={handleSave}
              disabled={loading}
              className="mt-4 relative group overflow-hidden bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-bold text-lg py-3.5 px-10 rounded-full hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-[0_0_40px_rgba(217,70,239,0.4)]"
            >
              <span className="relative z-10">{loading ? 'Saving...' : 'Save Changes'}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-700">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-2xl">{name}</h1>
            <p className="text-cyan-100/70 text-lg md:text-xl mb-8 max-w-lg leading-relaxed font-light">{bio}</p>
            <button 
              onClick={() => setIsEditing(true)}
              className="group relative px-8 py-3 bg-white/5 hover:bg-white/10 rounded-full font-medium transition-all duration-300 overflow-hidden border border-white/10"
            >
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100"></div>
              <span className="relative z-10 text-slate-300 group-hover:text-white flex items-center gap-2">
                <span>Edit Profile</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
