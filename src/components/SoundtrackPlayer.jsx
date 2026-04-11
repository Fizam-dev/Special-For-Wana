import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const playlist = [
  { title: '300 Saat', src: './300-saat.mpeg' },
  { title: 'Bergema Sampai Selamanya', src: './Bergema-sampai-selamanya.mpeg' },
  { title: 'Kota Ini Tak Sama Tanpamu', src: './kota-ini-tak-sama-tanpamu.mpeg' },
  { title: 'Kota Ini Tak Sama Tanpamu Pt. 2', src: './kota-ini-tak-sama-tanpamu-pt2.mpeg' },
  { title: 'Love Me Not', src: './love-me-not.mpeg' },
  { title: 'Masa Kini, Nanti & Lainnya', src: './masa-kini-masa-nanti-dan-masa-indah-lainnya.mpeg' },
  { title: 'Penjaga Hati', src: './penjaga-hati.mpeg' },
  { title: 'Somebody Pleasure', src: './somebody-pleasure.mpeg' },
];

const SoundtrackPlayer = () => {
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

  const nextTrack = () => setCurrentIndex((prev) => (prev + 1) % playlist.length);
  const prevTrack = () => setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);

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
    <div className="soundtrack-container" id="music">
      <h2 className="row-title" style={{ marginBottom: '1.5rem', paddingLeft: '0' }}>WanaFlix Original Soundtracks</h2>
      <div className="soundtrack-card">
        <div className="soundtrack-cover"></div>
        
        <div className="soundtrack-info" style={{ flex: 1 }}>
          <h3>{currentTrack.title}</h3>
          <p>Curated Specially For Wana • Track {currentIndex + 1} of {playlist.length}</p>
          
          <input
            type="range"
            min="0"
            max="100"
            value={progress || 0}
            onChange={handleSeek}
            className="seek-bar"
          />
        </div>

        <div className="controls">
          <button onClick={prevTrack}><SkipBack size={24} /></button>
          <button onClick={togglePlay}>
            {isPlaying ? <Pause size={36} fill="white" /> : <Play size={36} fill="white" />}
          </button>
          <button onClick={nextTrack}><SkipForward size={24} /></button>
          <Volume2 size={24} style={{ marginLeft: '1rem', color: '#808080' }} />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextTrack}
      />
    </div>
  );
};

export default SoundtrackPlayer;
