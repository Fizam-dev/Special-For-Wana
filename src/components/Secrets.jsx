import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Coffee, Trophy } from 'lucide-react';

const secretMessages = [
  { 
    id: 1, 
    icon: <Coffee />, 
    title: 'Penenangku', 
    text: 'Bila awak ada, semua rasa letih saya terus hilang. Awak penenang segala gundah saya.',
    color: '#E50914'
  },
  { 
    id: 2, 
    icon: <Heart />, 
    title: 'Pelengkapku', 
    text: 'Dalam beribu map, saya tetap akan cari jalan balik dekat awak. Awak separuh daripada nyawa saya.',
    color: '#E50914'
  },
  { 
    id: 3, 
    icon: <Trophy />, 
    title: 'Winner Winner', 
    text: 'Menang game tu bonus, tapi ada awak tu kemenangan paling besar dalam hidup saya.',
    color: '#E50914'
  }
];

const Secrets = () => {
  const [activeSecret, setActiveSecret] = useState(null);

  return (
    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Hover or click the hidden sparks below to reveal extra content.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        {secretMessages.map((msg) => (
          <div key={msg.id} style={{ position: 'relative' }}>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 10, background: 'var(--netflix-red)', color: 'white' }}
              onClick={() => setActiveSecret(activeSecret === msg.id ? null : msg.id)}
              style={{ 
                padding: '20px', 
                background: 'rgba(51, 51, 51, 0.6)', 
                borderRadius: '50%', 
                color: 'var(--text-muted)', 
                border: '1px solid #333',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <Sparkles size={24} />
            </motion.button>

            <AnimatePresence>
              {activeSecret === msg.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '250px',
                    padding: '1.5rem',
                    background: '#141414',
                    border: '1px solid #333',
                    color: 'white',
                    borderRadius: '8px',
                    zIndex: 10,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
                  }}
                >
                  <div style={{ marginBottom: '1rem', color: msg.color }}>{msg.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: '700' }}>{msg.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{msg.text}</p>
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
