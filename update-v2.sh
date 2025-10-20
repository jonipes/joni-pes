#!/bin/bash
# ===================================================
#  JONI PES v2.0 - Auto Update Script (Glow Edition)
# ===================================================

echo "🔄 Menghapus versi lama..."
rm -rf src
mkdir src

echo "📁 Menulis struktur project baru..."
cat > src/main.jsx <<'EOF'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)
EOF

cat > src/App.jsx <<'EOF'
import React from 'react'
const games = [
  { id: 'efootball', title: 'eFootball Mobile', studio: 'Konami', img: '/assets/efootball.png' },
  { id: 'pubg', title: 'PUBG Mobile', studio: 'Tencent', img: '/assets/pubg.png' },
  { id: 'mlbb', title: 'Mobile Legends', studio: 'Moonton', img: '/assets/mlbb.png' },
  { id: 'ff', title: 'Free Fire', studio: 'Garena', img: '/assets/ff.png' }
]
export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#3b0b4f] to-[#5b1f6a] text-white">
      <header className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shadow-md">
            <img src="/assets/joni-pes-logo.png" alt="logo" className="w-9 h-9 object-contain" />
          </div>
          <div>
            <div className="text-sm opacity-80">JONI</div>
            <div className="text-xl font-bold">PES Store</div>
          </div>
        </div>
      </header>
      <main className="px-4 pb-24 flex-1">
        <section className="w-full rounded-xl p-6 bg-gradient-to-r from-white/5 to-white/3 mb-8 shadow-lg">
          <h1 className="text-3xl font-extrabold">Temukan Game Favoritmu</h1>
          <p className="mt-2 text-sm opacity-80">Store game vibe — cepat, aman, support HP & PC</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Populer Game</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {games.map(g => (<GameCard key={g.id} game={g} />))}
          </div>
        </section>
      </main>
    </div>
  )
}
function GameCard({game}){
  return (
    <div onClick={()=>window.open(`/game/${game.id}`,'_blank')}
         className="bg-white/10 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
      <img src={game.img} alt={game.title} className="w-full h-32 object-cover" />
      <div className="p-3">
        <div className="font-semibold text-yellow-300">{game.title}</div>
        <div className="text-xs opacity-70">{game.studio}</div>
      </div>
    </div>
  )
}
EOF

cat > src/index.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
body { @apply bg-gradient-to-b from-[#3b0b4f] to-[#5b1f6a] text-white font-sans; }
EOF

cat > tailwind.config.cjs <<'EOF'
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
EOF

cat > postcss.config.cjs <<'EOF'
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, }, }
EOF

cat > index.html <<'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JONI PES Store</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

echo "🧱 Membuild ulang project..."
npm run build

echo "🚀 Mengupload ke GitHub..."
git add .
git commit -m "update: ganti ke JONI PES v2.0 glow edition"
git push origin main

echo "✅ Selesai! Vercel akan auto-deploy versi baru."
EOF