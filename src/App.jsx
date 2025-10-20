
/* -------------------- src/App.jsx -------------------- */ import React from 'react'

const games = [ { id: 'efootball', title: 'eFootball Mobile', studio: 'Konami', img: '/assets/efootball.png' }, { id: 'pubg', title: 'PUBG Mobile', studio: 'Tencent Games', img: '/assets/pubg.png' }, { id: 'mlbb', title: 'Mobile Legends', studio: 'Moonton', img: '/assets/mlbb.png' }, { id: 'ff', title: 'Free Fire', studio: 'Garena', img: '/assets/ff.png' } ]

export default function App(){ return ( <div className="min-h-screen flex flex-col"> <header className="px-4 py-4 flex items-center justify-between"> <div className="flex items-center gap-3"> <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center glow"> <img src="/assets/joni-pes-logo.png" alt="logo" className="w-9 h-9 object-contain" /> </div> <div> <div className="text-sm opacity-80">JONI</div> <div className="text-xl font-bold">PES Store</div> </div> </div> <nav className="hidden md:flex gap-6"> <a className="hover:underline">Home</a> <a className="hover:underline">Account Store</a> <a className="hover:underline">Kontak</a> </nav> </header>

<main className="px-4 pb-24 flex-1">
    {/* Hero */}
    <section className="w-full rounded-xl p-6 bg-gradient-to-r from-white/5 to-white/3 mb-8 shadow-jp-glow">
      <div className="flex items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold">Temukan Produk Favorit</h1>
          <p className="mt-2 text-sm opacity-80">Game vibe store — cepat, aman, dan support HP & PC</p>
        </div>
        <div className="w-40 h-24 hidden sm:block">
          <img src="/assets/joni-pes-banner.png" alt="banner" className="w-full h-full object-cover rounded-lg"/>
        </div>
      </div>
    </section>

    {/* Games grid */}
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Populer Game</h2>
        <div className="text-sm opacity-70">Account Store</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map(g => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>

  </main>

  {/* bottom nav (mobile) */}
  <footer className="fixed left-4 right-4 bottom-4 md:hidden">
    <div className="bg-white/6 rounded-2xl p-2 flex justify-between items-center bottom-nav">
      <NavItem label="Home" icon="🏠" />
      <NavItem label="Search" icon="🔍" />
      <NavItem label="Top Up" icon="🎮" />
      <NavItem label="More" icon="⚙️" />
    </div>
  </footer>
</div>

) }

function NavItem({label, icon}){ return ( <button className="flex flex-col items-center gap-1 text-xs text-white/90 p-2 w-20"> <div className="text-xl">{icon}</div> <div>{label}</div> </button> ) }

function GameCard({game}){ const open = () => { // open new tab to a placeholder page (replace with real links later) window.open(/game/${game.id},'_blank') }

return ( <div className="bg-white/6 rounded-xl p-0 overflow-hidden group cursor-pointer" onClick={open}> <div className="relative bg-gradient-to-b from-white/6 to-white/8 p-4 game-card"> <div className="w-full h-28 flex items-center justify-center bg-gradient-to-br from-white/3 to-transparent rounded-lg"> <img src={game.img} alt={game.title} className="w-20 h-20 object-contain transform transition-transform group-hover:scale-105" /> </div> </div> <div className="p-4"> <div className="font-semibold text-yellow-300">{game.title}</div> <div className="text-xs opacity-70">{game.studio}</div> </div> </div> ) }
