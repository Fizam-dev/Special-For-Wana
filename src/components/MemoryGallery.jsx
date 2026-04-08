import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './MemoryGallery.css';

// Centralized image list
const images = [
  // PUBG Memories
  { src: './PUBG1.jpeg' }, { src: './PUBG2.jpeg' }, { src: './PUBG3.jpeg' },
  { src: './PUBG4.jpeg' }, { src: './PUBG5.jpeg' }, { src: './PUBG6.jpeg' },
  { src: './PUBG7.jpeg' }, { src: './PUBG8.jpeg' }, { src: './PUBG9.jpeg' },
  // Fizam & Wana
  { src: './Fizam.jpeg' }, { src: './Fizam2.jpg' }, { src: './Fizam3.jpg' },
  { src: './Fizam4.jpg' }, { src: './Fizam5.jpg' }, { src: './Fizam6.jpg' },
  { src: './Fizam7.jpg' }, { src: './Fizam8.jpg' }, { src: './Fizam9.jpg' },
  { src: './Fizam10.jpg' }, { src: './Fizam11.png' },
  // Wana Special
  { src: './Wana2.jpeg' }, { src: './Wana3.jpeg' }, { src: './Wana4.jpeg' },
  { src: './Wana5.jpeg' }, { src: './Wana6.jpeg' }, { src: './Wana7.jpeg' },
  { src: './Wana8.jpeg' }, { src: './Wana9.jpeg' }, { src: './Wana10.jpeg' },
  { src: './Wana11.jpeg' }, { src: './Wana12.jpeg' }, { src: './Wana13.jpeg' },
  { src: './Wana14.jpeg' }, { src: './Wana15.jpeg' },
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
