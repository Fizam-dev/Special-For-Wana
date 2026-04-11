import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">WANAFLIX</div>
      <div className="nav-links">
        <a href="#home" className="active">Home</a>
        <a href="#series">Our Series</a>
        <a href="#movies">Movies</a>
        <a href="#music">Original Soundtracks</a>
        <a href="#mylist">My List</a>
      </div>
    </nav>
  );
};

export default Navbar;
