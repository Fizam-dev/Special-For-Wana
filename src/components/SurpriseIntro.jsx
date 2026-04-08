import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const SurpriseIntro = ({ onUnlock }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1 }}
      className="intro-container"
    >
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="intro-text"
      >
        "Setiap cerita punya kuncinya sendiri..."
      </motion.p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onUnlock}
        className="unlock-btn"
      >
        <Lock size={20} style={{ marginRight: '10px' }} />
        Buka Rahasia Kita
      </motion.button>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#444' }}
      >
        (Klik untuk memulainya)
      </motion.div>
    </motion.div>
  );
};

export default SurpriseIntro;
