import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Coffee, Trophy } from 'lucide-react';

const secretMessages = [
  { 
    id: 1, 
    icon: <Coffee />, 
    title: 'Penenangku', 
    text: 'Bila awak ada, semua rasa letih saya terus hilang. Awak penenang segala gundah saya.',
    color: '#fff'
  },
  { 
    id: 2, 
    icon: <Heart />, 
    title: 'Pelengkapku', 
    text: 'Dalam beribu map, saya tetap akan cari jalan balik dekat awak. Awak separuh daripada nyawa saya.',
    color: '#fff'
  },
  { 
    id: 3, 
    icon: <Trophy />, 
    title: 'Winner Winner', 
    text: 'Menang game tu bonus, tapi ada awak tu kemenangan paling besar dalam hidup saya.',
    color: '#fff'
  }
];

const Secrets = () => {
  const [activeSecret, setActiveSecret] = useState(null);

  return (
    <div style={{ margin: '10rem 0', textAlign: 'center' }}>
      <h2 className="section-title">Special Drops</h2>
      <p style={{ color: '#666', marginBottom: '4rem' }}>Cari icon rahsia untuk kejutan...</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        {secretMessages.map((msg) => (
          <div key={msg.id} style={{ position: 'relative' }}>
            <motion.button
              whileHover={{ scale: 1.2, rotate: 10 }}
              onClick={() => setActiveSecret(activeSecret === msg.id ? null : msg.id)}
              style={{ padding: '20px', background: '#111', borderRadius: '50%', color: '#666', border: '1px solid #222' }}
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
                    marginBottom: '20px',
                    padding: '2rem',
                    background: '#fff',
                    color: '#000',
                    borderRadius: '20px',
                    zIndex: 10,
                    marginLeft: '-125px'
                  }}
                >
                  <div style={{ marginBottom: '1rem', color: '#666' }}>{msg.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'Inter', fontWeight: '700' }}>{msg.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{msg.text}</p>
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
