import React from 'react';
const social = [{id:'ig',label:'Instagram',href:'https://instagram.com'},{id:'yt',label:'YouTube',href:'https://youtube.com'},{id:'tt',label:'TikTok',href:'https://tiktok.com'}];
export default function Sosial(){
  return (
    <div className="max-w-md mx-auto px-4 pt-20 pb-24">
      <div className="rounded-xl p-6 card-gloss">
        <h2 className="text-2xl font-bold text-[#b85fb6]">Media Sosial</h2>
        <p className="text-white/80 mt-2">Ikuti JONI PES di platform berikut:</p>
        <div className="mt-4 space-y-3">
          {social.map(s=> <a key={s.id} href={s.href} target="_blank" rel="noreferrer" className="block p-3 rounded-md bg-black/25 hover:bg-black/40"><div className="flex items-center justify-between"><span>{s.label}</span><span className="text-white/60">↗</span></div></a>)}
        </div>
      </div>
    </div>
  );
}
