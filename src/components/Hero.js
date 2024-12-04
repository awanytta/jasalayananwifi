// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Solusi Wifi Terpercaya untuk Rumah dan Bisnis Anda</h1>
          <p>Hubungi kami sekarang untuk mendapatkan koneksi internet yang cepat dan stabil!</p>
          <a href="/contact" className="cta-button">Hubungi Kami</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
