import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from 'lucide-react';
import './MusicPlayer.css';

const playlist = [
  { title: '300 Saat', src: '300-saat.mpeg' },
  { title: 'Bergema Sampai Selamanya', src: 'Bergema-sampai-selamanya.mpeg' },
  { title: 'Kota Ini Tak Sama Tanpamu', src: 'kota-ini-tak-sama-tanpamu.mpeg' },
  { title: 'Kota Ini Tak Sama Tanpamu Pt. 2', src: 'kota-ini-tak-sama-tanpamu-pt2.mpeg' },
  { title: 'Love Me Not', src: 'love-me-not.mpeg' },
  { title: 'Masa Kini, Nanti & Lainnya', src: 'masa-kini-masa-nanti-dan-masa-indah-lainnya.mpeg' },
  { title: 'Penjaga Hati', src: 'penjaga-hati.mpeg' },
  { title: 'Somebody Pleasure', src: 'somebody-pleasure.mpeg' },
];

const MusicPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
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

  const nextTrack = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  return (
    <div className="radio-card">
      <div className="radio-header">
        <Music size={16} className="spinning" />
        <span>SYAFIZAM RADIO FM</span>
      </div>

      <div className="track-info">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="current-title"
        >
          {currentTrack.title}
        </motion.div>
        <div className="track-artist">Curated for Wana</div>
      </div>

      <div className="visualizer">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: isPlaying ? [10, 30, 15, 40, 10] : 4,
            }}
            transition={{
              repeat: Infinity,
              duration: 0.5 + Math.random(),
              ease: "easeInOut",
            }}
            className="bar"
          />
        ))}
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack}
      />

      <div className="controls-group">
        <input
          type="range"
          min="0"
          max="100"
          value={progress || 0}
          onChange={handleSeek}
          className="seek-bar"
        />

        <div className="buttons">
          <button onClick={prevTrack}><SkipBack size={24} /></button>
          <button onClick={togglePlay} className="play-pause">
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <button onClick={nextTrack}><SkipForward size={24} /></button>
        </div>
      </div>

      <div className="playlist-hint">
        {currentIndex + 1} / {playlist.length} tracks
      </div>
    </div>
  );
};

export default MusicPlayer;
