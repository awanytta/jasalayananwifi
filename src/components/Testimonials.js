// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Alex J.",
      feedback: "Layanan internet terbaik yang pernah saya gunakan! Kecepatan sangat stabil dan customer service yang responsif.",
      image: "https://via.placeholder.com/100x100/6a11cb/ffffff?text=A"
    },
    {
      name: "Rita S.",
      feedback: "Saya sangat puas dengan paket WiFi yang ditawarkan. Kecepatan tinggi dan harga sangat terjangkau.",
      image: "https://via.placeholder.com/100x100/6a11cb/ffffff?text=R"
    },
    {
      name: "Budi W.",
      feedback: "Sangat recommended! Tidak ada masalah dengan koneksi WiFi saya, dan supportnya luar biasa.",
      image: "https://via.placeholder.com/100x100/6a11cb/ffffff?text=B"
    },
  ];

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Apa Kata Pelanggan Kami</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <div className="testimonial-text">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
