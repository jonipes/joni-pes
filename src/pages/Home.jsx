import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const games = [
  {id:0,title:'eFootball Mobile', publisher:'Konami', img:'/assets/efootball.jpg'},
  {id:1,title:'PUBG Mobile', publisher:'Tencent Games', img:'/assets/pubg.jpg'},
  {id:2,title:'Mobile Legends', publisher:'Moonton', img:'/assets/ml.jpg'},
  {id:3,title:'Valorant', publisher:'Riot Games', img:'/assets/valorant.jpg'},
  {id:4,title:'Honor of Kings', publisher:'TiMi Studio', img:'/assets/hok.jpg'},
  {id:5,title:'Free Fire', publisher:'Garena', img:'/assets/ff.jpg'},
  {id:6,title:'Free Fire MAX', publisher:'Garena', img:'/assets/ffmax.jpg'},
  {id:7,title:'Arena Breakout', publisher:'MoreFun Studios', img:'/assets/arena.jpg'},
  {id:8,title:'Call of Duty Mobile', publisher:'Activision', img:'/assets/codm.jpg'},
  {id:9,title:'AOV', publisher:'Garena', img:'/assets/aov.jpg'},
];

export default function Home(){
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto px-4 pt-6 pb-24">
      <section>
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3500, disableOnInteraction: false }} pagination={{ clickable: true }} loop className="rounded-2xl overflow-hidden shadow-lg">
          {[{id:'kontak', title:'KONTAK JONI PES', desc:'Hubungi kami untuk bantuan atau kerja sama', img:'/assets/banner-kontak.jpg', to:'/kontak'},
            {id:'sosial', title:'MEDIA SOSIAL', desc:'Ikuti update JONI PES', img:'/assets/banner-sosial.jpg', to:'/sosial'},
            {id:'tentang', title:'TENTANG BANG JONI', desc:'Kenali lebih dekat kisah di balik JONI PES', img:'/assets/banner-tentang.jpg', to:'/tentang'}].map(s=>(
            <SwiperSlide key={s.id}>
              <div className={`h-44 bg-[url('${s.img}')] bg-cover bg-center relative`}>
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-yellow-300 font-bold text-lg">{s.title}</h1>
                  <p className="text-white/90 text-sm mt-1">{s.desc}</p>
                  <button onClick={()=>navigate(s.to)} className="mt-3 px-4 py-1.5 bg-pink-600 rounded-full text-xs font-semibold hover:bg-pink-700 transition">Lihat</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-extrabold text-[#b85fb6]">TEMUKAN PRODUK FAVORIT</h2>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-end gap-4">
            <h3 className="text-lg font-semibold text-white">Populer Game</h3>
            <span className="text-sm text-white/40">Voucher</span>
          </div>
          <div className="h-[2px] w-20 bg-white/20 rounded" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 pb-12">
          {games.map(g=>(
            <motion.div key={g.id} whileHover={{scale:1.06, y:-4}} transition={{type:'spring', stiffness:300}} className="group rounded-xl overflow-hidden relative shadow-md shadow-black/40 cursor-pointer">
              <div className="h-28 w-full bg-gray-300 bg-cover bg-center" style={{backgroundImage:`url(${g.img})`}} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute left-2 bottom-2 text-sm">
                <div className="text-yellow-300 font-semibold text-[12px] leading-tight">{g.title}</div>
                <div className="text-white/70 text-[11px] mt-1">{g.publisher}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-white/70 rounded-full" />

      <nav className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md py-3 border-t border-white/10">
        <div className="max-w-md mx-auto px-6 flex items-center justify-between text-white/80 text-xs">
          <button className="flex flex-col items-center"><span>🏠</span><span className="mt-1">Home</span></button>
          <button className="flex flex-col items-center"><span>🔍</span><span className="mt-1">Search</span></button>
          <button className="flex flex-col items-center"><span>🎮</span><span className="mt-1">Top Up</span></button>
          <button className="flex flex-col items-center"><span>⚙️</span><span className="mt-1">More</span></button>
        </div>
      </nav>
    </div>
  );
}
