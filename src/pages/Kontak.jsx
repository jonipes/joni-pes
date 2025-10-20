import React, { useState } from 'react';
export default function Kontak(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const handleSubmit=(e)=>{e.preventDefault(); alert('Pesan terkirim (demo)'); setForm({name:'',email:'',message:''});}
  return (
    <div className="max-w-md mx-auto px-4 pt-20 pb-24">
      <div className="rounded-xl p-6 card-gloss">
        <h2 className="text-2xl font-bold text-[#b85fb6]">Kontak JONI PES</h2>
        <p className="text-white/80 mt-2">Kirim pesan atau tawaran kerja sama.</p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Nama" className="w-full p-3 rounded-md bg-black/30 placeholder-white/50 outline-none" />
          <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-3 rounded-md bg-black/30 placeholder-white/50 outline-none" />
          <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Pesan" rows={5} className="w-full p-3 rounded-md bg-black/30 placeholder-white/50 outline-none"></textarea>
          <button type="submit" className="w-full mt-2 px-4 py-2 bg-pink-600 rounded-md font-semibold">Kirim</button>
        </form>
      </div>
    </div>
  );
}
