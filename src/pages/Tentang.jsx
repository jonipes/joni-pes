import React from 'react';
import logoSrc from '../assets/joni-pes-logo.jpg';
export default function Tentang(){
  return (
    <div className="max-w-md mx-auto px-4 pt-20 pb-24 text-center">
      <div className="rounded-xl p-6 card-gloss flex flex-col items-center gap-4">
        <img src={logoSrc} alt="JONI PES" className="w-40 h-auto object-contain" />
        <h2 className="text-2xl font-bold text-[#b85fb6]">Tentang Bang Joni</h2>
        <p className="text-white/80">JONI PES hadir untuk memudahkan top up dan menyajikan pilihan produk game favorit. (Edit sesuai kebutuhan.)</p>
      </div>
    </div>
  );
}
