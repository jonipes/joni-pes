import React from "react";

export default function Efootball() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">EFOOTBALL CUSTOM STORE</h1>
        <p className="text-lg text-gray-300 mb-8">
          Selamat datang di halaman khusus <span className="text-pink-400 font-semibold">EFOOTBALL</span> by JONI PES.  
          Di sini kamu bisa menemukan berbagai custom pack, update player, patch grafik, dan fitur eksklusif dari kami.
        </p>

        <div className="bg-purple-700/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-purple-500">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">🎮 Tentang Custom</h2>
          <p className="text-gray-200 leading-relaxed">
            Setiap file custom yang kami buat dirancang agar kompatibel dengan versi terbaru eFootball.  
            Dengan tampilan yang lebih realistis, kontrol halus, dan vibe khas JONI PES.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="https://t.me/jonipesstore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg transition-all"
          >
            🔗 Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}