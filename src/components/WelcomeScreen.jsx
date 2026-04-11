import React from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onEnter }) => {
  return (
    <motion.div 
      className="welcome-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div 
        className="glass" 
        style={{ padding: '3rem 4rem', borderRadius: '24px' }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="welcome-title title-font">Our Universe</h1>
        <p className="welcome-subtitle">
          "Dalam jutaan bintang dan galaksi, saya bersyukur kita diletakkan di orbit yang sama."
          <br /><br />
          Sebuah galeri khas untuk Wana, dari Syafizam.
        </p>
        
        <motion.button 
          className="enter-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
        >
          Masuk Ke Dunia Kita
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
