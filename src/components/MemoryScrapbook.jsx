import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MemoryScrapbook = ({ title, desc, images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="scrapbook-section">
      <h2 className="section-header title-font">{title}</h2>
      {desc && <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>{desc}</p>}
      
      <div className="masonry-grid">
        {images.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            className="polaroid-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (idx % 6) * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(imgSrc)}
          >
            <img src={imgSrc} alt="Memory" loading="lazy" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                <X size={36} />
              </button>
              <img src={selectedImage} alt="Enlarged Memory" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoryScrapbook;
