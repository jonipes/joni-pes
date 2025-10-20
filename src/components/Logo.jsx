import React from 'react';
import logoSrc from '../assets/joni-pes-logo.jpg';
export default function Logo({ size = 36 }){
  return (
    <div className="flex items-center gap-2">
      <img src={logoSrc} alt="JONI PES" style={{width:size, height:'auto'}} className="object-contain" />
      <span className="hidden sm:block text-white font-extrabold tracking-wide">JONI PES</span>
    </div>
  );
}
