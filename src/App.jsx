import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SurpriseIntro from './components/SurpriseIntro';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import SoundtrackPlayer from './components/SoundtrackPlayer';
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
      setTimeout(() => setShowContent(true), 800);
      window.scrollTo(0, 0);
    }
  }, [isUnlocked]);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <SurpriseIntro key="intro" onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <motion.main 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="main-content"
          >
            <Navbar />
            
            <div id="home">
              <HeroBanner />
            </div>

            <div id="series">
              <MovieRow title="Trending Now: PUBG Days" images={pubgImages} isLargeRow={true} />
            </div>
            
            <div id="movies">
              <MovieRow title="Our Adventures" images={fizamImages} isLargeRow={false} />
              <MovieRow title="Because You're Special" images={wanaImages} isLargeRow={false} />
            </div>

            <SoundtrackPlayer />

            <div id="mylist" style={{ padding: '0 4%' }}>
              <h2 className="row-title" style={{ paddingLeft: '0', marginBottom: '1rem' }}>Hidden Gems (My List)</h2>
              <Secrets />
            </div>

            <footer className="footer">
              <p>WanaFlix • Created Specially by Syafizam</p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
