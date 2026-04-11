import React from 'react';
import { motion } from 'framer-motion';

const SurpriseIntro = ({ onUnlock }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="profiles-container"
    >
      <h1 className="profiles-title">Who's watching?</h1>
      
      <div className="profiles-list">
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="profile-card"
          onClick={onUnlock}
        >
          <div className="profile-avatar wana"></div>
          <h2>Wana</h2>
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="profile-card"
          onClick={onUnlock}
        >
          <div className="profile-avatar fizam"></div>
          <h2>Syafizam</h2>
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="profile-card"
          onClick={onUnlock}
        >
          <div className="profile-avatar guest"></div>
          <h2>Kids</h2>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SurpriseIntro;
