import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import MemoryScrapbook from './components/MemoryScrapbook';
import FloatingPlayer from './components/FloatingPlayer';
import Secrets from './components/Secrets';
import './App.css';

// Image data
const pubgImages = Array.from({ length: 9 }, (_, i) => `./PUBG${i + 1}.jpeg`);
const fizamImages = [
  './Fizam.jpeg', './Fizam2.jpg', './Fizam3.jpg', './Fizam4.jpg',
  './Fizam5.jpg', './Fizam6.jpg', './Fizam7.jpg', './Fizam8.jpg',
  './Fizam9.jpg', './Fizam10.jpg', './Fizam11.png'
];
const wanaImages = Array.from({ length: 14 }, (_, i) => `./Wana${i + 2}.jpeg`);

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      setTimeout(() => setShowContent(true), 1200);
      window.scrollTo(0, 0);
    }
  }, [isUnlocked]);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <WelcomeScreen key="welcome" onEnter={() => setIsUnlocked(true)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="main-content"
          >
            <motion.div
              style={{ textAlign: 'center', marginBottom: '4rem' }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="title-font" style={{ fontSize: '3rem', fontStyle: 'italic', marginBottom: '1rem' }}>
                Wana & Syafizam
              </h1>
              <p style={{ color: 'var(--text-muted)' }}>Masa kini, nanti dan masa indah lainnya.</p>
            </motion.div>

            <MemoryScrapbook
              title="Chapter 1: The Battleground"
              desc="Tempat di mana magik bermula. Dari drop sama-sama, cover fire sampai life cover."
              images={pubgImages}
            />

            <MemoryScrapbook
              title="Chapter 2: Me"
              desc="Tidak sesempurna lelaki lain,namun kamu tetap menerima aku dalam dirimu,1 kemenagan terbesar buat ku."
              images={fizamImages}
            />

            <MemoryScrapbook
              title="Chapter 3: Because You're Special"
              desc="Orang yang sentiasa ceriakan hari-hari saya,kamu sangat-sangat istimewa dalam hidup ku. aku bersyukur sangat ada kamu dalam hidup ku."
              images={wanaImages}
            />

            <Secrets />

            <FloatingPlayer />

          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
