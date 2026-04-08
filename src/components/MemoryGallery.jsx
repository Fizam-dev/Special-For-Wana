import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './MemoryGallery.css';

// Centralized image list
const images = [
  // PUBG Memories
  { src: './public/PUBG1.jpeg' }, { src: './public/PUBG2.jpeg' }, { src: './public/PUBG3.jpeg' },
  { src: './public/PUBG4.jpeg' }, { src: './public/PUBG5.jpeg' }, { src: './public/PUBG6.jpeg' },
  { src: './public/PUBG7.jpeg' }, { src: './public/PUBG8.jpeg' }, { src: './public/PUBG9.jpeg' },
  // Fizam & Wana
  { src: './public/Fizam.jpeg' }, { src: './public/Fizam2.jpg' }, { src: './public/Fizam3.jpg' },
  { src: './public/Fizam4.jpg' }, { src: './public/Fizam5.jpg' }, { src: './public/Fizam6.jpg' },
  { src: './public/Fizam7.jpg' }, { src: './public/Fizam8.jpg' }, { src: './public/Fizam9.jpg' },
  { src: './public/Fizam10.jpg' }, { src: './public/Fizam11.png' },
  // Wana Special
  { src: './public/Wana2.jpeg' }, { src: './public/Wana3.jpeg' }, { src: './public/Wana4.jpeg' },
  { src: './public/Wana5.jpeg' }, { src: './public/Wana6.jpeg' }, { src: './public/Wana7.jpeg' },
  { src: './public/Wana8.jpeg' }, { src: './public/Wana9.jpeg' }, { src: './public/Wana10.jpeg' },
  { src: './public/Wana11.jpeg' }, { src: './public/Wana12.jpeg' }, { src: './public/Wana13.jpeg' },
  { src: './public/Wana14.jpeg' }, { src: './public/Wana15.jpeg' },
];

const MemoryGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % 10) * 0.05 }}
            viewport={{ once: true }}
            className={`gallery-item ${index % 5 === 0 ? 'large' : ''}`}
            onClick={() => setSelectedImage(img.src)}
          >
            <img src={img.src} alt={`Memory ${index}`} loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoryGallery;
