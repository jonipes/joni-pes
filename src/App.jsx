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
            <div className="text-sm opacity-80">SITE</div>
            <div className="text-xl font-bold">JONI PES</div>
          </div>
        </div>
      </header>
      <main className="px-4 pb-24 flex-1">
        <section className="w-full rounded-xl p-6 bg-gradient-to-r from-white/5 to-white/3 mb-8 shadow-lg">
          <h1 className="text-3xl font-extrabold">Temukan Game Favoritmu</h1>
          <p className="mt-2 text-sm opacity-80">Site game vibe — cepat, aman, support All Android & Store Account</p>
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
