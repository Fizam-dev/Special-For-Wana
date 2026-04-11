import React from 'react';
import { Play, Info } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="hero-banner" style={{ backgroundImage: "url('./Wana12.jpeg')" }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">OUR STORY</h1>
        <p className="hero-desc">
          A blockbuster journey of two people surviving the battlegrounds of Erangel, 
          finding love in unexpected places, and creating memories that will last a lifetime.
          Now streaming exclusively on WanaFlix.
        </p>
        <div className="hero-buttons">
          <button className="btn-play">
            <Play fill="black" size={24} /> Play Now
          </button>
          <button className="btn-info">
            <Info size={24} /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
