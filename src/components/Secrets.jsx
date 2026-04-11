import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Coffee, Trophy } from 'lucide-react';

const secretMessages = [
  { 
    id: 1, 
    icon: <Coffee />, 
    title: 'Penenangku', 
    text: 'Bila awak ada, semua rasa letih saya terus hilang. Awak penenang segala gundah saya.'
  },
  { 
    id: 2, 
    icon: <Heart />, 
    title: 'Pelengkapku', 
    text: 'Dalam beribu map, saya tetap akan cari jalan balik dekat awak. Awak separuh daripada nyawa saya.'
  },
  { 
    id: 3, 
    icon: <Trophy />, 
    title: 'Winner Winner', 
    text: 'Menang game tu bonus, tapi ada awak tu kemenangan paling besar dalam hidup saya.'
  }
];

const Secrets = () => {
  const [activeSecret, setActiveSecret] = useState(null);

  return (
    <div className="secrets-container">
      <h2 className="section-header title-font" style={{ border: 'none', marginBottom: '0.5rem' }}>Core of My Universe</h2>
      <p style={{ color: 'var(--text-muted)' }}>Hover or tap the floating stars below.</p>
      
      <div className="orbs-wrapper">
        {secretMessages.map((msg) => (
          <div key={msg.id} className="orb-item">
            <motion.button
              className="orb-btn"
              onClick={() => setActiveSecret(activeSecret === msg.id ? null : msg.id)}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 + msg.id }}
            >
              <Sparkles size={24} />
            </motion.button>

            <AnimatePresence>
              {activeSecret === msg.id && (
                <motion.div
                  className="secret-card glass"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                >
                  <div style={{ marginBottom: '1rem', color: '#ffb7b2' }}>{msg.icon}</div>
                  <h3>{msg.title}</h3>
                  <p>{msg.text}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Secrets;
