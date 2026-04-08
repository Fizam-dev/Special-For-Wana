import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SurpriseIntro from './components/SurpriseIntro';
import MusicPlayer from './components/MusicPlayer';
import MemoryGallery from './components/MemoryGallery';
import Secrets from './components/Secrets';
import './App.css';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      setTimeout(() => setShowContent(true), 1000);
    }
  }, [isUnlocked]);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <SurpriseIntro onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            className="main-content noir-container"
          >
            <section className="hero">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="hero-title"
              >
                For My Most Special Person, <br />
                <span className="name">Wana</span>
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="hero-subtitle"
              >
                A collection of our digital footprints and the rhythm of our hearts.
              </motion.p>
            </section>

            <section id="radio" className="section">
              <MusicPlayer />
            </section>

            <section id="memories" className="section">
              <h2 className="section-title">PUBG & Us</h2>
              <MemoryGallery />
            </section>

            <Secrets />

            <footer className="footer">
              <p>Made with Love by Syafizam</p>
              <div className="heart">♥</div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
