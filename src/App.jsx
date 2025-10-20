import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Kontak from './pages/Kontak';
import Sosial from './pages/Sosial';
import Tentang from './pages/Tentang';
import Logo from './components/Logo';

export default function App(){
  const location = useLocation();
  return (
    <div className="min-h-screen">
      <header className="fixed top-4 left-4 z-50">
        <a href="/"><Logo size={46} /></a>
      </header>
      <main className="pt-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
            <Route path="/kontak" element={<PageWrapper><Kontak/></PageWrapper>} />
            <Route path="/sosial" element={<PageWrapper><Sosial/></PageWrapper>} />
            <Route path="/tentang" element={<PageWrapper><Tentang/></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

function PageWrapper({children}){
  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.35}}>
      {children}
    </motion.div>
  );
}
