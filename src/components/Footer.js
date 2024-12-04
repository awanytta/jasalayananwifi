// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Alamat: Jl. lumions 2024, madiun</p>
      <p>Email: lumions2024@gmail.com</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <br>
          </br>
          <br>
          </br>
        <p>&copy; 2024 Jasa Layanan Wifi. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;
