// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-left">
        <Link to="/" className="logo">LUMIONS NET</Link>
        <nav>
          <Link to="/services">Service</Link>
          <Link to="/pricing">Paket WiFi</Link>
          <Link to="/promo">Promo Wifi</Link>  {/* Add Promo Link */}
          <Link to="/blog">Berita</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/testimonials">Testimoni</Link>
          <Link to="/contact">Kontak</Link>
          <Link to="/about">Tentang Kami</Link>
        </nav>
      </div>
      <div className="header-right">
        <Link to="/login" className="header-link">Login</Link>
        <Link to="/signup" className="header-link">Sign Up</Link>
      </div>
    </header>
  );
}

export default Header;
