import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MovieRow = ({ title, images, isLargeRow }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      
      <div className="row-posters">
        {images.map((imgSrc, idx) => (
          <img
            key={idx}
            className={`row-poster ${isLargeRow ? 'row-posterLarge' : ''}`}
            src={imgSrc}
            alt={`Memory ${idx}`}
            onClick={() => setSelectedImage(imgSrc)}
            loading="lazy"
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-btn" 
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <img src={selectedImage} alt="Large Preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MovieRow;
