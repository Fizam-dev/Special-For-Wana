import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;
const playlist = [
  { title: '300 Saat', src: `${BASE_URL}300-saat.mpeg` },
  { title: 'Bergema Sampai Selamanya', src: `${BASE_URL}Bergema-sampai-selamanya.mpeg` },
  { title: 'Kota Ini Tak Sama Tanpamu', src: `${BASE_URL}kota-ini-tak-sama-tanpamu.mpeg` },
  { title: 'Kota Ini Tak Sama Tanpamu Pt. 2', src: `${BASE_URL}kota-ini-tak-sama-tanpamu-pt2.mpeg` },
  { title: 'Love Me Not', src: `${BASE_URL}love-me-not.mpeg` },
  { title: 'Masa Kini, Nanti & Lainnya', src: `${BASE_URL}masa-kini-nanti-dan-masa-indah-lainnya.mpeg` },
  { title: 'Penjaga Hati', src: `${BASE_URL}penjaga-hati.mpeg` },
  { title: 'Somebody Pleasure', src: `${BASE_URL}somebody-pleasure.mpeg` },
];

const FloatingPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = playlist[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => setCurrentIndex((prev) => (prev + 1) % playlist.length);
  const prevTrack = () => setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);

  return (
    <div className="floating-player-wrapper">
      <div className="floating-player glass">
        <div className={`record-spin ${isPlaying ? 'playing' : ''}`}></div>
        
        <div className="player-info">
          <div className="player-title">{currentTrack.title}</div>
          <div className="player-subtitle">Our Original Soundtracks • {currentIndex + 1}/{playlist.length}</div>
        </div>

        <div className="player-controls">
          <button onClick={prevTrack}><SkipBack size={20} /></button>
          <button onClick={togglePlay}>
            {isPlaying ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" />}
          </button>
          <button onClick={nextTrack}><SkipForward size={20} /></button>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.src}
        onEnded={nextTrack}
      />
    </div>
  );
};

export default FloatingPlayer;
