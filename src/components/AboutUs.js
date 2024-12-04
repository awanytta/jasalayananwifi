// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2 className="about-us-title">Tentang Kami
          </h2>
          <p className="about-us-description">
            Lumions net adalah penyedia layanan internet terpercaya yang berdedikasi untuk memberikan koneksi cepat dan andal bagi pelanggan kami. Kami menyediakan berbagai paket WiFi yang dapat disesuaikan dengan kebutuhan Anda, mulai dari penggunaan rumah tangga hingga bisnis besar.
          </p>
          <p className="about-us-description">
            Dengan tim yang berpengalaman dan teknologi terkini, kami memastikan pengalaman internet terbaik untuk Anda. Layanan kami sudah tersedia di berbagai kota di Indonesia dan terus berkembang.
          </p>
          <button className="learn-more-btn">Pelajari Lebih Lanjut</button>
        </div>
        <div className="about-us-image">
          <img 
            src="https://via.placeholder.com/500x300/6a11cb/ffffff?text=Layanan+WiFi" 
            alt="LUMIONS NET"
            className="about-us-img"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
