// src/components/Services.js
import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk menampilkan modal
  const handleCallService = () => {
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="services" className="services">
      <h2>Layanan Kami</h2>
      <div className="service-card">
        <h3>Instalasi Wifi</h3>
        <p>Pemasangan jaringan Wifi untuk rumah atau bisnis Anda dengan cepat dan profesional.</p>
        <button className="call-service-button" onClick={handleCallService}>
          Panggil Tim Layanan
        </button>
      </div>
      <div className="service-card">
        <h3>Perawatan Wifi</h3>
        <p>Jasa pemeliharaan dan perbaikan jaringan Wifi untuk memastikan koneksi tetap lancar.</p>
        <button className="call-service-button" onClick={handleCallService}>
          Panggil Tim Layanan
        </button>
      </div>
      <div className="service-card">
        <h3>Upgrade Kecepatan</h3>
        <p>Meningkatkan kualitas dan kecepatan internet untuk memenuhi kebutuhan Anda.</p>
        <button className="call-service-button" onClick={handleCallService}>
          Panggil Tim Layanan
        </button>
      </div>

      {/* Modal Kontak Tim Layanan */}
      {isModalOpen && (
        <div className="service-modal">
          <div className="service-modal-content">
            <h3>Hubungi Tim Layanan</h3>
            <p>Silakan hubungi kami melalui kontak berikut:</p>
            <ul>
              <li>Telepon: +6281943216039</li>
              <li>Email: layanan@lumions2004@gmail.com</li>
            </ul>
            <button onClick={closeModal} className="close-modal-button">
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
